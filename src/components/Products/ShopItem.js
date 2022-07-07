import React from "react";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";
import StockDisplayer from "../Misc/StockDisplayer";

export default function ShopItem({ product, handleAddToCart, addedPadding }) {
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
    <div className="d-inline-flex flex-column align-items-center product-box mx-auto mb-5">
      <div className="product-image">
        <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
          <img
            ref={tiltRef}
            className="shop-item-image"
            src={product.imageUrl}
            alt={product.description}
          ></img>
        </Link>
        <div className="product-overlay d-flex flex-column">
          <div className="my-auto p-1 category-display">
            <span>{product.category.toUpperCase()}</span>
          </div>
          {product.stock < 20 && <StockDisplayer stock={product.stock} />}
        </div>
      </div>

      <div className="mt-2">
        <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
          {product.name}
        </Link>
      </div>
      <div className="mt-1">
        <span>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(product.price)}
        </span>
      </div>
      <button
        className="btn-basket my-2"
        onClick={() => handleAddToCart(product)}
        disabled={product.stock === 0}
      >
        Add to cart
      </button>
    </div>
  );
}
