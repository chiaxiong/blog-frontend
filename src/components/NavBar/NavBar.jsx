import React from 'react';
import NavBarStyle from './Styles/NavBarStyle';
import Link from 'next/link';

const NavBar = (props) => {
  return (
    <>
      <header>
        <NavBarStyle>
          <Link href="/">
            <h1>Home</h1>
          </Link>
          <Link href="/blog">
            <h1>Blogs</h1>
          </Link>
        </NavBarStyle>
      </header>
      {props.children}
    </>
  );
};

export default NavBar;
