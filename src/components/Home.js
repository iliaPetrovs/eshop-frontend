import React, { useLayoutEffect } from "react";
import CarouselLoader from "./CarouselLoader";
import CategoryShowcase from "./CategoryShowcase";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import InfiniteProductSlider from "./Products/InfiniteProductSlider";
import Socials from "./Socials/Socials";
import items from "../utils/mocks/items";
import Slider from "./Slider/Slider";
import ShowMore from "./ShowMore/ShowMore";

export default function Home({ handleAddToCart }) {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(items);
    console.log("wt");

    return (
        <div>
            <CarouselLoader />
            <CategoryShowcase />
            <div className="w-75 mx-auto pt-5">
                <Slider items={items} />
            </div>

            <div className="w-75 mx-auto pt-5">
                <ShowMore items={items} title="Exclusive selection" />
            </div>
            <Newsletter />
        </div>
    );
}
