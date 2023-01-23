import styled from 'styled-components';

const BlogWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  height: 30px;
`;

const BackButton = styled.div`
  display: block;
  width: 60%;
  margin: 20px auto;

  a {
    color: teal;
  }
`;

const BlogFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  label,
  textarea,
  input {
    margin-bottom: 20px;
  }

  input,
  textarea {
    font-family: 'Times New Roman', Times, serif;
  }

  label {
    font-weight: bold;
  }

  input {
    height: 50px;
    font-size: 30px;
  }

  textarea {
    width: 100%;
    height: 500px;
    font-size: 18px;
  }
`;

export { BlogWrapper, BlogFormContainer, ButtonContainer, BackButton };
