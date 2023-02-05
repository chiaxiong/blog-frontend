import Footer from '../Footer';
import NavBar from '../NavBar/NavBar';
import GlobalStyle from '../../GlobalStyle';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
