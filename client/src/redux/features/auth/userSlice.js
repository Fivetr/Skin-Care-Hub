import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exist: false,
  isAdmain: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.exist = true;
      state.isAdmain = action.payload;
    },
    offsetUser: (state) => {
      state.exist = false;
      state.isAdmain = false;
    },
  },
});

export const { setUser, offsetUser } = userSlice.actions;
export default userSlice.reducer;
