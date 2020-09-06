import gql from "graphql-tag";

export const GET_CURRENT_USER_QUERY = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      username
      preferredColor
      we
    }
  }
`;
 