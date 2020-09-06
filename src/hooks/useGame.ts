import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GetGame, GetGameVariables } from "../generatedTypes";
import { GAME_QUERY } from "../graphql/gameQuery";

export const useGameQuery = (gameId: string) => {
  return useQuery<GetGame, GetGameVariables>(GAME_QUERY, {
    variables: { id: gameId }
  });
}

export const useGame = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const { loading, error, data } = useGameQuery(gameId);

  if (loading || error || !data || !data.getGame) {
    return null;
  }

  return data.getGame;
}
