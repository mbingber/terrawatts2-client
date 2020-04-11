import gql from "graphql-tag";
import { PlantFragment } from "./plantFragment";

export const GameFragment = gql`
  fragment Game on Game {
    id
    actionType
    map {
      name
    }
    regions
    turn
    era
    phase
    playerOrder {
      id
      clockwiseOrder
      user {
        id
        username
        we
      }
      color
      money
      resources {
        coal
        oil
        trash
        uranium
      }
      plants {
        id
        plant {
          ...Plant
        }
      }
    }
    activePlayer {
      id
    }
    deckCount
    plantMarket {
      id
      plant {
        ...Plant
      }
    }
    cities {
      id
      city {
        id
      }
      players {
        id
      }
    }
    resourceMarket {
      coal
      oil
      trash
      uranium
    }
    auction {
      id
      plant {
        id
        plant {
          ...Plant
        }
      }
      bid
      leadingPlayer {
        id
      }
      activePlayer {
        id
      }
      passedPlayers {
        id
      }
    }
    plantPhaseEvents {
      player {
        id
      }
      plant {
        plant {
          rank
        }
      }
    }
    plantRankBought
    restockRates {
      era1 {
        coal
        oil
        trash
        uranium
      }
      era2 {
        coal
        oil
        trash
        uranium
      }
      era3 {
        coal
        oil
        trash
        uranium
      }
    }
  }

  ${PlantFragment}
`;