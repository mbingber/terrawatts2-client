import React from "react";
import { useGame } from "../../hooks/useGame";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { ActionType, Game_plantMarket } from "../../generatedTypes";
import { PlantCart } from "../../hooks/usePlantCart";
import { PlantList } from "./PlantList";
import { CartsContext } from "../CartsContext";

interface PlantMarketProps {}

export const PlantMarket: React.FC<PlantMarketProps> = () => {
  const game = useGame();
  const { plantCart } = React.useContext(CartsContext);
  const actionOnMe = useActionOnMe(ActionType.PUT_UP_PLANT);
  const auctionPlantInstanceId = game.auction && game.auction.plant.id;
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
      emptyPlantInstanceIds={[auctionPlantInstanceId]}
    />
  );
}
