import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const BUY_CITIES_MUTATION = gql`
  mutation BuyCities($gameId: ID!, $meId: ID!, $cityInstanceIds: [ID!]!, $cost: Int!) {
    buyCities(gameId: $gameId, meId: $meId, cityInstanceIds: $cityInstanceIds, cost: $cost) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
