import React from 'react';
import './Header.css';

function Header({ setContent }) {
  return (
    <header className="header">
      <h1 className="logo">Company name</h1>
      <nav>
        <ul className="nav-links">
          <li onClick={() => setContent('Home')}>Home</li>
          <li onClick={() => setContent('Features')}>Features</li>
          <li onClick={() => setContent('Enterprise')}>Enterprise</li>
          <li onClick={() => setContent('Support')}>Support</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
