import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container } from "react-bootstrap";
import "./Carousel.css";

class Carousel extends React.Component {
  state = {
    options: {
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
          nav: false,
          loop: false,
        },
      },
      dots: true,
      autoPlay: true,
      loop: true,
      autoplayTimeout: 3000,
      margin: 10,
    },
    images: [
      "assets/img/images(3).jpg",
      "assets/img/images(1).jpg",
      "assets/img/images(5).jpg",
      "assets/img/images(8).jpg",
      "assets/img/images(6).jpg",
      "assets/img/images(7).jpg",
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <OwlCarousel
            items={3}
            className="owl-theme pt-2"
            {...this.state.options}
          >
            {this.state.images.map((image) => {
              return (
                <div key={this.state.images.indexOf(image)}>
                  <img className="img rounded" src={image} alt={{}} />
                </div>
              );
            })}
          </OwlCarousel>
        </Container>
      </React.Fragment>
    );
  }
}

export default Carousel;
