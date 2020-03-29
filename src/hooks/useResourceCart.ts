import { useState, useEffect } from "react";
import { ResourceType } from "../constants";
import { useGame } from "./useGame";

const emptyCart: Record<ResourceType, number> = {
  coal: 0,
  oil: 0,
  trash: 0,
  uranium: 0
};

export interface ResourceCart {
  resources: Record<ResourceType, number>;
  setResource: (resourceType: ResourceType) => (inCart: number) => void;
}

export const useResourceCart = (): ResourceCart => {
  const game = useGame();
  
  const [resources, setCart] = useState<Record<ResourceType, number>>({ ...emptyCart });

  const activePlayerId = game && game.activePlayer.id;

  useEffect(() => {
    if (activePlayerId) {
      setCart({ ...emptyCart });
    }
  }, [activePlayerId]);

  const setResource = (resourceType: ResourceType) => (inCart: number) => {
    setCart({
      ...resources,
      [resourceType]: inCart
    })
  };

  return {
    resources,
    setResource
  };
}
