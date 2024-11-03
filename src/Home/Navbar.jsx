import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Home.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <ScrollLink to='main' className='logo' smooth={true} duration={2000}>
        Home
      </ScrollLink>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li>
          <ScrollLink to="Explore" smooth={true} duration={1000}>Explore</ScrollLink>
        </li>
        <li>
          <ScrollLink to="Contact" smooth={true} duration={1000}>Contact</ScrollLink>
        </li>
        <li>
          <ScrollLink to="FeaturesList" smooth={true} duration={1000}>Features</ScrollLink>
        </li>
        <li>
          <RouterLink to="/Login">Login</RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
