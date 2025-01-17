import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h2>Embrace the Wild</h2>
        <p>Connect with the animal kingdom and protect wildlife for future generations.</p>
        <div className="footer__social">
          <a href="#" aria-label="Facebook">🦁</a>
          <a href="#" aria-label="Instagram">🦉</a>
          <a href="#" aria-label="Twitter">🐘</a>
          <a href="#" aria-label="LinkedIn">🐬</a>
        </div>
      </div>
     
      <div className="footer__wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#557a95"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,170.7C672,192,768,224,864,234.7C960,245,1056,235,1152,197.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
