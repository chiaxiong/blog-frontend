import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Open-sasn, Helvaetica, Sans-Serif;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  overflow-y: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

a {
  text-decoration: none;
  color: teal;
}
`;

export default GlobalStyle;
