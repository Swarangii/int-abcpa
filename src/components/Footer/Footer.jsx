import React from 'react';
import './Footer.css';
import logo from "../../../public/assets/logo.svg";
import location from "../../../public/assets/location_on.svg";
import phone from "../../../public/assets/call.svg";
import mail from "../../../public/assets/mark_email_unread.svg";
import facebook from "../../../public/assets/Facebook.svg";
import instagram from "../../../public/assets/Instagram.svg";
import youtube from "../../../public/assets/Youtube.svg";
import linkedin from "../../../public/assets/Linkedin.svg";
import twitter from "../../../public/assets/XTwitter.svg";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        
        <div className="footer-col footer-logo-col">
          <img src={logo} alt="Aditya Birla Centre For Performing Arts" className="footer-logo" />
        </div>

        <div className="footer-col footer-contact-col">
          <ul className="contact-list">
            <li>
              <span className="contact-icon"><img src={location} alt="" /></span>
              <p>INT Aditya Birla Centre for Performing Arts<br/>38, Aditya Birla Centre, Dadi Seth Lane,<br/>Babulnath, Mumbai 400007</p>
            </li>
            <li>
              <span className="contact-icon"><img src={phone} alt="" /></span>
              <p>Mobile : 86578 93038</p>
            </li>
            <li>
              <span className="contact-icon"><img src={phone} alt="" /></span>
              <p>Tel : 022 236781413, 23693041 - 43.</p>
            </li>
            <li>
              <span className="contact-icon"><img src={mail} alt="" /></span>
              <p>corporate@intabcpa.com</p>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-nav-col">

          {/* Desktop Navigation */}
          <div className="nav-grid-desktop">
            <div className="nav-col">
              <a href="#about">ABOUT</a>
              <a href="#spaces">SPACES</a>
              <a href="#initiatives">INITIATIVES</a>
              <a href="#legacy">LEGACY</a>
            </div>
            <div className="nav-col">
              <a href="#book">BOOK NOW</a>
              <a href="#pulse">PULSE & PAGE</a>
              <a href="#blogs">BLOGS</a>
              <a href="#hello">HELLO</a>
            </div>
          </div>

          {/* Tablet & Mobile Navigation with Separators */}
          <div className="nav-flex-mobile">
            <div className="nav-row">
              <a href="#about" className="nav-link-footer">ABOUT</a>
              <span className="nav-separator">|</span>
              <a href="#spaces" className="nav-link-footer">SPACES</a>
              <span className="nav-separator">|</span>
              <a href="#initiatives" className="nav-link-footer">INITIATIVES</a>
              <span className="nav-separator">|</span>
              <a href="#legacy" className="nav-link-footer">LEGACY</a>
            </div>
            <div className="nav-row mt-mobile">
              <a href="#book" className="nav-link-footer">BOOK NOW</a>
              <span className="nav-separator">|</span>
              <a href="#pulse" className="nav-link-footer">PULSE & PAGE</a>
              <span className="nav-separator">|</span>
              <a href="#blogs" className="nav-link-footer">BLOGS</a>
              <span className="nav-separator">|</span>
              <a href="#hello" className="nav-link-footer">HELLO</a>
            </div>
          </div>

        </div>

        <div className="footer-col footer-social-col">
          <h4 className="social-title">FOLLOW US</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/INTABCPA" aria-label="Facebook" ><img src={facebook} alt="" /></a>
            <a href="https://www.instagram.com/intabcpa" aria-label="Instagram"><img src={instagram} alt="" /></a>
            <a href="#youtube" aria-label="YouTube"><img src={youtube} alt="" /></a>
            <a href="#linkedin" aria-label="LinkedIn"><img src={linkedin} alt="" /></a>
            <a href="https://x.com/INTABCPA" aria-label="X"><img src={twitter} alt="" /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 by INTABCPA</p>
        <p>Website Agency <a href="#tonic" className="agency-link">Tonic Worldwide</a></p>
      </div>
    </footer>
  );
};

export default Footer;