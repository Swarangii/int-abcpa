import React, { useEffect, useState } from 'react'
import './Home.css';
import slide1 from "../../../public/assets/slide-1.png";
import rajashree from "../../../public/assets/rajashree-1.png";
import quote from "../../../public/assets/quotes.png"
import show1 from "../../../public/assets/show-1.png"
import show2 from "../../../public/assets/show-2.png"
import auditoriumImg from "../../../public/assets/auditoriumImg.png"
import miniTheatreImg from "../../../public/assets/miniTheatreImg.png"
import legacyImg from "../../../public/assets/legacyImg.png"
import cafeImg from "../../../public/assets/cafeImg.png"
import diningImg from "../../../public/assets/diningImg.png"
import auditoriumIcon from "../../../public/assets/auditoriam.svg"
import theatreIcon from "../../../public/assets/theatre.svg"
import studioIcon from "../../../public/assets/studio.svg"
import rehersalIcon from "../../../public/assets/rehersal.svg"
import audioRecordingIcon from "../../../public/assets/audioRecording.svg"
import pulse1 from "../../../public/assets/pulse1.png"
import pulse2 from "../../../public/assets/pulse2.png"
import pulse3 from "../../../public/assets/pulse3.png"
import studioImg from "../../../public/assets/studioImg.png"
import auditoriumWhite from "../../../public/assets/auditoriumWhite.svg"
import theatreWhite from "../../../public/assets/TheatreWhite.svg"
import studioWhite from "../../../public/assets/studioWhite.svg"
import rehersalWhite from "../../../public/assets/rehersalWhite.svg"
import audioRecodingWhite from "../../../public/assets/audioRecodingWhite.svg"
import sagaTheatreIcon from "../../../public/assets/intabcpaTop.svg"; 
import sagaMicIcon from "../../../public/assets/intabcpaBottom.svg";
import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';



// * arrays including all the data of images and paragraphs of carousel or related


const slides = [
  {
    id: 1,
    image: slide1,
    title: 'A Stage for Every Story.',
    subtitle: 'Where India’s performing arts meet contemporary creation.',
    buttonText: 'KNOW MORE'
  },
  {
    id: 2,
    image: slide1,
    title: 'A Stage for Every Story.',
    subtitle: 'Where India’s performing arts meet contemporary creation.',
    buttonText: 'KNOW MORE'
  },
  {
    id: 3,
    image: slide1,
    title: 'A Stage for Every Story.',
    subtitle: 'Where India’s performing arts meet contemporary creation.',
    buttonText: 'KNOW MORE'
  },
];
const showtimeData = [
  {
    id: 1,
    image: show1,
    title: 'Romeo & Juliet',
    description: 'When Romeo of the Montagues locks eyes with Juliet of the Capulets, it is love at first sight .. and war at first breath. Their forbidden romance rips through Bollywood backlots, disco-lit nights and tapori street showdowns - bold enough to set an entire city on fire.',
  },
  {
    id: 2,
    image: show2,
    title: 'Zen Katha',
    description: 'A fascinating story of Bodhidharma, a Prince from the ancient kingdom of Kanchi,who was the true founder of Zen and the Martial Arts, as we know them today.',
  },
  {
    id: 3,
    image: show1,
    title: 'The Modern Tempest',
    description: 'A contemporary reimagining of a classic tale, exploring themes of magic, betrayal, and reconciliation in a modern digital age setting.',
  }
];


const culinaryData = [
  {
    id: 1,
    image: cafeImg,
    title: 'All-Day Café',
    desc: 'A relaxed space for conversations, where artists and audiences share a dialogue over coffee.'
  },
  {
    id: 2,
    image: diningImg,
    title: 'Fine Dining Restaurant',
    desc: 'An elegant dining experience that complements the cultural ambience and indulgence of the Centre. It also has live music.'
  }
];


