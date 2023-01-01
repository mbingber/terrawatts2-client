import React from "react";
import styled from "styled-components";
import { Tab } from "semantic-ui-react";
import { useGame } from "../../hooks/useGame";
import { PlantMarket } from "./PlantMarket";
import { PlantList } from "./PlantList";
import { usePlantGetter } from "../../hooks/usePlantGetter";

interface PlantsTabsProps {}

export const PlantsTabs: React.FC<PlantsTabsProps> = () => {
  const { state: { deckCount, discardedPlants, era3Plants, possibleDeck, playerOrder }, map } = useGame();
  const getPlant = usePlantGetter();
  
  const panes = [{
    menuItem: "Market",
    render: () => <PlantMarket />
  }];

  if (possibleDeck.length) {
    panes.push({
      menuItem: map.name === 'China' ? 'Deck' : `Deck (${deckCount})`,
      render: () => <PlantList plants={possibleDeck.map(getPlant).sort((a, b) => a.rank - b.rank)} />
    })
  }

  if (era3Plants.length) {
    panes.push({
      menuItem: "Era 3",
      render: () => <PlantList plants={era3Plants.map(getPlant).sort((a, b) => a.rank - b.rank)} />
    })
  }

  if (discardedPlants.length) {
    panes.push({
      menuItem: "Discard",
      render: () => <PlantList plants={discardedPlants.map(getPlant).sort((a, b) => a.rank - b.rank)} />
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
