import Link from 'next/link';
import React from 'react';
import { FooterContainer } from './Styles/FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/blog">
        <p>Blogs</p>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
