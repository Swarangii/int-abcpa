import React from 'react';
import { motion } from 'framer-motion';
import './Booking.css';

// Placeholder images - replace these with your actual local assets
const facilityData = [
  {
    id: 'theatre',
    title: 'Theatre',
    description: 'An intimate space designed as an institution for the development and promotion of theatre and the performing arts.',
    image: 'https://images.unsplash.com/photo-1507676184212-d0330a15233c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'classroom',
    title: 'Classroom',
    description: 'State of the art class room facilities inclusive of learning resources, and educational solutions materials with an elevated experience.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'studio',
    title: 'Studio room',
    description: 'Specialized facility for sound recording, mixing, and audio production of instrumental or vocal musical performances.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'auditorium',
    title: 'The Auditorium - Where Art Takes Center Stage',
    description: 'Step into an immersive space where every seat holds a story and every spotlight ignites expression. The INT Auditorium is not just a venue — it\'s a sanctuary for performers, storytellers, and audiences alike.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop',
  }
];

// --- Framer Motion Animation Variants ---
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
  }
};

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

// Simple reusable SVG component for the Play button
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="#7D0B15"/>
  </svg>
);

const Booking = () => {
  return (
    <div className="bfac-page-wrapper">
      <div className="bfac-container">
        
        {/* Header Section */}
        <div className="bfac-header">
          <nav className="bfac-breadcrumb">
            HOME <span>&gt;</span> <span className="bfac-current">BOOKINGS</span>
          </nav>
          <h1 className="bfac-main-title">Booking Facilities</h1>
        </div>

        {/* Facilities List */}
        <motion.div 
          className="bfac-list-container"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          {facilityData.map((facility, index) => {
            // Even indices have image on left, odd have image on right
            const isReverse = index % 2 !== 0;

            return (
              <motion.div 
                key={facility.id} 
                className={`bfac-row ${isReverse ? 'bfac-row-reverse' : ''}`}
                variants={rowVariants}
              >
                {/* Image & Video Thumbnail Container */}
                <div className="bfac-media-col">
                  <div className="bfac-media-wrapper">
                    <img src={facility.image} alt={facility.title} className="bfac-image" />
                    <button className="bfac-play-btn" aria-label={`Play video for ${facility.title}`}>
                      <PlayIcon />
                    </button>
                  </div>
                </div>

                {/* Text Content Container */}
                <div className="bfac-text-col">
                  <div className="bfac-text-content">
                    <h2 className="bfac-title">{facility.title}</h2>
                    <p className="bfac-desc">{facility.description}</p>
                    <button className="bfac-book-btn">BOOK NOW</button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
};

export default Booking;