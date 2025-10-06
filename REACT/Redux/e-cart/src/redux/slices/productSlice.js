import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action return promise
export const fetchproducts = createAsyncThunk(
  "products/fetchproducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
    // console.log(result.data.products);
    sessionStorage.setItem("allProducts", JSON.stringify(result.data.products));
    return result.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    loading: false,
    errMsg: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.fulfilled, (state, apiResult) => {
      state.allProducts = apiResult.payload;
      state.loading = false;
      state.errorMsg = "";
    });
    builder.addCase(fetchproducts.pending, (state) => {
      state.allProducts = [];
      state.loading = true;
      state.errorMsg = "";
    });
    builder.addCase(fetchproducts.rejected, (state) => {
      state.allProducts = [];
      state.loading = false;
      state.errorMsg = "API call failed....";
    });
  },
});

export default productSlice.reducer;
