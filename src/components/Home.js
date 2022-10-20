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
import CTAImage from "./CTAImage/CTAImage";
import Rows from "./Rows/Rows";

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
            <div className="w-75 mx-auto">
                <Slider items={items} />
            </div>
            <Rows />
            <div className="w-75 mx-auto">
                <ShowMore items={items} title="Exclusive selection" />
            </div>
            <CTAImage title="Hello there" body="Stop reading, nothing catchy here" />
            <Newsletter />
        </div>
    );
}
