import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const PUT_UP_PLANT_MUTATION = gql`
  mutation PutUpPlant($gameId: ID!, $meId: ID!, $plantInstanceId: ID, $bid: Int) {
    putUpPlant(gameId: $gameId, meId: $meId, plantInstanceId: $plantInstanceId, bid: $bid) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
