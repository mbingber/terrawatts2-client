import { GameState_playerOrder, PlantResourceType, GetPlants_fetchPlants } from "../generatedTypes";
import { ResourceType } from "../constants";

type Resources = Record<ResourceType, number>;

export const getSingleResourceCost = (
  quantity: number,
  resourceType: ResourceType
): number => {
    if (resourceType === "uranium") {
    return quantity < 5 ? 18 - 2 * quantity : 13 - quantity;
  }

  return 8 - Math.floor((quantity - 1) / 3);
};

export const getTotalResourceCost = (market: Resources, purchase: Resources) => {
  const marketCopy = { ...market };
  const purchaseCopy = { ...purchase };

  return Object.keys(purchaseCopy)
    .reduce<number>((cost, rt) => {
      const resourceType = rt as ResourceType;
      
      while (purchaseCopy[resourceType] > 0) {
        cost += getSingleResourceCost(marketCopy[resourceType], resourceType);
        purchaseCopy[resourceType]--;
        marketCopy[resourceType]--;
      }
      
      return cost;
    }, 0)
};

export const hasPlantForResource = (
  resourceType: ResourceType,
  player: GameState_playerOrder,
  getPlant: (plantId: string) => GetPlants_fetchPlants,
): boolean => {
  return player.plantIds.some((plantId) => {
    const plant = getPlant(plantId);
    const isHybridPlant = plant.resourceType === PlantResourceType.HYBRID;
    const isCoalOrOil = ["coal", "oil"].includes(resourceType);
    const typeMatches = plant.resourceType === resourceType.toUpperCase() as PlantResourceType;

    return (isHybridPlant && isCoalOrOil) || typeMatches;
  });
}

export const getResourceCapacity = (
  plants: GetPlants_fetchPlants[] = []
): Record<PlantResourceType, number> => {
  return plants
    .reduce<Record<PlantResourceType, number>>((acc, plant) => {
      const { resourceType, resourceBurn } = plant;
      acc[resourceType] = acc[resourceType] || 0;
      acc[resourceType] += resourceBurn * 2;
      return acc;
    }, { COAL: 0, OIL: 0, TRASH: 0, URANIUM: 0, WIND: 0, HYBRID: 0 });
}

const canFitResources = (
  player: GameState_playerOrder,
  purchase: Resources,
  market: Resources,
  getPlant: (plantId: string) => GetPlants_fetchPlants,
): boolean => {
  if (!player) {
    return false;
  }
  
  const totalCost = getTotalResourceCost(market, purchase);

  if (totalCost > player.money) {
    return false;
  }

  const notEnoughResources = Object.keys(purchase).some((resourceType) => (
    purchase[resourceType as ResourceType] > market[resourceType as ResourceType]
  ));
  if (notEnoughResources) {
    return false;
  }
  
  const resourceCapacity = getResourceCapacity(player.plantIds.map(getPlant));
  
  const resourcesAfterPurchase: Resources = {
    coal: player.resources.coal + (purchase.coal || 0),
    oil: player.resources.oil + (purchase.oil || 0),
    trash: player.resources.trash + (purchase.trash || 0),
    uranium: player.resources.uranium + (purchase.uranium || 0),
  };

  for (const r in resourcesAfterPurchase) {
    if (r === "trash") {
      if (resourcesAfterPurchase.trash > resourceCapacity[PlantResourceType.TRASH]) {
        return false;
      }
    }

    if (r === "uranium") {
      if (resourcesAfterPurchase.uranium > resourceCapacity[PlantResourceType.URANIUM]) {
        return false;
      }
    }

    if (r === "coal" || r === "oil") {
      for (let i = 0; i < resourcesAfterPurchase[r]; i++) {
        const resourceType = r === "coal" ? PlantResourceType.COAL : PlantResourceType.OIL
        if (resourceCapacity[resourceType] > 0) {
          resourceCapacity[resourceType]--;
        } else if (resourceCapacity[PlantResourceType.HYBRID] > 0) {
          resourceCapacity[PlantResourceType.HYBRID]--;
        } else {
          return false;
        }
      }
    }
  }

  return true;
}

export const canFitOneMoreResource = (
  resourceType: ResourceType,
  player: GameState_playerOrder,
  cart: Resources,
  market: Resources,
  getPlant: (plantId: string) => GetPlants_fetchPlants,
): boolean => {
  const updatedCart = {
    ...cart,
    [resourceType]: cart[resourceType] + 1
  };

  return canFitResources(player, updatedCart, market, getPlant);
}
