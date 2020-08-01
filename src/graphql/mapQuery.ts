import gql from "graphql-tag";

export const MAP_QUERY = gql`
  query FetchMap($mapName: String!, $regions: [Int!]!) {
    fetchMap(mapName: $mapName, regions: $regions) {
      name
      cities {
        id
        name
        lat
        lng
        region
      }
      connections {
        id
        cost
        cities {
          id
        }
      }
    }
  }
`;
