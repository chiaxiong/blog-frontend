import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { blogAPI, allBlogs } from '../../redux/slice/blogSlice/blogSlice';
import Blog from '../../components/Blog/Blog';
import { BlogPageTitle, BlogLayout } from './Styles/BlogPageStyle';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogs = useSelector(allBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogAPI());
  }, [dispatch]);

  const openBlog = () => {
    console.log('clicking');
  };

  const renderBlog = blogs.map((blog) => (
    <div className="blog-container" key={blog._id} onClick={openBlog}>
      <Blog {...blog} />
    </div>
  ));

  return (
    <BlogPageTitle>
      <h1>My Blogs</h1>
      <Link to="/blog/add-form">Add Blog</Link>
      <BlogLayout>{renderBlog}</BlogLayout>
    </BlogPageTitle>
  );
};

export default BlogPage;
