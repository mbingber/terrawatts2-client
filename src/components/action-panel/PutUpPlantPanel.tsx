import React from "react";
import styled from "styled-components";
import { Button, Input } from "semantic-ui-react";
import { PlantCart } from "../../hooks/usePlantCart";
import { PlantCard } from "../plants/PlantCard";
import { useGameMutation } from "../../hooks/useGameMutation";
import { PutUpPlant, PutUpPlantVariables } from "../../generatedTypes";
import { PUT_UP_PLANT_MUTATION } from "../../graphql/putUpPlantMutation";
import { useGame } from "../../hooks/useGame";
import { useMe } from "../../hooks/useMe";

interface PutUpPlantPanelProps {
  plantCart: PlantCart;
}

export const PutUpPlantPanel: React.FC<PutUpPlantPanelProps> = ({ plantCart }) => {
  const { selectedPlantInstance } = plantCart;

  const game = useGame();
  const me = useMe();
  const [putUpPlant, { loading }] = useGameMutation<PutUpPlant, PutUpPlantVariables>(PUT_UP_PLANT_MUTATION);

  const [isPassState, setIsPass] = React.useState<boolean>(false);
  const [bid, setBid] = React.useState<number>(null);

  React.useEffect(() => {
    setBid(plantCart.selectedPlantInstance && plantCart.selectedPlantInstance.plant.rank);
  }, [plantCart.selectedPlantInstance]);

  const handleBidChange = (e: React.ChangeEvent) => {
    const newBid = Number((e.target as HTMLInputElement).value);
    setBid(newBid);
  }

  const handleSubmit = (isPass: boolean = false) => {
    const plantInstanceId = isPass ?
      null :
      (plantCart.selectedPlantInstance && plantCart.selectedPlantInstance.id);

    setIsPass(isPass);
    
    putUpPlant({
      variables: {
        gameId: game.id,
        plantInstanceId: +plantInstanceId,
        bid: isPass ? null : Math.ceil(bid)
      }
    });
  }
  
  return (
    <Container>
      <div className="heading">Choose a power plant</div>
      {selectedPlantInstance ? (
        <PlantCard {...selectedPlantInstance.plant} height={32} we={me.user.we} />
      ) : (
        <PlantFrame />
      )}
      <div className="bid">
        {selectedPlantInstance && (
          <React.Fragment>
            <Button
              primary
              disabled={bid < plantCart.selectedPlantInstance.plant.rank || bid > me.money || loading}
              loading={loading && !isPassState}
              onClick={() => handleSubmit()}
            >Bid</Button>
            <Input type="number" onChange={handleBidChange} value={bid || ""} min={plantCart.selectedPlantInstance.plant.rank} step={1} />
          </React.Fragment>
        )}
      </div>
      {game.turn > 1 && (
        <div className="pass">
          <Button
            secondary
            onClick={() => handleSubmit(true)}
            disabled={loading}
            loading={loading && isPassState}
          >Pass</Button>
        </div>
      )}
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
    height: 68px;
  }

  .bid {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 4px;

    input {
      width: 60px;
    }
  }

  .pass {
    display: flex;
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