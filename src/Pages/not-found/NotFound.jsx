import React from 'react'
import './NotFound.css'
import notFoundImg from "../../../public/not-found-media/notFound.svg"
import {motion} from "framer-motion";
const NotFound = () => {
  // Framer Motion variant for staggering the appearance of elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Variant for sliding up text elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  // Variant specifically for the masks to give them a pop/spring effect
  const maskVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 12,
        delay: 0.3 
      } 
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="not-found-wrapper">
      <motion.div 
        className="not-found-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* The 404 Graphic Block */}
        <div className="error-graphic">
          <motion.span variants={itemVariants} className="error-number">4</motion.span>
          
          <motion.div 
            className="masks-container"
            variants={maskVariants}
            whileHover="hover"
          >
            <img src={notFoundImg} alt="404 page not found" />
          </motion.div>

          <motion.span variants={itemVariants} className="error-number">4</motion.span>
        </div>

        {/* Text Content */}
        <motion.h1 variants={itemVariants} className="not-found-title">
          We Are Sorry!
        </motion.h1>
        
        <motion.p variants={itemVariants} className="not-found-subtitle">
          BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </motion.p>
        
        {/* Button */}
        <motion.button 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="back-button"
          onClick={() => window.location.href = '/'} // Replace with your router integration
        >
          BACK TO HOMEPAGE
        </motion.button>

      </motion.div>
    </div>
  );
};

export default NotFound
