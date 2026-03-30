import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './InitiativeInnerPage.css';
import image from "../../../public/initiative/innerImg.png"
import image1 from "../../../public/initiative/innerImg1.png"
import playIcon from "../../../public/initiative/play-btn.svg"

export default function InitiativeInnerPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="initiative-inner-wrapper">
      <div className="initiative-inner-container">
        
        {/* Breadcrumbs */}
        <div className="initiative-inner-breadcrumbs">
          HOME <span className="initiative-inner-arrow">▸</span> <span className="initiative-inner-current">INT INITIATIVES</span>
        </div>

        {/* Hero Section */}
        <motion.div 
          className="initiative-inner-hero"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Poster Image */}
          <motion.div variants={fadeUpVariant} className="initiative-inner-image-wrapper">
            <img 
              src={image}
              alt="Virasat Vintage Vibes Poster" 
              className="initiative-inner-poster-img"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeUpVariant} className="initiative-inner-content">
            <div className="initiative-inner-tag">INT INITIATIVES</div>
            <h2 className="initiative-inner-heading">Virasat</h2>
            <h3 className="initiative-inner-subheading">Rooted in Tradition. Resonating in Today.</h3>
            
            <p className="initiative-inner-text">
              Virasat is INT Aditya Birla Centre for Performing Arts' annual tribute to India's classical legacy — a reminder that heritage is not something we inherit passively, but something we uphold with intention. Rooted in vintage sensibilities and timeless narratives, Virasat seeks to preserve the grace and depth of earlier eras while offering them anew to the modern listener, affirming that the truly classic never loses relevance.
            </p>
            
            <p className="initiative-inner-text">
              As INTABCPA's signature classical music initiative, it positions revival as responsibility and frames heritage as a living, evolving continuum — woven into people, practice, and the cultural future the Centre remains committed to nurturing.
            </p>
            
            <p className="initiative-inner-text">
              In its pioneering debut year, Virasat honoured stalwarts such as Begum Parveen Sultana and Dr. Ashwini Bhide, whose artistry reflects generations of discipline, lineage, and cultural memory.
            </p>
          </motion.div>
        </motion.div>

        {/* Glimpse Section */}
        <motion.div 
          className="initiative-inner-glimpse-section"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="initiative-inner-heading initiative-inner-text-center">Glimpse of Virasat</h2>
          
          <div className="initiative-inner-video-wrapper">
            <img 
              src={image1}
              alt="Glimpse of Virasat Video Thumbnail" 
              className="initiative-inner-video-img"
            />
            {/* Square Play Button to respect "no border-radius" constraint */}
            <button className="initiative-inner-play-btn">
              <img src={playIcon} alt="playicon" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}