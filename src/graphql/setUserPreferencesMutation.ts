import gql from "graphql-tag";

export const SET_USER_PREFERENCES_MUTATION = gql`
  mutation SetUserPreferences($preferredColor: Color, $we: Boolean) {
    setUserPreferences(preferredColor: $preferredColor, we: $we) {
      id
      preferredColor
    }
  }
`;
