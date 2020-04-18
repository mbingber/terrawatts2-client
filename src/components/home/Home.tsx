import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GetCurrentUser } from "../../generatedTypes";
import { GET_CURRENT_USER_QUERY } from "../../graphql/getCurrentUser";

export const Home: React.FC = () => {
  const { loading, error, data } = useQuery<GetCurrentUser>(GET_CURRENT_USER_QUERY);

  if (loading) {
    return <Container />;
  };

  const isLoggedIn = !loading && !error && data && data.getCurrentUser;
  
  return (
    <Container>
      {isLoggedIn ? (
        <Greeting>Hello, {data.getCurrentUser.username}</Greeting>
      ) : (
        <>
          <Link to="/login">
            <Button primary>Login</Button>
          </Link>
          <Link to="/signup">
            <Button secondary>Signup</Button>
          </Link>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ccc;
  padding: 24px;
`;

const Greeting = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  margin-top: 24px;
`;
