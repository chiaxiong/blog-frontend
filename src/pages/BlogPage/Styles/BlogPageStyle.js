import styled from 'styled-components';

const BlogPageTitle = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 2em;
  width: 60%;
  margin: 0 auto 10vh;
`;

export { BlogPageTitle, BlogLayout };
