import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ShopItem from "../Products/ShopItem";

import styles from "./ShowMore.module.css";
import ShowMoreLine from "./ShowMoreLine";

export default function ShowMore({ step }) {
    const [numberToDisplay, setNumberToDisplay] = useState(4);
    const [linesToDisplay, setLinesToDisplay] = useState(1);

    let showMore = true;
    const cartItems = [
        {
            id: 3,
            name: "sdfs",
            description: "sdfa",
            price: 231,
            category: "patch",
            imageUrl:
                "http://localhost:3000/static/media/coyoteSticker.bf798582302213e5ff5d.webp",
            stock: 23,
            amount: 1,
        },
        {
            id: 2,
            name: "sdfass",
            description: "dfas",
            price: 2,
            category: "patch",
            imageUrl:
                "http://localhost:3000/static/media/coyoteSticker.bf798582302213e5ff5d.webp",
            stock: 2,
            amount: 1,
        },
        {
            id: 3,
            name: "sdfs",
            description: "sdfa",
            price: 231,
            category: "patch",
            imageUrl:
                "http://localhost:3000/static/media/coyoteSticker.bf798582302213e5ff5d.webp",
            stock: 23,
            amount: 1,
        },
        {
            id: 2,
            name: "sdfass",
            description: "dfas",
            price: 2,
            category: "patch",
            imageUrl:
                "http://localhost:3000/static/media/coyoteSticker.bf798582302213e5ff5d.webp",
            stock: 2,
            amount: 1,
        },
        {
            id: 3,
            name: "sdfs",
            description: "sdfa",
            price: 231,
            category: "patch",
            imageUrl:
                "http://localhost:3000/static/media/coyoteSticker.bf798582302213e5ff5d.webp",
            stock: 23,
            amount: 1,
        },
    ];

    const [productsToShow, setProductsToShow] = useState(cartItems.slice(0, 4));

    // const initShowMore = () => {
    //     let counter = 1;
    //     const maxCounter = Math.ceil(cartItems.length / 4);
    //     const showMore = () => {
    //         if (!counter >= maxCounter) counter++;
    //         return counter;
    //     };
    //     return showMore;
    // };

    const handleShowMore = () => {
        setLinesToDisplay(linesToDisplay + step);
    };

    const getProducts = (index) => {
        let startIdx = index * 4;
        let endIdx = startIdx + 4;
        if (endIdx > cartItems.length) {
            showMore = false;
        }
        return cartItems.slice(startIdx, endIdx);
    };
    console.log(cartItems);

    return (
        <div className={classNames("section", styles.section)}>
            {Array.from({ length: linesToDisplay }, (k, index) => (
                <ShowMoreLine products={getProducts(index)} />
            ))}
            {showMore && (
                <div className={styles.showMore}>
                    <button onClick={handleShowMore}>Show more</button>
                </div>
            )}
        </div>
    );
}

ShowMore.defaultProps = {
    step: 2,
};
