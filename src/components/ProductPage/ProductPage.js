import React, { useState } from "react";
import Quantity from "../Misc/Quantity";
import Squiggle from "../Misc/Squiggle";
import items from "../../utils/mocks/items";

import styles from "./ProductPage.module.css";
import RoundedButton from "../RoundedButton/RoundedButton";
import ShowMore from "../ShowMore/ShowMore";
import {
    HorizontalScrollContainer,
    HorizontalScrollItem,
} from "react-simple-horizontal-scroller";

export default function ProductPage({ item }) {
    const [mainImage, setMainImage] = useState(item.imageUrl);

    // To fetch from db from image table, request with item id, receive all images.
    const images = [
        "https://i.etsystatic.com/22179317/r/il/1b921d/4233398237/il_340x270.4233398237_mpb3.jpg",
        "https://i.etsystatic.com/22179317/r/il/8d54a9/4097555075/il_340x270.4097555075_dr8w.jpg",
        "https://i.etsystatic.com/22179317/r/il/ad623a/3186732097/il_340x270.3186732097_483i.jpg",
        "https://i.etsystatic.com/22179317/r/il/8d54a9/4097555075/il_340x270.4097555075_dr8w.jpg",
        "https://i.etsystatic.com/22179317/r/il/ad623a/3186732097/il_340x270.3186732097_483i.jpg",
    ];
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className={styles.imageContainer}>
                        <img
                            src={mainImage}
                            alt={item.description}
                            className={styles.shopImage}
                        />
                        <div className={styles.subImages}>
                            <HorizontalScrollContainer>
                                {images.map((image, index) => {
                                    return (
                                        <HorizontalScrollItem
                                            key={item.id}
                                            id={index + 1}
                                            style={{ padding: "4px" }}
                                        >
                                            <img onClick={() =>  setMainImage(image)} src={image} alt="" />
                                        </HorizontalScrollItem>
                                    );
                                })}
                            </HorizontalScrollContainer>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className={styles.headerContainer}>
                        <h1>Item name</h1>
                        <p>$1.21</p>
                        <Squiggle />
                    </div>
                    <div className={styles.basketContainer}>
                        <div>
                            <Quantity />
                        </div>
                        <div className={styles.button}>
                            <RoundedButton />
                        </div>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <p>
                            Here is the description heheHere is the description
                            heheHere is the description heheHere is the
                            description hehe
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <ShowMore title="More" cartItems={items} showMore={false} />
            </div>
        </div>
    );
}
