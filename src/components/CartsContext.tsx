import React from "react";
import { PlantCart, usePlantCart } from "../hooks/usePlantCart";
import { ResourceCart, useResourceCart } from "../hooks/useResourceCart";
import { CityCart, useCityCart } from "../hooks/useCityCart";
import { PowerCart, usePowerCart } from "../hooks/usePowerCart";
import { DiscardCart, useDiscardCart } from "../hooks/useDiscardCart";

interface Carts {
  plantCart: PlantCart;
  resourceCart: ResourceCart;
  cityCart: CityCart;
  powerCart: PowerCart;
  discardCart: DiscardCart;
}

export const CartsContext = React.createContext<Carts>({
  plantCart: null,
  resourceCart: null,
  cityCart: null,
  powerCart: null,
  discardCart: null
});

export const CartsContextProvider: React.FC = ({ children }) => {
  const plantCart = usePlantCart();
  const resourceCart = useResourceCart();
  const cityCart = useCityCart();
  const powerCart = usePowerCart();
  const discardCart = useDiscardCart();

  const carts: Carts = {
    plantCart,
    resourceCart,
    cityCart,
    powerCart,
    discardCart
  };

  return (
    <CartsContext.Provider value={carts}>{children}</CartsContext.Provider>
  );
}
