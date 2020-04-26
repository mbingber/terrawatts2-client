import gql from "graphql-tag";

export const GET_ONLINE_USERNAMES_QUERY = gql`
  query GetOnlineUsernames {
    getOnlineUsernames
  }
`;
