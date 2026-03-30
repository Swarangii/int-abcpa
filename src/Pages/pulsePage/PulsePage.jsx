import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import './PulsePage.css';
import image from "../../../public/pulsepage/image.png"
const newsData = [
  {
    id: 1,
    title: 'Through the looking glass with Freed a Theatre Group',
    date: 'Nov 04, 2022',
    image: image,
    badge: 'LATEST NEWS',
  },
  {
    id: 2,
    title: 'Kerala to host 1st international Indie music festival from November 9',
    date: 'Nov 04, 2022',
    image: image,
  },
  {
    id: 3,
    title: 'Temples used to give spiritual benefits to the market and get material ones in return',
    date: 'Nov 04, 2022',
    image: image,
  },
  {
    id: 4,
    title: 'The toughest part, is to carry a beloved classic\'s legacy forward in a different medium, says Feroz Abbas Khan',
    date: 'Nov 04, 2022',
    image: image,
  },
  {
    id: 5,
    title: 'Kerala to host 1st international Indie music festival from November 9',
    date: 'Nov 04, 2022',
    image: image,
  },
  {
    id: 6,
    title: 'Temples used to give spiritual benefits to the market and get material ones in return',
    date: 'Nov 04, 2022',
    image: image,
  },
  {
    id: 7,
    title: 'The toughest part, is to carry a beloved classic\'s legacy forward in a different medium, says Feroz Abbas Khan',
    date: 'Nov 04, 2022',
    image: image,
  },
  {
    id: 8,
    title: 'Kerala to host 1st international Indie music festival from November 9',
    date: 'Nov 04, 2022',
    image: image,
  },
  {
    id: 9,
    title: 'Temples used to give spiritual benefits to the market and get material ones in return',
    date: 'Nov 04, 2022',
    image: image }
];

export default function PulsePage() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Available years for the dropdown
  const years = ['2024', '2023', '2022', '2021', '2020'];
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
            {/* Dropdown Wrapper */}
            <div className="pulse-page-filter-wrapper">
              <div 
                className="pulse-page-filter"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="pulse-page-filter-label pulse-page-normal-text">YEAR</span>
                <span className="pulse-page-filter-value pulse-page-normal-text">{selectedYear}</span>
                <ChevronDown 
                  size={16} 
                  className={`pulse-page-icon ${isDropdownOpen ? 'rotate' : ''}`} 
                  style={{ transition: 'transform 0.3s ease', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="pulse-page-dropdown-menu">
                  {years.map((year) => (
                    <div 
                      key={year}
                      className={`pulse-page-dropdown-item pulse-page-normal-text ${selectedYear === year ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
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