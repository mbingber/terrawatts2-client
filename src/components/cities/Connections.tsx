import React from "react";
import { renderToString } from "react-dom/server";
import { Marker, Polyline } from "react-leaflet";
import { divIcon } from "leaflet";
import { FetchMap_fetchMap_cities, FetchMap_fetchMap_connections} from "../../generatedTypes";
import styled from "styled-components";

interface ConnectionsProps {
  cityLookup: Record<string, FetchMap_fetchMap_cities>;
  connections: FetchMap_fetchMap_connections[];
  tempPositions: Record<string, [number, number]>
}


export const Connections: React.FC<ConnectionsProps> = ({ cityLookup, connections, tempPositions }) => {
  const getLat = (city: FetchMap_fetchMap_cities) => tempPositions[city.name] ? tempPositions[city.name][0] : city.lat;
  const getLng = (city: FetchMap_fetchMap_cities) => tempPositions[city.name] ? tempPositions[city.name][1] : city.lng;
  
  return (
    <React.Fragment>
      {connections.map((connection) => {
        const cities = connection.cities.map(({ id }) => cityLookup[id]);

        const midpoint = {
          lat: 0.5 * (getLat(cities[0]) + getLat(cities[1])),
          lng: 0.5 * (getLng(cities[0]) + getLng(cities[1]))
        };

        return (
          <div key={connection.id}>
            <Polyline
              positions={cities.map(c => ({ lat: getLat(c), lng: getLng(c) }))}
              color="#333"
              weight={3}
              dashArray="20"
              lineCap="butt"
            />
            <Polyline
              positions={cities.map(c => ({ lat: getLat(c), lng: getLng(c) }))}
              color="#bbb"
              weight={3}
              dashArray="20"
              dashOffset="20"
              lineCap="butt"
            />
            <Marker
              position={midpoint}
              icon={divIcon({
                html: renderToString(<ConnectionBubble>{connection.cost}</ConnectionBubble>),
                iconSize: [20, 20]
              })}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
}

const ConnectionBubble = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: #333;
  color: #ddd;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
