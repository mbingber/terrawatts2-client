import React from "react";
import styled from "styled-components";
import { ActionType, Color } from "../../generatedTypes";
import { useGame } from "../../hooks/useGame";
import { playerColors } from "../../constants";

interface WaitingPanelProps {}

const actionTypeToText: Record<ActionType, string> = {
  [ActionType.PUT_UP_PLANT]: "is choosing a plant",
  [ActionType.BID_ON_PLANT]: "",
  [ActionType.DISCARD_PLANT]: "is discarding a plant",
  [ActionType.BUY_RESOURCES]: "is buying resources",
  [ActionType.BUY_CITIES]: "is buying cities",
  [ActionType.POWER_UP]: "is powering up"
};

export const WaitingPanel: React.FC<WaitingPanelProps> = () => {
  const { state: { playerOrder, info } } = useGame();

  const { username, color } = playerOrder
    .find((player) => player.username === info.activeUser);

  const text = `${username} ${actionTypeToText[info.actionType]}`;
  
  return (
    <Container color={color}>
      <Text>{text}</Text>
    </Container>
  );
}

const Container = styled.div<{ color: Color; }>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => playerColors[color as Color]};
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background-color: #ddd;
  height: calc(100% - 16px);
  width: calc(100% - 16px);
  text-align: center;
`;