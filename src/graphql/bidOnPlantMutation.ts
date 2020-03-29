import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const BID_ON_PLANT_MUTATION = gql`
  mutation BidOnPlant($gameId: ID!, $meId: ID!, $bid: Int) {
    bidOnPlant(gameId: $gameId, meId: $meId, bid: $bid) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
