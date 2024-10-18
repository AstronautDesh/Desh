import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons
import '../css/navmenu.css';

const NavMenu = () => (
  <nav className='navmenu'>
    <Link className="nav-link" to="/work">
      <FontAwesomeIcon icon={faBriefcase} className="icon" />
      <span>WORK</span>
    </Link>
    <Link className="nav-link" to="/about">
      <FontAwesomeIcon icon={faUser} className="icon" />
      <span>ABOUT</span>
    </Link>
    <Link className="nav-link" to="/contact">
      <FontAwesomeIcon icon={faEnvelope} className="icon" />
      <span>CONTACT</span>
    </Link>
  </nav>
);

export default NavMenu;
