import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        {/* TODO: Replace with your actual social media links and icons */}
        <a href="https://github.com/ranjansingha99" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ranjan-kumar-singha/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://x.com/imranjansingha" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com/imranjansingha/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.instagram.com/imranjansingha/" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Ranjan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;