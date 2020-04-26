import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Game } from "./components/Game";
import { AllPlants } from "./components/plants/AllPlants";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Signup } from "./components/auth/Signup";
import { LoginForm } from "./components/auth/Login";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/home/Navbar";

export const App: React.FC = () => {
  return (
    <Container>
      <ToastContainer />
      <Router>
        <Route exact path={["/signup", "/login", "/profile", "/"]} children={<Navbar />}/>
        <Switch>
          <Route exact path="/signup" children={<Signup />} />
          <Route exact path="/login" children={<LoginForm />} />
          <Route exact path="/game/:gameId" children={<Game />} />
          {/* <Route path="/all-plants" children={<AllPlants />}></Route> */}
          <Route exact path="/profile" children={() => <div>Profile</div>} />
          <Route exact path="/" children={<Home />} />
          <Route children={() => <div>Not found, TODO</div>} />
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
