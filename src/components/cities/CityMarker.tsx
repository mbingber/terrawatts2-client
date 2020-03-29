import React from "react";
import styled from "styled-components";
import { renderToString } from "react-dom/server";
import { Game_cities, FetchMap_fetchMap_cities, Game_playerOrder, Color } from "../../generatedTypes";
import { Marker } from "react-leaflet";
import { divIcon } from "leaflet";
import { CityIcon } from "./CityIcon";
import { playerColors } from "../../constants";

interface CityMarkerProps {
  cityInstance: Game_cities;
  city: FetchMap_fetchMap_cities;
  players: Game_playerOrder[];
  era: number;
  isSelected: boolean;
  selectedColor: Color;
  onClick: () => void;
  tempPositions: Record<string, [number, number]>;
}

export const CityMarker: React.FC<CityMarkerProps> = ({ cityInstance, city, players, era, isSelected, selectedColor, onClick, tempPositions }) => {
  const colors = cityInstance.players
    .map((player) => (
      players.find((p) => p.id === player.id)
    ))
    .map(p => p ? p.color : Color.BLACK);

  const iconHtml = renderToString(<City city={city} era={era} colors={colors} isSelected={isSelected} selectedColor={selectedColor} />);
  
  const position = tempPositions[city.name] || [city.lat, city.lng]; // TEMP

  return (
    <Marker
      position={position}
      onClick={onClick}
      icon={divIcon({iconSize: [60, 30], className: `city-icon-${cityInstance.id}`, html: iconHtml })}
    />
  );
}

interface CityProps {
  city: FetchMap_fetchMap_cities;
  era: number;
  colors: Color[];
  isSelected: boolean;
  selectedColor: Color;
}

const ex = (
  <svg width="100%" height="100%" viewBox="0 0 10 10">
    <line x1={3.5} y1={3.5} x2={6.5} y2={6.5} stroke="#888" strokeWidth={0.75} />
    <line x1={3.5} y1={6.5} x2={6.5} y2={3.5} stroke="#888" strokeWidth={0.75} />
  </svg>
);

const City: React.FC<CityProps> = ({ city, era, colors, isSelected, selectedColor }) => {  
  return (
    <Container>
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

const Container = styled.div`
  border: 1px solid black;
  height: 32px;
  width: 60px;
  border-radius: 2px;
  background-color: #333;

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