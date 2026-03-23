import React from 'react';
import { motion } from 'framer-motion';
import './Login.css';
import logoImg from "../../../public/assets/logo.svg";
import maskImage from "../../../public/auth-media/LoginImg.png";
import googleIcon from "../../../public/auth-media/googleIcon.svg";
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

const Login = () => {
  return (
    <div className="login-page-wrapper">
      <motion.div 
        className="login-container"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="login-form-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <motion.div className="login-logo-wrapper" variants={itemVariants}>
            <Link to="/">
            <img src={logoImg} alt="INT Aditya Birla Centre Logo" className="login-logo" />
            </Link>
          </motion.div> */}
          <motion.div variants={itemVariants}>
            <h1 className="login-title">Login Account</h1>
            <p className="login-subtitle">
              New to INT ABCPA?
              <Link to="/signup"> Sign up</Link>
            </p>
          </motion.div>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <motion.div className="login-input-row" variants={itemVariants}>
              <div className="login-input-group">
                <label>Enter Email or Phone Number</label>
                <input type="text" placeholder="Enter" required />
              </div>
            </motion.div>
            <motion.button 
              type="submit" 
              className="login-submit-btn" 
              variants={itemVariants}
            >
              LOGIN ACCOUNT
            </motion.button>
            <motion.div className="login-divider" variants={itemVariants}>
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
          <motion.div className="login-footer" variants={itemVariants}>
            <p className="login-disclaimer">
              This site is protected by reCAPTCHA Enterprise and the <a href="#g-privacy">Google Privacy Policy</a> and <a href="#g-terms">Terms of Service</a> apply.
            </p>
          </motion.div>

        </motion.div>
        <motion.div 
          className="login-image-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <img src={maskImage} alt="Theater Masks" className="login-cover-img" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Login;