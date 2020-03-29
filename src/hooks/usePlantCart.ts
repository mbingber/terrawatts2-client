import { useState, useEffect } from "react";
import { Game_plantMarket } from "../generatedTypes";
import { useGame } from "./useGame";

export interface PlantCart {
  selectedPlantInstance: Game_plantMarket;
  setSelectedPlantInstance: (plantInstance: Game_plantMarket) => void;
}

export const usePlantCart = (): PlantCart => {
  const game = useGame();
  const [selectedPlantInstance, setSelectedPlantInstance] = useState<Game_plantMarket>(null);

  useEffect(() => {
    setSelectedPlantInstance(null);
  }, [game && game.actionType]);

  return {
    selectedPlantInstance,
    setSelectedPlantInstance
  };
}
