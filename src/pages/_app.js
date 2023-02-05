import { Provider } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import store from '../redux/store';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </Provider>
  );
}

export default App;
