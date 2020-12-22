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
  const { state } = useGame();
  const [resources, setCart] = useState<Record<ResourceType, number>>({ ...emptyCart });

  useEffect(() => {
    if (state.info.activeUser) {
      setCart({ ...emptyCart });
    }
  }, [state.info.activeUser]);

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
