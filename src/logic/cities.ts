import { Game, Game_playerOrder } from "../generatedTypes";

export const calculateCityCost = (
  game: Game,
  me: Game_playerOrder,
  cart: string[],
  costHelper: Record<number, Record<number, number>>
): number => {
  if (!costHelper || !me) {
    return null;
  }

  const purchaseIds = cart.map((cityInstanceId) => {
    return game.cities.find((c) => c.id === cityInstanceId).city.id;
  });
  
  let remainingPurchaseIds = purchaseIds.slice();

  const network: string[] = game.cities
    .filter((cityInstance) =>
      cityInstance.players.some(p => p.id === me.id)
    ).map((cityInstance) => cityInstance.city.id);

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

  const occupancyCost = purchaseIds.reduce((acc, purchaseId) => {
    const numOccupants = game
      .cities
      .find(cityInstance => cityInstance.city.id === purchaseId)
      .players
      .length;

    return acc + 10 + 5 * numOccupants;
  }, 0);

  return connectionCost + occupancyCost;
}