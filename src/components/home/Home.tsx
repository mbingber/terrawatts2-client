import React from "react";
import styled from "styled-components";
import { Segment, Header, Input, Icon, Button, Card, Dropdown } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ONLINE_USERNAMES_QUERY } from "../../graphql/getOnlineUsernamesQuery";
import { GetOnlineUsernames, GetCurrentUser, CreateGame, CreateGameVariables, GetMyRecentGames } from "../../generatedTypes";
import { GET_CURRENT_USER_QUERY } from "../../graphql/getCurrentUser";
import { CREATE_GAME_MUTATION } from "../../graphql/createGameMutation";
import { useHistory } from "react-router";
import { GET_MY_RECENT_GAMES_QUERY } from "../../graphql/getMyRecentGamesQuery";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const history = useHistory();
  const { data: currentUserData } = useQuery<GetCurrentUser>(GET_CURRENT_USER_QUERY);
  const { data: recentGamesData } = useQuery<GetMyRecentGames>(GET_MY_RECENT_GAMES_QUERY, { pollInterval: 2000 });
  const myName = currentUserData && currentUserData.getCurrentUser && currentUserData.getCurrentUser.username;
  
  const { data, loading } = useQuery<GetOnlineUsernames>(GET_ONLINE_USERNAMES_QUERY, {
    pollInterval: 2000
  });

  const [startGame, { loading: gameLoading }] = useMutation<CreateGame, CreateGameVariables>(CREATE_GAME_MUTATION, {
    onCompleted: (data) => {
      if (data && data.createGame && data.createGame.id) {
        history.push(`/game/${data.createGame.id}`);
      }
    }
  });

  const [gameName, setGameName] = React.useState("");
  const [gamePlayers, setGamePlayers] = React.useState([]);

  React.useEffect(() => {
    if (myName && !gamePlayers.includes(myName)) {
      setGamePlayers([myName, ...gamePlayers]);
    }
  }, [myName]);

  const addPlayer = (playerName: string) => {
    if (!gamePlayers.includes(playerName)) {
      setGamePlayers([...gamePlayers, playerName]);
    }
  };

  const removePlayer = (playerName: string) => {
    setGamePlayers(gamePlayers.filter((name) => name !== playerName));
  };

  const [selectedMap, setSelectedMap] = React.useState("USA");

  const mapDropdownOptions = ["USA", "Germany", "Italy", "Seattle"]
    .map(mapName => ({
      key: mapName,
      value: mapName,
      text: mapName
    }));

  const handleSubmitStartGame = () => {
    startGame({
      variables: {
        name: gameName,
        usernames: gamePlayers,
        mapName: selectedMap
      }
    })
  }

  return (
    <Container>
      <Segment.Group horizontal>
        <Segment raised>
          <Header>Your Recent Games</Header>
          {recentGamesData && recentGamesData.getMyRecentGames && recentGamesData.getMyRecentGames.map((game) => (
            <Link to={`/game/${game.id}`}>
              <Card>
                <Card.Content>
                  <Card.Description>{game.name || `Game #${game.id}`}</Card.Description>
                  <Card.Meta>{game.players.join(", ")}</Card.Meta>
                </Card.Content>
              </Card>
            </Link>
          ))}
        </Segment>
        {myName && (
          <Segment raised>
            <Header>Start a Game</Header>
            <Input
              placeholder="Give it a name"
              value={gameName}
              onChange={e => setGameName(e.target.value)}
            />
            <Header size="small">Map</Header>
            <Dropdown
              selection
              options={mapDropdownOptions}
              defaultValue={selectedMap}
              onChange={(event, data) => setSelectedMap(data.value as string)}
            />
            <Header size="small">Players</Header>
            {gamePlayers.map((playerName) => (
              <Buddy key={playerName}>
                {playerName}
                {playerName !== myName && <Icon color="red" name="remove circle" onClick={() => removePlayer(playerName)} />}
              </Buddy>
            ))}
            <Button.Group>
              <Button
                primary
                loading={gameLoading}
                disabled={gamePlayers.length < 2 || gamePlayers.length > 6}
                onClick={handleSubmitStartGame}
              >Start it!</Button>
            </Button.Group>
          </Segment>
        )}
        <Segment raised loading={loading}>
          <Header>Buddy List</Header>
          {data && data.getOnlineUsernames && data.getOnlineUsernames.map((username) => (
            <Buddy key={username}>
              {username}
              {username !== myName && <Icon color="green" name="add circle" onClick={() => addPlayer(username)} />}
            </Buddy>
          ))}
        </Segment>
      </Segment.Group>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 72px);
  width: 100%;
  padding: 0 1rem;

  .ui.buttons {
    margin-top: 100px !important;
  }
`;

const Buddy = styled.div`
  display: flex;
  align-items: center;

  i {
    margin-left: 4px !important;
  }
`;
