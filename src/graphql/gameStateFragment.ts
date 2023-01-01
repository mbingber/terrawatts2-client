import gql from 'graphql-tag';
import { ResourcesFragment } from './resourcesFragment';

export const GameStateFragment = gql`
  fragment GameState on GameState {
    info {
      turn
      era
      phase
      actionType
      activeUser
    }
    resourceMarket {
      ...Resources
    }
    playerOrder {
      clockwiseOrder
      username
      color
      money
      resources {
        ...Resources
      }
      plantIds
    }
    plantMarket
    era3Plants
    discardedPlants
    possibleDeck
    deckCount
    cityList {
      cityId
      occupants
    }
    auction {
      plantId
      bid
      leader
      active
      passed
    }
    plantPhaseEvents {
      plantId
      cost
      username
    }
    isOver
  }

  # Fragments
  ${ResourcesFragment}
`;