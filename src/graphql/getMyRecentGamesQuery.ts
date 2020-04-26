import gql from "graphql-tag";

export const GET_MY_RECENT_GAMES_QUERY = gql`
  query GetMyRecentGames {
    getMyRecentGames {
      id
      name
      players
    }
  }
`;
