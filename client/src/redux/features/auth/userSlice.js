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
    setUser: (state, { payload: { _id, username, email } }) => {
      state.id = _id;
      state.name = username;
      state.email = email;
      state.exist = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
