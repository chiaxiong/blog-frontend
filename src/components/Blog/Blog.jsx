import React from 'react';
import BlogStyle from './Styles/BlogStyle';

const Blog = (prop) => {
  return (
    <>
      <BlogStyle>
        <h3 className="blog-title">{prop.title}</h3>
        <p className="blog-author">{prop.author}</p>
        <p className="blog-content">{prop.content}</p>
      </BlogStyle>
    </>
  );
};

export default Blog;
