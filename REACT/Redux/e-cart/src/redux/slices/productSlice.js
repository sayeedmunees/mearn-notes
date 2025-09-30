import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action return promise
export const fetchproducts = createAsyncThunk(
  "products/fetchproducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
    console.log(result.data.products);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {},
});
