import React, { useState, useMemo } from "react";
import ShopItem from "./ShopItem";
import axios from "axios";
import Loader from "../Misc/Loader";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

export default function InfiniteProductSlider({ handleAddToCart }) {
    const [items, setItems] = useState([]);

    useMemo(() => {
        axios
            .get("http://localhost:8080/products", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="shopfront">
            <div className="shop-header p-4 w-75 mx-auto">
                <h2 className="separator">
                    <span className="nested-separator">SHOP ALL</span>
                </h2>
                <div class="squiggle-holder-large">
                        <div class="ellipse-large"></div>
                        <div class="ellipse-large ellipse2-large"></div>
                    </div>
            </div>
            {items.length === 0 ? (
                <Loader />
            ) : (
                <div className="horizontal-slider">
                    <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        itemClassName="horizontal-slider-item"
                        scrollContainerClassName="horizontal-scroll-container"
                    >
                        {items?.map((item) => {
                            return (
                                <ShopItem
                                    key={item.id}
                                    product={item}
                                    handleAddToCart={handleAddToCart}
                                    addedPadding={true}
                                />
                            );
                        })}
                    </ScrollMenu>
                </div>
            )}
        </div>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <ArrowBack disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </ArrowBack>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } =
        React.useContext(VisibilityContext);

    return (
        <ArrowForward disabled={isLastItemVisible} onClick={() => scrollNext()}>
            Right
        </ArrowForward>
    );
}
