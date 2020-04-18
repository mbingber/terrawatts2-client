import { useState, useEffect } from "react";
import { useGame } from "./useGame";
import { useMe } from "./useMe";
import { Phase } from "../generatedTypes";

export interface CityCart {
  cityInstanceIds: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  toggleInCart: (id: string) => void;
}

// only call this once, pass stuff down as props
// TODO: do this through apollo client
export const useCityCart = (): CityCart => {
  const game = useGame();
  const me = useMe();
  
  const [cityInstanceIds, setCityCart] = useState<string[]>([]);

  const addToCart = (id: string): void => {
    if (!me || game.phase !== Phase.CITY) {
      return;
    }

    const myTurnOrder = game.playerOrder.findIndex((p) => p.id === me.id);
    const activeTurnOrder = game.playerOrder.findIndex((p) => p.id === game.activePlayer.id);

    if (myTurnOrder > activeTurnOrder) {
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

  useEffect(() => {
    clearCart();
  }, [game && game.phase]);

  return {
    cityInstanceIds,
    addToCart,
    removeFromCart,
    toggleInCart,
    clearCart
  };
}
