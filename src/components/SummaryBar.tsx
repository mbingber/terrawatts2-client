import React from "react";
import styled from "styled-components";
import { useGame } from "../hooks/useGame";
import { Button, Icon, Modal } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { GetRevenues } from "../generatedTypes";
import { GET_REVENUES_QUERY } from "../graphql/getRevenuesQuery";
import { CityIcon, Arrow } from "./cities/CityIcon";

interface SummaryBarProps {}

export const SummaryBar: React.FC<SummaryBarProps> = () => {
  const { state, era2Start, gameEnd } = useGame();

  const phaseText = `${state.info.phase[0]}${state.info.phase.slice(1).toLowerCase()}`;

  const { data } = useQuery<GetRevenues>(GET_REVENUES_QUERY);
  const revenues = data && data.getRevenues ? data.getRevenues.slice(0, -1) : [];
  
  return (
    <Container>
      <div>Era {state.info.era}</div>
      <div>Turn {state.info.turn}</div>
      <div>{phaseText} Phase</div>
      <div>Era 2 start: {era2Start} <CityIcon color="black" height={16} empty /></div>
      <div>Game end: {gameEnd} <CityIcon color="black" height={16} empty /></div>
      <div>
        <Modal
          trigger={<Button icon><Icon name="dollar" /></Button>}
          size="small"
        >
          <Modal.Content>
            <InnerModal>
              {revenues.map((money, numPowered) => (
                <PowerInfo key={money}>
                  <CityIcon color="black" empty height={40} number={numPowered} strokeWidth={0.5} />
                  <Arrow />
                  <div>${money}</div>
                </PowerInfo>
              ))}
            </InnerModal>
          </Modal.Content>
        </Modal>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 24px;
  background-color: #ddd;
  z-index: 9000;
  border: 1px solid black;

  > div {
    height: 100%;
    padding: 0 8px;
    border-left: 1px solid black;
    display: flex;
    align-items: center;

    svg {
      margin-left: 2px;
    }
  }

  > div:first-child {
    border-left: none;
  }

  > div:last-child {
    padding: 0;

    button {
      padding: 0 !important;
      margin: 0 !important;
      border-radius: 0 !important;
      height: 22px;
      width: 24px;
    }
  }
`;

const InnerModal = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 312px;
`;

const PowerInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;
