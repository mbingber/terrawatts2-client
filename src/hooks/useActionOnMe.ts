import { ActionType } from "../generatedTypes";
import { useGame } from "./useGame";
import { useMe } from "./useMe";

export const useActionOnMe = (actionType: ActionType): boolean => {
  const { state } = useGame();
  const me = useMe();

  if (!me) {
    return false;
  }

  if (state.auction && actionType === ActionType.BID_ON_PLANT) {
    return state.auction.active === me.username;
  }

  return state.info.activeUser === me.username && actionType === state.info.actionType;
}
