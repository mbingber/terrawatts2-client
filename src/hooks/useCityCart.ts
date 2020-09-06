import { useState, useEffect } from "react";
import { useGame } from "./useGame";
import { useMe } from "./useMe";
import { Phase } from "../generatedTypes";
import { calculateCityCost } from "../logic/cities";

export interface CityCart {
  cityIds: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  toggleInCart: (id: string) => void;
  cost: number;
}

// only call this once, pass stuff down as props
// TODO: do this through apollo client
export const useCityCart = (): CityCart => {
  const { state, cityCostHelper } = useGame();
  const me = useMe();  
  const [cityIds, setCityCart] = useState<string[]>([]);

  const addToCart = (id: string): void => {
    if (!me || state.info.phase === Phase.POWER) {
      return;
    }

    const myTurnOrder = state.playerOrder.findIndex((p) => p.username === me.username);
    const activeTurnOrder = state.playerOrder.findIndex((p) => p.username === state.info.activeUser);

    if (state.info.phase === Phase.CITY && myTurnOrder > activeTurnOrder) {
      return;
    }

    const cityInstance = state.cityList.find((ci) => ci.cityId === id);

    if (cityInstance.occupants.length >= state.info.era) {
      return;
    }

    if (cityInstance.occupants.some((p) => p === me.username)) {
      return;
    }
    
    setCityCart([...cityIds, id]);
  }

  const removeFromCart = (id: string): void => setCityCart(cityIds.filter((cartId) => cartId !== id));

  const toggleInCart = (id: string): void => {
    if (cityIds.includes(id)) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  }

  const clearCart = (): void => setCityCart([]);

  const cost = calculateCityCost(state, me, cityIds, JSON.parse(cityCostHelper));

  useEffect(() => {
    // if cities get bought by someone else, we might need to remove it from the cart
    if (state.info.phase === Phase.CITY) {
      const citiesToRemove = cityIds.reduce<Record<string, boolean>>((acc, id) => {
        const cityInstance = state.cityList.find((ci) => ci.cityId === id);
        if (cityInstance.occupants.length >= state.info.era) {
          acc[id] = true;
        }
        return acc;
      }, {});

      setCityCart(cityIds.filter(id => !citiesToRemove[id]));
    }
  }, [state]);

  return {
    cityIds,
    addToCart,
    removeFromCart,
    toggleInCart,
    clearCart,
    cost
  };
}
