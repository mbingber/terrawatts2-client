import gql from "graphql-tag";
import { GameStateFragment } from "./gameStateFragment";

export const DISCARD_PLANT_MUTATION = gql`
  mutation DiscardPlant($gameId: ID!, $plantId: String!, $hybridChoice: HybridChoiceInput) {
    discardPlant(gameId: $gameId, plantId: $plantId, hybridChoice: $hybridChoice) {
      ...GameState
    }
  }

  # Fragments
  ${GameStateFragment}
`;
