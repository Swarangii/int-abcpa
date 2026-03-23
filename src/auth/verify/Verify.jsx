import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Verify.css'; // Make sure to link the new CSS file
import logoImg from "../../../public/assets/logo.svg";

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

const Verify = () => {
  // State to hold the 4 digits of the OTP
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  // Handle OTP Input Change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input
    if (element.value !== '' && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle Backspace to move to previous input
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="verify-page-wrapper">
      <motion.div 
        className="verify-container"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="verify-form-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <motion.div className="verify-logo-wrapper" variants={itemVariants}>
            <Link to="/">
              <img src={logoImg} alt="INT Aditya Birla Centre Logo" className="verify-logo" />
            </Link>
          </motion.div> */}

          <div className="verify-content-wrapper">
            <motion.div variants={itemVariants}>
              <h1 className="verify-title">Verify Email</h1>
              <p className="verify-subtitle">Enter verification code sent to</p>
              <p className="verify-email-display">kapadia.me@gmail.com</p>
            </motion.div>

            <form className="verify-form" onSubmit={(e) => e.preventDefault()}>
              <motion.div className="verify-otp-container" variants={itemVariants}>
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    placeholder="*"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="verify-otp-input"
                  />
                ))}
              </motion.div>

              <motion.button 
                type="submit" 
                className="verify-submit-btn" 
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
              >
                VERIFY CODE
              </motion.button>
            </form>

            <motion.div className="verify-footer" variants={itemVariants}>
              <p>
                Didn't receive email? <Link to="/resend-code" className="verify-resend-link">Send again</Link>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- RIGHT IMAGE SECTION --- */}
        <motion.div 
          className="verify-image-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Centered Logo in the Pink Box */}
          <img src={logoImg} alt="Aditya Birla Centre Logo" className="verify-cover-logo" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Verify;