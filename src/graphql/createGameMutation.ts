import gql from "graphql-tag";

export const CREATE_GAME_MUTATION = gql`
  mutation CreateGame($mapName: String!, $usernames: [String!]! $name: String) {
    createGame(mapName: $mapName, usernames: $usernames, name: $name) {
      id
    }
  }
`;
