import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, image, rating, Description }) => {
  return (
    <Link to={`/products/${id}`} className="product_link">
      <div className="product">
        <img src={image} alt={title} />

        <div className="product_info">
          <p>{title}</p>

          <div className="product_rating">
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;