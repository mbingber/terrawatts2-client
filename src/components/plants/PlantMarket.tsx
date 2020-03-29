import React from "react";
import styled, { css } from "styled-components";
import { PlantCard } from "./PlantCard";
import { useGame } from "../../hooks/useGame";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { ActionType, Game_plantMarket } from "../../generatedTypes";
import { PlantCart } from "../../hooks/usePlantCart";

interface PlantMarketProps {
  plantCart: PlantCart;
}

export const PlantMarket: React.FC<PlantMarketProps> = ({ plantCart }) => {
  const game = useGame();
  const actionOnMe = useActionOnMe(ActionType.PUT_UP_PLANT);

  const handlePlantClick = (plantInstance: Game_plantMarket, idx: number) => () => {
    if (actionOnMe && idx > 3) {
      if (plantCart.selectedPlantInstance && plantInstance.id === plantCart.selectedPlantInstance.id) {
        plantCart.setSelectedPlantInstance(null);
      } else {
        plantCart.setSelectedPlantInstance(plantInstance);
      }
    }
  }
  
  return (
    <Container actionOnMe={actionOnMe}>
      <Plants>
        <DeckCount>({game.deckCount})</DeckCount>
        {game.plantMarket.slice().reverse().map((plantInstance, idx) => (
          <PlantContainer
            available={idx > 3}
            isSelected={plantCart.selectedPlantInstance && plantCart.selectedPlantInstance.plant.rank === plantInstance.plant.rank}
            actionOnMe={actionOnMe} 
            key={plantInstance.id}
            onClick={handlePlantClick(plantInstance, idx)}
          >
            <PlantCard {...plantInstance.plant} height={36} />
          </PlantContainer>
        ))}
      </Plants>
    </Container>
  );
}

const Container = styled.div<{ actionOnMe: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  background-color: #ddd;
`;

const Plants = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:
`;

const PlantContainer = styled.div<{ available: boolean; actionOnMe: boolean; isSelected: boolean; }>`
  margin-bottom: 2px;
  opacity: ${({ available }) => available ? "1" : "0.5"};
  border: 1px solid #eee;
  border-radius: 3px;

  ${({ available, actionOnMe }) => available && actionOnMe ? css`
    :hover {
      border: 1px solid black;
      cursor: pointer;
    }
  ` : ""}
`;

const DeckCount = styled.div`
  border: 1px solid black;
  height: 36px;
  width: 108px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
