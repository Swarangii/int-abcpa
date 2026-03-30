import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Image as ImageIcon } from 'lucide-react';
import './GalleryPage.css'; // Import the specific CSS file
import photo from "../../../public/gallery/img.png"
import albumIcom from "../../../public/gallery/album.svg"
const galleryData = [
  {
    id: 1,
    title: 'Show -Video #1 | 05 March 2026',
    image: photo,
    type: 'video',
  },
  {
    id: 2,
    title: 'INTANCPA Show Album | 05 March 2026',
    image: photo,
    type: 'image',
  },
  {
    id: 3,
    title: 'Show -Video #1 | 05 March 2026',
    image: photo,
    type: 'image',
  },
  {
    id: 4,
    title: 'INTANCPA Show Album | 05 March 2026',
    image: photo,
    type: 'video',
  },
  {
    id: 5,
    title: 'INTANCPA Show Album | 05 March 2026',
    image: photo,
    type: 'video',
  },
  {
    id: 6,
    title: 'Show -Video #1 | 05 March 2026',
    image: photo,
    type: 'image',
  }
];

export default function GalleryPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="gallery-page-wrapper">
      <div className="gallery-page-container">
        
        {/* Header / Breadcrumbs */}
        <div className="gallery-page-breadcrumbs">
          HOME <span className="gallery-page-arrow">▸</span> LEGACY <span className="gallery-page-arrow">▸</span> <span className="gallery-page-current">GALLERY</span>
        </div>

        {/* Title */}
        <h2 className="gallery-page-title">INTABCPA In the Gallery</h2>

        {/* Filters */}
        <div className="gallery-page-filters">
          
          {/* Type Filter */}
          <div className="gallery-page-filter-group">
            <button className="gallery-page-filter-btn" onClick={() => toggleDropdown('type')}>
              <span className="gallery-page-filter-label">TYPE</span>
              <span className="gallery-page-filter-value">VIDEO</span>
              <ChevronDown size={14} className="gallery-page-icon-gray" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'type' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -5 }} 
                  className="gallery-page-dropdown"
                >
                  <div className="gallery-page-dropdown-item gallery-page-dropdown-active">VIDEO</div>
                  <div className="gallery-page-dropdown-item">IMAGE</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Category Filter */}
          <div className="gallery-page-filter-group">
            <button className="gallery-page-filter-btn" onClick={() => toggleDropdown('category')}>
              <span className="gallery-page-filter-label">CATEGORY</span>
              <span className="gallery-page-filter-value">DANCE</span>
              <ChevronDown size={14} className="gallery-page-icon-gray" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'category' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -5 }} 
                  className="gallery-page-dropdown"
                >
                  <div className="gallery-page-dropdown-item gallery-page-dropdown-active">DANCE</div>
                  <div className="gallery-page-dropdown-item">THEATRE</div>
                  <div className="gallery-page-dropdown-item">MUSIC</div>
                  <div className="gallery-page-dropdown-item">STUDIO ROOM</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Year Filter */}
          <div className="gallery-page-filter-group">
            <button className="gallery-page-filter-btn" onClick={() => toggleDropdown('year')}>
              <span className="gallery-page-filter-label">YEAR</span>
              <span className="gallery-page-filter-value">2026</span>
              <ChevronDown size={14} className="gallery-page-icon-gray" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'year' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -5 }} 
                  className="gallery-page-dropdown"
                >
                  <div className="gallery-page-dropdown-item gallery-page-dropdown-active">2026</div>
                  <div className="gallery-page-dropdown-item">2025</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Grid Gallery */}
        <div className="gallery-page-grid">
          {galleryData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="gallery-page-card"
            >
              <div className="gallery-page-image-wrapper">
                <img src={item.image} alt={item.title} className="gallery-page-img" />
                
                {/* NOTE: Per your instructions "do not use box shaws and border radius", 
                  this badge is an exact square without soft edges. 
                */}
                <div className="gallery-page-badge">
                  {item.type === 'video' ? (
                    <span className='playicon-gallery'>▸</span>
                  ) : (
                    <img src={albumIcom}></img>
                  )}
                </div>
              </div>
              <p className="gallery-page-card-title">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="gallery-page-footer">
          <button className="gallery-page-show-more-btn">
            SHOW MORE
          </button>
        </div>

      </div>
    </div>
  );
}