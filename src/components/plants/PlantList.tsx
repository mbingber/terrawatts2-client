import React from "react";
import styled, { css } from "styled-components";
import { PlantCard } from "./PlantCard";
import { useMe } from "../../hooks/useMe";
import { Game_plantMarket } from "../../generatedTypes";

interface PlantListProps {
  plants: Game_plantMarket[];
  isAvailable?: (idx: number) => boolean;
  hoverable?: boolean;
  handlePlantClick?: (plant: Game_plantMarket, index: number) => () => void;
}

export const PlantList: React.FC<PlantListProps> = ({
  plants,
  isAvailable = () => true,
  hoverable = false,
  handlePlantClick = () => () => null,
}) => {
  const me = useMe();

  let height = 36;
  if (plants.length > 8) {
    height = 28;
  }
  if (plants.length > 12) {
    height = 20;
  }

  return (
    <Container>
      <Plants>
        {plants.map((plantInstance, idx) => (
          <PlantContainer
            available={isAvailable(idx)}
            hoverable={hoverable} 
            key={plantInstance.id}
            onClick={handlePlantClick(plantInstance, idx)}
          >
            <PlantCard {...plantInstance.plant} height={height} we={me && me.user.we} />
          </PlantContainer>
        ))}
      </Plants>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  background-color: #ddd;
`;

const Plants = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:
`;

const PlantContainer = styled.div<{ available: boolean; hoverable: boolean }>`
  margin-bottom: 2px;
  opacity: ${({ available }) => available ? "1" : "0.5"};
  border: 1px solid #eee;
  border-radius: 3px;

  ${({ available, hoverable }) => available && hoverable ? css`
    :hover {
      border: 1px solid black;
      cursor: pointer;
    }
  ` : ""}
`;
