import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navmenu.css';

const NavMenu = () => (
  <nav className='navmenu'>
    <Link className="nav-link" to="/work">WORK</Link>
    <Link className="nav-link" to="/about">ABOUT</Link>
    <Link className="nav-link" to="/contact">CONTACT</Link>
  </nav>
);

export default NavMenu;
