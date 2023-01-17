import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className="nav-bar">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/blog">
          <h1>My Blog</h1>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
