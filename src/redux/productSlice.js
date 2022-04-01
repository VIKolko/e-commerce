import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    colors: [],
    sizes: [],
    categories: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    productStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    productSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
      state.colors = [
        ...new Set(action.payload.map((item) => item.color).flat()),
      ];
      state.sizes = [
        ...new Set(
          action.payload
            .map((item) => item.size)
            .flat()
            .sort((a, b) => a.toLowerCase() > b.toLowerCase())
        ),
      ];
      state.categories = [
        ...new Set(action.payload.map((item) => item.categories).flat()),
      ];

      state.error = false;
    },
    productFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { productStart, productSuccess, productFailure } =
  productSlice.actions;
export default productSlice.reducer;
