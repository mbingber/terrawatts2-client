import gql from "graphql-tag";
import { GameStateFragment } from "./gameStateFragment";

export const BUY_CITIES_MUTATION = gql`
  mutation BuyCities($gameId: ID!, $cityIds: [String!]!, $cost: Int!) {
    buyCities(gameId: $gameId, cityIds: $cityIds, cost: $cost) {
      ...GameState
    }
  }

  # Fragments
  ${GameStateFragment}
`;
