import React, { useLayoutEffect } from "react";
import CarouselLoader from "./CarouselLoader";
import CategoryShowcase from "./CategoryShowcase";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Slider from "./Products/Slider";
import Socials from "./Socials";

export default function Home({ handleAddToCart }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CarouselLoader />
      <CategoryShowcase />
      <Slider handleAddToCart={handleAddToCart} />
      <Newsletter />
      <Socials />
    </div>
  );
}
