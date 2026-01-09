import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = productSlice.actions;

// Selector
export const selectSearchTerm = (state) => state.products.searchTerm;

export default productSlice.reducer;
