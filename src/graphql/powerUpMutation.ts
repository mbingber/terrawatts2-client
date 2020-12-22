import gql from "graphql-tag";
import { GameStateFragment } from "./gameStateFragment";

export const POWER_UP_MUTATION = gql`
  mutation PowerUp($gameId: ID!, $plantIds: [String!]!, $hybridChoice: HybridChoiceInput) {
    powerUp(gameId: $gameId, plantIds: $plantIds, hybridChoice: $hybridChoice) {
      ...GameState
    }
  }

  # Fragments
  ${GameStateFragment}
`;
