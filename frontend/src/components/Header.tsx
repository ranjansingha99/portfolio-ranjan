import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import type { Section } from '../App';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const navItems: Section[] = ['home', 'about', 'projects', 'contact'];

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="logo" className="logo" />
        <span className="name">Ranjan</span>
      </div>
      <nav className="navbar">
        <ul>
          {navItems.map((item) => (
            <li
              key={item}
              className={activeSection === item ? 'active' : ''}
              onClick={() => setActiveSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-right">
        <a href="https://drive.google.com/drive/u/4/folders/1emJAAwI5rT3-6ND4QE9qaKZavlp3pne8" className="resume-button" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
