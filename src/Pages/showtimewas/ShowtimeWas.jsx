import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import './ShowtimeWas.css';
import '../../index.css'

import show1 from "../../../public/assets/show-1.png";
import show2 from "../../../public/assets/show-2.png";
import yoga1 from "../../../public/showtime/yoga1.png";
import yoga2 from "../../../public/showtime/yoga2.png";
import AnimatedSearch from '../../../component/searchIcon/searchIcon';

// --- MOCK DATA ---
const pastEvents = [
  {
    id: 1,
    title: 'Romeo & Juliet',
    description: 'When Romeo of the Montagues locks eyes with Juliet of the Capulets, it is love at first sight .. and war at first breath. Their forbidden romance rips through Bollywood backlots, disco-lit nights and tapori street showdowns - bold enough to set an entire city on fire.',
    time: '15 Jan, 2025 9 PM - 11 PM',
    image: show1
  },
  {
    id: 2,
    title: 'Zen Katha',
    description: 'A fascinating story of Bodhidharma, a Prince from the ancient kingdom of Kanchi,who was the true founder of Zen and the Martial Arts, as we know them today.',
    time: '15 Jan, 2025 9 PM - 11 PM',
    image: show2 
  },
  {
    id: 3,
    title: 'Classical Yoga Event',
    description: 'When Romeo of the Montagues locks eyes with Juliet of the Capulets, it is love at first sight .. and war at first breath. Their forbidden romance rips through Bollywood backlots, disco-lit nights and tapori street showdowns - bold enough to set an entire city on fire.',
    time: '15 Jan, 2025 9 PM - 11 PM',
    image: yoga1
  },
  {
    id: 4,
    title: 'Contemporary Dance Fusion Event',
    description: 'A fascinating story of Bodhidharma, a Prince from the ancient kingdom of Kanchi,who was the true founder of Zen and the Martial Arts, as we know them today.',
    time: '15 Jan, 2025 9 PM - 11 PM',
    image: yoga2
  }
];

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const ShowtimeWas = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('THEATRE');
  const categoryOptions = ['THEATRE', 'MUSIC', 'DANCE', 'COMEDY'];

  return (
    <div className="stw-page-wrapper">
      {/* Breadcrumbs */}
      <nav className="showtime-was-breadcrumb">
  <span className="showtime-was-link">HOME</span>
  <span className="showtime-was-separator">▶</span>
  <span className="showtime-was-current">SHOWTIME</span>
</nav>
      {/* HEADER SECTION */}
      <header className="stw-header">
        <h1 className="stw-main-title">Was Live</h1>
        
        <div className="stw-controls">
          {/* Custom Category Dropdown */}
          <div className="stw-filter-group">
            <label>CATEGORIES</label>
            <div className="stw-dropdown-container">
              <div 
                className="stw-dropdown-header" 
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                {selectedCategory}
                <ChevronDown size={16} className={`stw-arrow ${isCategoryOpen ? 'open' : ''}`} />
              </div>
              
              {isCategoryOpen && (
                <ul className="stw-dropdown-list">
                  {categoryOptions.map((option) => (
                    <li 
                      key={option} 
                      className="stw-dropdown-item"
                      onClick={() => {
                        setSelectedCategory(option);
                        setIsCategoryOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <AnimatedSearch/>
        </div>
      </header>

      {/* GRID SECTION */}
      <motion.div 
        className="stw-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {pastEvents.map((event) => (
          <motion.div className="stw-card" key={event.id} variants={cardVariants}>
            <div className="stw-card-image-wrapper">
              <img src={event.image} alt={event.title} />
            </div>
            
            <div className="stw-card-content">
              <h2 className="stw-card-title">{event.title}</h2>
              <p className="stw-card-desc">{event.description}</p>
              <span className="stw-card-time">{event.time}</span>
              
              <button className="stw-btn-outline">MORE INFO</button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* FOOTER ACTION */}
      <div className="stw-show-more-container">
        <motion.button 
          className="nav-btn-book"
        >
          SHOW MORE
        </motion.button>
      </div>

    </div>
  );
};

export default ShowtimeWas;