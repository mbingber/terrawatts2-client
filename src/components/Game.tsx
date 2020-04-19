import React from "react";
import styled from "styled-components";
import { GameMap } from "./cities/GameMap";
import { ResourceMarket } from "./resources/ResourceMarket";
import { PlantsTabs } from "./plants/PlantsTabs";
import { PlayerBox } from "./PlayerBox";
import { useGame, useGameSubscription } from "../hooks/useGame";
import { useCityCart } from "../hooks/useCityCart";
import { ActionPanel } from "./action-panel/ActionPanel";
import { usePlantCart } from "../hooks/usePlantCart";
import { useResourceCart } from "../hooks/useResourceCart";
import { usePowerCart } from "../hooks/usePowerCart";
import { useDiscardCart } from "../hooks/useDiscardCart";
import { useMe } from "../hooks/useMe";
import { SpectatorNotification } from "./auth/SpectatorNotification";

interface GameProps {

}

export const Game: React.FC<GameProps> = () => {
  const me = useMe();
  const game = useGame();
  useGameSubscription();
  const plantCart = usePlantCart();
  const resourceCart = useResourceCart();
  const cityCart = useCityCart();
  const powerCart = usePowerCart();
  const discardCart = useDiscardCart();

  if (!game) return null;
  
  return (
    <Container>
      {!me && <SpectatorNotification gameId={game.id} />}
      <LeftColumn>
        <GameMap cityCart={cityCart} />
        <PlayerBoxContainer>
          {game.playerOrder.map((player) => (
            <PlayerBox
              key={player.id}
              player={player}
              powerCart={powerCart}
              discardCart={discardCart}
            />
          ))}
        </PlayerBoxContainer>
      </LeftColumn>
      <RightColumn>
        <PlantResourceContainer>
          <ResourceMarket resourceCart={resourceCart} />
          <PlantsTabs plantCart={plantCart} />
        </PlantResourceContainer>
        <ActionPanel
          plantCart={plantCart}
          resourceCart={resourceCart}
          cityCart={cityCart}
          powerCart={powerCart}
          discardCart={discardCart}
        />
      </RightColumn>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  position: relative;
`;

const LeftColumn = styled.div`
  height: 100%;
  flex: 1;
  position: relative;
`;

const RightColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PlantResourceContainer = styled.div`
  display: flex;
  flex: 1;
  border-bottom: 1px solid black;
`;

const PlayerBoxContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  background-color: white;
`;