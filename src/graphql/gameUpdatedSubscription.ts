import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const GAME_SUBSCRIPTION = gql`
  subscription GameUpdated($id: ID!) {
    gameUpdated(id: $id) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
