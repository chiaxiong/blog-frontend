import React from 'react';
import BlogStyle from './Styles/BlogStyle';

const Blog = (prop) => {
  return (
    <>
      <BlogStyle>
        <h3 className="blog-title" >
          {prop.title}
        </h3>
        <p className="blog-author">Author: {prop.author}</p>
        <p className="blog-date">{prop.date}</p>
        <p className="blog-content">{prop.content}</p>
      </BlogStyle>
    </>
  );
};

export default Blog;
