import classNames from "classnames";
import React, { useState } from "react";
import Header from "../Misc/Header";

import styles from "./ShowMore.module.css";
import ShowMoreLine from "./ShowMoreLine";

export default function ShowMore({ cartItems, step, title, showMore }) {
    const [linesToDisplay, setLinesToDisplay] = useState(1);

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

    // Lazy load items with api call when scrolled over.
    // Load range of IDs on show more same way.

    return (
        <div className={classNames("section", styles.section)}>
            <Header title={title} />
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
    title: "Shop",
    showMore: true
};
