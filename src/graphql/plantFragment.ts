import gql from "graphql-tag";

export const PlantFragment = gql`
  fragment Plant on Plant {
    rank
    resourceType
    resourceBurn
    numCities
  }
`;
