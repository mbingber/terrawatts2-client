import React from "react";
import { useGame } from "../../hooks/useGame";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { ActionType, GetPlants_fetchPlants } from "../../generatedTypes";
import { PlantList } from "./PlantList";
import { CartsContext } from "../CartsContext";
import { usePlantGetter } from "../../hooks/usePlantGetter";

interface PlantMarketProps {}

export const PlantMarket: React.FC<PlantMarketProps> = () => {
  const { state: { plantMarket, info, auction }, map } = useGame();
  const { plantCart } = React.useContext(CartsContext);
  const getPlants = usePlantGetter();
  const actionOnMe = useActionOnMe(ActionType.PUT_UP_PLANT);
  const isAvailable = (idx: number) => (plantMarket.length - idx) < 5 || info.era === 3 || map.name === 'China';

  const handlePlantClick = (plant: GetPlants_fetchPlants, idx: number) => () => {
    if (actionOnMe && isAvailable(idx)) {
      if (plantCart.selectedPlant && plant.id === plantCart.selectedPlant.id) {
        plantCart.setSelectedPlant(null);
      } else {
        plantCart.setSelectedPlant(plant);
      }
    }
  }
  
  return (
    <PlantList
      plants={plantMarket.slice().reverse().map(getPlants)}
      isAvailable={isAvailable}
      hoverable={actionOnMe}
      handlePlantClick={handlePlantClick}
      emptyPlantIds={auction && auction.plantId ? [auction.plantId] : []}
    />
  );
}
