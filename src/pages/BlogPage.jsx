import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBlogs } from '../redux/slice/blog/blogSlice';

const BlogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div>
      <h1>BlogPage</h1>
    </div>
  );
};

export default BlogPage;
