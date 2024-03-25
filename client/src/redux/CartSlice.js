import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartLength: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartLength = action.payload;
    },
    removeFromCart: (state, action) => {
      state.cartLength = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cart.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       state.cart = state.cart.filter(
//         (item) => item.productId !== action.payload.productId
//       );
//     },
//   },
// });

// export default CartSlice.reducer;
// export const { addToCart,removeFromCart } = CartSlice.actions;
