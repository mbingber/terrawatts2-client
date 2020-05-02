import React from "react";
import styled from "styled-components";
import { Map as ReactLeaflet, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { FetchMap_fetchMap_cities } from "../../generatedTypes";
import { Connections } from "./Connections";
import { useGame } from "../../hooks/useGame";
import { CityMarker } from "./CityMarker";
import { useMapData } from "../../hooks/useMapData";
import { useMe } from "../../hooks/useMe";
import { getMapConfig } from "./mapConfig";
import { CartsContext } from "../CartsContext";

const tileUrl = `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`;

interface MapProps {}

const tempPositions: Record<string, [number, number]> = {
  // Phoenix: [33.4, -112],
  // Boston: [44, -71],
  // "New York": [41.7, -73.5]
};

export const GameMap: React.FC<MapProps> = () => {
  const game = useGame();
  const me = useMe();
  const { cityCart } = React.useContext(CartsContext);
  
  const { data } = useMapData();

  const cityLookup = React.useMemo(() => {
    const { cities = [] } = data ? data.fetchMap : {};
    return cities.reduce<Record<string, FetchMap_fetchMap_cities>>((acc, city) => {
      acc[city.id] = city;
      return acc;
    }, {});
  }, [data]);

  if (
    !data ||
    !data.fetchMap ||
    !data.fetchMap.connections ||
    !data.fetchMap.cities
  ) {
    return null;
  }

  const { center, minZoom, maxZoom, maxBounds } = getMapConfig(game.map.name);
  
  return (
    <Container>
      <ReactLeaflet
        center={center}
        zoom={minZoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        maxBounds={maxBounds}
        attributionControl={false}
        zoomControl={false}
        zoomSnap={0.25}
        zoomDelta={0.25}
      >
        <TileLayer url={tileUrl} />
        {game.cities.map((cityInstance) => {
          const city = cityLookup[cityInstance.city.id];
          if (!city) {
            return null;
          }

          const onClick = () => {
            cityCart.toggleInCart(cityInstance.id);
          }
          
          return (
            <CityMarker
              onClick={onClick}
              key={cityInstance.id}
              city={city}
              cityInstance={cityInstance}
              era={game.era}
              players={game.playerOrder}
              isSelected={cityCart.cityInstanceIds.includes(cityInstance.id)}
              selectedColor={me && me.color}
              tempPositions={tempPositions}
            />
          )
        })}}
        <Connections cityLookup={cityLookup} connections={data.fetchMap.connections} tempPositions={tempPositions} />
      </ReactLeaflet>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  > div {
    height: 100%;
  }

  .leaflet-div-icon {
    background: none !important;
    border: none !important;
  }
`;