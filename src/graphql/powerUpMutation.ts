import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const POWER_UP_MUTATION = gql`
  mutation PowerUp($gameId: ID!, $meId: ID!, $plantInstanceIds: [ID!]!, $hybridChoice: HybridChoiceInput) {
    powerUp(gameId: $gameId, meId: $meId, plantInstanceIds: $plantInstanceIds, hybridChoice: $hybridChoice) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