const amenitiesData = [
  {
    id: 1,
    title: 'ADITYA BIRLA\nAUDITORIUM',
    icon: auditoriumIcon,
    hoverIcon: auditoriumWhite
  },
  {
    id: 2,
    title: 'MINI\nTHEATRE',
    icon: theatreIcon,
    hoverIcon: theatreWhite
  },
  {
    id: 3,
    title: 'STUDIO\nROOM',
    icon: studioIcon,
    hoverIcon: studioWhite
  },
  {
    id: 4,
    title: 'REHEARSAL\nSTUDIO',
    icon: rehersalIcon,
    hoverIcon: rehersalWhite
  },
  {
    id: 5,
    title: 'AUDIO RECORDING\nSTUDIO',
    icon: audioRecordingIcon,
    hoverIcon: audioRecodingWhite
  }
];


const pulseData = [
  {
    id: 1,
    image: pulse1,
    date: 'Jun 08,2022',
    title: 'Rewa City and Theater Activities'
  },
  {
    id: 2,
    image: pulse2,
    date: 'Jun 08,2022',
    title: 'Rangkarma is slowly getting back on track.?'
  },
  {
    id: 3,
    image: pulse3,
    date: 'Jun 08,2022',
    title: 'Rangkarma is slowly getting back on track.?'
  },
  // {
  //   id: 4,
  //   image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   date: 'Jul 12,2022',
  //   title: 'Exploring the roots of classical dance'
  // }
];

const performanceSpacesData = {
  Stage: {
    desktopImg: auditoriumImg,
    blocks: [
      {
        title: "Aditya Birla Theatre",
        desc: "A world-class proscenium theatre crafted for drama, dance, and productions. Its design balances acoustics, sightlines, and comfort, giving both artist and audience an immersive experience.",
        isRed: true,
        mobileImg: auditoriumImg,
      },
      {
        title: "Mini Theatre",
        desc: "An intimate performance space for recitals, readings, and smaller showcases. Perfect for emerging artists and experimental works, it brings audiences closer to the art.",
        isRed: false,
        mobileImg: miniTheatreImg,
      }
    ]
  },
  Studio: {
    desktopImg: studioImg,
    blocks: [
      {
        title: "Rehearsal Studio",
        desc: "A professional practice space for ensembles, actors, and choreographers. These 9 studios are designed for preparation and experimentation, it mirrors the energy of the stage before the curtain rises.",
        isRed: true,
        mobileImg: studioImg,
      },
      {
        title: "Studios",
        desc: "A professional practice space for ensembles, actors, and choreographers.",
        isRed: false,
      },
      {
        title: "Audio Recording Studios",
        desc: "State-of-the-art studios equipped for high-quality sound production. Located on the first floor, they support music recording, dubbing, and post-production, ensuring that what begins in rehearsal is captured with precision.",
        isRed: false,
      }
    ]
  }
};

const SPACE_TABS = ['Stage', 'Studio'];

