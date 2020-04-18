import gql from "graphql-tag";

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($username: String!, $password: String!, $we: Boolean!) {
    createUser(username: $username, password: $password, we: $we) {
      id
    }
  }
`;
