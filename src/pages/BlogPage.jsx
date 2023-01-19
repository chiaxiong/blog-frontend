import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs, allBlogs } from '../redux/slice/blogSlice/blogSlice';
import Blog from '../components/Blog/Blog';

const BlogPage = () => {
  const blogs = useSelector(allBlogs);
  const dispatch = useDispatch();

  console.log(blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const renderBlog = blogs.map((blog) => <Blog key={blog.id} {...blog} />);

  return (
    <div>
      <h1>BlogPage</h1>
      {renderBlog}
    </div>
  );
};

export default BlogPage;
