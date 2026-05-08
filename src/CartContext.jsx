import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existing = state.cart.find(
        (item) => item.id === action.item.id
      );

      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.item.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.item, qty: 1 }],
      };

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.id
              ? { ...item, qty: item.qty - 1 }
              : item
          )
          .filter((item) => item.qty > 0),
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.id
        ),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);