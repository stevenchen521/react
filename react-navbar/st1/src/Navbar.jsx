import React from 'react';
import { Link } from 'react-router-dom';
import Pricing from './pages/Pricing';
import About from './pages/About';

const Navbar = () => {
  return (
    <nav className='nav'>
      <a className='site-title' href='/'>
        Site Name
      </a>
      <ul>
        <li className='active'>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
