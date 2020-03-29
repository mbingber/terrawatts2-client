import gql from "graphql-tag";

export const CITY_COST_HELPER_QUERY = gql`
  query GetCityCostHelper($mapName: String!, $regions: [Int!]!) {
    getCityCostHelper(mapName: $mapName, regions: $regions)
  }
`;
