import React from 'react';
import { Link } from 'react-router-dom';
import NavBarStyle from './Styles/NavBarStyle';

const NavBar = () => {
  return (
    <header>
      <NavBarStyle>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/blog">
          <h1>Blogs</h1>
        </Link>
      </NavBarStyle>
    </header>
  );
};

export default NavBar;
