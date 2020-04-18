import React from "react";
import styled from "styled-components";
import { Button, Input } from "semantic-ui-react";
import { useLogin } from "./useLogin";
import { Link } from "react-router-dom";

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errored, setErrored] = React.useState(false);

  const [login, { loading }] = useLogin(() => setErrored(true));

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setUsername(value);
    setErrored(false);
  }

  const handleSubmit = () => {
    login({
      variables: {
        username,
        password,
      }
    });
  };
  
  return (
    <Container>
      <Box>
        <Input
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          error={errored}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ButtonGroup>
          <Button
            primary
            loading={loading}
            disabled={!username || !password || errored}
            onClick={handleSubmit}
          >Login</Button>
          <Link to="/signup">
            <Button secondary>Signup</Button>
          </Link>
        </ButtonGroup>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`;

const Box = styled.div`
  height: 300px;
  width: 250px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 24px;

  .ui.input {
    margin-bottom: 12px;
  }
`;

const ButtonGroup = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  justify-content: center;

  button {
    margin-left: 8px;
    margin-right: 0;
  }

  > button:first-child {
    margin-right: 8px;
    margin-left: 0;
  }
`;