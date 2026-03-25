import React from 'react';
import { motion } from 'framer-motion';
import './Flashback.css';
import breadcrumbred from "../../../public/flashback-media/breadcrumbred.svg";
import arrowDown from "../../../public/flashback-media/down-arrow.svg";
import bakiEtihas from "../../../public/flashback-media/baki-etihas.png";
import bhatuki from "../../../public/flashback-media/bhatuki.png";
import housefull from "../../../public/flashback-media/housefull.png";
import intBhiya from "../../../public/flashback-media/int-bhiya.png";
import meredeshkegao from "../../../public/flashback-media/meredeshkegao.png";
import shrugal from "../../../public/flashback-media/shrugal.png";

// Mock data based on your screenshot
const flashbackItems = [
  { id: 1, title: 'Mere Desh Ke Gaon', date: 'Nov 04, 2022', image: meredeshkegao },
  { id: 2, title: 'Baki Itihas', date: 'Nov 04, 2022', image: bakiEtihas },
  { id: 3, title: 'Miya Fuski', date: 'Nov 04, 2022', image: intBhiya },
  { id: 4, title: 'Batukji Nonyaya {Children}', date: 'Nov 04, 2022', image: bhatuki },
  { id: 5, title: 'Mogarana Saap', date: 'Nov 04, 2022', image: housefull },
  { id: 6, title: 'Shrugal', date: 'Nov 04, 2022', image: shrugal },
];

// Framer Motion Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Delays each card slightly
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 15 } 
  }
};

const Flashback = () => {
  return (
    <div className="flashback-page">
      {/* Breadcrumbs */}
      <nav className="flashback-breadcrumbs">
        HOME <span><img src={breadcrumbred}></img></span> LEGACY <span><img src={breadcrumbred}></img></span> <span className="flashback-current">FLASHBACK</span>
      </nav>

      {/* Header Section */}
      <header className="flashback-header">
        <h1>Flashback</h1>
        <div className="flashback-year-filter">
          <span>YEAR</span>
          <span className="flashback-year-value">2024</span>
          <span className="flashback-arrow-down"><img src={arrowDown}></img></span>
        </div>
      </header>

      {/* Animated Grid */}
      <motion.div 
        className="flashback-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {flashbackItems.map((item) => (
          <motion.div className="flashback-card" key={item.id} variants={cardVariants}>
            <div className="flashback-card-image-container">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="flashback-card-info">
              <span className="flashback-card-date">{item.date}</span>
              <h3 className="flashback-card-title">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button - Not in your second screenshot, but keeping it if needed */}
      <div className="flashback-button-container">
        <motion.button 
          className="flashback-show-more-btn"
        >
          SHOW MORE
        </motion.button>
      </div> 
     
    </div>
  );
};

export default Flashback;