// icons-------------------------------------------
const ChevronLeft = () => (
  <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L4 20L22 38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L20 20L2 38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Replace the old ChevronLeftDark and ChevronRightDark with these:
const ChevronLeftDynamic = ({ color = "#333" }) => (
  <svg width="18" height="30" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L4 20L22 38" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRightDynamic = ({ color = "#333" }) => (
  <svg width="18" height="30" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L20 20L2 38" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// --- Animations ---
const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 3, transition: { duration: 0.7, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 1, y: 20 }, visible: { transition: { staggerChildren: 0.15 } } };
const revealFromLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const revealFromRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const tabTextVariants = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } } };
const tabImageVariants = { hidden: { opacity: 0, scale: 0.95, x: 20 }, visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }, exit: { opacity: 0, scale: 0.95, x: -20, transition: { duration: 0.3, ease: "easeIn" } } };

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [currentShowtimeIndex, setCurrentShowtimeIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
const [activeSpaceTab, setActiveSpaceTab] = useState('Stage');
  const [amenityIndex, setAmenityIndex] = useState(0);
  const [hoveredAmenity, setHoveredAmenity] = useState(null);
  const [pulseIndex, setPulseIndex] = useState(0);

  const nextPulse = () => {
    const maxSlides = isMobile ? pulseData.length - 1 : pulseData.length - 3;
    if (pulseIndex < maxSlides) {
      setPulseIndex(prev => prev + 1);
    } else {
      setPulseIndex(0); 
    }
  };

  const prevPulse = () => {
    if (pulseIndex > 0) {
      setPulseIndex(prev => prev - 1);
    } else {
      const maxSlides = isMobile ? pulseData.length - 1 : pulseData.length - 3;
      setPulseIndex(maxSlides);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 992); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === 0 ? slides.length - 1 : slides.length - 1; 
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
// --- Showtime Logic ---
  // If on tablet/mobile, we show 1 card at a time. If on desktop, we show 2.
  const maxShowtimeIndex = isTablet 
    ? showtimeData.length - 1 
    : Math.max(0, showtimeData.length - 2);

  const nextShowtime = () => {
    if (currentShowtimeIndex < maxShowtimeIndex) {
      setCurrentShowtimeIndex(prev => prev + 1);
    }
  };

  const prevShowtime = () => {
    if (currentShowtimeIndex > 0) {
      setCurrentShowtimeIndex(prev => prev - 1);
    }
  };

  // Determine colors based on whether we can scroll further
  const leftArrowColor = currentShowtimeIndex > 0 ? '#7D0B15' : '#333333';
  const rightArrowColor = currentShowtimeIndex < maxShowtimeIndex ? '#7D0B15' : '#333333';
  return (

    <div>
<div className="carousel-container">
        {isMobile ? (
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        ) : (
          <>
            <button className="carousel-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">
              <ChevronLeft />
            </button>
            <button className="carousel-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">
              <ChevronRight />
            </button>
          </>
        )}

        <motion.div 
          className="carousel-track"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {slides.map((slide) => (
            <div className="carousel-slide" key={slide.id}>
              <div className="carousel-image-wrapper">
                <img src={slide.image} alt={slide.title} className="carousel-image" />
                <div className="carousel-overlay"></div>
              </div>
              
              <motion.div 
                className="carousel-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="carousel-title">{slide.title}</h1>
                <p className="carousel-subtitle">{slide.subtitle}</p>
                <button className="carousel-button">{slide.buttonText}</button>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <section className="home-section-wrapper">
        <div className="container">
        
          <motion.div 
            className="profile-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="profile-image-wrapper" variants={revealFromLeft}>
              <div className="image-backdrop"></div>
              <img 
                src={rajashree}
                alt="Smt. Rajashree Birla" 
                className="profile-img"
              />
            </motion.div>

            <motion.div className="profile-content" variants={revealFromRight}>
              <img src={quote} className='quote-icon' alt="" />
              <p className="profile-text">
                At the heart of the Centre’s journey is Smt. Rajashree Birla, Chairperson of the Aditya Birla Centre for Community Initiatives and Rural Development. Her leadership bridges philanthropy and culture, guided by a belief that service is not obligation but expression. 
                
                <br />Inspired by the Gandhian principle of trusteeship, she views art as a public trust, something to be protected, shared, and passed forward. Her commitment continues the vision of her late husband, Shri Aditya Vikram Birla, whose deep love for performing art inspired generations of artist. Honoured with recognitions including the Padma Bhushan, Lal Bahadur Shastri Award for Excellence, and G20 EMPOWER Lifetime Achievement Award, she remains a leading patron of India’s cultural renaissance. 
              <p className="profile-text">
               Under her stewardship, INTABCPA grows as a living heritage, a place where the roots of tradition and the bloom of innovation perform in perfect synchrony.
              </p>
              </p>
              <div className="profile-author">
                <h3 className="author-name">Smt. Rajashree Birla</h3>
                <span className="author-title">Founder & Chairperson</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="saga-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img src={sagaTheatreIcon} alt="" className="saga-mobile-icon saga-icon-top-left" />
            <img src={sagaMicIcon} alt="" className="saga-mobile-icon saga-icon-bottom-right" />
            <h2 className="saga-title">INTABCPA SAGA</h2>
            <div className="saga-content">
              <p>
                INTABCPA (INT Aditya Birla Centre for Performing Arts) builds on more than eight decades of cultural legacy as a professionally managed performing arts institution advancing theatre, music, dance, and interdisciplinary practice. Its purpose-built infrastructure and carefully shaped curatorial framework enable high-quality productions across genres. The ongoing research and documentation initiatives strengthen institutional memory and contribute to the wider performing arts discourse.
              </p>
              <p>
                 The Centre’s programming reflects a commitment to diversity and artistic depth, fostering meaningful connections between artists and audiences within a vibrant cultural ecosystem.
              </p>
            </div>
            <motion.button 
              className="btn-know-more"
            >
              KNOW MORE
            </motion.button>
          </motion.div>

        </div>
      </section>
    {/* 2. NEW SHOWTIME SECTION */}
      <section className="showtime-section">
        <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="showtime-main-title"
      >
        Showtime
      </motion.h2>
        
        <div className="showtime-carousel-wrapper">
          <div 
            className="showtime-track" 
            style={{ '--slide-index': currentShowtimeIndex }}
          >
            {showtimeData.map((item) => (
              <motion.div 
              className="showtime-card" 
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* Image revealing from LEFT */}
              <motion.div className="showtime-img-wrapper" variants={revealFromLeft}>
                 <img src={item.image} alt={item.title} className="showtime-img" />
              </motion.div>

              {/* Info revealing from RIGHT */}
              <motion.div className="showtime-info" variants={revealFromLeft}>
                <h3 className="showtime-title">{item.title}</h3>
                <p className="showtime-desc">{item.description}</p>
                <div className="showtime-buttons">
                  <motion.button  className="showtime-btn-outline">
                    MORE INFO
                  </motion.button>
                  <motion.button  className="showtime-btn-solid">
                    BOOK NOW
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        {/* Controls */}
        <motion.div 
        className="showtime-controls"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button 
          onClick={prevShowtime} 
          className="showtime-arrow-btn"
          disabled={currentShowtimeIndex === 0}
          style={{ cursor: currentShowtimeIndex === 0 ? 'default' : 'pointer' }}
        >
          <ChevronLeftDynamic color={leftArrowColor} />
        </button>
        
        <button className="showtime-btn-view-all">VIEW ALL</button>
        
        <button 
          onClick={nextShowtime} 
          className="showtime-arrow-btn"
          disabled={currentShowtimeIndex === maxShowtimeIndex}
          style={{ cursor: currentShowtimeIndex === maxShowtimeIndex ? 'default' : 'pointer' }}
        >
          <ChevronRightDynamic color={rightArrowColor} />
        </button>
      </motion.div>
      </section>
{/* 4. PERFORMANCE SPACES SECTION */}
      <section className="ps-section">
        <div className="container">
          <motion.div 
          className="ps-header-row"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="ps-main-title">Performance Spaces</h2>
          <div className="ps-tabs">
            {SPACE_TABS.map((tab) => (
              <button
                key={tab}
                className={`ps-tab ${activeSpaceTab === tab ? 'active' : ''}`}
                onClick={() => setActiveSpaceTab(tab)}
                aria-pressed={activeSpaceTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

          {/* Content Layout - Wrapped in AnimatePresence for smooth tab switching */}
        <AnimatePresence mode="wait">
          {/* The 'key' prop is crucial here. When activeSpaceTab changes, 
            Framer Motion knows to unmount the old div (triggering 'exit') 
            and mount the new one (triggering 'initial' -> 'animate').
          */}
          <motion.div 
            key={activeSpaceTab} 
            className="ps-content-row"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="ps-text-col" variants={tabTextVariants}>
              {performanceSpacesData[activeSpaceTab].blocks.map((block, index) => (
                <React.Fragment key={block.title}>
                  <div className="ps-block">
                    <h3 className={`ps-block-title ${block.isRed ? 'red-title' : ''}`}>
                      {block.title}
                    </h3>
                    <p className="ps-block-desc">{block.desc}</p>
                  </div>

                  {block.mobileImg && (
                    <img src={block.mobileImg} className="ps-mobile-img" alt={block.title} />
                  )}

                  {index === 0 && <hr className="ps-divider" />}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Desktop Only Main Image */}
            <motion.div className="ps-img-col" variants={tabImageVariants}>
              <img 
                src={performanceSpacesData[activeSpaceTab].desktopImg} 
                className="ps-desktop-img" 
                alt={`Performance Space ${activeSpaceTab}`} 
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        </div>
      </section>

      {/* 5. LEGACY LIBRARY SECTION */}
      <section className="legacy-section">
      <div className="container">
        
        {/* Mobile-only Title - Fades up gently on smaller screens */}
        <motion.h2 
          className="legacy-main-title legacy-mobile-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          Legacy Library
        </motion.h2>

        {/* Content Row acts as the stagger parent */}
        <motion.div 
          className="legacy-content-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Image slides in from the LEFT */}
          <motion.div className="legacy-img-col" variants={revealFromLeft}>
            <img src={legacyImg} className="legacy-img" alt="Legacy Library Archives" />
          </motion.div>

          {/* Text content slides in from the RIGHT */}
          <motion.div className="legacy-text-col" variants={revealFromRight}>
            {/* Desktop-only Title */}
            <h2 className="legacy-main-title legacy-desktop-title">Legacy Library</h2>
            <h3 className="legacy-subtitle">Where the past performs for the future.</h3>
            
            <p className="legacy-desc">
              Since 1944, the Indian National Theatre has stood alongside India's creative 
              journey, nurturing voices, staging new ideas, and shaping audiences.
            </p>
            <p className="legacy-desc">
              The archives at the INT Aditya Birla Centre for Performing Arts trace this 
              evolution, capturing the milestones, memories, and people who built one of 
              India's longest-standing cultural legacies.
            </p>
            
            {/* Added the interactive hover/tap scale to the button */}
            <motion.button 
              className="btn-know-more legacy-btn"
            >
              KNOW MORE
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </section>

      {/* 6. CULINARY EXPERIENCE SECTION */}
      <section className="ce-section">
      <div className="container">
        <motion.h2 
          className="ce-main-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Culinary Experience
        </motion.h2>
        <motion.div 
          className="ce-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          variants={staggerContainer}
        >
          {culinaryData.map((item) => (
           
            <motion.div 
              className="ce-card" 
              key={item.id}
              variants={fadeInUp} 
            >
              <img src={item.image} alt={item.title} className="ce-image" />
              <div className="ce-overlay"></div>
              <div className="ce-content">
                <h3 className="ce-title">{item.title}</h3>
                <p className="ce-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* 7. AMENITIES / FACILITIES SECTION */}
      <section className="amenity-section">
      <div className="container">
        
        {isTablet ? (
          /* --- MOBILE VIEW: CAROUSEL --- */
          <motion.div 
            className="amenity-carousel-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp} // Fades the whole mobile carousel in gracefully on scroll
          >
            {/* Replaced static CSS transform with Framer Motion animate */}
            <motion.div 
              className="amenity-track"
              animate={{ x: `-${amenityIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {amenitiesData.map((item) => (
                <div className="amenity-slide" key={item.id}>
                  <div 
                    className="amenity-card"
                    onMouseEnter={() => setHoveredAmenity(item.id)}
                    onMouseLeave={() => setHoveredAmenity(null)}
                  >
                    <div className="amenity-icon">
                        <img 
                          src={hoveredAmenity === item.id ? item.hoverIcon : item.icon} 
                          alt={item.title} 
                          className="amenity-svg" 
                        />
                    </div>
                    <h4 className="amenity-title">{item.title}</h4>
                    <motion.button 
                      className="amenity-btn"
                    >
                      BOOK NOW
                    </motion.button>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Dots Pagination */}
            <div className="amenity-dots">
              {amenitiesData.map((_, index) => (
                <button
                  key={index}
                  className={`amenity-dot ${amenityIndex === index ? 'active' : ''}`}
                  onClick={() => setAmenityIndex(index)}
                  aria-label={`Go to amenity ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

        ) : (
          /* --- DESKTOP VIEW: 5 COLUMN GRID --- */
          /* Grid acts as the stagger parent */
          <motion.div 
            className="amenity-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {amenitiesData.map((item) => (
              /* Each card is a staggered child fading up */
              <motion.div 
                className="amenity-card" 
                key={item.id}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredAmenity(item.id)}
                onMouseLeave={() => setHoveredAmenity(null)}
              >
                <div className="amenity-icon">
                  <img 
                    src={hoveredAmenity === item.id ? item.hoverIcon : item.icon} 
                    alt={item.title} 
                    className="amenity-svg" 
                  />
                </div>
                <h4 className="amenity-title">{item.title}</h4>
                <motion.button 
                  className="amenity-btn"
                >
                  BOOK NOW
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>

      {/* 8. PULSE & PAGE SECTION */}
      <section className="pulse-section">
        <div className="container">
          <motion.h2 
            className="pulse-main-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Pulse & Page
          </motion.h2>
          
          <div className="pulse-carousel-wrapper">
            <motion.div 
              className="pulse-track"
              style={{ '--pulse-index': pulseIndex }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {pulseData.map((item) => (
                <motion.div className="pulse-card" key={item.id} variants={staggerContainer}>
                  {/* Image from left */}
                  <motion.div className="pulse-img-wrapper" variants={revealFromLeft}>
                     <img src={item.image} alt={item.title} className="pulse-img" />
                  </motion.div>
                  {/* Info from right */}
                  <motion.div className="pulse-info" variants={revealFromRight}>
                    <p className="pulse-date">{item.date}</p>
                    <h3 className="pulse-title">{item.title}</h3>
                    <a href="#readmore" className="pulse-read-more">READ MORE</a>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <motion.div 
        className="showtime-controls"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button 
          onClick={prevShowtime} 
          className="showtime-arrow-btn"
          disabled={currentShowtimeIndex === 0}
          style={{ cursor: currentShowtimeIndex === 0 ? 'default' : 'pointer' }}
        >
          <ChevronLeftDynamic color={leftArrowColor} />
        </button>
        
        <button className="showtime-btn-view-all">VIEW ALL</button>
        
        <button 
          onClick={nextShowtime} 
          className="showtime-arrow-btn"
          disabled={currentShowtimeIndex === maxShowtimeIndex}
          style={{ cursor: currentShowtimeIndex === maxShowtimeIndex ? 'default' : 'pointer' }}
        >
          <ChevronRightDynamic color={rightArrowColor} />
        </button>
      </motion.div>
        </div>
      </section>

      {/* 9. INTABCPA INSIDER SECTION */}
      <section className="insider-section">
        <motion.div 
          className="container insider-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="insider-title" variants={fadeInUp}>INTABCPA Insider</motion.h2>
          <motion.h3 className="insider-subtitle" variants={fadeInUp}>Sign up to know what's on stage & beyond</motion.h3>
          
          <motion.form 
            className="insider-form" 
            onSubmit={(e) => e.preventDefault()}
            variants={fadeInUp}   
          >
            <input 
              type="email" 
              className="insider-input" 
              placeholder="Enter Your Email address" 
              required 
            />
            
            <label className="insider-checkbox-wrapper">
              <input type="checkbox" className="insider-checkbox" required />
              <span className="insider-disclaimer">
                * I have read, understood, and accept the INT Aditya Birla Centre for Performing Arts Privacy Policy and consent to the sharing of my personal data with INT Aditya Birla Centre for Performing Arts Privacy for the purpose of receiving promotions, other relevant information and personalized services.
              </span>
            </label>
            
            <motion.button 
              type="submit" 
              className="insider-submit-btn"
            >
              SUBMIT
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

    </div>

  );
}

export default Home
