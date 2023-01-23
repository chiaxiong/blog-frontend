import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const allBlogState = {
  blogs: [],
  status: 'idle',
  error: null,
};

/**
 * fetch all the blogs
 */
export const blogAPI = createAsyncThunk('blogs/blogAPI', async () => {
  return await axios
    .get('http://localhost:4000/api/blog')
    .then(({ data }) => data);
});

/**
 * post blog request
 */
export const postBlog = createAsyncThunk('blog/postBlog', async (postData) => {
  try {
    const { data } = await axios.post(
      'http://localhost:4000/api/blog',
      postData
    );
    return data;
  } catch (error) {
    console.error(error);
  }
});

const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: allBlogState,
  extraReducers: (builder) => {
    builder.addCase(blogAPI.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(blogAPI.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.error = '';
    });
    builder.addCase(blogAPI.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
    builder.addCase(postBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postBlog.fulfilled, (state, action) => {
      state.blogs.push(action.payload);
    });
  },
});

/** this is equivalent to
 * const allblogs = state = state.blog.blogs
 * blog is the slice in the root reducer
 * blogs comes from the initial state
 */
export const allBlogs = ({ blog }) => blog.blogs;

export default blogSlice.reducer;
