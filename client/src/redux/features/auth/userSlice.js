import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // id: "",
  // name: "",
  // email: "",
  exist: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      // state.id = _id;
      // state.name = username;
      // state.email = email;
      state.exist = true;
    },
    offsetUser: (state) => {
      state.exist = false;
    },
  },
});

export const { setUser, offsetUser } = userSlice.actions;
export default userSlice.reducer;
