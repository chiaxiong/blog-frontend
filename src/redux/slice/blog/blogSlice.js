import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  blogs: [],
  status: 'idle',
  error: null,
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  return await axios
    .get('http://localhost:4000/api/blog')
    .then((res) => res.data);
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const { postAdded } = blogSlice.actions;

export default blogSlice.reducer;
