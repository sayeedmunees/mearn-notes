import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";

const cartStore = configureStore({
  reducer: {
    productReducer: productSlice,
  },
});
export default cartStore;
