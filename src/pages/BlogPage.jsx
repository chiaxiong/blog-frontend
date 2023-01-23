import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { blogAPI, allBlogs } from '../redux/slice/blogSlice/blogSlice';
import Blog from '../components/Blog/Blog';
import BlogForm from '../components/BlogForm/BlogForm';

const BlogPage = () => {
  const blogs = useSelector(allBlogs);
  const dispatch = useDispatch();

  console.log(blogs);

  useEffect(() => {
    dispatch(blogAPI());
  }, [dispatch]);

  const renderBlog = blogs.map((blog) => (
    <div className="blog-container key={blog.id}">
      <Blog {...blog} />
    </div>
  ));

  return (
    <div>
      <h1>BlogPage</h1>
      {renderBlog}
      <BlogForm />
    </div>
  );
};

export default BlogPage;
