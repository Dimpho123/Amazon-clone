import React from "react";
import { useCart } from "../CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { state, dispatch } = useCart();

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="checkout">

      {/* LEFT SIDE */}
      <div className="checkout_left">
        <h2>Shopping Cart</h2>

        {state.cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          state.cart.map((item) => (
  <div className="checkout_item" key={item.id}>
    <img src={item.image} alt={item.title} />

    <div className="checkout_info">

      <p>{item.title}</p>

      <p className="price">
        $ {item.price}
      </p>

      {/* DELIVERY */}
      <p className="delivery">
        FREE delivery Monday, May 11
      </p>

      {/* QUANTITY CONTROLS */}
      <div className="quantity_controls">

        <button
          onClick={() =>
            dispatch({
              type: "DECREASE",
              id: item.id,
            })
          }
        >
          -
        </button>

        <span>{item.qty}</span>

        <button
          onClick={() =>
            dispatch({
              type: "INCREASE",
              id: item.id,
            })
          }
        >
          +
        </button>

      </div>

      {/* REMOVE */}
      <button
        className="delete_btn"
        onClick={() =>
          dispatch({
            type: "REMOVE",
            id: item.id,
          })
        }
      >
        Delete
      </button>

    </div>
  </div>
)
))}

      </div>

      {/* RIGHT SIDE */}
      <div className="checkout_right">
        <h3>
          Subtotal ({state.cart.length} items):{" "}
          <strong>$ {total.toFixed(2)}</strong>
        </h3>

        <button className="checkout_btn">
          Proceed to checkout
        </button>
      </div>

    </div>
  );
};

export default Checkout;