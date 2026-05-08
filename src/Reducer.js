export const initialState = {
  basket: [],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((_, i) => i !== action.index),
      };

    default:
      return state;
  }
};