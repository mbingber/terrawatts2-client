import gql from "graphql-tag";
import { ResourcesFragment } from "./resourcesFragment";
import { GameStateFragment } from "./gameStateFragment";

export const GameFragment = gql`
  fragment Game on Game {
    id
    map {
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
    regions
    restockRates {
      era1 {
        ...Resources
      }
      era2 {
        ...Resources
      }
      era3 {
        ...Resources
      }
    }
    era2Start
    gameEnd
    cityCostHelper
    state {
      ...GameState
    }
  }

  # Fragments
  ${ResourcesFragment}
  ${GameStateFragment}
`;