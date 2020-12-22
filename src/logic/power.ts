import { GetPlants_fetchPlants, GameState_cityList, ResourcesInput, HybridChoiceInput, PlantResourceType } from "../generatedTypes";

export const getNumCitiesPowered = (plants: GetPlants_fetchPlants[], cities: GameState_cityList[], myName: string): number => {
  const powerCapacity = plants.reduce<number>((acc, plant) => {
    return acc + plant.numCities;
  }, 0);

  const numCities = cities.filter((cityInstance) => (
    cityInstance.occupants.some((p) => p === myName)
  )).length;

  return Math.min(powerCapacity, numCities);
}

export const hasEnoughResources = (
  plants: GetPlants_fetchPlants[],
  resources: ResourcesInput
): boolean => {
  const resourcesNeeded = plants
    .reduce<Partial<Record<PlantResourceType, number>>>((acc, plant) => {
      const { resourceType, resourceBurn } = plant;

      if (resourceType !== PlantResourceType.WIND) {
        acc[resourceType] = acc[resourceType] || 0;
        acc[resourceType] += resourceBurn;
      }
      
      return acc;
    }, {});

  const resourcesCopy = { ...resources };

  return [
    PlantResourceType.COAL,
    PlantResourceType.OIL,
    PlantResourceType.TRASH,
    PlantResourceType.URANIUM,
    PlantResourceType.HYBRID
  ].every((r) => {
    const numResources = resourcesNeeded[r] || 0;
    if (r === PlantResourceType.HYBRID) {
      return numResources <= resourcesCopy.coal + resourcesCopy.oil;
    }
    
    const rLower = r.toLowerCase() as keyof ResourcesInput;
    if (numResources > resourcesCopy[rLower]) {
      return false;
    }

    resourcesCopy[rLower] -= numResources;
    return true;
  });
}

export const getHybridChoices = (
  plants: GetPlants_fetchPlants[],
  resources: ResourcesInput
): HybridChoiceInput[] => {
  let myCoal = resources.coal;
  let myOil = resources.oil;
  let hybridNeeded = 0;

  plants.forEach((plant) => {
    if (plant.resourceType === PlantResourceType.COAL) {
      myCoal -= plant.resourceBurn;
    }

    if (plant.resourceType === PlantResourceType.OIL) {
      myOil -= plant.resourceBurn;
    }

    if (plant.resourceType === PlantResourceType.HYBRID) {
      hybridNeeded += plant.resourceBurn;
    }
  });

  return Array(hybridNeeded + 1)
    .fill(true)
    .map((_, index) => ({
      coal: hybridNeeded - index,
      oil: index
    }))
    .filter((hybridChoice) => (
      hybridChoice.coal <= myCoal && hybridChoice.oil <= myOil
    ));
}
