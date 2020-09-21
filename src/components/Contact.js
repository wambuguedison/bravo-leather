import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Info.css";

library.add(fas, fab);

class Info extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container>
            <h4>Get in touch with us</h4>
            <div>
              <FontAwesomeIcon className="phone m-1" icon={["fas", "phone"]} />
              <FontAwesomeIcon
                className="whatsapp m-1"
                icon={["fab", "whatsapp"]}
              />
              <FontAwesomeIcon
                className="facebook m-1"
                icon={["fab", "facebook"]}
              />
            </div>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Info;
