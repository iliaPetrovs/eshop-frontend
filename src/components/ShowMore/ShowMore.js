import classNames from "classnames";
import React, { useState } from "react";
import Squiggle from "../Misc/Squiggle";

import styles from "./ShowMore.module.css";
import ShowMoreLine from "./ShowMoreLine";

export default function ShowMore({ cartItems, step, title }) {
    const [linesToDisplay, setLinesToDisplay] = useState(1);
    let showMore = true;

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

    return (
        <div className={classNames("section", styles.section)}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <Squiggle />
            </div>
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
    cartItems: {},
    step: 2,
    title: "Shop"
};
