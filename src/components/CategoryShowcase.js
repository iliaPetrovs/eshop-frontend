import React from "react";
import coyote from "../assets/images/coyoteSticker.webp";
import noface from "../assets/images/nofacePatch.webp";
import siamese from "../assets/images/siameseBadge.webp";
import { Link } from "react-router-dom";

export default function CategoryShowcase() {
  const categories = [
    { name: "Stickers", image: coyote },
    { name: "Patches", image: noface },
    { name: "Pins", image: siamese },
  ];
  return (
    <div className="category-wrapper pb-1">
      {categories.map((cat) => (
        <Link to={`/shop/${cat.name.toLowerCase()}`}>
          <div className="category-container" key={cat.name}>
            <img className="category-image" src={cat.image} />
            <div className="category-name-container">
              <h3 className="category-name">{cat.name}</h3>
              <div class="squiggle-holder">
                <div class="ellipse"></div>
                <div class="ellipse ellipse2"></div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
