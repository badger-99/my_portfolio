import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaBars,
  FaX,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaMedium,
} from 'react-icons/fa6';
import './navbar.scss';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className={showNav ? '' : 'invisible'}>
        <div className='close-menu'>
          <FaX onClick={() => setShowNav(false)} />
        </div>

        <div id='logo'>
          <h1>
            <Link to='/' onClick={() => setShowNav(false)}>
              {'<A/FRED>'} 
            </Link>
          </h1>
        </div>

        <div id='nav-links'>
          <NavLink to='/' className='navlink' onClick={() => setShowNav(false)}>
            Home
          </NavLink>

          <NavLink
            to='about'
            className='navlink'
            onClick={() => setShowNav(false)}
          >
            About
          </NavLink>

          <NavLink
            to='portfolio'
            className='navlink'
            onClick={() => setShowNav(false)}
          >
            Portfolio
          </NavLink>

          <NavLink
            to='contact'
            className='navlink'
            onClick={() => setShowNav(false)}
          >
            Contact
          </NavLink>
        </div>

        <div id='social-links'>
          <a
            target='_blank'
            rel='noreferer'
            href='https://linkedin.com/in/alfredmkg'
          >
            <FaLinkedinIn />
          </a>

          <a
            target='_blank'
            rel='noreferer'
            href='https://github.com/badger-99'
          >
            <FaGithub />
          </a>

          <a
            target='_blank'
            rel='noreferer'
            href='https://twitter.com/AlfredMkg'
          >
            <FaXTwitter />
          </a>

          <a
            target='_blank'
            rel='noreferer'
            href='https://medium.com/@alfred.mkg'
          >
            <FaMedium />
          </a>
        </div>
      </nav>

      <div className={showNav ? 'invisible' : 'open-menu'}>
        <FaBars onClick={() => setShowNav(true)} />
      </div>
    </>
  );
};
export default Navbar;
