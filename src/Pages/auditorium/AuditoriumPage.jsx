import React from 'react';
import { motion } from 'framer-motion';
import './AuditoriumPage.css'; // Updated CSS import

const structuralImages = [
  { id: 1, title: 'Stage dimensions', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Plan of Auditorium', src: 'https://images.unsplash.com/photo-1507676184212-d0330a151f15?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'The INT ABCPA Auditorium', src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'INT ABCPA The Art 1', src: 'https://images.unsplash.com/photo-1582765355150-13f5d5ccfb17?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'INT ABCPA Memorial Events', src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'INT ABCPA Cafe', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { id: 7, title: 'INT ABCPA Box Office', src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop' },
  { id: 8, title: 'INT ABCPA Passage', src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop' },
  { id: 9, title: 'INT ABCPA Paradis', src: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop' }
];

export default function AuditoriumPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="auditorium-page-wrapper">
      
      {/* Hero Section */}
      <div className="auditorium-page-hero">
        <div 
          className="auditorium-page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507676184212-d0330a151f15?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="auditorium-page-breadcrumbs">
          HOME <span>▸</span> SPACES <span>▸</span> ADITYA BIRLA THEATRE
        </div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="auditorium-page-hero-title"
        >
          Aditya Birla Theatre
        </motion.h1>
      </div>

      <div className="auditorium-page-container">
        
        {/* About Section */}
        <motion.div 
          className="auditorium-page-about-section"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="auditorium-page-about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop" 
              alt="Auditorium Seating" 
              className="auditorium-page-about-img"
            />
          </div>
          <div className="auditorium-page-about-content">
            <h2 className="auditorium-page-section-title">The Aditya Birla Theatre</h2>
            <p className="auditorium-page-text">
              The Aditya Birla Theatre is a magnificently designed auditorium with plush seating, superior acoustics, and state-of-the-art technological capabilities. It serves as a prestigious venue for theatrical performances, grand musical concerts, corporate conferences, and cultural extravaganzas.
            </p>
            <p className="auditorium-page-text">
              The architecture of the theatre is inspired by classical Indian aesthetics blended with modern sensibilities. The seating arrangement is meticulously planned to ensure unobstructed views and an immersive experience from every angle.
            </p>
            <p className="auditorium-page-text">
              Equipped with cutting-edge lighting and sound systems, the theatre provides a canvas for artists to bring their visions to life. It stands as a testament to the commitment of providing a world-class platform for the performing arts.
            </p>
            <button className="auditorium-page-btn auditorium-page-btn-primary">BOOK NOW</button>
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div 
          className="auditorium-page-highlights-section"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="auditorium-page-highlights-content">
            <h2 className="auditorium-page-section-title">Highlights</h2>
            <ul className="auditorium-page-highlights-list">
              <li>3 Levels</li>
              <li>Dolby Atmos Sound</li>
              <li>Large auditorium doors for set movement</li>
              <li>VIP Boxes</li>
              <li>3 Levels</li>
              <li>Dolby Atmos Sound</li>
              <li>Large auditorium doors for set movement</li>
              <li>VIP Boxes</li>
            </ul>
          </div>
          <div className="auditorium-page-highlights-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1507676184212-d0330a151f15?q=80&w=800&auto=format&fit=crop" 
              alt="Highlights Auditorium" 
              className="auditorium-page-highlights-img"
            />
          </div>
        </motion.div>

        {/* Structural Setup Section */}
        <motion.div 
          className="auditorium-page-structural-section"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="auditorium-page-section-title auditorium-page-structural-title">Structural Setup</h2>
          
          <motion.div 
            className="auditorium-page-structural-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {structuralImages.map((img) => (
              <motion.div key={img.id} variants={fadeUpVariant} className="auditorium-page-structural-card">
                <img src={img.src} alt={img.title} className="auditorium-page-structural-img" />
                <p className="auditorium-page-structural-caption">{img.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Inquire Now Form Section */}
        <motion.div 
          className="auditorium-page-inquire-section"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="auditorium-page-section-title">Inquire Now</h2>
          
          <form className="auditorium-page-form">
            <div className="auditorium-page-form-grid">
              <div className="auditorium-page-form-group">
                <label>First Name</label>
                <input type="text" className="auditorium-page-input" />
              </div>
              <div className="auditorium-page-form-group">
                <label>Last Name</label>
                <input type="text" className="auditorium-page-input" />
              </div>
              <div className="auditorium-page-form-group">
                <label>Email</label>
                <input type="email" className="auditorium-page-input" />
              </div>
              <div className="auditorium-page-form-group">
                <label>Tel</label>
                <input type="tel" className="auditorium-page-input" />
              </div>
              <div className="auditorium-page-form-group">
                <label>State</label>
                <select className="auditorium-page-input">
                  <option>Select</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                </select>
              </div>
              <div className="auditorium-page-form-group">
                <label>City</label>
                <select className="auditorium-page-input">
                  <option>Select</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                </select>
              </div>
              <div className="auditorium-page-form-group">
                <label>Date</label>
                <input type="date" className="auditorium-page-input" />
              </div>
              <div className="auditorium-page-form-group">
                <label>Interest In</label>
                <select className="auditorium-page-input">
                  <option>Select</option>
                  <option>Booking</option>
                  <option>General Inquiry</option>
                </select>
              </div>
            </div>
            <button type="button" className="auditorium-page-btn auditorium-page-btn-primary auditorium-page-form-btn">
              INQUIRE NOW
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}