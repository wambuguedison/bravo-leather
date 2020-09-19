import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container } from "react-bootstrap";
import "./Carousel.css";

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <OwlCarousel items={3} className="owl-theme" loop nav margin={10}>
            <div>
              <img
                className="img"
                src={"assets/img/images(3).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img"
                src={"assets/img/images(1).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img"
                src={"assets/img/images(5).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img"
                src={"assets/img/images(8).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img"
                src={"assets/img/images(6).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img"
                src={"assets/img/images(7).jpg"}
                alt={{}}
              ></img>
            </div>
          </OwlCarousel>
        </Container>
      </div>
    );
  }
}

export default Carousel;
