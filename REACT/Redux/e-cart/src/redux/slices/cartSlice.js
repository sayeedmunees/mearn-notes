import { createSlice } from "@reduxjs/toolkit";

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
    incrementQuantity: (state, actionFromCart) => {
      const existingProduct = state.find(
        (item) => item.id == actionFromCart.payload
      );
      existingProduct.quantity++;
      existingProduct.totalPrice =
        existingProduct.quantity * existingProduct.price;
      const remainingProducts = state.filter(
        (item) => item.id != existingProduct.id
      );
      state = [...remainingProducts, existingProduct];
    },

    decrementQuantity: (state, actionFromCart) => {
      const existingProduct = state.find(
        (item) => item.id == actionFromCart.payload
      );
      existingProduct.quantity--;
      existingProduct.totalPrice =
        existingProduct.quantity * existingProduct.price;
      const remainingProducts = state.filter(
        (item) => item.id != existingProduct.id
      );
      state = [...remainingProducts, existingProduct];
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
