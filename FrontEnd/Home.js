import React from "react";
import { Link } from "@reach/router";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hell: true };
  }

  render() {
    return (
      <div>
        <h1>do your work here</h1>
      </div>
    );
  }
}

export default Home;
