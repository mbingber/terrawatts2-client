import { ActionType } from "../generatedTypes";
import { useGame } from "./useGame";
import { useMe } from "./useMe";

export const useActionOnMe = (actionType: ActionType): boolean => {
  const game = useGame();
  const me = useMe();

  if (game.auction && actionType === ActionType.BID_ON_PLANT) {
    return game.auction.activePlayer.id === me.id;
  }

  return game.activePlayer.id === me.id && actionType === game.actionType;
}
