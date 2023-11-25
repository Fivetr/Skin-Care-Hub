import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exist: false,
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.exist = true;
      state.isAdmin = action.payload;
    },
    offsetUser: (state) => {
      state.exist = false;
      state.isAdmin = false;
    },
  },
});

export const { setUser, offsetUser } = userSlice.actions;
export default userSlice.reducer;
