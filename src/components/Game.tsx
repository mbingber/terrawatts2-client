import React from "react";
import styled from "styled-components";
import { GameMap } from "./cities/GameMap";
import { ResourceMarket } from "./resources/ResourceMarket";
import { PlantsTabs } from "./plants/PlantsTabs";
import { PlayerBox } from "./PlayerBox";
import { useGame, useGameSubscription } from "../hooks/useGame";
import { ActionPanel } from "./action-panel/ActionPanel";
import { useMe } from "../hooks/useMe";
import { SpectatorNotification } from "./auth/SpectatorNotification";
import { SummaryBar } from "./SummaryBar";
import { useKeepMeOnline } from "../hooks/useKeepMeOnline";
import { CartsContextProvider } from "./CartsContext";

interface GameProps {

}

export const Game: React.FC<GameProps> = () => {
  useKeepMeOnline();
  const me = useMe();
  const game = useGame();
  useGameSubscription();

  if (!game) return null;
  
  return (
    <CartsContextProvider>
      <Container>
        {<SummaryBar />}
        {!me && <SpectatorNotification gameId={game.id} />}
        <LeftColumn>
          <GameMap />
          <PlayerBoxContainer>
            {game.playerOrder.map((player) => (
              <PlayerBox
                key={player.id}
                player={player}
              />
            ))}
          </PlayerBoxContainer>
        </LeftColumn>
        <RightColumn>
          <PlantResourceContainer>
            <ResourceMarket />
            <PlantsTabs />
          </PlantResourceContainer>
          <ActionPanel />
        </RightColumn>
      </Container>
    </CartsContextProvider>
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