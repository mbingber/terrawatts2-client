import { useState, useEffect } from "react";
import { useGame } from "./useGame";
import { GetPlants_fetchPlants } from "../generatedTypes";

export interface DiscardCart {
  selectedPlant: GetPlants_fetchPlants;
  togglePlant: (plant: GetPlants_fetchPlants) => void;
}

export const useDiscardCart = (): DiscardCart => {
  const { state } = useGame();
  const [selectedPlant, setSelectedPlant] = useState<GetPlants_fetchPlants>(null);

  useEffect(() => {
    setSelectedPlant(null);
  }, [state.info.actionType]);

  const togglePlant = (plant: GetPlants_fetchPlants) => {
    if (selectedPlant && plant.id === selectedPlant.id) {
      setSelectedPlant(null);
    } else {
      setSelectedPlant(plant);
    }
  }

  return {
    selectedPlant,
    togglePlant
  };
}
