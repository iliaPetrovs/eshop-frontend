import React from 'react'
import CategoryHeader from '../Misc/CategoryHeader'
import ShopItem from '../Products/ShopItem'

export default function Category ({ items }) {
  return (
    <div className="category-page-wrapper">
      <CategoryHeader
        categoryName="Stickers"
        resultQty={items.length}
        options={['Sort by...']}
      />
      {items.length > 0
        ? (
        <div className="slider-container w-75 mx-auto">
          {items &&
            items.map((item) => (
              <ShopItem
                key={item.id}
                product={item}
                handleAddToCart={() => {}}
              />
            ))}
        </div>
          )
        : (
        <div className="no-stock-label d-flex flex-column align-items-center">
          <h3>Sorry, there&rsquo;s nothing here!</h3>
          <p>Come back later when we have more stock.</p>
        </div>
          )}
    </div>
  )
}
