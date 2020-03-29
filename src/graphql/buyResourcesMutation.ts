import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const BUY_RESOURCES_MUTATION = gql`
  mutation BuyResources($gameId: ID!, $meId: ID!, $resources: ResourcesInput!, $cost: Int!) {
    buyResources(gameId: $gameId, meId: $meId, resources: $resources, cost: $cost) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
