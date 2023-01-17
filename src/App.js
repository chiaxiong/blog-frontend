import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
