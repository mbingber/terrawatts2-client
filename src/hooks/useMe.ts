import { useGame } from "./useGame";
import { Game_playerOrder, GetCurrentUser } from "../generatedTypes";
import { useQuery } from "@apollo/react-hooks";
import { GET_CURRENT_USER_QUERY } from "../graphql/getCurrentUser";

export const useMe = (): Game_playerOrder => {
  // const query = new URLSearchParams(useLocation().search);
  const { loading, error, data } = useQuery<GetCurrentUser>(GET_CURRENT_USER_QUERY);

  const game = useGame();
  
  if (!game || loading || error || !data || !data.getCurrentUser) {
    return null;
  }

  const { id } = data.getCurrentUser;

  return game.playerOrder.find((player) => player.user.id === id) || null;
};
