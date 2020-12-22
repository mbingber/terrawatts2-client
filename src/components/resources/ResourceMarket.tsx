import React from "react";
import styled from "styled-components";
import { ResourceDial } from "./ResourceDial";
import { useGame } from "../../hooks/useGame";
import { ResourceType } from "../../constants";
import { useActionOnMe } from "../../hooks/useActionOnMe";
import { ActionType } from "../../generatedTypes";
import { useMe } from "../../hooks/useMe";
import { hasPlantForResource, canFitOneMoreResource } from "../../logic/resources";
import { CartsContext } from "../CartsContext";
import { usePlantGetter } from "../../hooks/usePlantGetter";

interface ResourceMarketProps {}

export const ResourceMarket: React.FC<ResourceMarketProps> = () => {
  const { state, restockRates } = useGame();
  const { resourceCart } = React.useContext(CartsContext);
  const me = useMe();
  const actionOnMe = useActionOnMe(ActionType.BUY_RESOURCES);
  const getPlant = usePlantGetter();

  const getRatesForResource = (resourceType: ResourceType) => {
    return [restockRates.era1, restockRates.era2, restockRates.era3]
      .map(rates => rates[resourceType]);
  }

  const resources: ResourceType[] = ["coal", "oil", "trash", "uranium"];
  
  return (
    <Container>
      {resources.map((resourceType) => (
        <ResourceDial
          key={resourceType}
          resourceType={resourceType}
          era={state.info.era}
          inStock={state.resourceMarket[resourceType]}
          restockRates={getRatesForResource(resourceType)}
          inCart={resourceCart.resources[resourceType]}
          setInCart={resourceCart.setResource(resourceType)}
          showIncrementor={actionOnMe && hasPlantForResource(resourceType, me, getPlant)}
          disablePlus={!canFitOneMoreResource(resourceType, me, resourceCart.resources, state.resourceMarket, getPlant)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px 12px;
  background-color: #ddd;
  border-right: 1px solid black;
`;
