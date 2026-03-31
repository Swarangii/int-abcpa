import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import './BlogPage.css';
import AnimatedSearch from '../../../component/searchIcon/searchIcon';
import image from "../../../public/blog/blog.png"

const blogData = [
  {
    id: 1,
    title: 'Alternative Vinyas : An Essential Book for a Rich Cultural Experience',
    author: 'Admin',
    date: 'Jun 08,2025',
    image: image ,
    isPrimary: true, // First button is solid in the design
  },
  {
    id: 2,
    title: "The word drama doesn't suit me anymore Rajendra Panchal",
    author: 'Admin',
    date: 'Jun 08,2025',
    image: image,
    isPrimary: false,
  },
  {
    id: 3,
    title: 'Color Institute and Theater Training in the Corona period',
    author: 'Admin',
    date: 'Jun 08,2025',
    image: image,
    isPrimary: false,
  },
  {
    id: 4,
    title: 'Rewa City and Theater Activities',
    author: 'Admin',
    date: 'Jun 08,2025',
    image: image,
    isPrimary: false,
  }
];

export default function BlogPage() {
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
            
                     <AnimatedSearch/>
           
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