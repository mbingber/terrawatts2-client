import React from "react";
import styled from "styled-components";
import { Map as ReactLeaflet, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { FetchMap_fetchMap_cities, Color } from "../../generatedTypes";
import { Connections } from "./Connections";
import { useGame } from "../../hooks/useGame";
import { CityMarker } from "./CityMarker";
import { useMe } from "../../hooks/useMe";
import { getMapConfig } from "./mapConfig";
import { CartsContext } from "../CartsContext";

const tileUrl = `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`;

interface MapProps {}

export const GameMap: React.FC<MapProps> = () => {
  const { state: { cityList, playerOrder, info }, map } = useGame();
  const me = useMe();
  const { cityCart } = React.useContext(CartsContext);
  
  const cityLookup = React.useMemo(() => {
    return map.cities.reduce<Record<string, FetchMap_fetchMap_cities>>((acc, city) => {
      acc[city.id] = city;
      return acc;
    }, {});
  }, [map.cities]);

  const colorsLookup = React.useMemo(() => {
    return map.cities.reduce<Record<string, Color[]>>((acc, city) => {
      const cityInstance = cityList.find(c => c.cityId === city.id);
      const occupants = cityInstance ? cityInstance.occupants : [];
      const colors = occupants.map(name => playerOrder.find(p => p.username === name).color);
      acc[city.id] = colors;
      return acc;
    }, {});
  }, [map, cityList, playerOrder]);

  const { center, minZoom, maxZoom, maxBounds } = getMapConfig(map.name);
  
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
        {map.cities.map((city) => {

          const onClick = () => {
            cityCart.toggleInCart(city.id);
          }
          
          return (
            <CityMarker
              onClick={onClick}
              key={city.id}
              city={city}
              colors={colorsLookup[city.id]}
              era={info.era}
              isSelected={cityCart.cityIds.includes(city.id)}
              selectedColor={me && me.color}
              hasNuclearPower={map.name === 'Northern Europe' && city.region > 2}
            />
          )
        })}}
        <Connections cityLookup={cityLookup} connections={map.connections} />
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