/* eslint-disable multiline-ternary */
import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Misc/Loader'
import { toCurrency } from '../../utils/currency'
import items from '../../utils/mocks/items'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

export default function ItemInfo ({ productSlug: id }) {
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // axios
    //   .get(`http://localhost:8080/products/${id}`)
    //   .then((response) => {
    //     setProduct(response.data)
    //   })
    //   .catch((error) => console.log(error))
    setProduct(items.find((item) => item.id == id))
  }, [])

  const handleDecrease = () => {
    if (quantity === 1) return
    setQuantity(quantity - 1)
  }

  const handleQuantity = (event) => {
    const number = event.target.value
    if (number < 1) return
    setQuantity(number)
  }

  const onAddToCart = () => {
    const productToAdd = { ...product, amountPending: quantity }
    console.log(productToAdd)
    // handleAddToCart(productToAdd)
  }

  const reviews = null
  return (
    <div className="item-info-wrapper">
        <Breadcrumbs/>
      {product ? (
        <div className="product-info-container mx-auto mt-5">
          <div>
            <div className="hero-wrapper">
              <img
                className="hero-product-image"
                alt={product.description}
                src={product.imageUrl}
              />
            </div>
          </div>
          <div className="product-page-wrapper">
            <div className="product-page text-center">
              <h2>{product.name}</h2>
              <h4>{toCurrency(product.price)}</h4>
              {product.stock > 0 && <span>In stock</span>}
            </div>
            <div className="product-basket">
              {/* TODO: Add quantity adjuster */}
              <div className="quantity-box">
                <button className="decr" onClick={handleDecrease}>
                  <span className="button-inner">-</span>
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantity}
                  onFocus={(e) => e.target.select()}
                  min="1"
                  max="99"
                />
                <button
                  className="incr"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <span className="button-inner">+</span>
                </button>
              </div>
              <button className="btn-basket-info my-2" onClick={onAddToCart}>
                ADD TO BASKET
              </button>
            </div>
            <div className="product-description">
              <p>{product.description}</p>
            </div>
          </div>
          <div style={{ height: '300px' }} className="row">
            <div className="col">
              <h3>{`Reviews ${reviews ? reviews?.length : '(0)'}`}</h3>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}
