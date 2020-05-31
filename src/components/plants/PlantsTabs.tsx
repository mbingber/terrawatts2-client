import React from "react";
import styled from "styled-components";
import { Tab } from "semantic-ui-react";
import { useGame } from "../../hooks/useGame";
import { PlantMarket } from "./PlantMarket";
import { PlantList } from "./PlantList";

interface PlantsTabsProps {}

export const PlantsTabs: React.FC<PlantsTabsProps> = () => {
  const { deckCount, discardedPlants, era3Plants, possibleDeck } = useGame();

  const panes = [{
    menuItem: "Market",
    render: () => <PlantMarket />
  }];

  if (possibleDeck.length) {
    panes.push({
      menuItem: `Deck (${deckCount})`,
      render: () => <PlantList plants={possibleDeck} />
    })
  }

  if (era3Plants.length) {
    panes.push({
      menuItem: "Era 3",
      render: () => <PlantList plants={era3Plants} />
    })
  }

  if (discardedPlants.length) {
    panes.push({
      menuItem: "Discard",
      render: () => <PlantList plants={discardedPlants} />
    })
  };
  
  return (
    <Container>
      <Tab panes={panes} />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  background-color: #ddd;
  width: 160px;
  height: calc(100vh - 208px); // TODO: tied to height of action panel
  overflow-y: auto;

  .item {
    font-size: 10px;
    padding: 8px 4px !important;
  }

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .ui.attached.tabular.menu {
    background: #ddd;
    position: fixed;
    z-index: 1;
  }
`;
