import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GAME_STATE_SUBSCRIPTION } from "../graphql/gameStateUpdatedSubscription";
import { useGameQuery } from "./useGame";
import { GameStateUpdated, GameStateUpdatedVariables } from "../generatedTypes";

// only call this once in the root component
export const useGameState = () => {
  const { gameId } = useParams<{ gameId: string }>();

  const { subscribeToMore } = useGameQuery(gameId);
  
  useEffect(() => {
    subscribeToMore<GameStateUpdated, GameStateUpdatedVariables>({
      document: GAME_STATE_SUBSCRIPTION,
      variables: { gameId },
      updateQuery: (prev, { subscriptionData }) => {
        if (
          !subscriptionData ||
          !subscriptionData.data ||
          !subscriptionData.data.gameStateUpdated
        ) {
          return prev;
        }
  
        return {
          ...prev,
          getGame: {
            ...prev.getGame,
            state: subscriptionData.data.gameStateUpdated,
          },
        };
      }
    });
  }, []);
};
