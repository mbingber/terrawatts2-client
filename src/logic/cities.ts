import { GameState, GameState_playerOrder } from "../generatedTypes";

export const calculateCityCost = (
  state: GameState,
  me: GameState_playerOrder,
  cart: string[],
  costHelper: Record<number, Record<number, number>>
): number => {
  if (!costHelper || !me) {
    return null;
  }
  
  let remainingPurchaseIds = cart.slice();

  const network: string[] = state.cityList
    .filter((cityInstance) =>
      cityInstance.occupants.some(p => p === me.username)
    ).map((cityInstance) => cityInstance.cityId);

  let connectionCost = 0;
  while (remainingPurchaseIds.length > 0) {
    if (network.length === 0) {
      network.push(remainingPurchaseIds[0]);
      remainingPurchaseIds = remainingPurchaseIds.slice(1);
      continue;
    }

    let minPurchaseCost = Infinity;
    let cheapestPurchaseId: string = null;
    remainingPurchaseIds.forEach((purchaseId) => {
      const costsToNetwork = network.map((ownedId) => costHelper[+ownedId][+purchaseId]);
      const cheapestPath = Math.min(...costsToNetwork);

      if (cheapestPath < minPurchaseCost) {
        minPurchaseCost = cheapestPath;
        cheapestPurchaseId = purchaseId;
      }
    });

    connectionCost += minPurchaseCost;
    network.push(cheapestPurchaseId);
    remainingPurchaseIds = remainingPurchaseIds.filter(id => id !== cheapestPurchaseId);
  }

  const occupancyCost = cart.reduce((acc, purchaseId) => {
    const numOccupants = state
      .cityList
      .find(cityInstance => cityInstance.cityId === purchaseId)
      .occupants
      .length;

    return acc + 10 + 5 * numOccupants;
  }, 0);

  return connectionCost + occupancyCost;
}
