import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const DISCARD_PLANT_MUTATION = gql`
  mutation DiscardPlant($gameId: ID!, $plantInstanceId: Int!, $fossilFuelDiscard: HybridChoiceInput) {
    discardPlant(gameId: $gameId, plantInstanceId: $plantInstanceId, fossilFuelDiscard: $fossilFuelDiscard) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
