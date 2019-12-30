import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import { Map as ReactLeaflet, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const tileUrl = `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`;

const MAP_QUERY = gql`
  query FetchMap($mapName: String!) {
    fetchMap(mapName: $mapName) {
      name
      cities {
        id
        name
        lat
        lng
      }
      connections {
        id
        cost
        cities {
          id
        }
      }
    }
  }
`;

interface MapProps {

}

export const GameMap: React.FC<MapProps> = () => {
  const { loading, error, data } = useQuery(MAP_QUERY, {
    variables: {
      mapName: "USA"
    }
  });

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>Error!</Container>;

  console.log("DATA", data);
  
  return (
    <Container>
      <ReactLeaflet
        center={[37,270]}
        zoom={4.5}
        minZoom={4.5}
        maxZoom={7}
        attributionControl={false}
        zoomControl={false}
        zoomSnap={0.25}
        zoomDelta={0.25}
      >
        <TileLayer url={tileUrl} />
      </ReactLeaflet>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  > div {
    height: 100%;
  }
`;