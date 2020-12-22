import { useState, useEffect } from "react";
import { GetPlants_fetchPlants } from "../generatedTypes";
import { useGame } from "./useGame";

export interface PlantCart {
  selectedPlant: GetPlants_fetchPlants;
  setSelectedPlant: (plantInstance: GetPlants_fetchPlants) => void;
}

export const usePlantCart = (): PlantCart => {
  const { state } = useGame();
  const [selectedPlant, setSelectedPlant] = useState<GetPlants_fetchPlants>(null);

  useEffect(() => {
    setSelectedPlant(null);
  }, [state.info.actionType]);

  return {
    selectedPlant,
    setSelectedPlant
  };
}
