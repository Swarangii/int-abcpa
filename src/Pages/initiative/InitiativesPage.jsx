import React from 'react';
import { motion } from 'framer-motion';
import './InitiativesPage.css'; 

const initiativesData = [
  {
    id: 1,
    title: 'Virasat: Rooted in Tradition. Resonating in Today.',
    description: "Virasat is INT Aditya Birla Centre for Performing Arts' annual tribute to India's classical legacy — a reminder that heritage is not something we inherit passively, but something we uphold with intention. Rooted in vintage sensibilities and timeless narratives...",
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop', // Placeholder for Virasat Poster
  },
  {
    id: 2,
    title: 'Inter-Collegiate Drama Competition (ICDC)',
    description: "For fifty remarkable years, the Inter-Collegiate Drama Competition (ICDC) has stood at the heart of INTABCPA's commitment to nurturing the next generation of theatre-makers.",
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop', // Placeholder for Campus Poster
  },
  {
    id: 3,
    title: 'Chance (Talent Program) A Stage for the Brave. A Spotlight for the Unheard.',
    description: "CHANCE, INTABCPA's flagship talent IP, is our commitment to that moment. A weekly platform where emerging performers step into the light with nothing but their craft, their courage, and their truth. No autotune. No filters. Just the art, as it is meant to be.",
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop', // Placeholder for Chance Poster
  },
  {
    id: 4,
    title: 'Campus Ambassador Programme Where the Next Generation of Cultural Leaders Take Root',
    description: "At INTABCPA, we believe that the future of the performing arts is shaped not only onstage, but also in the minds, voices, and creative instincts of young people. Our Campus Ambassador Programme is designed to nurture that future, one campus, one cohort, one cultural spark at a time.",
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop', // Placeholder for Campus Ambassador Poster
  }
];

export default function InitiativesPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="initiatives-page-wrapper">
      
      {/* Hero Section */}
      <div className="initiatives-page-hero">
        <div 
          className="initiatives-page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583855282680-6db3502ea287?q=80&w=1920&auto=format&fit=crop')" }} 
        />
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="initiatives-page-hero-title"
        >
          INT Initiatives
        </motion.h2>
      </div>

      <div className="initiatives-page-container">
        
        {/* Breadcrumbs */}
        <div className="initiatives-page-breadcrumbs">
          HOME <span className="initiatives-page-arrow">▸</span> <span className="initiatives-page-current">INT INITIATIVES</span>
        </div>

        {/* Initiatives Grid */}
        <motion.div 
          className="initiatives-page-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {initiativesData.map((item) => (
            <motion.div key={item.id} variants={fadeUpVariant} className="initiatives-page-card">
              
              <div className="initiatives-page-card-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="initiatives-page-card-img"
                />
              </div>
              
              <h3 className="initiatives-page-card-title">{item.title}</h3>
              <p className="initiatives-page-text">{item.description}</p>
              
              <button className="initiatives-page-btn">
                KNOW MORE
              </button>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}