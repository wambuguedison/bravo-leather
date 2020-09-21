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
const images = [
  "assets/img/images(3).jpg",
  "assets/img/images(1).jpg",
  "assets/img/images(5).jpg",
  "assets/img/images(8).jpg",
  "assets/img/images(6).jpg",
  "assets/img/images(7).jpg",
];

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
            {images.map((image) => {
              return (
                <div>
                  <img className="img rounded" src={image} alt={{}} />
                </div>
              );
            })}
          </OwlCarousel>
        </Container>
      </div>
    );
  }
}

export default Carousel;
