import React, { useState } from "react";
import Category from "../Tools/utils.ts"

export default function Slider() {
  const [items, setItems] = useState([
    {
      name: "Mouf Ita Bag",
      desc: "Ita bag with da mouf",
      price: 23.99,
      category: "Bag",
      imageUrl: "http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg",
      stock: 12,
    },
    {
      name: "Bean Ita Bag",
      desc: "Ita bag with da mouf",
      price: 25.99,
      category: "Bag",
      imageUrl: "http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg",
      stock: 12,
    },
    {
      name: "Spine Chill Sticker",
      desc: "Sticker of the Spine Chill perk from DBD",
      price: 9.99,
      category: "Sticker",
      imageUrl: "http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg",
      stock: 12,
    },
    {
      name: "Mouf Ita Bag",
      desc: "Ita bag with da mouf",
      price: 23.99,
      category: "Bag",
      imageUrl: "http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg",
      stock: 12,
    },
  ]);
  return <div></div>;
}
