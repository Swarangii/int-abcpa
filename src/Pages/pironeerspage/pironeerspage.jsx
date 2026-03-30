import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import './pironeerspage.css';
// import banner from "../../../public/pironeers/banner.png"
import img1 from "../../../public/pironeers/img1.png"
import img2 from "../../../public/pironeers/img2.png"
import img3 from "../../../public/pironeers/img3.png"
import img4 from "../../../public/pironeers/img4.png"
import img5 from "../../../public/pironeers/img5.png"
import img6 from "../../../public/pironeers/img6.png"
import img7 from "../../../public/pironeers/img7.png"
import img8 from "../../../public/pironeers/img8.png"

const pioneersData = [
  {
    id: 1,
    name: 'Acharya Parvati Kumar',
    role: 'Nrutya Maharshi',
    image: img1,
    description: 'Acharya Parvati Kumar (1921–2012), revered as Nrutya Maharshi, was a dancer, choreographer and scholar who bridged Bharatanatyam, Kathakali and Kathak with rare authority. At Indian National Theatre, Bombay (1947–1965), he shaped landmark dance-ballets including Discovery of India and Dekh Teri Bambai, bringing discipline, scholarship and stagecraft to India\'s evolving modern dance vocabulary.'
  },
  {
    id: 2,
    name: 'Pravin Joshi',
    role: 'Influential figures',
    image: img2,
    description: 'Pravin Joshi was a highly influential figure in modern Indian theatre, known for his dynamic approach to staging and script selection. He left an indelible mark on the Gujarati theatre scene.'
  },
  {
    id: 3,
    name: 'Gautam Joshi',
    role: 'Technical Director',
    image: img3,
    description: 'Gautam Joshi served as a pivotal Technical Director, pioneering lighting and stage design techniques that modernized the visual storytelling of stage productions during his era.'
  },
  {
    id: 4,
    name: 'P L Deshpande',
    role: 'Memorable association',
    image: img4,
    description: 'Purushottam Laxman Deshpande, popularly known as Pu La, was a legendary Marathi writer, humorist, and actor whose association brought unmatched literary depth to the stage.'
  },
  {
    id: 5,
    name: 'Atmaram Bhende',
    role: 'Secretary',
    image: img5,
    description: 'Atmaram Bhende dedicated years as the Secretary, orchestrating behind-the-scenes administration and ensuring the smooth operation of countless theatrical endeavors.'
  },
  {
    id: 6,
    name: 'Adi Marzban',
    role: 'Director',
    image: img6,
    description: 'Adi Marzban was a celebrated Parsi theatre director and playwright, revolutionizing Bombay\'s theatre circuit with his sharp wit, satirical plays, and innovative direction.'
  },
  {
    id: 7,
    name: 'Vanlata Mehta',
    role: 'Guiding force',
    image: img7,
    description: 'Vanlata Mehta was a guiding force for many upcoming artists. Her mentorship and vision helped shape the foundational years of several prominent theatre institutions.'
  },
  {
    id: 8,
    name: 'M S Sathyu',
    role: 'Stage designers and director',
    image: img8,
    description: 'M S Sathyu is an acclaimed art director, stage designer, and film director. His unparalleled visual aesthetic set new benchmarks for set design in Indian theatre.'
  }
];


