import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  exist: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload._id;
      state.name = action.payload.username;
      state.email = action.payload.email;
      state.exist = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
