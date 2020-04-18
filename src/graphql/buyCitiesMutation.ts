import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const BUY_CITIES_MUTATION = gql`
  mutation BuyCities($gameId: ID!, $cityInstanceIds: [ID!]!, $cost: Int!) {
    buyCities(gameId: $gameId, cityInstanceIds: $cityInstanceIds, cost: $cost) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
