import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaBars,
  FaHouse,
  FaUser,
  FaFileCode,
  FaBriefcase,
  FaEnvelope,
  FaX,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaMedium,
} from 'react-icons/fa6';
import logo from '../../assets/logos/blue-LogoHeader1.png';
import subLogo from '../../assets/logos/white_name_logo.png';
import './navbar.scss';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav id='navigation'>
        <div id={showNav ? 'menu-logo' : 'logo'}>
          <Link id='nav-logo' to='/'>
            <img id='main-logo' src={logo} alt='logo' />
            <img id='sub-logo' src={subLogo} alt='name' />
          </Link>
        </div>

        <div id='hamburger-menu'>
          <FaBars onClick={() => setShowNav(true)} />
        </div>

        <div
          id='navigation-menu'
          className={`${
            mobile ? (showNav ? 'visible' : 'invisible') : 'visible'
          }`}
        >
          <div id='close-menu'>
            <FaX onClick={() => setShowNav(false)} />
          </div>

          <div id='nav-links'>
            <NavLink
              to='/'
              className='navlink'
              onClick={() => setShowNav(false)}
            >
              <span className='nav-label'>Home</span>
              <FaHouse className='nav-icon' />
            </NavLink>

            <NavLink
              to='about'
              className='navlink'
              onClick={() => setShowNav(false)}
            >
              <span className='nav-label'>About Me</span>
              <FaUser className='nav-icon' />
            </NavLink>

            <NavLink
              to='resume'
              className='navlink'
              onClick={() => setShowNav(false)}
            >
              <span className='nav-label'>Resumé</span>
              <FaFileCode className='nav-icon' />
            </NavLink>

            <NavLink
              to='portfolio'
              className='navlink'
              onClick={() => setShowNav(false)}
            >
              <span className='nav-label'>Projects</span>
              <FaBriefcase className='nav-icon' />
            </NavLink>

            <NavLink
              to='contact'
              className='navlink'
              onClick={() => setShowNav(false)}
            >
              <span className='nav-label'>Contact</span>
              <FaEnvelope className='nav-icon' />
            </NavLink>
          </div>

          <div id='social-links'>
            <div className='nav-soc-link-container'>
            <a
              target='_blank'
              rel='noreferer'
              href='https://linkedin.com/in/alfredmkg'
            >
                <span className='nav-soc-label'>LinkedIn</span>
                <FaLinkedinIn className='nav-soc-icon' />
            </a>
              </div>

              <div className='nav-soc-link-container'>
            <a
              target='_blank'
              rel='noreferer'
              href='https://github.com/badger-99'
            >
                <span className='nav-soc-label'>GitHub</span>
                <FaGithub className='nav-soc-icon' />
            </a>
              </div>

              <div className='nav-soc-link-container'>
            <a
              target='_blank'
              rel='noreferer'
              href='https://twitter.com/AlfredMkg'
            >
                <span className='nav-soc-label'>X/Twitter</span>
                <FaXTwitter className='nav-soc-icon' />
            </a>
              </div>

              <div className='nav-soc-link-container'>
            <a
              target='_blank'
              rel='noreferer'
              href='https://medium.com/@alfred.mkg'
            >
                <span className='nav-soc-label'>Medium</span>
                <FaMedium className='nav-soc-icon' />
            </a>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
