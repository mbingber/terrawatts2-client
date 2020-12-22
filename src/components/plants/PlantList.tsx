import React from "react";
import styled, { css } from "styled-components";
import { PlantCard } from "./PlantCard";
import { GetPlants_fetchPlants, GetCurrentUser } from "../../generatedTypes";

interface PlantListProps {
  plants: GetPlants_fetchPlants[];
  emptyPlantIds?: string[];
  isAvailable?: (idx: number) => boolean;
  hoverable?: boolean;
  handlePlantClick?: (plant: GetPlants_fetchPlants, index: number) => () => void;
}

export const PlantList: React.FC<PlantListProps> = ({
  plants,
  isAvailable = () => true,
  hoverable = false,
  handlePlantClick = () => () => null,
  emptyPlantIds = [],
}) => {
  const height = 36;

  return (
    <Container>
      <Plants>
        {plants.map((plant, idx) => (
          <PlantContainer
            available={isAvailable(idx)}
            hoverable={hoverable} 
            key={plant.id}
            onClick={handlePlantClick(plant, idx)}
          >
            {emptyPlantIds.includes(plant.id) ? (
              <PlantFrame height={height} />
            ) : (
              <PlantCard {...plant} height={height} />
            )}
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
  width: 100%;
  background-color: #ddd;
  padding-top: 72px;
  padding-bottom: 24px;
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

const PlantFrame = styled.div<{ height: number }>`
    height: ${({ height }) => height}px;
    width: ${({ height }) => height * 3}px;
    border: 1px solid black;
    border-radius: 3px;
`;