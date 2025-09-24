import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// define logic to create redux store
const counterStore = configureStore({
  reducer: {
    counterReducer: counterSlice,
  },
});

export default counterStore;
