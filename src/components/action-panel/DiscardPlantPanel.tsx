import React from "react";
import styled from "styled-components";
import { useGame } from "../../hooks/useGame";
import { DiscardCart } from "../../hooks/useDiscardCart";
import { PlantCard } from "../plants/PlantCard";
import { getResourceCapacity } from "../../logic/resources";
import { PlantResourceType, GameState_playerOrder, GetPlants_fetchPlants } from "../../generatedTypes";
import { useGameMutation } from "../../hooks/useGameMutation";
import { DiscardPlant, DiscardPlantVariables } from "../../generatedTypes";
import { DISCARD_PLANT_MUTATION } from "../../graphql/discardPlantMutation";
import { useMe } from "../../hooks/useMe";
import { ResourceIcon } from "../resources/ResourceIcon";
import { Button } from "semantic-ui-react";
import { usePlantGetter } from "../../hooks/usePlantGetter";

interface DiscardPlantPanelProps {
  discardCart: DiscardCart;
}

const getResourceLoss = (
  me: GameState_playerOrder,
  discardedPlant: GetPlants_fetchPlants,
  getPlant: (plantId: string) => GetPlants_fetchPlants,
): Array<{ type: PlantResourceType; amount: number }> => {
  const plantsAfterDiscard = me.plantIds.filter((id) => id !== discardedPlant.id).map(getPlant);
  const newCapacity = getResourceCapacity(plantsAfterDiscard);

  const uranium = Math.max(me.resources.uranium - newCapacity.URANIUM, 0);
  const trash = Math.max(me.resources.trash - newCapacity.TRASH, 0);

  // TODO: resource choice
  const coal = Math.max(me.resources.coal - newCapacity.COAL, 0);
  const oil = Math.max(me.resources.oil - newCapacity.OIL, 0);

  return [{
    type: PlantResourceType.COAL,
    amount: coal
  }, {
    type: PlantResourceType.OIL,
    amount: oil
  }, {
    type: PlantResourceType.TRASH,
    amount: trash
  }, {
    type: PlantResourceType.URANIUM,
    amount: uranium
  }].filter(({ amount }) => amount > 0)
}

// const amountToDiscard = leftoverCoal + leftoverOil - resourceCapacity.HYBRID;
// if (amountToDiscard > 0 && leftoverCoal > 0 && leftoverOil > 0) {
//   if (!fossilFuelDiscard) {
//     throw new Error("ERROR: must provide coal/oil discard choice");
//   }
  
//   if (fossilFuelDiscard.coal + fossilFuelDiscard.oil !== amountToDiscard) {
//     throw new Error("ERROR: discarding incorrect amount of coal/oil");
//   }

//   me.resources.coal -= fossilFuelDiscard.coal;
//   me.resources.oil -= fossilFuelDiscard.oil;
// } else if (amountToDiscard > 0) {
//   me.resources.coal -= leftoverCoal;
//   me.resources.oil -= leftoverOil;
// }

export const DiscardPlantPanel: React.FC<DiscardPlantPanelProps> = ({ discardCart }) => {
  const game = useGame();
  const me = useMe();
  const getPlant = usePlantGetter();
  const [discardPlant, { loading }] = useGameMutation<DiscardPlant, DiscardPlantVariables>(DISCARD_PLANT_MUTATION);

  const { selectedPlant } = discardCart;

  const resourceLoss = selectedPlant ? getResourceLoss(me, selectedPlant, getPlant) : [];

  const handleSubmit = (): void => {
    discardPlant({
      variables: {
        gameId: game.id,
        plantId: selectedPlant.id
      }
    })
  };

  return (
    <Container>
      <div className="heading">Discard a power plant</div>
      {selectedPlant ? (
        <PlantCard {...selectedPlant} height={32} />
      ) : (
        <PlantFrame />
      )}
      <div className="resource-loss">
        {resourceLoss.map((loss) => (
          <ResourceContainer key={loss.type}>
            <div>-{loss.amount}</div>
            <div className="resource-icon">
              <ResourceIcon type={loss.type} withColor />
            </div>
          </ResourceContainer>
        ))}
      </div>
      <div className="btn-container">
        <Button
          primary
          disabled={!me || !selectedPlant || loading}
          loading={loading}
          onClick={handleSubmit}
        >Discard</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .heading {
    padding-top: 24px;
    height: 60px;
  }

  .resource-loss {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .btn-container {
    position: absolute;
    bottom: 12px;
  }

`;

const PlantFrame = styled.div`
  height: 32px;
  width: 96px;
  border: 1px solid black;
  border-radius: 2px;
`;

const ResourceContainer = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  color: red;
  
  .resource-icon {
    height: 16px;
    width: 16px;
    margin-left: 2px;
    margin-right: 2px;
  }
`;
