import React from "react";
import styled from "styled-components";
import { PowerCart } from "../../hooks/usePowerCart";
import { useGame } from "../../hooks/useGame";
import { useMe } from "../../hooks/useMe";
import { CityIcon, Arrow } from "../cities/CityIcon";
import { useQuery } from "@apollo/react-hooks";
import { GET_REVENUES_QUERY } from "../../graphql/getRevenuesQuery";
import { GetRevenues, PlantResourceType, PowerUp, PowerUpVariables } from "../../generatedTypes";
import { getNumCitiesPowered, hasEnoughResources, getHybridChoices } from "../../logic/power";
import { ResourceIcon } from "../resources/ResourceIcon";
import { useGameMutation } from "../../hooks/useGameMutation";
import { POWER_UP_MUTATION } from "../../graphql/powerUpMutation";
import { Button } from "semantic-ui-react";

interface PowerUpPanelProps {
  powerCart: PowerCart;
}

export const PowerUpPanel: React.FC<PowerUpPanelProps> = ({ powerCart }) => {
  const { cities, id } = useGame();
  const me = useMe();
  const { data } = useQuery<GetRevenues>(GET_REVENUES_QUERY);
  const [powerUp, { loading }] = useGameMutation<PowerUp, PowerUpVariables>(POWER_UP_MUTATION);

  const numPowered = getNumCitiesPowered(powerCart.plants, cities, me.id);
  const earnings = numPowered ? (data ? data.getRevenues[numPowered] : null) : 10;

  const hasResources = hasEnoughResources(powerCart.plants, me.resources);
  const hybridChoices = hasResources ? getHybridChoices(powerCart.plants, me.resources) : [];

  const [hybridChoiceIdx, setHybridChoiceIdx] = React.useState<number>(0);

  React.useEffect(() => {
    if (hybridChoices.length > 0 && hybridChoiceIdx >= hybridChoices.length) {
      setHybridChoiceIdx(hybridChoices.length - 1);
    }
  });

  const handleSubmit = () => {
    const hybridChoice = hybridChoices[hybridChoiceIdx] || null;
    
    powerUp({
      variables: {
        gameId: id,
        meId: me.id,
        plantInstanceIds: powerCart.plants.map((p) => p.id),
        hybridChoice
      }
    });
  }
  
  return (
    <Container>
      <div className="heading">Choose plants to power</div>
      <div className="power-info">
        <CityIcon color="black" empty height={40} number={numPowered} strokeWidth={0.5} />
        <Arrow />
        <div>${earnings || "..."}</div>
      </div>
      <div className="hybrid-choices">
        {hybridChoices.length > 1 && hybridChoices.map((choice, idx) => (
          <HybridChoice
            key={choice.oil}
            isSelected={idx === hybridChoiceIdx}
            onClick={() => setHybridChoiceIdx(idx)}
          >
            <div>
              <div className="resource-icon">
                <ResourceIcon withColor type={PlantResourceType.COAL} />
              </div>
              <div>{choice.coal}</div>
            </div>
            <div>
              <div className="resource-icon">
                <ResourceIcon withColor type={PlantResourceType.OIL} />
              </div>
              <div>{choice.oil}</div>
            </div>
          </HybridChoice>
        ))}
      </div>
      <div className="btn-container">
        <Button
          primary
          disabled={!hasResources || loading}
          loading={loading}
          onClick={handleSubmit}
        >Power up!</Button>
      </div>
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

  .power-info {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  .hybrid-choices {
    display: flex;
    justify-content: center;

    > div:first-child {
      margin-left: 0;
    }

    .resource-icon {
      height: 16px;
      width: 16px;
      margin: 0 2px;
    }
  }
`;

const HybridChoice = styled.div<{ isSelected: boolean }>`
  opacity: ${({ isSelected }) => isSelected ? 1 : 0.3};
  cursor: pointer;
  margin-left: 4px;
  width: 30px;
  height: 48px;
  border: 1px solid black;
  border-radius: 2px;
  font-size: 14px;

  > div {
    display: flex;
    align-items: center;
    height: 24px;
  }
`;
