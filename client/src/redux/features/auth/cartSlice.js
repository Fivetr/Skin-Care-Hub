import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemCount: (state, action) => {
      // console.log(action.payload)
      state.itemCount = action.payload.itemCount;
    },
  },
});

export const { setItemCount } = cartSlice.actions;
export default cartSlice.reducer;
