import gql from "graphql-tag";

export const KEEP_ME_ONLINE_MUTATION = gql`
  mutation KeepMeOnline {
    keepMeOnline {
      id
    }
  }
`;
