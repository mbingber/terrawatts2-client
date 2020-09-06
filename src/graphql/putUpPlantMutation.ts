import gql from "graphql-tag";
import { GameStateFragment } from "./gameStateFragment";

export const PUT_UP_PLANT_MUTATION = gql`
  mutation PutUpPlant($gameId: ID!, $plantId: String, $bid: Int) {
    putUpPlant(gameId: $gameId, plantId: $plantId, bid: $bid) {
      ...GameState
    }
  }

  # Fragments
  ${GameStateFragment}
`;
