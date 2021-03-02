import gql from "graphql-tag";

export const SAVE_MAP_MUTATION = gql`
  mutation SaveMap($mapInput: MapInput!) {
    saveMap(mapInput: $mapInput) {
      id
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
