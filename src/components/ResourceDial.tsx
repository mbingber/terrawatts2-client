import React from "react";
import styled from "styled-components";
import { ResourceType, resourceColors } from "../constants";
import ResourceIcon from "./ResourceIcon";

const getResourceCost = (
  quantity: number,
  resourceType: ResourceType
): number => {  
  if (resourceType === "uranium") {
    return quantity < 5 ? 18 - 2 * quantity : 13 - quantity;
  }

  return 8 - Math.floor((quantity - 1) / 3);
};

interface ResourceDialProps {
  resourceType: ResourceType;
  era: number;
  inStock: number;
}

export const ResourceDial: React.FC<ResourceDialProps> = ({ resourceType, era, inStock }) => {
  const numDivisions = resourceType === "uranium" ? 12 : 8;
  const maxStock = resourceType === "uranium" ? 12 : 24;
  const ratio = inStock / maxStock;

  const innerR = 0.75;
  const outerR = 1;
  const startAngle = -Math.PI / 4;
  const endAngle = 5 * Math.PI / 4;
  const ratioAngle = startAngle + ratio * (endAngle - startAngle);

  const drawArc = (angle: number, color: string) => {
    const innerStartX = innerR * Math.cos(startAngle);
    const innerStartY = innerR * Math.sin(startAngle);
    
    const outerStartX = outerR * Math.cos(startAngle);
    const outerStartY = outerR * Math.sin(startAngle);

    const outerEndX = outerR * Math.cos(angle);
    const outerEndY = outerR * Math.sin(angle);

    const innerEndX = innerR * Math.cos(angle);
    const innerEndY = innerR * Math.sin(angle);

    const largeAngleSweep = +(angle - startAngle > Math.PI);
    
    return (
      <path 
        fill={color}
        d={`
          M ${innerStartX} ${innerStartY}
          L ${outerStartX} ${outerStartY}
          A ${outerR} ${outerR} 0 ${largeAngleSweep} 1 ${outerEndX} ${outerEndY}
          L ${innerEndX} ${innerEndY}
          A ${innerR} ${innerR} 0 ${largeAngleSweep} 0 ${innerStartX} ${innerStartY}
        `}
      />
    );
  };
  
  return (
    <Container>
      <IconAndPrice>
        <ResourceIcon type={resourceType} />
        <Dot />
        <Price>${getResourceCost(inStock, resourceType)}</Price>
      </IconAndPrice>
      <SvgContainer>
        <svg width="100%" height="100%" viewBox="-1 -1 2 2">
          {drawArc(endAngle, "#ddd")}
          {drawArc(ratioAngle, resourceColors[resourceType])}
          {Array(numDivisions).fill(true).map((_, i) => {
            if (i === 0) {
              return null;
            }
            
            const angle = startAngle + (endAngle - startAngle) / numDivisions * i;
            const x1 = innerR * Math.cos(angle);
            const y1 = innerR * Math.sin(angle);
            const x2 = outerR * Math.cos(angle);
            const y2 = outerR * Math.sin(angle);

            return <path key={i} d={`M${x1} ${y1} L ${x2} ${y2}`} stroke="black" strokeWidth={0.025} />
          })}
        </svg>
      </SvgContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SvgContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  svg {
    transform: scale(1,-1);
  }
`;
  
const IconAndPrice = styled.div`
  padding: 20px;
  height: 25%;
  display: flex;
  align-items: center;
`;

const Price = styled.div`
  font-size: 24px;
`;

const Dot = styled.div`
  height: 5px;
  width: 5px;
  border-radius: 5px;
  margin: 0 5px;
  background-color: black;
`;