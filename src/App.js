import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Info from "./components/Info";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Container fluid>
        <Row>
          <Col md={6}>
            <Info />
          </Col>
          <Col md={6}>
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
