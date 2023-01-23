import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postBlog } from '../../redux/slice/blogSlice/blogSlice';
import {
  BlogWrapper,
  BlogFormContainer,
  ButtonContainer,
  BackButton,
} from './Styles/BlogFormStyle';

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

  //TODO: create modal component for custom alert message
  const clearButton = () => {
    // if (title || content) {
    //   alert('Delete all progress?');
    // }
    setTitle('');
    setContent('');
  };

  return (
    <>
      <BackButton>
        <Link to="/blog/">{'<<< Back'}</Link>
      </BackButton>
      <BlogWrapper>
        <section>
          <BlogFormContainer>
            <label htmlFor="blogTitle">Blog Title: </label>
            <input
              type="text"
              id="blogTitle"
              name="blogTitle"
              value={title}
              onChange={handleTitle}
            />
            <label htmlFor="blogTitle">Content: </label>
            <section>
              <textarea
                type="text"
                id="blogContent"
                name="blogContent"
                value={content}
                onChange={handleContent}
              ></textarea>
            </section>
          </BlogFormContainer>
          <ButtonContainer>
            <button
              type="submit"
              form="blogForm"
              value="submit"
              onClick={addBlog}
            >
              Submit
            </button>
            <button type="button" value="clear" onClick={clearButton}>
              Clear
            </button>
          </ButtonContainer>
        </section>
      </BlogWrapper>
    </>
  );
};

export default BlogForm;
