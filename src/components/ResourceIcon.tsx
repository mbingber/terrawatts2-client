import React from 'react';
import styled from "styled-components";
import { ResourceType } from '../constants';

interface ResourceIconProps {
  className?: string;
  type: ResourceType;
}

const ResourceIcon: React.FC<ResourceIconProps> = ({ type, className }) => {
  if (type === "hybrid") {
    return null;
  }
  
  return (
    <img
      className={className}
      src={require(`../assets/resources/${type}.${type === "coal" ? "png" : "png"}`)}
    />
  );
}

export default styled(ResourceIcon)`
  max-height: 90%;
`;
