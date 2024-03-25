// cartReducer.js

const initialState = {
  // Other cart-related state...
  cartLength: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CART_LENGTH":
      return {
        ...state,
        cartLength: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