const categories = [
  "VETERAN ARTISTS",
  "MODERN ARTISTS",
  "EMERGING ARTISTS"
];
export default function PioneersPage() {
  const [activeId, setActiveId] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [selectedCategory, setSelectedCategory] = useState("VETERAN ARTISTS");
  return (
    <div className="pioneers-page-wrapper">
      
      {/* Hero Section */}
      <div className="pioneers-page-hero-section">
        <div 
          className="pioneers-page-hero-overlay"
          style={{ backgroundImage: "url('../../../public/pironeers/banner.png')" }}
        />
        <div className="pioneers-page-breadcrumbs">
          HOME <span>▸</span> LEGACY <span>▸</span>THE PIONEERS
        </div>
        <h1 className="pioneers-page-hero-title">The Pioneers</h1>
      </div>

      <div className="pioneers-page-container">
        
        {/* Category Header */}
        <div className="pioneers-page-category-header">
  <div className="pioneers-page-category-dropdown-wrapper">

    <button
      className="pioneers-page-category-button"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <span className="pioneers-page-category-label">CATEGORIES</span>
      <span className="pioneers-page-category-value">
        {selectedCategory}
      </span>
      <ChevronDown
        size={14}
        className={`pioneers-page-icon-text ${
          isDropdownOpen ? "rotate-icon" : ""
        }`}
      />
    </button>

    {isDropdownOpen && (
      <div className="pioneers-page-category-dropdown">
        {categories.map((item, index) => (
          <div
            key={index}
            className="pioneers-page-category-item"
            onClick={() => {
              setSelectedCategory(item);
              setIsDropdownOpen(false);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    )}

  </div>
</div>

        {/* DESKTOP GRID VIEW (Hidden on Mobile) */}
        <div className="pioneers-page-desktop-view">
          {Array.from({ length: Math.ceil(pioneersData.length / 4) }).map((_, rowIndex) => {
            const rowItems = pioneersData.slice(rowIndex * 4, rowIndex * 4 + 4);
            const activePioneerInRow = rowItems.find(p => p.id === activeId);

            return (
              <div key={rowIndex} className="pioneers-page-grid-row">
                <div className="pioneers-page-grid-container">
                  {rowItems.map((pioneer) => {
                    const isActive = activeId === pioneer.id;
                    return (
                      <div 
                        key={pioneer.id} 
                        className={`pioneers-page-card ${isActive ? 'pioneers-page-card-active' : ''}`}
                        onClick={() => setActiveId(isActive ? null : pioneer.id)}
                      >
                        <img 
                          src={pioneer.image} 
                          alt={pioneer.name}
                          className={`pioneers-page-card-img ${isActive ? 'pioneers-page-img-active' : ''}`}
                        />
                        <div className={`pioneers-page-card-info ${isActive ? 'pioneers-page-info-active' : ''}`}>
                          <div className="pioneers-page-card-header">
                            <h3 className="pioneers-page-card-name">{pioneer.name}</h3>
                            {isActive ? (
                              <ChevronDown size={24} className="pioneers-page-icon-text red" />
                            ) : (
                              <ChevronRight size={24} className="pioneers-page-icon-muted" />
                            )}
                          </div>
                          <p className="pioneers-page-card-role">{pioneer.role}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Desktop Detail Expand Box */}
                <AnimatePresence>
                  {activePioneerInRow && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="pioneers-page-desktop-detail-wrapper"
                    >
                      <div className="pioneers-page-desktop-detail-box">
                        <h2 className="pioneers-page-detail-title">{activePioneerInRow.name}</h2>
                        <p className="pioneers-page-detail-desc">{activePioneerInRow.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* MOBILE ACCORDION VIEW (Hidden on Desktop) */}
        <div className="pioneers-page-mobile-view">
          {pioneersData.map((pioneer) => {
            const isActive = activeId === pioneer.id;

            return (
              <motion.div layout key={pioneer.id} className="pioneers-page-accordion-item">
                {isActive ? (
                  /* Mobile Expanded State */
                  <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pioneers-page-accordion-expanded">
                    <div className="pioneers-page-accordion-header-active" onClick={() => setActiveId(null)}>
                      <div>
                        <h3 className="pioneers-page-accordion-name">{pioneer.name}</h3>
                        <p className="pioneers-page-accordion-role">{pioneer.role}</p>
                      </div>
                      <ChevronDown size={20} className="pioneers-page-icon-red" />
                    </div>
                    
                    <img src={pioneer.image} alt={pioneer.name} className="pioneers-page-accordion-img" />
                    
                    <div className="pioneers-page-accordion-detail-box">
                      <h2 className="pioneers-page-detail-title">{pioneer.name}</h2>
                      <p className="pioneers-page-detail-desc">{pioneer.description}</p>
                    </div>
                  </motion.div>
                ) : (
                  /* Mobile Collapsed State */
                  <div className="pioneers-page-accordion-header" onClick={() => setActiveId(pioneer.id)}>
                    <h3 className="pioneers-page-accordion-name-collapsed">{pioneer.name}</h3>
                    <div className="pioneers-page-accordion-meta">
                      <span className="pioneers-page-accordion-role-collapsed">{pioneer.role}</span>
                      <ChevronRight size={18} className="pioneers-page-icon-muted" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}