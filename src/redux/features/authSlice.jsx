import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.auth = action.payload;
    },
    setLogout: (state) => {
      state.auth = null;
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
