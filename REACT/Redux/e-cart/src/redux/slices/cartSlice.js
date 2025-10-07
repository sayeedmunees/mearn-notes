import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart: (state, actionFromComponent) => {
      state.push(actionFromComponent.payload);
    },
  },
});
export const { addToCart } = wishlistSlice.actions;
export default cartSlice.reducer;
