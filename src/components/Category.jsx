import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "./Data";
import { useCart } from "../CartContext";
import "./Category.css";
import StarIcon from "@mui/icons-material/Star";

const Category = () => {
  const { name } = useParams();
  const { dispatch } = useCart();

  const category = Data[name];

  if (!category) return <h1>Category not found</h1>;

  return (
    <div>
      <h1>{category.title}</h1>

      <div className="products_grid">
        {category.products.map((product) => (
          <div key={product.id} className="product_card">
            

            {/* Product Image (still clickable if you want) */}
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>

            <h3>{product.title}</h3>
            <div className="product_rating">
    {[...Array(product.rating)].map((_, index) => (
      <StarIcon key={index} 
      />
    ))}
  </div>
            <p>${product.price}</p>
            <p className="product_description">
  {product.description}
</p>

            {/* ADD TO CART BUTTON */}
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  item: product,
                })
              }
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;