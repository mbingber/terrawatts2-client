import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GetGame, GetGameVariables, GameUpdated, GameUpdatedVariables } from "../generatedTypes";
import { GAME_QUERY } from "../graphql/gameQuery";
import { GAME_SUBSCRIPTION } from "../graphql/gameUpdatedSubscription";

export const useGame = () => {
  const { gameId } = useParams<{ gameId: string }>();
  
  const { loading, error, data } = useQuery<GetGame, GetGameVariables>(GAME_QUERY, {
    variables: { id: gameId }
  });

  if (loading || error || !data || !data.getGame) {
    return null;
  }

  return data.getGame;
}

export const useGameSubscription = () => {
  const { gameId } = useParams<{ gameId: string }>();
  
  const { subscribeToMore } = useQuery<GetGame, GetGameVariables>(GAME_QUERY, {
    variables: { id: gameId }
  });

  const subscribe = subscribeToMore<GameUpdated, GameUpdatedVariables>({
    document: GAME_SUBSCRIPTION,
    variables: { id: gameId },
    updateQuery: (prev, { subscriptionData }) => {
      if (
        !subscriptionData ||
        !subscriptionData.data ||
        !subscriptionData.data.gameUpdated
      ) {
        return prev;
      }

      return {
        ...prev,
        ...subscriptionData.data.gameUpdated
      }
    }
  });

  useEffect(() => {
    subscribe();
  }, []);
}