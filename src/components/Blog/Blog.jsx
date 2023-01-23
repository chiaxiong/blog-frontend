import React from 'react';

const Blog = (prop) => {
  return (
    <>
      <h3 className="blog-title">{prop.title}</h3>
      <p className="blog-author">{prop.author}</p>
      <p className="blog-content">{prop.content}</p>
    </>
  );
};

export default Blog;
