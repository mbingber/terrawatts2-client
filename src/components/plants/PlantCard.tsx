import React from 'react';
import styled from 'styled-components';
import { resourceColors } from '../../constants';
import { ResourceIcon } from '../resources/ResourceIcon';
import { PlantResourceType } from '../../generatedTypes';
import { CityIcon } from '../cities/CityIcon';

const ASPECT_RATIO = 3;
const RADIUS_RATIO = 0.05;
const CITY_RATIO = 0.6
const RESOURCE_ICON_RATIO = 0.4;

interface PlantCardProps {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
  height: number;
}

export const PlantCard: React.FC<PlantCardProps> = (props) => {
  const rankDisplay = props.rank > 9 ? props.rank : ('0' + props.rank).slice(-2);

  const resourceStack = props.resourceType === PlantResourceType.HYBRID ? (
    <ResourceStack {...props}>
      {Array(props.resourceBurn).fill(true).map((_, idx) => (
        <div key={idx}>
          <div>
            <ResourceIcon type={props.resourceType} />
          </div>
        </div>
      ))}
    </ResourceStack>
  ) : (
    <ResourceStack {...props}>
      <div>
        <div>
          <ResourceIcon type={props.resourceType} />
        </div>
      </div>
      {props.resourceBurn > 1 &&
        <div>
          {Array(props.resourceBurn - 1).fill(true).map((_, idx) => (
            <div key={idx}>
              <ResourceIcon type={props.resourceType} />
            </div>
          ))}
        </div>
      }
    </ResourceStack>
  );
  
  return (
    <Container {...props}>
      <div>
        <svg width="100%" height="100%" viewBox="0 0 1 1">
          <text
            x={0.5}
            y={0.58}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={0.86}
            fill="none"
            strokeWidth={0.03}
            fontWeight={600}
            stroke="black"
          >{rankDisplay}</text>
        </svg>
      </div>
      <div>
        {resourceStack}
      </div>
      <div>
        <CityIcon
          color="black"
          empty
          height={CITY_RATIO * props.height}
          number={props.numCities}
          strokeWidth={0.5}
        />
      </div>
    </Container>
  );
}

const Container = styled.div<PlantCardProps>`
  display: flex;
  height: ${({ height }) => height}px;
  width: ${({ height }) => height * ASPECT_RATIO}px;
  border: 1px solid black;
  background-color: ${({ resourceType }) => resourceColors[resourceType as PlantResourceType]};
  ${({ resourceType }) => resourceType === PlantResourceType.HYBRID ? `
    background-image: linear-gradient(${resourceColors[PlantResourceType.COAL]} 50%, ${resourceColors[PlantResourceType.OIL]} 50%);
  ` : ""}
  border-radius: ${({ height }) => height * RADIUS_RATIO}px;
  user-select: none;
  position: relative;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${({ height }) => height * 0.06}px;
    width: ${({ height }) => 0.3 * height * ASPECT_RATIO}px;
  }

  > div:first-child {
    width: ${({ height }) => 0.4 * height * ASPECT_RATIO}px;
  }
`;

const ResourceStack = styled.div<PlantCardProps>`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height * 0.9}px;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    height: ${({ height, resourceType }) => (height * RESOURCE_ICON_RATIO * (resourceType === PlantResourceType.HYBRID ? 0.8 : 1))}px;
    justify-content: center;

    > div {
      height: ${({ height }) => height * RESOURCE_ICON_RATIO}px;
      display: flex;
      align-items: center;
    }
  }
`;
