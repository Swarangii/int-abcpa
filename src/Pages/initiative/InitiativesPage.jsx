import React from 'react';
import { motion } from 'framer-motion';
import './InitiativesPage.css'; 
// import banner from "../../../public/initiative/banner.png"
import img1 from "../../../public/initiative/img1.png"
import img2 from "../../../public/initiative/img2.png"

const initiativesData = [
  {
    id: 1,
    title: 'Virasat: Rooted in Tradition.\nResonating in Today.',
    description: "Virasat is INT Aditya Birla Centre for Performing Arts' annual tribute to India's classical legacy — a reminder that heritage is not something we inherit passively, but something we uphold with intention. Rooted in vintage sensibilities and timeless narratives...",
    image: img1, 
  },
  {
    id: 2,
    title: 'Inter-Collegiate Drama Competition (ICDC)',
    description: "For fifty remarkable years, the Inter-Collegiate Drama Competition (ICDC) has stood at the heart of INTABCPA's commitment to nurturing the next generation of theatre-makers.",
    image: img2, 
  },
  {
    id: 3,
    title: 'Chance (Talent Program)\nA Stage for the Brave. A Spotlight for the Unheard.',
    description: "CHANCE, INTABCPA's flagship talent IP, is our commitment to that moment. A weekly platform where emerging performers step into the light with nothing but their craft, their courage, and their truth. No autotune. No filters. Just the art, as it is meant to be.",
    image: img2, 
  },
  {
    id: 4,
    title: 'Campus Ambassador Programme\nWhere the Next Generation of Cultural Leaders Take Root',
    description: "At INTABCPA, we believe that the future of the performing arts is shaped not only onstage, but also in the minds, voices, and creative instincts of young people. Our Campus Ambassador Programme is designed to nurture that future, one campus, one cohort, one cultural spark at a time.",
    image: img1, 
  }
];

export default function InitiativesPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="initiatives-page-wrapper">
      
      {/* Hero Section */}
      <div className="initiatives-page-hero">
        <div 
          className="initiatives-page-hero-bg"
          style={{ backgroundImage: "url('../../../public/initiative/banner.png')" }} 
        />
        
        {/* Inner container to align title and breadcrumbs to max-width */}
        <div className="initiatives-page-hero-inner">
          {/* Breadcrumbs positioned on the top left of the banner */}
          <div className="initiatives-page-breadcrumbs">
            HOME <span className="initiatives-page-arrow">▸</span> INT INITIATIVES
          </div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="initiatives-page-hero-title"
          >
            INT Initiatives
          </motion.h2>
        </div>
      </div>

      <div className="initiatives-page-container">
        
        {/* Initiatives Grid */}
        <motion.div 
          className="initiatives-page-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {initiativesData.map((item, index) => {
            // Logic for alternating sizes: 
            // Index 0: Small | Index 1: Large
            // Index 2: Large | Index 3: Small
            const isSmallBox = index === 0 || index === 3;
            const sizeClass = isSmallBox ? 'box-small' : 'box-large';

            return (
              <motion.div key={item.id} variants={fadeUpVariant} className="initiatives-page-card">
                
                <div className={`initiatives-page-card-image-wrapper ${sizeClass}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="initiatives-page-card-img"
                  />
                </div>
                
                <h3 className="initiatives-page-card-title">{item.title}</h3>
                <p className="initiatives-page-text">{item.description}</p>
                
                <button className="initiatives-page-btn">
                  KNOW MORE
                </button>
                
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </div>
  );
}