import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import HomePage from './pages/HomePage/HomePage';
import BlogPage from './pages/BlogPage/BlogPage';
import GlobalStyle from './GlobalStyle.js';
import BlogForm from './components/BlogForm/BlogForm.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/add-form" element={<BlogForm />} />
      </Routes>
    </>
  );
}

export default App;
