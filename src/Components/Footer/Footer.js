import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa"; // Add the scroll-to-top icon
import "../Footer/footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>
      <div className="footer-content">
        <h2 className="name">Sandesh Patel</h2>
        <p className="designation">Front-End | MERN Stack | Developer</p>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/sandeshpatel1/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/sandeshpatel1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/patelsandesh23" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
        <div className="copy-right"> &copy; Sandesh Patel | All rights reserved |  {new Date().getFullYear()}</div>
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      </div>
      <div className='end'>
        
      </div>
    </footer>
  );
}

export default Footer;
