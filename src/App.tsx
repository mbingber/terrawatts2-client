import React from 'react';
import styled from "styled-components";
import { Game } from "./components/Game";

export const App: React.FC = () => {
  return (
    <Container>
      <Game />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
