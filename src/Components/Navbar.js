import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import resume from '../Assets/Resume.pdf';
import './Navbar.css';
import {LayoutGrid, Home, Laptop, UserRound, Mail,FileCode2 } from  "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar-logo" onClick={scrollToTop}>
        <a href='/' className='nav-logo'>
        <span>S</span>
            ANDESH
        </a>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="navbar-menu-bar">
        <LayoutGrid size={24} color='white'/>
        </div>
       
      </div>
      <ul className={`navbar-items ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            <div className='nav-icon'>
            <Home size={20}/>
            </div>
            Home
          </ScrollLink>
        </li>
        <li className="navbar-item">
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            <div className='nav-icon'>
            <Laptop size={20} />
            </div>
            Projects
          </ScrollLink>
        </li>
        <li className="navbar-item">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          > <div className='nav-icon'>
            <UserRound size={20} />
          </div>
            About
          </ScrollLink>
        </li>
        {/* <li className="navbar-item">
          <ScrollLink
            to="qualification"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Qualification
          </ScrollLink>
        </li> */}
        <li className="navbar-item">
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            <div className='nav-icon'>
            <FileCode2  size={20}/>
            </div>
            Skills
          </ScrollLink>
        </li>
        <li className="navbar-item">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            <div className='nav-icon'>
            <Mail size={20}/>
            </div>
            Contact
          </ScrollLink>
        </li>
      </ul>
      <a href={resume} target="_blank" rel="noopener noreferrer" className="navbar-resume-button">
        Resume
      </a>
      {isMenuOpen && (
        <div className="navbar-close-button" onClick={toggleMenu}></div>
      )}
    </nav>
  );
}

export default Navbar;
