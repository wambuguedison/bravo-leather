import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Info.css";

class Info extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container>
            <h3>Welcome to Bravo leather</h3>
            <p>
              Bravo Leather is a well established leather dealer that has you
              covered when it comes to leather products.
            </p>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Info;
