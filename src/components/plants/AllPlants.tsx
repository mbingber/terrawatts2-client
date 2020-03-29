import React from 'react';
import styled from "styled-components";
import { PlantCard } from './PlantCard';
import { PlantResourceType } from '../../generatedTypes';

interface Plant {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
}

const createPlant = (
  rank: number,
  numCities: number,
  resourceType: PlantResourceType,
  resourceBurn: number = 0
): Plant => {
  return { rank, numCities, resourceType, resourceBurn };
};

const plants: Plant[] = [
  createPlant(3, 1, PlantResourceType.OIL, 2),
  createPlant(4, 1, PlantResourceType.COAL, 2),
  createPlant(5, 1, PlantResourceType.HYBRID, 2),
  createPlant(6, 1, PlantResourceType.TRASH, 1),
  createPlant(7, 2, PlantResourceType.OIL, 3),
  createPlant(8, 2, PlantResourceType.COAL, 3),
  createPlant(9, 1, PlantResourceType.OIL, 1),
  createPlant(10, 2, PlantResourceType.COAL, 2),
  createPlant(11, 2, PlantResourceType.URANIUM, 1),
  createPlant(12, 2, PlantResourceType.HYBRID, 2),
  createPlant(13, 1, PlantResourceType.WIND),
  createPlant(14, 2, PlantResourceType.TRASH, 2),
  createPlant(15, 3, PlantResourceType.COAL, 2),
  createPlant(16, 3, PlantResourceType.OIL, 2),
  createPlant(17, 2, PlantResourceType.URANIUM, 1),
  createPlant(18, 2, PlantResourceType.WIND),
  createPlant(19, 3, PlantResourceType.TRASH, 2),
  createPlant(20, 5, PlantResourceType.COAL, 3),
  createPlant(21, 4, PlantResourceType.HYBRID, 2),
  createPlant(22, 2, PlantResourceType.WIND),
  createPlant(23, 3, PlantResourceType.URANIUM, 1),
  createPlant(24, 4, PlantResourceType.TRASH, 2),
  createPlant(25, 5, PlantResourceType.COAL, 2),
  createPlant(26, 5, PlantResourceType.OIL, 2),
  createPlant(27, 3, PlantResourceType.WIND),
  createPlant(28, 4, PlantResourceType.URANIUM, 1),
  createPlant(29, 4, PlantResourceType.HYBRID, 1),
  createPlant(30, 6, PlantResourceType.TRASH, 3),
  createPlant(31, 6, PlantResourceType.COAL, 3),
  createPlant(32, 6, PlantResourceType.OIL, 3),
  createPlant(33, 4, PlantResourceType.WIND),
  createPlant(34, 5, PlantResourceType.URANIUM, 1),
  createPlant(35, 5, PlantResourceType.OIL, 1),
  createPlant(36, 7, PlantResourceType.COAL, 3),
  createPlant(37, 4, PlantResourceType.WIND),
  createPlant(38, 7, PlantResourceType.TRASH, 3),
  createPlant(39, 6, PlantResourceType.URANIUM, 1),
  createPlant(40, 6, PlantResourceType.OIL, 2),
  createPlant(42, 6, PlantResourceType.COAL, 2),
  createPlant(44, 5, PlantResourceType.WIND),
  createPlant(46, 7, PlantResourceType.HYBRID, 3),
  createPlant(50, 6, PlantResourceType.WIND)
];

export const AllPlants: React.FC = () => {
  return (
    <Container>
      {plants.map((plant) => <PlantCard key={plant.rank} {...plant} height={50} />)}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  > div {
    margin: 5px;
  }
`;
