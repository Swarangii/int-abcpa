import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BlogInner.css';
import Facebook from "../../../public/flashback-media/Facebook.svg";
import Instagram from "../../../public/flashback-media/Instagram.svg";
import twitter from "../../../public/flashback-media/twitter.svg";
import Linkedin from "../../../public/flashback-media/Linkedin.svg";

// Note: Replace these with your actual local imports
const placeholderHero = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop";
const similar1 = "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?q=80&w=600&auto=format&fit=crop";
const similar2 = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop";

const articleData = {
  id: 'alternative-vinyas',
  breadcrumb: 'HOME > PRINT & PULP',
  title: 'Alternative Vinyas : An Essential Book for a Rich Cultural Experience',
  date: 'Jan 12, 2026',
  categories: ['National', 'Music'],
  heroImage: placeholderHero,
  paragraphsPart1: [
    "The proliferation of Gharanas gave rise to bewildering styles of singing. Further, there was no exchange of ideas among the Gharanas, because of the element of competition among their patrons.",
    "1.1. The Music of India, today, flourishes in two main forms: the Hindustani or Uttaradi (North Indian music) & the Karnataka or Dakshinadi Sangeeta (South Indian music). Both the systems have common origins and spring from the traditional Music of India. But, owing to historical reasons, and intermingling of cultures, the two systems started to diverge around 14th Century, giving rise to two modes of Music."
  ],
  paragraphsPart2: [
    "The Music across North India, thus, came to be stratified into styles of various court-music. Each was known as a Gharana ('family' or 'house'), named after its patron (such as: Gwalior Gharana, Patiala Gharana, Jaipur Gharana and so on). Each ruler desired to have his very own personalized Gharana of music. And if no particular geographical region could be identified then a Gharana would take the name of the founder; as for instance: Imdadkhani Gharana named after the great Imdad Khan (1848 -1920) who served in the Royal Courts of Mysore and Indore.",
    "4.3. The proliferation of Gharanas gave rise to bewildering styles of singing. Further, there was no exchange of ideas among the Gharanas, because of the element of competition among their patrons. Each Gharana guarded its technique as a secret; and each lived into an island. Performing to please the patron had taken priority; and, the theoretical aspects were left far behind. Music had become a practical craft. Attempts at standardization did not begin until the twentieth century when Pandit V. N. Bhatkhande worked out a system of classification."
  ]
};

const similarPosts = [
  { id: 1, title: 'Color Institute and Theater Training in the Corona period', author: 'Admin', date: 'Jan 09, 2025', image: similar1 },
  { id: 2, title: 'Rewa City and Theater Activities', author: 'Admin', date: 'Jan 09, 2025', image: similar2 },
];

// --- Framer Motion Variants ---
const pageAnimations = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const slideUpItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const BlogInner = () => {
  const [data] = useState(articleData);
    // const [activeItem, setActiveItem] = useState(flashbackData[0]);
  
    // if (!activeItem) return <div>Loading...</div>;
  

  return (
    <motion.div 
      className="cultural-page-root"
      variants={pageAnimations}
      initial="initial"
      animate="animate"
    >
         {/* Hero Section */}
              <div className="auditorium-page-hero">
                <div 
                  className="auditorium-page-hero-bg"
                  style={{ backgroundImage: "url('../../../public/blog/banner.png')" }}
                />
                <div className="auditorium-page-breadcrumbs">
                  HOME <span>▸</span> BLOG <span>▸</span> Alternative Vinyas...
                </div>
                {/* <motion.h1 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="auditorium-page-hero-title"
                >
                  Aditya Birla Theatre
                </motion.h1> */}
              </div>
        
              {/* MOBILE BREADCRUMB - Visible only on Mobile/Tablet, placed after the banner */}
              <div className="auditorium-page-breadcrumbs-mobile">
                HOME <span style={{"color":"#7D0B15"}}>▸</span> BLOG <span style={{"color":"#7D0B15"}}>▸</span> <span style={{"color":"#7D0B15"}}>Alternative Vinyas...</span>
              </div>
        
      <div className="cultural-container">
        

        <div className="cultural-layout-grid">
          
          {/* Left Sidebar (Adapted from Flashback) */}
          <aside className="blg-side-wrapper">
            {/* Date Block */}
            <div className="blg-side-block">
              <span className="blg-side-date">{data.date}</span>
            </div>
            
            {/* Share Block */}
            <div className="blg-side-block blg-side-share">
              <h4>SHARE THIS</h4>
              <div className="blg-side-socials">
                <button aria-label="Share on Facebook"><img src={Facebook} alt="Facebook" /></button>
                <button aria-label="Share on LinkedIn"><img src={Linkedin} alt="LinkedIn" /></button>
                <button aria-label="Share on X"><img src={twitter} alt="X" /></button>
                <button aria-label="Share on Instagram"><img src={Instagram} alt="Instagram" /></button>
              </div>
            </div>

            {/* Categories Block */}
            <div className="blg-side-block blg-side-cats">
              <h4>CATEGORIES</h4>
              <div className="blg-side-tags">
                {data.categories.map((cat, index) => (
                  <span key={index} className="blg-side-tag">{cat}</span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Main Article Content */}
          <motion.article 
            className="cultural-main-content"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 className="cultural-article-title" variants={slideUpItem}>
              {data.title}
            </motion.h1>

            <motion.div className="cultural-article-body" variants={slideUpItem}>
              {data.paragraphsPart1.map((para, idx) => (
                <p key={`p1-${idx}`}>{para}</p>
              ))}
            </motion.div>

            <motion.div className="cultural-article-hero" variants={slideUpItem}>
              <img src={data.heroImage} alt={data.title} />
            </motion.div>

            <motion.div className="cultural-article-body" variants={slideUpItem}>
              {data.paragraphsPart2.map((para, idx) => (
                <p key={`p2-${idx}`}>{para}</p>
              ))}
            </motion.div>
          </motion.article>

        </div>

        <hr className="cultural-divider" />

        {/* Similar Posts Section */}
        <section className="cultural-similar-section">
          <h2 className="cultural-similar-heading">Similar Posts</h2>
          <motion.div 
            className="cultural-similar-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {similarPosts.map((post) => (
              <motion.div className="cultural-similar-card" key={post.id} variants={slideUpItem}>
                <div className="cultural-card-img-wrap">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="cultural-card-content">
                  <h3 className="cultural-card-title">{post.title}</h3>
                  <div className="cultural-card-meta">
                    {post.author} | {post.date}
                  </div>
                  <button className="cultural-read-btn">READ</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </motion.div>
  );
};

export default BlogInner;