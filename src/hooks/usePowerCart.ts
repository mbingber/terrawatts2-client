import { useState, useEffect } from "react";
import { Game_plantMarket } from "../generatedTypes";
import { useGame } from "./useGame";

export interface PowerCart {
  plants: Game_plantMarket[];
  togglePlant: (plant: Game_plantMarket) => void;
}

export const usePowerCart = (): PowerCart => {
  const game = useGame();
  const [plants, setPlants] = useState<Game_plantMarket[]>([]);

  useEffect(() => {
    setPlants([]);
  }, [game && game.actionType]);

  const addPlant = (plant: Game_plantMarket) => setPlants([...plants, plant]);
  const removePlant = (plant: Game_plantMarket) => setPlants(plants.filter(p => p.id !== plant.id));

  const togglePlant = (plant: Game_plantMarket) => {
    if (plants.some(p => p.id === plant.id)) {
      removePlant(plant);
    } else {
      addPlant(plant);
    }
  }

  return {
    plants,
    togglePlant
  };
}
