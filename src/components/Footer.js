import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Erika Sayuri Yamamoto</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/erikasyamamoto/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/esyamamoto" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:erika.s.yamamoto@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
