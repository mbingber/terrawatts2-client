import React from "react";
import styled from "styled-components";
import { Button, Input } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { CreateUser, CreateUserVariables } from "../../generatedTypes";
import { CREATE_USER_MUTATION } from "../../graphql/createUserMutation";
import { useLogin } from "./useLogin";

interface SignupProps {}

export const Signup: React.FC<SignupProps> = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errored, setErrored] = React.useState(false);

  const [login, { loading: loginLoading }] = useLogin(() => setErrored(true));

  const [signup, { loading: signupLoading }] = useMutation<CreateUser, CreateUserVariables>(CREATE_USER_MUTATION, {
    onError: () => setErrored(true),
    onCompleted: (data) => {
      if (!data || !data.createUser || !data.createUser.id) {
        setErrored(true);
      } else {
        login({
          variables: {
            username,
            password
          },
        });
      }
    }
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setUsername(value);
    setErrored(false);
  }

  const handleSubmit = () => {
    signup({
      variables: {
        username,
        password,
        we: false
      }
    });
  };

  const loading = loginLoading || signupLoading;
  
  return (
    <Container>
      <Box>
        <Input
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          error={errored}
          disabled={loading}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          disabled={loading}
        />
        <Disclaimer>Don't use your normal password, this shit ain't secure.</Disclaimer>
        <Button
          primary
          loading={loading}
          disabled={!username || !password || password !== confirmPassword || errored}
          onClick={handleSubmit}
        >Signup</Button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 72px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

  button {
    position: absolute !important;
    bottom: 24px;
  }
`;

const Disclaimer = styled.div`
  font-size: 8px;
`;