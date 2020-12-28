import React from "react";
import styled from "styled-components";
import { useGame } from "../../hooks/useGame";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { ActionType } from "../../generatedTypes";
import { PutUpPlantPanel } from "./PutUpPlantPanel";
import { AuctionPanel } from "./AuctionPanel";
import { BuyResourcesPanel } from "./BuyResourcesPanel";
import { BuyCitiesPanel } from "./BuyCitiesPanel";
import { PowerUpPanel } from "./PowerUpPanel";
import { WaitingPanel } from "./WaitingPanel";
import { DiscardPlantPanel } from "./DiscardPlantPanel";
import { CartsContext } from "../CartsContext";

interface ActionPanelProps {}

export const ActionPanel: React.FC<ActionPanelProps> = () => {
  const { state: { info: { actionType }, isOver } } = useGame();
  const actionOnMe = useActionOnMe(actionType);
  const carts = React.useContext(CartsContext);

  if (isOver) {
    return <Container />;
  }

  if (!actionOnMe && actionType !== ActionType.BID_ON_PLANT) {
    return (<Container><WaitingPanel /></Container>);
  }

  if (actionType === ActionType.PUT_UP_PLANT) {
    return (<Container><PutUpPlantPanel plantCart={carts.plantCart} /></Container>);
  }
  
  if (actionType === ActionType.BID_ON_PLANT) {
    return (<Container><AuctionPanel /></Container>);
  }

  if (actionType === ActionType.DISCARD_PLANT) {
    return (<Container><DiscardPlantPanel discardCart={carts.discardCart} /></Container>)
  }
  
  if (actionType === ActionType.BUY_RESOURCES) {
    return (<Container><BuyResourcesPanel resourceCart={carts.resourceCart} /></Container>);
  }

  if (actionType === ActionType.BUY_CITIES) {
    return (<Container><BuyCitiesPanel cityCart={carts.cityCart} /></Container>);
  }

  if (actionType === ActionType.POWER_UP) {
    return (<Container><PowerUpPanel powerCart={carts.powerCart} /></Container>);
  }

  return null;
}

const Container = styled.div`
  height: 208px;
  width: 100%;
  background-color: #ddd;
`;
