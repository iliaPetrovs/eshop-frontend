import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselLoader() {
  return (
    <div className="carousel">
      <Carousel swipeable={true} emulateTouch autoPlay={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
        <div>
          <img className="carousel-item" src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg" />
        </div>
        <div>
          <img className="carousel-item" src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg" />
        </div>
        <div>
          <img className="carousel-item" src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
