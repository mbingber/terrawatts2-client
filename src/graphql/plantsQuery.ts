import gql from 'graphql-tag';

export const PLANTS_QUERY = gql`
  query GetPlants {
    fetchPlants {
      id
      rank
      resourceType
      resourceBurn
      numCities
    }
  }
`;
