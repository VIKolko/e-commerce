import {createSlice} from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: "products",
    initialState: {
      products: null,
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
        state.error = false;
      },
      productFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },

    },
  });

export const {productStart,productSuccess,productFailure} = productSlice.actions;
export default productSlice.reducer;