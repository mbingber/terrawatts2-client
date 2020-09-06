import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GetPlants, GetPlants_fetchPlants } from "../generatedTypes";
import { PLANTS_QUERY } from "../graphql/plantsQuery";

type PlantMap = Record<string, GetPlants_fetchPlants>;
type PlantGetter = (plantId: string) => GetPlants_fetchPlants | null;

const Context = React.createContext<PlantGetter>(() => null);

export const PlantProvider: React.FC = ({ children }) => {
  const { data } = useQuery<GetPlants>(PLANTS_QUERY);

  const plantsMap = React.useMemo<PlantMap>(() => {
    if (!data || !data.fetchPlants) {
      return {};
    }

    return data.fetchPlants.reduce<PlantMap>((acc, plant) => {
      acc[plant.id] = plant;
      return acc;
    }, {});
  }, [data]);

  const plantGetter = (plantId: string) => plantsMap[plantId] || null;

  if (!data) {
    return null;
  }

  return <Context.Provider value={plantGetter}>{children}</Context.Provider>
};

export const usePlantGetter = () => React.useContext(Context);
