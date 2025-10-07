import { createSlice } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlistSlice";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart: (state, actionFromComponent) => {
      const existingProduct = state.find(
        (item) => item.id == actionFromComponent.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
        const remainingProducts = state.filter(
          (item) => item.id != existingProduct.id
        );
        state = [...remainingProducts, existingProduct];
      } else {
        state.push({
          ...actionFromComponent.payload,
          quantity: 1,
          totalPrice: actionFromComponent.payload.price,
        });
      }
    },
  },
});
export const { addToCart } = wishlistSlice.actions;
export default cartSlice.reducer;
