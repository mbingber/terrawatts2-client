import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

interface SpectatorNotificationProps {
  gameId: string;
}

export const SpectatorNotification: React.FC<SpectatorNotificationProps> = ({ gameId }) => {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) {
    return null;
  }
  
  return (
    <Container>
      <div>You are viewing this game as a spectator.</div>
      <div>
        <Link to={`/login?gameId=${gameId}`}>
          <Button primary>Login</Button>
        </Link>
        <Button onClick={() => setDismissed(true)}>Dismiss</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  background-color: #ccc;
  z-index: 9000;
  left: 0;
  top: 0;
  width: 240px;
  height: 150px;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;