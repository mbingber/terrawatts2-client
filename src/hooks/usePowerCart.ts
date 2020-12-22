import { useState, useEffect } from "react";
import { GetPlants_fetchPlants } from "../generatedTypes";
import { useGame } from "./useGame";

export interface PowerCart {
  plants: GetPlants_fetchPlants[];
  togglePlant: (plant: GetPlants_fetchPlants) => void;
}

export const usePowerCart = (): PowerCart => {
  const { state } = useGame();
  const [plants, setPlants] = useState<GetPlants_fetchPlants[]>([]);

  useEffect(() => {
    setPlants([]);
  }, [state.info.actionType]);

  const addPlant = (plant: GetPlants_fetchPlants) => setPlants([...plants, plant]);
  const removePlant = (plant: GetPlants_fetchPlants) => setPlants(plants.filter(p => p.id !== plant.id));

  const togglePlant = (plant: GetPlants_fetchPlants) => {
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
