import gql from "graphql-tag";

export const GET_GAME_OVER_DATA_QUERY = gql`
  query GetGameOverData($id: ID!) {
    getGameOverData(id: $id) {
      isOver
      winOrder {
        username
        color
        numPowered
        money
        won
        totalPlantSpend
        totalResourceSpend
        totalCitySpend
        totalEarn
      }
    }
  }
`;
