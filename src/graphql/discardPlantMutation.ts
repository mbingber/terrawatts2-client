import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const DISCARD_PLANT_MUTATION = gql`
  mutation DiscardPlant($gameId: ID!, $meId: ID!, $plantInstanceId: ID!, $fossilFuelDiscard: HybridChoiceInput) {
    discardPlant(gameId: $gameId, meId: $meId, plantInstanceId: $plantInstanceId, fossilFuelDiscard: $fossilFuelDiscard) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
