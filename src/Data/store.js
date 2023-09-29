import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UI/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
