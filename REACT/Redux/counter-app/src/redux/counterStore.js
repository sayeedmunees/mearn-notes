import { configureStore } from "@reduxjs/toolkit";

// define logic to create redux store
const counterStore = configureStore({
  reducer: {},
});

export default counterStore;
