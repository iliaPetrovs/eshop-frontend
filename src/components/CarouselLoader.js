import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselLoader() {
  return (
    <div className="carousel">
      <Carousel swipeable={true} emulateTouch autoPlay={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
        <div>
          <img className="carousel-item" src="https://i.pinimg.com/originals/b5/fc/e9/b5fce981d298bf989c295a5a4c091812.jpg" />
        </div>
        {/* <div>
          <img className="carousel-item" src="https://i.pinimg.com/originals/c9/5e/12/c95e12d70f72831a80642cff762b4ccc.jpg" />
        </div> */}
        <div>
          <img className="carousel-item" src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
