import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyCarousel.css";

function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            className="carousel-image"
            src="/Images/Carousel1.png"
            alt="Creams"
          />
        </div>
        <div>
          <img
            className="carousel-image"
            src="/Images/Carousel2.png"
            alt="Serums"
          />
        </div>
        <div>
          <img
            className="carousel-image"
            src="/Images/Carousel3.png"
            alt="Model"
          />
        </div>
      </Slider>
    </div>
  );
}

export default MyCarousel;
