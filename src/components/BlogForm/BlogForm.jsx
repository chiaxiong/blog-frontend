import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBlog } from '../../redux/slice/blogSlice/blogSlice';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const author = 'Chia Y Xiong';

  const addBlog = () => {
    if (title && content) {
      dispatch(
        postBlog({
          title,
          content,
          author,
        })
      );
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <section>
        <form className="blogForm">
          <label htmlFor="blogTitle">Blog Title: </label>
          <input
            type="text"
            id="blogTitle"
            name="blogTitle"
            value={title}
            onChange={handleTitle}
          />
          <label htmlFor="blogTitle">Content: </label>
          <input
            type="text"
            id="blogContent"
            name="blogContent"
            value={content}
            onChange={handleContent}
          />
        </form>
        <input type="submit" form="blogForm" value="submit" onClick={addBlog} />
      </section>
    </div>
  );
};

export default BlogForm;
