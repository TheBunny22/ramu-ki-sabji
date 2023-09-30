import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  username : "Bunny",
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = userSlice.actions;

export default userSlice.reducer;
