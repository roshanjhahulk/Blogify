import React from "react";
import ReactDom from "react-dom";
import Home from "./Home";
import { Router, Link } from "@reach/router";
import CP from "./CP";
import About from "./About";
import SignIn from "./Upload/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Router>
        <SignIn path="/upload/signin" />
        <Home path="/" />
        <CP path="/cp-guide" />
        <About path="/about" />
      </Router>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));