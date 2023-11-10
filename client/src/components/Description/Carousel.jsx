import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyCarousel.css';

function MyCarousel() {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 full-height-image"
              src="/Images/Carousel1.jpg"
              alt="Creams"
            />
            <Carousel.Caption className="carousel-caption">
            <h3>Elevate Your Skin Care Experience</h3>
            <p>Discover a curated selection of premium skin care brands 
                for a truly indulgent self-care routine.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 full-height-image"
              src="/Images/Carousel2.jpg"
              alt="Serums"
            />
            <Carousel.Caption className="carousel-caption">
            <h3>Radiant Beauty, One Drop at a Time</h3>
            <p>Unveil the secret to a luminous complexion with our carefully curated collection.</p>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 full-height-image"
              src="/Images/Carousel3.jpg"
              alt="Model"
            />
            <Carousel.Caption className="carousel-caption">
            <h3>Glowing Confidence, Naturally Captivating</h3>
            <p>Witness the allure of flawless beauty as our model radiates confidence with skin that speaks volumes. 
                Embrace the glow that comes from self-love and exceptional skincare.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    };
    export default MyCarousel;
