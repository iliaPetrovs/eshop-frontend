import React from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

export default function ItemInfo({handleAddToCart}) {
  const {
    state: { product },
  } = useLocation();
  const { id, name, desc, price, category, imageUrl, stock } = product;
  const reviews = null;
  return (
    <div className="row w-75 mx-auto mt-5">
      <div className="col p-0">
        <div className="item-page-carousel p-0 carousel">
          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
          >
            <div>
              <img
                className="carousel-item"
                alt={desc}
                src="https://stamistudios.com/wp-content/uploads/2021/11/F6B1BED0-FBE5-4471-BB19-B2F96647D0C2-450x450.jpeg"
              />
            </div>
            <div>
              <img
                className="carousel-item"
                alt={desc}
                src="https://stamistudios.com/wp-content/uploads/2021/11/F6B1BED0-FBE5-4471-BB19-B2F96647D0C2-450x450.jpeg"
              />
            </div>
            <div>
              <img
                className="carousel-item"
                alt={desc}
                src="https://stamistudios.com/wp-content/uploads/2021/11/F6B1BED0-FBE5-4471-BB19-B2F96647D0C2-450x450.jpeg"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="col">
        <div className="product-page text-center">
          <h2>{name}</h2>
          <h4>{price}</h4>
          <p>{desc}</p>
          {stock > 0 && <span>In stock</span>}
        </div>
        <div className="d-flex w-50 mx-auto mt-4 justify-content-around">
          <h4 className="my-auto" style={{size: '1.2em'}}>+1-</h4>
          <button style={{background: "lavender", color: "black"}} className="btn btn-secondary" onClick={handleAddToCart}>ADD TO BASKET</button>
      </div>
      </div>
      <div style={{height: '300px'}} className="row">
          <div className="col">
                <h3>
                    {`Reviews ${reviews ? reviews?.length : '(0)'}`}
                </h3>
          </div>
      </div>
    </div>
  );
}
