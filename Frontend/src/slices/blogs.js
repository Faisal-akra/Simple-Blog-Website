import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk(
  "blogs/getAllBlogs",

  async () => {
    const response = await axios.get(
      "http://localhost:9000/api/blog/getAllBelogs"
    );
    return response.data;
  }
);

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
    message: "",
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });

    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload.bel;
    });
  },
});

export default blogsSlice.reducer;
