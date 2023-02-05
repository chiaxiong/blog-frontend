import styled from 'styled-components';

export default styled.div`
  // since the navbar is a layout style; the body is included here
  body {
    margin: 0;
    padding: 0;
  }

  display: flex;
  justify-content: center;
  gap: 100px;
  font-size: 10px;
  background-color: black;

  a {
    color: white;
  }

  h1 {
    font-weight: 100;
  }
`;
