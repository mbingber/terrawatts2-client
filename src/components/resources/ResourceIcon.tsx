import React from 'react';
import styled from "styled-components";
import { PlantResourceType } from '../../generatedTypes';
import { resourceColorFilters } from '../../constants';

interface ResourceIconProps {
  type: PlantResourceType;
  withColor?: boolean;
}

export const ResourceIcon: React.FC<ResourceIconProps> = ({ type, withColor }) => {
  if (type === PlantResourceType.HYBRID) {
    return (
      <HybridContainer>
        <Image 
          type={PlantResourceType.COAL}
          withColor={withColor}
          src={require("../../assets/resources/coal.png")}
        />
        <div>/</div>
        <Image 
          type={PlantResourceType.OIL}
          withColor={withColor}
          src={require("../../assets/resources/oil.png")}
        />
      </HybridContainer>
    );
  }
  
  return (
    <Image
      type={type}
      withColor={withColor}
      src={require(`../../assets/resources/${type.toLowerCase()}.png`)}
    />
  );
}

const Image = styled.img<ResourceIconProps>`
  max-height: 90%;

  ${({ withColor, type }) => withColor ? `filter: ${resourceColorFilters[type as PlantResourceType]};` : ""}
`;

const HybridContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60%;
  font-size: 60%;
`;