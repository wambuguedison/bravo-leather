import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container } from "react-bootstrap";
import "./Carousel.css";

const options = {
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
  dots: true,
  autoPlay: true,
  autoplayTimeout: 3000,
};

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <OwlCarousel
            items={3}
            className="owl-theme"
            loop
            nav
            margin={10}
            {...options}
          >
            <div>
              <img
                className="img rounded"
                src={"assets/img/images(3).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img rounded"
                src={"assets/img/images(1).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img rounded"
                src={"assets/img/images(5).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img rounded"
                src={"assets/img/images(8).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img rounded"
                src={"assets/img/images(6).jpg"}
                alt={{}}
              ></img>
            </div>
            <div>
              <img
                className="img rounded"
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
