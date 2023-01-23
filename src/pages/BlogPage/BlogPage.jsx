import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { blogAPI, allBlogs } from '../../redux/slice/blogSlice/blogSlice';
import Blog from '../../components/Blog/Blog';
import BlogForm from '../../components/BlogForm/BlogForm';
import BlogPageStyle from './Styles/BlogPageStyle';

const BlogPage = () => {
  const blogs = useSelector(allBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogAPI());
  }, [dispatch]);

  const renderBlog = blogs.map((blog) => (
    <div className="blog-container" key={blog.id}>
      <Blog {...blog} />
    </div>
  ));

  return (
    <div>
      <h1>My Blogs</h1>
      <BlogPageStyle>{renderBlog}</BlogPageStyle>
      <BlogForm />
    </div>
  );
};

export default BlogPage;
