import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const PUT_UP_PLANT_MUTATION = gql`
  mutation PutUpPlant($gameId: ID!, $plantInstanceId: Int, $bid: Int) {
    putUpPlant(gameId: $gameId, plantInstanceId: $plantInstanceId, bid: $bid) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
