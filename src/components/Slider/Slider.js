import React from "react";
import Loader from "../Misc/Loader";
import Header from "../Misc/Header";
import ShopItem from "../Products/ShopItem";

import styles from "./Slider.module.css";
import {
    HorizontalScrollContainer,
    HorizontalScrollItem,
} from "react-simple-horizontal-scroller";

export default function Slider({ items }) {
    console.log("length is " + JSON.stringify(items))
    return (
        <div className="section">
            <Header title="Shop all" />
            {items.length === 0 ? (
                <Loader />
            ) : (
                <div className={styles.sliderContainer}>
                    <HorizontalScrollContainer>
                        {items?.map((item, index) => {
                            return (
                                <HorizontalScrollItem
                                    key={item.id}
                                    id={index + 1}
                                    style={{ padding: "24px" }}
                                >
                                    <ShopItem product={item} />
                                </HorizontalScrollItem>
                            );
                        })}
                    </HorizontalScrollContainer>
                </div>
            )}
        </div>
    );
}
