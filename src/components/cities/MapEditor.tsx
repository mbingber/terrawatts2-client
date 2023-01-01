import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "@apollo/client";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { Map as ReactLeaflet, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { MAP_QUERY } from "../../graphql/mapQuery";
import { FetchMap, FetchMapVariables, FetchMap_fetchMap_cities, FetchMap_fetchMap, CityInput, SaveMap, SaveMapVariables, MapInput } from "../../generatedTypes";
import { getMapConfig } from "./mapConfig";
import { CityMarker } from "./CityMarker";
import { Connections } from "./Connections";
import { SAVE_MAP_MUTATION } from "../../graphql/saveMapMutation";

const tileUrl = `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`;

const MapEditorBase: React.FC<{ map: FetchMap_fetchMap }> = ({ map }) => {
  const [state, setState] = React.useState(map);
  const [isSaved, setIsSaved] = React.useState(true);

  const [saveMap, { loading }] = useMutation<SaveMap, SaveMapVariables>(SAVE_MAP_MUTATION, {
    onCompleted: () => setIsSaved(true),
    onError: (error) => toast.error(error.message),
  });
  
  const cityLookup = state.cities
    .reduce<Record<string, FetchMap_fetchMap_cities>>((acc, city) => {
      acc[city.id] = city;
      return acc;
    }, {});

  const { center, minZoom, maxZoom, maxBounds } = getMapConfig(state.name);

  const submitSave = () => {
    const changes = map.cities
      .filter(city => {
        const localCity = cityLookup[city.id];
        return localCity.lat !== city.lat || localCity.lng !== city.lng;
      })
      .map(city => cityLookup[city.id]);
    
    const mapInput: MapInput = {
      id: state.id,
      name: state.name,
      cities: changes.map(({ id, lat, lng }) => ({ id, lat, lng })),
    };

    saveMap({ variables: { mapInput } });
  };

  const setLatLng = (cityInput: CityInput) => {
    setState({
      ...state,
      cities: state.cities.map(city => {
        if (cityInput.id === city.id) {
          return { ...city, lat: cityInput.lat, lng: cityInput.lng };
        }
        return city;
      })
    });
    setIsSaved(false);
  }

  return (
    <> 
      {!isSaved && (
        <TopRight>
          <Button primary loading={loading} onClick={submitSave}>
            Save
          </Button>
        </TopRight>
      )}
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
        {state.cities.map((city) => {
          return (
            <CityMarker
              key={city.id}
              city={city}
              hasNuclearPower={state.name === 'Northern Europe' && city.region > 2}
              isDraggable
              onDragEnd={({ lat, lng }) => setLatLng({ id: city.id, lat, lng })}
            />
          )
        })}}
        <Connections cityLookup={cityLookup} connections={map.connections} />
      </ReactLeaflet>
    </>
  )
}

export const MapEditor: React.FC = () => {
  const { mapName } = useParams<{ mapName: string }>();
  const { data } = useQuery<FetchMap, FetchMapVariables>(MAP_QUERY, {
    variables: { mapName }
  });
  const map = data && data.fetchMap;
  return (
    <Container>
      {map ? <MapEditorBase map={map} /> : "Loading..."}
    </Container>
  );
};

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

const TopRight = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 1000;
`;