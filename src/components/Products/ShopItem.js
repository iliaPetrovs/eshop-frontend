import React from "react";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";
import StockDisplayer from "../Misc/StockDisplayer";
import RoundedButton from "../RoundedButton/RoundedButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom } from "../../atoms/cart";
import { setStorage } from "../../utils/basketManager";

export default function ShopItem({ product, addedPadding }) {
    const tiltRef = React.useRef();
    const cart = useRecoilValue(cartAtom);
    const setCart = useSetRecoilState(cartAtom);

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

    const handleAddToCart = () => {
        setCart((prev) => {
            const cartItem = prev.find((item) => item.id === product.id);
            if (cartItem) {
                const newCart = [
                    ...prev.filter((item) => item.id !== product.id),
                    { ...product, amount: cartItem.amount + 1 },
                ];
                setStorage(newCart);
                return newCart;
            } else {
                const newCart = [
                    ...prev.filter((item) => item.id !== product.id),
                    { ...product, amount: 1 },
                ];
                setStorage(newCart);
                return newCart;
            }
        });
    };

    return (
        <div className="d-inline-flex flex-column align-items-center product-box mx-auto">
            <div className="product-image-container">
                <div className="product-image">
                    <Link
                        to={{
                            pathname: `/product/${product.id}`,
                            state: { product },
                        }}
                    >
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
                        {product.stock < 20 && (
                            <StockDisplayer stock={product.stock} />
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-2">
                <Link
                    to={{
                        pathname: `/product/${product.id}`,
                        state: { product },
                    }}
                >
                    {product.name}
                </Link>
            </div>
            <div className="my-2">
                <span>
                    {new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "GBP",
                    }).format(product.price)}
                </span>
            </div>
            {cart?.some((item) => item?.id === product?.id) ? (
                <RoundedButton handleAddToCart={handleAddToCart} />
            ) : (
                <RoundedButton handleAddToCart={handleAddToCart} />
            )}
        </div>
    );
}
