import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  state = {
    urls: [
      {
        name: "Home",
        url: "/#",
        active: true,
      },
      {
        name: "About",
        url: "/#",
        active: false,
      },
      {
        name: "Contact",
        url: "/#",
        active: false,
      },
    ],
  };

  activeClass(active) {
    return active ? "nav-link active" : "nav-link";
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          bg="primary"
          expand="md"
          fixed="top"
          className="mb-2"
          variant="dark"
        >
          <Navbar.Brand href="#home">Bravo Leather</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.state.urls.map((url) => {
                return <Nav.Link href={url.url}>{url.name}</Nav.Link>;
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
