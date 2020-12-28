import React from 'react';
import styled from 'styled-components';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { useGameOverData } from '../../hooks/useGameOverData';
import { Color } from '../../generatedTypes';
import { playerColors } from '../../constants';
import { CityIcon } from '../cities/CityIcon';

const messages: Record<string, string> = {
  USA: 'Game over',
  Germany: 'Guten tag, Funkenschlag',
  Italy: 'Bel gioco',
  Seattle: 'Nice work, Bezos',
  China: '好游戏',
  ['Northern Europe']: 'Hyvä peli',
};

interface GameEndModalProps {
  mapName: string;
}

export const GameEndModal: React.FC<GameEndModalProps> = ({ mapName }) => {
  const { loading, error, data } = useGameOverData();

  if (loading || error || !data || !data.getGameOverData) {
    return null;
  }

  const { winOrder } = data.getGameOverData;
  
  return (
    <Modal size="mini" defaultOpen trigger={<Button icon><Icon name="chart line" /></Button>}>
      <Container>
        <Message>{messages[mapName] || 'Game over'}</Message>
        {winOrder.map(player => (
          <Player color={player.color}>
            <PlayerName>
              {player.won && <Trophy />}
              {player.username}
            </PlayerName>
            <PlayerStats>
              <CityIcon color="black" empty height={32} number={player.numPowered} strokeWidth={0.2} />
              <Money>${player.money}</Money>
            </PlayerStats>
          </Player>
        ))}
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  padding: 24px 40px;
`;

const Message = styled.h2``;

const Player = styled.div<{ color: Color }>`
  border: 4px solid ${({ color }) => playerColors[color as Color]};
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 4px;
  overflow: hidden;
`;

const PlayerName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 18px;
`;

const PlayerStats = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
  
const Money = styled.span`
  margin-left: 8px;
  font-size: 14px;
`;

const Trophy = styled.img.attrs({ src: require('../../assets/trophy.svg') })`
  height: 14px;
`;
