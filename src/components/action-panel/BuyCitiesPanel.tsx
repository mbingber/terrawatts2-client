import React from "react";
import styled from "styled-components";
import { useGame } from "../../hooks/useGame";
import { ActionType, BuyCities, BuyCitiesVariables, Game_map_cities } from "../../generatedTypes";
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
  const { map, state: { cityList }, id } = useGame();
  const me = useMe();
  const actionOnMe = useActionOnMe(ActionType.BUY_CITIES);
  const [buyCities, { loading }] = useGameMutation<BuyCities, BuyCitiesVariables>(BUY_CITIES_MUTATION, cityCart.clearCart);

  const cities = map.cities || [];

  const cityLookup = React.useMemo(() => {
    return cities.reduce<Record<string, Game_map_cities>>((acc, city) => {
      acc[city.id] = city;
      return acc;
    }, {});
  }, [cities]);

  const cityNames = cityCart.cityIds.map((id) => cityLookup[id].name);

  const displayedCost = cityCart.cost === null ? "--" : `$${cityCart.cost}`;

  const buttonText = cityNames.length ? `Buy for ${displayedCost}` : "Pass on cities";

  const handleSubmit = () => {
    buyCities({
      variables: {
        gameId: id,
        cityIds: cityCart.cityIds,
        cost: cityCart.cost
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
          disabled={!me || !actionOnMe || cityCart.cost > me.money || loading}
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
