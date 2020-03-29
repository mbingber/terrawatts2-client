import { useQuery } from "@apollo/react-hooks";
import { FetchMap, FetchMapVariables } from "../generatedTypes";
import { MAP_QUERY } from "../graphql/mapQuery";
import { useGame } from "./useGame";

export const useMapData = () => {
  const game = useGame();

  return useQuery<FetchMap, FetchMapVariables>(MAP_QUERY, {
    variables: {
      mapName: game.map.name,
      regions: game.regions
    }
  });
}
