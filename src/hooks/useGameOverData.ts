import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetGameOverData, GetGameOverDataVariables } from "../generatedTypes";
import { GET_GAME_OVER_DATA_QUERY } from "../graphql/getGameOverDataQuery";

export const useGameOverData = () => {
  const { gameId } = useParams<{ gameId: string }>();
  return useQuery<GetGameOverData, GetGameOverDataVariables>(GET_GAME_OVER_DATA_QUERY, {
    variables: { id: gameId }
  })
}
