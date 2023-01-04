import React, { useLayoutEffect } from "react";
import CarouselLoader from "./CarouselLoader";
import CategoryShowcase from "./CategoryShowcase";
import Newsletter from "./Newsletter";
import items from "../utils/mocks/items";
import Slider from "./Slider/Slider";
import ShowMore from "./ShowMore/ShowMore";
import CTAImage from "./CTAImage/CTAImage";
import Rows from "./Rows/Rows";
import { useQuery } from "react-query";
import { getProducts } from "../api/getProducts";
import Loader from "./Misc/Loader";

export default function Home({ handleAddToCart }) {
    const products = useQuery({ queryKey: ["products"], queryFn: getProducts });
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(products.data);

    return (
        <div>
            {/* <CarouselLoader /> */}
            <CategoryShowcase />
            {/* <div className="w-75 mx-auto"> */}
            {products?.data ? (
                <>
                    <Slider items={products?.data} />
                    <Rows />
                    <ShowMore items={products?.data} title="Exclusive selection" />
                </>
            ) : (
                <Loader />
            )}
            {/* </div> */}
            <CTAImage
                title="Hello there"
                body="Stop reading, nothing catchy here"
            />
            <Newsletter />
        </div>
    );
}
