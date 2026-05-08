import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";


const products = [
  {
    id: 1,
    title: "Gaming Headset",
    price: 99.99,
    images: [
      "/assets/gaming.jpg",
      "/assets/gaming1.jpg",
      "/assets/gaming2.jpg",
      "/assets/gaming3.jpg",
      "/assets/gaming4.jpg",
      "/assets/gaming5.jpg"
    ],
  },

  {
    id: 2,
    title: "Kitchen Pots",
    price: 49.99,
    images: [
      "/assets/pots.jpg",
      "/assets/pots1.jpg",
      "/assets/airfryer.jpg",
      "/assets/kettles.jpg",
    ],
  },
];

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
  <div className="productDetails">

    <div className="productDetails_images">
      {product.images.map((img, index) => (
        <img key={index} src={img} alt={product.title} />
      ))}
    </div>

    <div className="productDetails_info">
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <h3>$product.description{}</h3>
    </div>

  </div>
);
};

export default ProductDetails;