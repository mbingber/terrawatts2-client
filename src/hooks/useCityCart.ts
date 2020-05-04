import { useState, useEffect } from "react";
import { useGame } from "./useGame";
import { useMe } from "./useMe";
import { Phase } from "../generatedTypes";
import { calculateCityCost } from "../logic/cities";
import { useCityCostHelper } from "./useCityCostHelper";

export interface CityCart {
  cityInstanceIds: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  toggleInCart: (id: string) => void;
  cost: number;
}

// only call this once, pass stuff down as props
// TODO: do this through apollo client
export const useCityCart = (): CityCart => {
  const game = useGame();
  const me = useMe();
  const costHelper = useCityCostHelper();
  
  const [cityInstanceIds, setCityCart] = useState<string[]>([]);

  const addToCart = (id: string): void => {
    if (!me || game.phase === Phase.POWER) {
      return;
    }

    const myTurnOrder = game.playerOrder.findIndex((p) => p.id === me.id);
    const activeTurnOrder = game.playerOrder.findIndex((p) => p.id === game.activePlayer.id);

    if (game.phase === Phase.CITY && myTurnOrder > activeTurnOrder) {
      return;
    }

    const cityInstance = game.cities.find((ci) => ci.id === id);

    if (cityInstance.players.length >= game.era) {
      return;
    }

    if (cityInstance.players.some((p) => p.id === me.id)) {
      return;
    }
    
    setCityCart([...cityInstanceIds, id]);
  }

  const removeFromCart = (id: string): void => setCityCart(cityInstanceIds.filter((cartId) => cartId !== id));

  const toggleInCart = (id: string): void => {
    if (cityInstanceIds.includes(id)) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  }

  const clearCart = (): void => setCityCart([]);

  const cost = calculateCityCost(game, me, cityInstanceIds, costHelper);

  useEffect(() => {
    // if cities get bought by someone else, we might need to remove it from the cart
    if (game.phase === Phase.CITY) {
      const citiesToRemove = cityInstanceIds.reduce<Record<string, boolean>>((acc, id) => {
        const cityInstance = game.cities.find((ci) => ci.id === id);
        if (cityInstance.players.length >= game.era) {
          acc[id] = true;
        }
        return acc;
      }, {});

      setCityCart(cityInstanceIds.filter(id => !citiesToRemove[id]));
    }
  }, [game]);

  return {
    cityInstanceIds,
    addToCart,
    removeFromCart,
    toggleInCart,
    clearCart,
    cost
  };
}
