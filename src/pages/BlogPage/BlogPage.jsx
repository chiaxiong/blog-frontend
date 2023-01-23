import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { blogAPI, allBlogs } from '../../redux/slice/blogSlice/blogSlice';
import Blog from '../../components/Blog/Blog';
import BlogPageStyle from './Styles/BlogPageStyle';
import { Link } from 'react-router-dom';

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
      <Link to="/blog/add-form">Add Blog</Link>
      <BlogPageStyle>{renderBlog}</BlogPageStyle>
    </div>
  );
};

export default BlogPage;
