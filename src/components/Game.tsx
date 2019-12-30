import React from "react";
import gql from "graphql-tag";
import { GameMap } from "./GameMap";

const GAME_QUERY = gql`
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
        }
        color
        money
        resources {
          coal
          oil
          trash
          uranium
        }
        
      }
      activePlayer {
        id
      }
      plants {
        id
        plant {
          rank
        }
        status
        player {
          id
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
            rank
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
    }
  }
`;

export const Game: React.FC = () => <div><GameMap /></div>