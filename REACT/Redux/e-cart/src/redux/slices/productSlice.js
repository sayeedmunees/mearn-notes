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
  reducers: {
    searchproduct: (state, actionbyHeader) => {
      state.allProducts = state.allProducts.filter((item) =>
        item.title.toLowerCase().includes(actionbyHeader.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.fulfilled, (state, apiResult) => {
      state.allProducts = apiResult.payload;
      state.loading = false;
      state.errMsg = "";
    });
    builder.addCase(fetchproducts.pending, (state) => {
      state.allProducts = [];
      state.loading = true;
      state.errMsg = "";
    });
    builder.addCase(fetchproducts.rejected, (state) => {
      state.allProducts = [];
      state.loading = false;
      state.errMsg = "API call failed....";
    });
  },
});

export const { searchproduct } = productSlice.actions;
export default productSlice.reducer;
