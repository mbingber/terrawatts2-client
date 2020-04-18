import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Game } from "./components/Game";
import { AllPlants } from "./components/plants/AllPlants";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import { Signup } from "./components/auth/Signup";
import { LoginForm } from "./components/auth/Login";
import { Home } from "./components/home/Home";



export const App: React.FC = () => {
  return (
    <Container>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/signup" children={<Signup />} />
          <Route path="/login" children={<LoginForm />} />
          <Route path="/game/:gameId" children={<Game />} />
          {/* <Route path="/all-plants" children={<AllPlants />}></Route> */}
          <Route path="/" children={<Home />} />
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
