import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exist: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      state.exist = true;
    },
    offsetUser: (state) => {
      state.exist = false;
    },
  },
});

export const { setUser, offsetUser } = userSlice.actions;
export default userSlice.reducer;
