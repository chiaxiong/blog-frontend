import NavBar from '../components/NavBar/NavBar';

function App({ Component, pageProps }) {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>
  );
}

export default App;
