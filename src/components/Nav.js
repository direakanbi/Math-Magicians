import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => (
  <header>
    <Link to="/" className="logo">Math Magicians</Link>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quotes">Quote</Link>
    </nav>
  </header>
);

export default Nav;
