import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import './PulsePage.css';

const newsData = [
  {
    id: 1,
    title: 'Through the looking glass with Freed a Theatre Group',
    date: 'Nov 04, 2022',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop',
    badge: 'LATEST NEWS',
  },
  {
    id: 2,
    title: 'Kerala to host 1st international Indie music festival from November 9',
    date: 'Nov 04, 2022',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Temples used to give spiritual benefits to the market and get material ones in return',
    date: 'Nov 04, 2022',
    image: 'https://images.unsplash.com/photo-1582765355150-13f5d5ccfb17?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'The toughest part, is to carry a beloved classic\'s legacy forward in a different medium, says Feroz Abbas Khan',
    date: 'Nov 04, 2022',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Kerala to host 1st international Indie music festival from November 9',
    date: 'Nov 04, 2022',
    image: 'https://images.unsplash.com/photo-1507676184212-d0330a151f15?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Temples used to give spiritual benefits to the market and get material ones in return',
    date: 'Nov 04, 2022',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'The toughest part, is to carry a beloved classic\'s legacy forward in a different medium, says Feroz Abbas Khan',
    date: 'Nov 04, 2022',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Kerala to host 1st international Indie music festival from November 9',
    date: 'Nov 04, 2022',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Temples used to give spiritual benefits to the market and get material ones in return',
    date: 'Nov 04, 2022',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  }
];

export default function PulsePage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="pulse-page-wrapper">
      <div className="pulse-page-container">
        
        {/* Breadcrumbs */}
        <div className="pulse-page-breadcrumbs pulse-page-normal-text">
          HOME <span className="pulse-page-arrow">▸</span> <span className="pulse-page-current">PULSE & PAGE</span>
        </div>

        {/* Header Area */}
        <div className="pulse-page-header-area">
          <h2 className="pulse-page-heading">What's News</h2>
          
          <div className="pulse-page-controls">
            <div className="pulse-page-filter">
              <span className="pulse-page-filter-label pulse-page-normal-text">YEAR</span>
              <span className="pulse-page-filter-value pulse-page-normal-text">2024</span>
              <ChevronDown size={16} className="pulse-page-icon" />
            </div>
            
            {/* Search Button (Visible primarily on mobile as per design) */}
            <button className="pulse-page-search-btn">
              <Search size={20} color="#ffffff" />
            </button>
          </div>
        </div>

        {/* News Grid */}
        <motion.div 
          className="pulse-page-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {newsData.map((news) => (
            <motion.div key={news.id} variants={fadeUpVariant} className="pulse-page-card">
              
              <div className="pulse-page-image-container">
                {news.badge && (
                  <div className="pulse-page-badge pulse-page-normal-text">
                    {news.badge}
                  </div>
                )}
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="pulse-page-image" 
                />
              </div>

              <div className="pulse-page-content">
                <p className="pulse-page-date pulse-page-normal-text">{news.date}</p>
                <h3 className="pulse-page-subheading pulse-page-title">{news.title}</h3>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <div className="pulse-page-footer">
          <button className="pulse-page-show-more-btn pulse-page-normal-text">
            SHOW MORE
          </button>
        </div>

      </div>
    </div>
  );
}