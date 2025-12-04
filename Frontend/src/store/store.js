import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../slices/blogs";

export const myStore = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});
