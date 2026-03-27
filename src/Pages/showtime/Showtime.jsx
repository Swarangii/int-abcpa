import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Showtime.css';
import AnimatedSearch from '../../../component/searchIcon/searchIcon';
import show1 from "../../../public/assets/show-1.png"
import show2 from "../../../public/assets/show-2.png"
import yoga1 from "../../../public/showtime/yoga1.png"
import yoga2 from "../../../public/showtime/yoga2.png"
import arrow from "../../../public/showtime/dropdown-arrow.png";
import breadcrumbred from "../../../public/flashback-media/breadcrumbred.svg";


// --- MOCK DATA ---
const dateOptions = [
  { id: 'd1', day: 'Today', date: '4', month: 'March' },
  { id: 'd2', day: 'Tom', date: '5', month: 'March' },
  { id: 'd3', day: 'Fri', date: '6', month: 'March' },
  { id: 'd4', day: 'Sat', date: '7', month: 'March' },
  { id: 'd5', day: 'Sun', date: '8', month: 'March' },
  { id: 'd6', day: 'Mon', date: '9', month: 'March' },
  { id: 'd7', day: 'Tom', date: '10', month: 'March' },
  { id: 'd8', day: 'Fri', date: '6', month: 'March' },
  { id: 'd9', day: 'Sat', date: '7', month: 'March' },
  { id: 'd10', day: 'Sun', date: '8', month: 'March' },
  { id: 'd11', day: 'Mon', date: '9', month: 'March' },
  { id: 'd12', day: 'Tom', date: '10', month: 'March' },{ id: 'd14', day: 'Sat', date: '7', month: 'March' },
  { id: 'd14', day: 'Sun', date: '8', month: 'March' },
  { id: 'd15', day: 'Mon', date: '9', month: 'March' },
  { id: 'd16', day: 'Tom', date: '10', month: 'March' },
];

const topEvents = [
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
  }
];

const bottomEvents = [
  {
    id: 3,
    title: 'Classical Yoga Event',
    description: 'When Romeo of the Montagues locks eyes with Juliet of the Capulets, it is love at first sight .. and war at first breath.',
    time: '15 Jan, 2025 9 PM - 11 PM',
    image: yoga1
  },
  {
    id: 4,
    title: 'Contemporary Dance Fusion Event',
    description: 'A fascinating story of Bodhidharma, a Prince from the ancient kingdom of Kanchi,who was the true founder of Zen.',
    time: '15 Jan, 2025 9 PM - 11 PM',
    image: yoga2
  }
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
};

const bannerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Showtime = () => {
  const [activeDate, setActiveDate] = useState('d1');
  
  // --- INDEPENDENT DROPDOWN STATES ---
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('THEATRE');
  const categoryOptions = ['THEATRE', 'MUSIC', 'COMEDY', 'DANCE'];
  
  const [isShowtimeOpen, setIsShowtimeOpen] = useState(false);
  const [selectedShowtime, setSelectedShowtime] = useState('MORNING');
  const showtimeOptions = ['MORNING', 'AFTERNOON', 'EVENING', 'NIGHT'];

  return (
    <div className="st-page-wrapper">
      
      <nav className="flashback-breadcrumbs">
              HOME <span><img src={breadcrumbred}></img></span><span className="flashback-current">SHOWTIME</span>
            </nav>

      <header className="st-header">
        <h1>Showtime</h1>
        <div className="st-filters">
          
          {/* --- CATEGORY DROPDOWN --- */}
          <div className="st-filter-group">
            <label>CATEGORIES</label>
            <div className="all-dropdown-container">
              <div 
                className="all-dropdown-header" 
                onClick={() => {
                  setIsCategoryOpen(!isCategoryOpen);
                  setIsShowtimeOpen(false); // Close the other dropdown
                }}
              >
                {selectedCategory}
                <span className={`arrow ${isCategoryOpen ? 'open' : ''}`}>
                  <img src={arrow} alt="toggle arrow" />
                </span>
              </div>
      
              {isCategoryOpen && (
                <ul className="all-dropdown-list">
                  {categoryOptions.map((option) => (
                    <li 
                      key={option} 
                      className="all-dropdown-item"
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

          {/* --- SHOW TIME DROPDOWN --- */}
          <div className="st-filter-group">
            <label>SHOW TIME</label>
            <div className="all-dropdown-container">
              <div 
                className="all-dropdown-header" 
                onClick={() => {
                  setIsShowtimeOpen(!isShowtimeOpen);
                  setIsCategoryOpen(false); // Close the other dropdown
                }}
              >
                {selectedShowtime}
                <span className={`arrow ${isShowtimeOpen ? 'open' : ''}`}>
                  <img src={arrow} alt="toggle arrow" />
                </span>
              </div>
      
              {isShowtimeOpen && (
                <ul className="all-dropdown-list">
                  {showtimeOptions.map((option) => (
                    <li 
                      key={option} 
                      className="all-dropdown-item"
                      onClick={() => {
                        setSelectedShowtime(option);
                        setIsShowtimeOpen(false);
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

      {/* --- DATE PICKER --- */}
      <div className="st-date-picker-wrapper">
        <div className="st-date-picker">
          <button 
            className={`st-date-btn st-all-btn ${activeDate === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveDate('all')}
          >
            All
            {activeDate === 'all' && (
              <motion.div layoutId="st-indicator" className="st-active-indicator" />
            )}
          </button>
          
          {dateOptions.map((date) => (
            <button 
              key={date.id} 
              className={`st-date-btn ${activeDate === date.id ? 'active' : ''}`} 
              onClick={() => setActiveDate(date.id)}
            >
              <span className="st-day">{date.day}</span>
              <span className="st-date-num">{date.date}</span>
              <span className="st-month">{date.month}</span>
              {activeDate === date.id && (
                <motion.div layoutId="st-indicator" className="st-active-indicator" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Top Grid */}
      <motion.div className="st-grid st-margin-bottom" variants={containerVariants} initial="hidden" animate="visible">
        {topEvents.map((event) => (
          <motion.div className="st-card" key={event.id} variants={cardVariants}>
            <div className="st-card-image"><img src={event.image} alt={event.title} /></div>
            <div className="st-card-content">
              <h2>{event.title}</h2>
              <p className="st-description">{event.description}</p>
              <span className="st-time">{event.time}</span>
              <div className="st-card-actions">
                <button className="st-btn-outline">MORE INFO</button>
                <button className="nav-btn-book">BOOK NOW</button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Hero Banner */}
      <motion.div 
        className="st-hero-banner"
        variants={bannerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="st-hero-content-inner">
          <div className="st-hero-text">
            <h2>Classical Music Concert</h2>
            <p>An elegant affair inspired by timeless traditions — where refined ambiance, sophisticated attire, and curated music or performances create an atmosphere of grace and cultural richness.</p>
          </div>
          <div className="st-card-actions st-banner-actions">
            <button className="st-btn-outline st-btn-white">MORE INFO</button>
            <button className="nav-btn-book">BOOK NOW</button>
          </div>
        </div>
      </motion.div>

      {/* Bottom Grid */}
      <motion.div className="st-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        {bottomEvents.map((event) => (
          <motion.div className="st-card" key={event.id} variants={cardVariants}>
            <div className="st-card-image"><img src={event.image} alt={event.title} /></div>
            <div className="st-card-content">
              <h2>{event.title}</h2>
              <p className="st-description">{event.description}</p>
              <span className="st-time">{event.time}</span>
              <div className="st-card-actions">
                <button className="st-btn-outline">MORE INFO</button>
                <button className="nav-btn-book">BOOK NOW</button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <div className="st-show-more-container">
        <motion.button className="nav-btn-book">
          SHOW MORE
        </motion.button>
      </div>

    </div>
  );
};

export default Showtime;