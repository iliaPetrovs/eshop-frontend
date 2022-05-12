import React, { useEffect, useLayoutEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Misc/Loader";

export default function ItemInfo({ handleAddToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        axios
            .get(`http://localhost:8080/products/${id}`)
            .then((response) => {
                console.log(response.data.imageUrl);
                setProduct(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    // const { name, desc, price, category, imageUrl, stock } = product;
    const reviews = null;
    return (
        <div className="item-info-wrapper">
            {product ? (
                <div className="row w-75 mx-auto mt-5">
                    <div className="col p-0">
                        <div className="item-page-carousel p-0 carousel-shop">
                            <Carousel
                                infiniteLoop={true}
                                showStatus={false}
                                showIndicators={false}
                            >
                                <div>
                                    <img
                                        className="carousel-item-small"
                                        alt={product.description}
                                        src={product.imageUrl}
                                    />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-page text-center">
                            <h2>{product.name}</h2>
                            <h4>{product.price}</h4>
                            <p>{product.description}</p>
                            {product.stock > 0 && <span>In stock</span>}
                        </div>
                        <div className="d-flex w-50 mx-auto mt-4 justify-content-around">
                            <h4 className="my-auto" style={{ size: "1.2em" }}>
                                +1-
                            </h4>
                            <button
                                style={{
                                    background: "lavender",
                                    color: "black",
                                }}
                                className="btn btn-secondary"
                                onClick={handleAddToCart}
                            >
                                ADD TO BASKET
                            </button>
                        </div>
                    </div>
                    <div style={{ height: "300px" }} className="row">
                        <div className="col">
                            <h3>
                                {`Reviews ${reviews ? reviews?.length : "(0)"}`}
                            </h3>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}
