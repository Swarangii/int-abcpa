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

// const IconFacebook = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
// const IconInstagram = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
// const IconYouTube = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"></polygon></svg>;
// const IconLinkedIn = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
// const IconX = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="4" x2="20" y2="20"></line><line x1="20" y1="4" x2="4" y2="20"></line></svg>;


const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        
        {/* Column 1: Logo */}
        <div className="footer-col footer-logo-col">
          <img src={logo} alt="Aditya Birla Centre For Performing Arts" className="footer-logo" />
        </div>

        {/* Column 2: Contact Info */}
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

        {/* Column 3: Navigation */}
        <div className="footer-col footer-nav-col">
          
          {/* Desktop Navigation (2 Columns) */}
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

          {/* Mobile Navigation (Rows with pipes) */}
          <div className="nav-flex-mobile">
            <div className="nav-row">
              <a href="#about" className="nav-link">ABOUT</a>
              <a href="#spaces" className="nav-link">SPACES</a>
              <a href="#initiatives" className="nav-link">INITIATIVES</a>
              <a href="#legacy" className="nav-link">LEGACY</a>
            </div>
            <div className="nav-row mt-mobile">
              <a href="#book" className="nav-link">BOOK NOW</a>
              <a href="#pulse" className="nav-link">PULSE & PAGE</a>
              <a href="#blogs" className="nav-link">BLOGS</a>
              <a href="#hello" className="nav-link">HELLO</a>
            </div>
          </div>

        </div>

        {/* Column 4: Social */}
        <div className="footer-col footer-social-col">
          <h4 className="social-title">FOLLOW US</h4>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook"><img src={facebook} alt="" /></a>
            <a href="#instagram" aria-label="Instagram"><img src={instagram} alt="" /></a>
            <a href="#youtube" aria-label="YouTube"><img src={youtube} alt="" /></a>
            <a href="#linkedin" aria-label="LinkedIn"><img src={linkedin} alt="" /></a>
            <a href="#x" aria-label="X"><img src={twitter} alt="" /></a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Line */}
      <div className="footer-bottom">
        <p>© 2026 by INTABCPA</p>
        <p>Website Agency <a href="#tonic" className="agency-link">Tonic Worldwide</a></p>
      </div>
    </footer>
  );
};

export default Footer;