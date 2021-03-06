import gql from "graphql-tag";
import { GameStateFragment } from "./gameStateFragment";

export const BID_ON_PLANT_MUTATION = gql`
  mutation BidOnPlant($gameId: ID!, $bid: Int) {
    bidOnPlant(gameId: $gameId, bid: $bid) {
      ...GameState
    }
  }

  # Fragments
  ${GameStateFragment}
`;
