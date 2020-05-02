import React from "react";
import styled from "styled-components";
import { PlantCart } from "../../hooks/usePlantCart";
import { Tab } from "semantic-ui-react";
import { useGame } from "../../hooks/useGame";
import { PlantMarket } from "./PlantMarket";
import { PlantList } from "./PlantList";

interface PlantsTabsProps {}

export const PlantsTabs: React.FC<PlantsTabsProps> = () => {
  const { deckCount, discardedPlants, era3Plants } = useGame();

  const panes = [{
    menuItem: `Market (${deckCount})`,
    render: () => <PlantMarket />
  }];

  if (era3Plants.length) {
    panes.push({
      menuItem: "Era 3",
      render: () => <PlantList plants={era3Plants} />
    })
  }

  if (discardedPlants.length) {
    panes.push({
      menuItem: "Discarded",
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

  .item {
    font-size: 10px;
    padding: 8px 4px !important;
  }

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
