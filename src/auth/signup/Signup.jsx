import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Signup.css';
import logoImg from "../../../public/assets/logo.svg";
import maskImage from "../../../public/auth-media/MaskImg.png";
import googleIcon from "../../../public/auth-media/googleIcon.svg";
import arrow from "../../../public/auth-media/toggle-arrow.svg";
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select State');

  const options = [
    { value: 'MP', label: 'Madhya Pradesh' },
    { value: 'MH', label: 'Maharashtra' },
    { value: 'DL', label: 'Delhi' },
    { value: 'RJ', label: 'Rajasthan' },
    { value: 'UP', label: 'Uttar Pradesh' },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };
  return (
    <div className="signup-page-wrapper">
      <motion.div 
        className="signup-container"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="signup-form-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="signup-title">Create Your Account</h1>
            <p className="signup-subtitle">
              Signing up for INT ABCPA is fast and free–no commitments or long-term contracts.
            </p>
          </motion.div>


          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <motion.div className="signup-input-row" variants={itemVariants}>
              <div className="signup-input-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter" required />
              </div>
              <div className="signup-input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter" required />
              </div>
            </motion.div>

            <motion.div className="signup-input-row" variants={itemVariants}>
              <div className="signup-input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter Email" required />
              </div>
              <div className="signup-input-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91" required />
              </div>
            </motion.div>

            <motion.div className="signup-input-row" variants={itemVariants}>
              <div className="signup-input-group">
      <label>State</label>
      <div className="custom-dropdown-container">
        
        {/* The visible selected value */}
        <div 
          className="custom-dropdown-header" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <span className={`arrow ${isOpen ? 'open' : ''}`}>
            <img src={arrow} alt = "toggle arrow"></img>
          </span>
        </div>

        {/* The dropdown list (Matches your image) */}
        {isOpen && (
          <ul className="custom-dropdown-list">
            {options.map((option) => (
              <li 
                key={option.value} 
                className="custom-dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <input type="hidden" name="state" value={selectedOption} required />
    </div>
              <div className="signup-input-group">
                <label>City</label>
                 <input type="text" placeholder="Bhopal" required />
              </div>
            </motion.div>

            <motion.div className="signup-checkbox-group" variants={itemVariants}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to INTABCPA's <a href="#terms">Terms</a>, <a href="#privacy">Privacy Policy</a>, and <a href="#esign">E-Sign Consent</a>.
              </label>
            </motion.div>

            <motion.button 
              type="submit" 
              className="signup-submit-btn" 
              variants={itemVariants}
            >
              CREATE ACCOUNT
            </motion.button>

            <motion.div className="signup-divider" variants={itemVariants}>
              <span>OR</span>
            </motion.div>

            <motion.button 
              type="button" 
              className="signup-google-btn"
              variants={itemVariants}
              whileHover={{ backgroundColor: "#f9f9f9" }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/verify" className='sign-in-link'><img src={googleIcon} alt="Google"/>Sign in with Google</Link>
              
            </motion.button>
          </form>

          <motion.div className="signup-footer" variants={itemVariants}>
            <p>Already have a INTABCPA account? <Link to="/login">Login.</Link></p>
            <p className="signup-disclaimer">
              This site is protected by reCAPTCHA Enterprise and the <a href="#g-privacy">Google Privacy Policy</a> and <a href="#g-terms">Terms of Service</a> apply.
            </p>
          </motion.div>

        </motion.div>

        <motion.div 
          className="signup-image-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <img src={maskImage} alt="Theater Masks" className="signup-cover-img" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Signup;