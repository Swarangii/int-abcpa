import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import './BlogPage.css';

const blogData = [
  {
    id: 1,
    title: 'Alternative Vinyas : An Essential Book for a Rich Cultural Experience',
    author: 'Admin',
    date: 'Jun 08,2025',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop',
    isPrimary: true, // First button is solid in the design
  },
  {
    id: 2,
    title: "The word drama doesn't suit me anymore Rajendra Panchal",
    author: 'Admin',
    date: 'Jun 08,2025',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    isPrimary: false,
  },
  {
    id: 3,
    title: 'Color Institute and Theater Training in the Corona period',
    author: 'Admin',
    date: 'Jun 08,2025',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    isPrimary: false,
  },
  {
    id: 4,
    title: 'Rewa City and Theater Activities',
    author: 'Admin',
    date: 'Jun 08,2025',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    isPrimary: false,
  }
];

export default function BlogPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="blog-page-wrapper">
      <div className="blog-page-container">
        
        {/* Breadcrumbs */}
        <div className="blog-page-breadcrumbs blog-page-normal-text">
          HOME <span className="blog-page-arrow">▸</span> <span className="blog-page-current">PULSE & PAGE</span>
        </div>

        {/* Header Area */}
        <div className="blog-page-header-area">
          <h2 className="blog-page-heading">Insights from the Community</h2>
          
          <div className="blog-page-controls">
            <div className="blog-page-filter">
              <span className="blog-page-filter-label blog-page-normal-text">YEAR</span>
              <div className="blog-page-filter-value-box">
                <span className="blog-page-filter-value blog-page-normal-text">2026</span>
                <ChevronDown size={16} className="blog-page-icon" />
              </div>
            </div>
            
            {/* Search Button */}
            <button className="blog-page-search-btn">
              <Search size={20} color="currentColor" className="blog-page-search-icon" />
              <span className="blog-page-search-text blog-page-normal-text">SEARCH</span>
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <motion.div 
          className="blog-page-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogData.map((post) => (
            <motion.div key={post.id} variants={fadeUpVariant} className="blog-page-card">
              
              <div className="blog-page-image-container">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-page-image" 
                />
              </div>

              <div className="blog-page-content">
                <h3 className="blog-page-subheading">{post.title}</h3>
                <p className="blog-page-meta blog-page-normal-text">
                  {post.author} <span className="blog-page-meta-divider">|</span> {post.date}
                </p>
                
                <button 
                  className={`blog-page-read-btn blog-page-normal-text ${
                    post.isPrimary ? 'blog-page-btn-solid' : 'blog-page-btn-outline'
                  }`}
                >
                  READ
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <div className="blog-page-footer">
          <button className="blog-page-show-more-btn blog-page-normal-text">
            SHOW MORE
          </button>
        </div>

      </div>
    </div>
  );
}