import React from "react";
import Loader from "../Misc/Loader";
import Header from "../Misc/Header";
import ShopItem from "../Products/ShopItem";

import styles from "./Slider.module.css";
import {
    HorizontalScrollContainer,
    HorizontalScrollItem,
} from "react-simple-horizontal-scroller";

export default function Slider() {
    const items = [
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
                                    style={{padding: '24px'}}
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
