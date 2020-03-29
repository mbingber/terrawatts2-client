import gql from "graphql-tag";
import { GameFragment } from "./gameFragment";

export const GAME_QUERY = gql`
  query GetGame($id: ID!) {
    getGame(id: $id) {
      ...Game
    }
  }

  # Fragments
  ${GameFragment}
`;
