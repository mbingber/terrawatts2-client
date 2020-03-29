import { useState, useEffect } from "react";
import { Game_plantMarket } from "../generatedTypes";
import { useGame } from "./useGame";

export interface DiscardCart {
  selectedPlant: Game_plantMarket;
  togglePlant: (plant: Game_plantMarket) => void;
}

export const useDiscardCart = (): DiscardCart => {
  const game = useGame();
  const [selectedPlant, setSelectedPlant] = useState<Game_plantMarket>(null);

  const actionType = game && game.actionType;

  useEffect(() => {
    setSelectedPlant(null);
  }, [actionType]);

  const togglePlant = (plant: Game_plantMarket) => {
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
