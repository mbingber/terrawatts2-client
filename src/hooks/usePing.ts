import { useEffect, useState } from "react";

import useSound from "use-sound";

import { useActionOnMe } from "./useActionOnMe";
import { useGame } from "./useGame";
import boopSfx from "../assets/sounds/boop.mp3";

export const usePing = () => {
  const [playSound] = useSound(boopSfx);
  const [isMuted, setMuted] = useState(true);

  const {
    state: {
      info: { actionType },
    },
  } = useGame();
  const actionOnMe = useActionOnMe(actionType);

  useEffect(() => {
    if (!isMuted && actionOnMe) {
      playSound();
    }
  }, [actionOnMe, playSound, isMuted]);

  return { isMuted, setMuted };
};
