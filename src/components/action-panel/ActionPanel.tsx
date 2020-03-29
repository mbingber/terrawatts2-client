import React from "react";
import styled from "styled-components";
import { useGame } from "../../hooks/useGame";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { ActionType } from "../../generatedTypes";
import { PlantCart } from "../../hooks/usePlantCart";
import { PutUpPlantPanel } from "./PutUpPlantPanel";
import { AuctionPanel } from "./AuctionPanel";
import { ResourceCart } from "../../hooks/useResourceCart";
import { CityCart } from "../../hooks/useCityCart";
import { BuyResourcesPanel } from "./BuyResourcesPanel";
import { BuyCitiesPanel } from "./BuyCitiesPanel";
import { PowerUpPanel } from "./PowerUpPanel";
import { PowerCart } from "../../hooks/usePowerCart";
import { WaitingPanel } from "./WaitingPanel";
import { DiscardPlantPanel } from "./DiscardPlantPanel";
import { DiscardCart } from "../../hooks/useDiscardCart";

interface ActionPanelProps {
  plantCart: PlantCart;
  resourceCart: ResourceCart;
  cityCart: CityCart;
  powerCart: PowerCart;
  discardCart: DiscardCart;
}

export const ActionPanel: React.FC<ActionPanelProps> = ({ plantCart, resourceCart, cityCart, powerCart, discardCart }) => {
  const game = useGame();
  const actionOnMe = useActionOnMe(game.actionType);

  if (!actionOnMe && game.actionType !== ActionType.BID_ON_PLANT) {
    return (<Container><WaitingPanel /></Container>);
  }

  if (game.actionType === ActionType.PUT_UP_PLANT) {
    return (<Container><PutUpPlantPanel plantCart={plantCart} /></Container>);
  }
  
  if (game.actionType === ActionType.BID_ON_PLANT) {
    return (<Container><AuctionPanel /></Container>);
  }

  if (game.actionType === ActionType.DISCARD_PLANT) {
    return (<Container><DiscardPlantPanel discardCart={discardCart} /></Container>)
  }
  
  if (game.actionType === ActionType.BUY_RESOURCES) {
    return (<Container><BuyResourcesPanel resourceCart={resourceCart} /></Container>);
  }

  if (game.actionType === ActionType.BUY_CITIES) {
    return (<Container><BuyCitiesPanel cityCart={cityCart} /></Container>);
  }

  if (game.actionType === ActionType.POWER_UP) {
    return (<Container><PowerUpPanel powerCart={powerCart} /></Container>);
  }

  return null;
}

const Container = styled.div`
  height: 208px;
  width: 100%;
  background-color: #ddd;
`;
