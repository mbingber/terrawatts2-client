import gql from "graphql-tag";
import { GameStateFragment } from "./gameStateFragment";

export const GAME_STATE_SUBSCRIPTION = gql`
  subscription GameStateUpdated($gameId: ID!) {
    gameStateUpdated(gameId: $gameId) {
      ...GameState
    }
  }

  # Fragments
  ${GameStateFragment}
`;
