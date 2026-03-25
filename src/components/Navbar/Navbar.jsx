import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../../public/assets/logo.svg";
import { Link } from 'react-router-dom';
import profileIcon from "../../../public/assets/person.svg";
import searchIcon from "../../../public/assets/search.svg";

const ChevronIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-arrow">
    <path d="M1 1L5 5L9 1" stroke="#7D0B15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L23 17M23 3L3 17" stroke="#545454" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5H25M1 10H25M1 18.5H25" stroke="#545454" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 1144;
      setIsMobile(mobileView);
      if (!mobileView) setIsMenuOpen(false); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <nav className="navbar-container mobile-padding">
        <div className="navbar-left no-gap">
          <button 
            className="mobile-menu-btn" 
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
          <div className="mobile-actions">
            <button className="icon-button" aria-label="Search"><img src={searchIcon} alt="" /></button>
            <button className="icon-button" aria-label="User Profile"><img src={profileIcon} alt="" /></button>
          </div>
        </div>

        <div className="navbar-center">
          <Link to="/">
        <img src={logo} alt="Aditya Birla Centre For Performing Arts" className="navbar-logo" />
        </Link>
        </div>

        <div className="navbar-right">
          <button className="nav-btn-book mobile-btn-book">BOOK NOW</button>
        </div>
        {isMenuOpen && (
          <div className="mobile-dropdown">
            <Link to="/" className="nav-link mobile-link" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/about" className="nav-link mobile-link" onClick={() => setIsMenuOpen(false)}>ABOUT <ChevronIcon /></Link>
            <Link to="#legacy" className="nav-link mobile-link" onClick={() => setIsMenuOpen(false)}>LEGACY <ChevronIcon /></Link>
            <Link to="#initiatives" className="nav-link mobile-link" onClick={() => setIsMenuOpen(false)}>INITIATIVES <ChevronIcon /></Link>
            <Link to="#spaces" className="nav-link mobile-link" onClick={() => setIsMenuOpen(false)}>SPACES <ChevronIcon /></Link>
            <Link to="#pulse-page" className="nav-link mobile-link" onClick={() => setIsMenuOpen(false)}>PULSE & PAGE <ChevronIcon /></Link>
            <Link to="#hello" className="nav-link mobile-link" onClick={() => setIsMenuOpen(false)}>HELLO</Link>
          </div>
        )}
      </nav>
    );
  }
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/about" className="nav-link">ABOUT <ChevronIcon /></Link>
        <Link to="#legacy" className="nav-link">LEGACY <ChevronIcon /></Link>
        <Link to="#initiatives" className="nav-link">INITIATIVES <ChevronIcon /></Link>
        <Link to="#spaces" className="nav-link">SPACES <ChevronIcon /></Link>
      </div>

      <div className="navbar-center">
        <Link to="/">
        <img src={logo} alt="Aditya Birla Centre For Performing Arts" className="navbar-logo" />
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="#pulse-page" className="nav-link">PULSE & PAGE <ChevronIcon /></Link>
        <Link to="#hello" className="nav-link">HELLO</Link>
        <button className="nav-btn-book">BOOK NOW</button>
        
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search"><img src={searchIcon} alt="" /></button>
          <Link to="/signup"><button className="icon-button" aria-label="User Profile"><img src={profileIcon} alt="" /></button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;