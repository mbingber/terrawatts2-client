import gql from "graphql-tag";

export const ResourcesFragment = gql`
  fragment Resources on Resources {
    coal
    oil
    trash
    uranium
  }
`;
