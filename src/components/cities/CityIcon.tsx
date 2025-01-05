import React from "react";
import styled from "styled-components";

interface CityIconProps {
  color: string;
  height?: number;
  empty?: boolean;
  number?: number;
  strokeWidth?: number;
}

export const CityIcon: React.FC<CityIconProps> = ({ color, height = 16, empty, number, strokeWidth }) => {
  return (
    <Container height={height}>
      <svg width="100%" height="100%" viewBox="0 0 10 10">
        <path
          d={`
            M 1 9
            L 1 5
            L 5 1
            L 9 5
            L 9 9
            Z
          `}
          stroke={color}
          strokeWidth={strokeWidth || 1}
          fill={empty ? "none" : color}
        />
        {(number || number === 0) && (
          <text
            x={5}
            y={6.5}
            textAnchor="middle"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            style={{ fontSize: 5 }}
          >{number}</text>
        )}
      </svg>
    </Container>
  );
}

const Container = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  width: ${({ height }) => height}px;
`;

export const Arrow: React.FC<{ height?: number }> = ({ height = 24 }) => {
  return (
    <Container height={height}>
      <svg width="100%" height="100%" viewBox="0 0 10 10">
        <line 
          x1={1}
          y1={5}
          x2={9.3}
          y2={5}
          stroke="black"
          strokeWidth={1}
        />
        <line 
          x1={7}
          y1={3}
          x2={9}
          y2={5}
          stroke="black"
          strokeWidth={1}
        />
        <line 
          x1={7}
          y1={7}
          x2={9}
          y2={5}
          stroke="black"
          strokeWidth={1}
        />
      </svg>
    </Container>
  );
}
