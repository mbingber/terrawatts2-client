import React from "react";
import styled from "styled-components";
import { useGame } from "../../hooks/useGame";
import { useCityCostHelper } from "../../hooks/useCityCostHelper";
import { useMapData } from "../../hooks/useMapData";
import { FetchMap_fetchMap_cities, ActionType, BuyCities, BuyCitiesVariables } from "../../generatedTypes";
import { calculateCityCost } from "../../logic/cities";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { useMe } from "../../hooks/useMe";
import { useGameMutation } from "../../hooks/useGameMutation";
import { CityCart } from "../../hooks/useCityCart";
import { BUY_CITIES_MUTATION } from "../../graphql/buyCitiesMutation";
import { Button } from "semantic-ui-react";

interface BuyCitiesPanelProps {
  cityCart: CityCart;
}

export const BuyCitiesPanel: React.FC<BuyCitiesPanelProps> = ({ cityCart }) => {
  const { data } = useMapData();
  const game = useGame();
  const me = useMe();
  const costHelper = useCityCostHelper();
  const actionOnMe = useActionOnMe(ActionType.BUY_CITIES);
  const [buyCities, { loading }] = useGameMutation<BuyCities, BuyCitiesVariables>(BUY_CITIES_MUTATION, cityCart.clearCart);

  const cities = (data && data.fetchMap && data.fetchMap.cities) || [];
  const cityInstances = (game && game.cities) || [];

  const cityLookup = React.useMemo(() => {
    return cities.reduce<Record<string, FetchMap_fetchMap_cities>>((acc, city) => {
      acc[city.id] = city;
      return acc;
    }, {});
  }, [cities]);

  const cityInstanceToName = React.useMemo(() => {
    return cityInstances.reduce<Record<string, string>>((acc, cityInstance) => {
      if (cityLookup[cityInstance.city.id]) {
        acc[cityInstance.id] = cityLookup[cityInstance.city.id].name;
      }
      return acc;
    }, {});
  }, [cities, cityInstances]);

  const cityNames = cityCart.cityInstanceIds.map((id) => cityInstanceToName[id]);

  const cost = calculateCityCost(game, cityCart.cityInstanceIds, costHelper);
  const displayedCost = cost === null ? "--" : `$${cost}`;

  const buttonText = cityNames.length ? `Buy for ${displayedCost}` : "Pass on cities";

  const handleSubmit = () => {
    buyCities({
      variables: {
        gameId: game.id,
        meId: me.id,
        cityInstanceIds: cityCart.cityInstanceIds,
        cost
      }
    })
  };
  
  return (
    <Container>
      <div>Purchase cities</div>
      <List>
        {cityNames.map((cityName) => <div key={cityName}>{cityName}</div>)}
      </List>
      <ButtonContainer>
        <Button
          primary={cityNames.length > 0}
          secondary={cityNames.length === 0}
          onClick={handleSubmit}
          disabled={!actionOnMe || cost > me.money || loading}
          loading={loading}
        >{buttonText}</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 84px);

  > div {
    height: 16px;
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
