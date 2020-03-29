import { useMemo } from "react";
import { CITY_COST_HELPER_QUERY } from "../graphql/getCityCostHelper";
import { useGame } from "./useGame";
import { useQuery } from "@apollo/react-hooks";
import { GetCityCostHelper, GetCityCostHelperVariables } from "../generatedTypes";

export const useCityCostHelper = () => {
  const { regions, map } = useGame();

  const { data } = useQuery<GetCityCostHelper, GetCityCostHelperVariables>(CITY_COST_HELPER_QUERY, {
    variables: {
      regions,
      mapName: map.name
    }
  });

  return useMemo(() => {
    if (!data || !data.getCityCostHelper) {
      return null;
    }
    
    return JSON.parse(data.getCityCostHelper);
  }, [data]);
}
