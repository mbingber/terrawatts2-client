import React from "react";
import styled from "styled-components";
import { renderToString } from "react-dom/server";
import { FetchMap_fetchMap_cities, Color } from "../../generatedTypes";
import { Marker } from "react-leaflet";
import { divIcon } from "leaflet";
import { CityIcon } from "./CityIcon";
import { playerColors } from "../../constants";

interface CityMarkerProps {
  city: FetchMap_fetchMap_cities;
  colors?: Color[];
  era?: number;
  isSelected?: boolean;
  selectedColor?: Color;
  onClick?: () => void;
  hasNuclearPower: boolean;
  isDraggable?: boolean;
  onDragEnd?: (pos: { lat: number; lng: number }) => void;
}

const noop = () => {};

export const CityMarker: React.FC<CityMarkerProps> = ({
  city,
  colors = [],
  era = 3,
  isSelected = false,
  selectedColor = Color.BLUE,
  onClick = noop,
  hasNuclearPower,
  isDraggable = false,
  onDragEnd,
}) => {
  const iconHtml = renderToString(<City
    city={city}
    era={era}
    colors={colors}
    isSelected={isSelected}
    selectedColor={selectedColor}
    hasNuclearPower={hasNuclearPower}
  />);
  
  return (
    <Marker
      position={[city.lat, city.lng]}
      onClick={onClick}
      icon={divIcon({iconSize: [60, 30], className: `city-icon-${city.id}`, html: iconHtml })}
      draggable={isDraggable}
      onDragEnd={(e: any) => onDragEnd && onDragEnd(e.target._latlng)}
    />
  );
}

interface CityProps {
  city: FetchMap_fetchMap_cities;
  era: number;
  colors: Color[];
  isSelected: boolean;
  selectedColor: Color;
  hasNuclearPower: boolean;
}

const ex = (
  <svg width="100%" height="100%" viewBox="0 0 10 10">
    <line x1={3.5} y1={3.5} x2={6.5} y2={6.5} stroke="#888" strokeWidth={0.75} />
    <line x1={3.5} y1={6.5} x2={6.5} y2={3.5} stroke="#888" strokeWidth={0.75} />
  </svg>
);

const City: React.FC<CityProps> = ({ city, era, colors, isSelected, selectedColor, hasNuclearPower }) => {  
  return (
    <Container redden={hasNuclearPower}>
      <div className="name">{city.name}</div>
      <div className="players">
        {Array(3).fill(true).map((_, idx) => (
          <div key={idx}>
            {colors[idx] && <CityIcon color={playerColors[colors[idx]]} height={16} />}
            {idx >= era && ex}
            {idx === colors.length && isSelected && <CityIcon color={selectedColor} empty height={16} />}
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div<{ redden: boolean; }>`
  border: 1px solid black;
  height: 32px;
  width: 60px;
  border-radius: 2px;
  background-color: ${({ redden }) => redden ? '#642D2D' : '#333'};

  .name {
    width: 100%;
    height: 25%;
    text-align: center;
    font-size: 9px;
    color: #ccc;
  }

  .players {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1px;

    > div {
      display: flex;
      justify-content: center;
      align-items: center
      width: 16px;
      height: 16px;
      background-color: #ddd;
      border-radius: 2px;
    }
  }
`;