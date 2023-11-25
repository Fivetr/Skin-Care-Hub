import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  exist: false,
  isAdmain: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log(action.payload)
      state.user = action.payload.user;
      state.exist = true;
      state.isAdmain = action.payload.isAdmin;
    },
    offsetUser: (state) => {
      state.user = {};
      state.exist = false;
      state.isAdmain = false;
    },
  },
});

export const { setUser, offsetUser } = userSlice.actions;
export default userSlice.reducer;
