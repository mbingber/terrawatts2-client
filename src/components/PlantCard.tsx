import React from 'react';
import styled from 'styled-components';
import { resourceColors, ResourceType } from '../constants';
import ResourceIcon from './ResourceIcon';

const ASPECT_RATIO = 3;
const RADIUS_RATIO = 0.05;
const RANK_RATIO = 0.8;
const BORDER_RATIO = 0.03;
const RESOURCE_ICON_RATIO = 0.4;

export enum PlantResourceType {
  COAL = 'COAL',
  OIL = 'OIL',
  HYBRID = 'HYBRID',
  TRASH = 'TRASH',
  URANIUM = 'URANIUM',
  WIND = 'WIND'
}

interface PlantCardProps {
  rank: number;
  resourceType: PlantResourceType;
  resourceBurn: number;
  numCities: number;
  height: number;
}

export const PlantCard: React.FC<PlantCardProps> = (props) => {
  const rankDisplay = props.rank > 9 ? props.rank : ('0' + props.rank).slice(-2);

  const resourceStack = (
    <ResourceStack {...props}>
      <div>
        <div>
          <ResourceIcon type={props.resourceType.toLowerCase() as ResourceType} />
        </div>
      </div>
      {props.resourceBurn > 1 &&
        <div>
          {Array(props.resourceBurn - 1).fill(true).map((_, idx) => (
            <div key={idx}>
              <ResourceIcon type={props.resourceType.toLowerCase() as ResourceType} />
            </div>
          ))}
        </div>
      }
    </ResourceStack>
  );
  
  return (
    <Container {...props}>
      <div>
        <Rank {...props}>
          {rankDisplay}
        </Rank>
      </div>
      <div>
        {resourceStack}
      </div>
      <div>
        <span className="fa fa-bolt"/>{props.numCities}
      </div>
    </Container>
  );
}

const Container = styled.div<PlantCardProps>`
  display: flex;
  height: ${({ height }) => height}px;
  width: ${({ height }) => height * ASPECT_RATIO}px;
  border: 1px solid black;
  background-color: ${({ resourceType }) => resourceColors[resourceType.toLowerCase() as ResourceType]};
  border-radius: ${({ height }) => height * RADIUS_RATIO}px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${({ height }) => height * 0.1}px;
  }
`;

const Rank = styled.div<PlantCardProps>`
  color: ${({ resourceType }) => resourceColors[resourceType.toLowerCase() as ResourceType]};
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: ${({ height }) => height * RANK_RATIO}px;
  font-weight: 500;
  text-align: center;
`;

const ResourceStack = styled.div<PlantCardProps>`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height * 0.9}px;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    height: ${({ height }) => height * RESOURCE_ICON_RATIO}px;
    justify-content: center;

    > div {
      height: ${({ height }) => height * RESOURCE_ICON_RATIO}px;
      display: flex;
      align-items: center;
    }
  }
`;
