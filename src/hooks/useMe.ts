import { useGame } from "./useGame";
import { GetCurrentUser, GameState_playerOrder } from "../generatedTypes";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER_QUERY } from "../graphql/getCurrentUser";

export const useMe = (): GameState_playerOrder => {
  const { loading, error, data } = useQuery<GetCurrentUser>(GET_CURRENT_USER_QUERY);
  const game = useGame();
  
  if (!game || loading || error || !data || !data.getCurrentUser) {
    return null;
  }

  const { username } = data.getCurrentUser;
  return game.state.playerOrder.find((player) => player.username === username) || null;
};
