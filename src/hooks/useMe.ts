import { useLocation } from "react-router";
import { useGame } from "./useGame";
import { Game_playerOrder } from "../generatedTypes";

export const useMe = (): Game_playerOrder => {
  const query = new URLSearchParams(useLocation().search);
  const game = useGame();

  if (!game) {
    return null;
  }

  const username = query.get("me");

  return game.playerOrder.find((player) => player.user.username === username);
}
