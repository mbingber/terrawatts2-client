import React from "react";
import { useGame } from "../../hooks/useGame";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { ActionType, Game_plantMarket } from "../../generatedTypes";
import { PlantCart } from "../../hooks/usePlantCart";
import { PlantList } from "./PlantList";

interface PlantMarketProps {
  plantCart: PlantCart;
}

export const PlantMarket: React.FC<PlantMarketProps> = ({ plantCart }) => {
  const game = useGame();
  const actionOnMe = useActionOnMe(ActionType.PUT_UP_PLANT);
  const isAvailable = (idx: number) => (game.plantMarket.length - idx) < 5 || game.era === 3;

  const handlePlantClick = (plantInstance: Game_plantMarket, idx: number) => () => {
    if (actionOnMe && isAvailable(idx)) {
      if (plantCart.selectedPlantInstance && plantInstance.id === plantCart.selectedPlantInstance.id) {
        plantCart.setSelectedPlantInstance(null);
      } else {
        plantCart.setSelectedPlantInstance(plantInstance);
      }
    }
  }
  
  return (
    <PlantList
      plants={game.plantMarket.slice().reverse()}
      isAvailable={isAvailable}
      hoverable={actionOnMe}
      handlePlantClick={handlePlantClick}
    />
  );
}
