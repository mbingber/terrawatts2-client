import React from "react";
import styled from "styled-components";
import { ResourceCart } from "../../hooks/useResourceCart";
import { useGameMutation } from "../../hooks/useGameMutation";
import { BuyResourcesVariables, BuyResources } from "../../generatedTypes";
import { BUY_RESOURCES_MUTATION } from "../../graphql/buyResourcesMutation";
import { useGame } from "../../hooks/useGame";
import { useMe } from "../../hooks/useMe";
import { getTotalResourceCost } from "../../logic/resources";
import { Button } from "semantic-ui-react";

interface BuyResourcesPanelProps {
  resourceCart: ResourceCart;
}

export const BuyResourcesPanel: React.FC<BuyResourcesPanelProps> = ({ resourceCart }) => {
  const { resourceMarket, id } = useGame();
  const me = useMe();
  
  const [buyResources, { loading }] = useGameMutation<BuyResources, BuyResourcesVariables>(BUY_RESOURCES_MUTATION);

  const cartCost = getTotalResourceCost(resourceMarket, resourceCart.resources);

  const handleSubmit = () => {
    buyResources({
      variables: {
        gameId: id,
        meId: me.id,
        resources: resourceCart.resources,
        cost: cartCost
      }
    });
  }
  
  
  return (
    <Container>
      <div>Purchase resources</div>
      <div className="btn-container">
        <Button
          primary={!!cartCost}
          secondary={!cartCost}
          disabled={loading}
          loading={loading}
          onClick={handleSubmit}
        >
          {cartCost ? `Buy for $${cartCost}` : "Pass"}
        </Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
`;
