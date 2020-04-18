import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const BID_ON_PLANT_MUTATION = gql`
  mutation BidOnPlant($gameId: ID!, $bid: Int) {
    bidOnPlant(gameId: $gameId, bid: $bid) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
