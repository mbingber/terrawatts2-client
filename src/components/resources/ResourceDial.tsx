import React from "react";
import styled from "styled-components";
import { ResourceType, resourceColors, getSecondaryResourceColor } from "../../constants";
import { ResourceIcon } from "./ResourceIcon";
import { getSingleResourceCost } from "../../logic/resources";
import { PlantResourceType } from "../../generatedTypes";
import { Incrementer } from "./Incrementer";

interface ResourceDialProps {
  resourceType: ResourceType;
  era: number;
  inStock: number;
  inCart: number;
  setInCart: (inCart: number) => void;
  restockRates: number[];
  showIncrementor: boolean;
  disablePlus: boolean;
}

export const ResourceDial: React.FC<ResourceDialProps> = ({
  resourceType,
  era,
  inStock,
  restockRates,
  inCart,
  setInCart,
  showIncrementor,
  disablePlus
}) => {
  const numDivisions = resourceType === "uranium" ? 12 : 8;
  const maxStock = resourceType === "uranium" ? 12 : 24;
  const ratio = inStock / maxStock;
  const ratioAdjusted = (inStock - inCart) / maxStock;

  const innerR = 0.75;
  const outerR = 1;
  const startAngle = -Math.PI / 4;
  const endAngle = 5 * Math.PI / 4;
  const ratioAngle = startAngle + ratio * (endAngle - startAngle);
  const ratioAdjustedAngle = startAngle + ratioAdjusted * (endAngle - startAngle);

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

  const drawLine = (key: string, angle: number, isMinor: boolean = false) => {
    const x1 = innerR * Math.cos(angle);
    const y1 = innerR * Math.sin(angle);
    const outerRForLine = isMinor ? innerR + 0.7 * (outerR - innerR) : outerR;
    const x2 = outerRForLine * Math.cos(angle);
    const y2 = outerRForLine * Math.sin(angle);

    return (
      <path
        key={key}
        d={`M${x1} ${y1} L ${x2} ${y2}`}
        stroke="black"
        strokeWidth={isMinor ? 0.01 : 0.05}
      />
    );
  }

  const amountForCost = inStock - inCart;
  
  return (
    <Container>
      <IconAndPrice>
        <ResourceIcon type={resourceType.toUpperCase() as PlantResourceType} />
        <Dot />
        <Price>
          {amountForCost > 0 ? (
            <><span className="dollar">$</span>{getSingleResourceCost(amountForCost, resourceType)}</>
          ) : (
            <>--</>
          )}
        </Price>
      </IconAndPrice>
      <RestockRates>
        {restockRates.reduce((acc, rate, idx) => {
          acc.push(<span key={idx} className={idx + 1 === era ? "era-on" : "era-off"}>+{rate}</span>);
          if (idx < 2) {
            acc.push(<span key={`${idx}s`}>{` / `}</span>);
          }

          return acc;
        }, [])}
      </RestockRates>
      <ActionPanel>
        {showIncrementor && (
          <Incrementer value={inCart} setValue={setInCart} disablePlus={disablePlus} />
        )}
      </ActionPanel>
      <SvgContainer>
        <svg width="100%" height="100%" viewBox="-1 -1 2 2">
          {drawArc(endAngle, "#bbb")}
          {drawArc(ratioAngle, getSecondaryResourceColor(resourceType.toUpperCase() as PlantResourceType))}
          {drawArc(ratioAdjustedAngle, resourceColors[resourceType.toUpperCase() as PlantResourceType])}
          {Array(numDivisions).fill(true).reduce((acc, _, i) => {
            const groupAngle = (endAngle - startAngle) / numDivisions;
            const angle = startAngle + groupAngle * i;

            if (i > 0) {
              acc.push(drawLine(`${i}_0`, angle));
            }

            if (resourceType !== "uranium") {
              acc.push(drawLine(`${i}_1`, angle + groupAngle / 3, true));
              acc.push(drawLine(`${i}_2`, angle + 2 * groupAngle / 3, true));
            }

            return acc;
          }, [])}
        </svg>
      </SvgContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 88px;
  width: 88px;
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
  padding-top: 16px;
  padding-bottom: 2px;
  height: 40px;
  display: flex;
  align-items: center;

  .dollar {
    font-size: 12px;
    vertical-align: super;
  }
`;

const Price = styled.div`
  font-size: 20px;
  display: flex;
`;

const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 3px;
  margin: 0 3px;
  background-color: black;
`;

const RestockRates = styled.div`
  font-size: 8px;

  color: #999;

  .era-on {
    color: black;
  }
`;

const ActionPanel = styled.div`
  position: relative;
  top: 4px;
  height: 16px;
  z-index: 1;
`;
