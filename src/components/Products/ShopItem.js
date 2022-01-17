import React from "react";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import { Button } from "react-bootstrap";
import { CartItemType } from "../../App";

export default function ShopItem({ data, handleAddToCart }) {
  const tiltRef = React.useRef();

  React.useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div className="d-inline-flex flex-column align-items-center product-box mx-auto">
      {/* <div> */}
      <div>
        <img
          ref={tiltRef}
          className="shop-item-image"
          src={data.imageUrl}
          alt={data.description}
        ></img>
      </div>
      <div className="mt-2 category-display">
        <span>{data.category.toUpperCase()}</span>
      </div>
      <div className="mt-2">
        <Link to={{ pathname: `product/${data.id}`, state: { data } }}>
          {data.name}
        </Link>
      </div>
      <div className="mt-1">
        <span>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(data.price)}
        </span>
      </div>
      {data.stock < 20 && data.stock > 0 && (
        <div className="stock-display">
          <span style={{ color: "brown", fontSize: "0.8em", opacity: "0.5" }}>
            Low stock
          </span>
        </div>
      )}
      {data.stock === 0 && (
        <div className="stock-display">
          <span style={{ color: "red", fontSize: "0.8em", opacity: "0.5" }}>
            No stock
          </span>
        </div>
      )}
      <button className="btn-basket my-2" onClick={() => handleAddToCart(data)}>
        Add to cart
      </button>
    </div>
  );
}
