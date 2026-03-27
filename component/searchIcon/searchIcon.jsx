import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import './searchIcon.css';

export default function AnimatedSearch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClearAndClose = (e) => {
    e.stopPropagation();
    setSearchQuery('');
    setIsExpanded(false);
  };

  return (
    <motion.div 
      ref={containerRef}
      className={`search-wrapper ${isExpanded ? 'is-expanded' : ''}`}
      onClick={() => !isExpanded && setIsExpanded(true)}
      layout
      initial={false}
      /* Magic trick: Framer motion perfectly animates to/from CSS variables! */
      animate={{ width: isExpanded ? '100%' : 'var(--collapsed-width, 160px)' }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{ maxWidth: 800 }} 
    >
      <div className="search-content">
        <Search size={22} className="search-icon-svg" />
        
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.span 
              key="label"
              className="search-text-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              SEARCH
            </motion.span>
          ) : (
            <motion.input
              key="input"
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder="SEARCH"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isExpanded && (
            <motion.button 
              className="close-btn" 
              onClick={handleClearAndClose}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} className="search-icon-svg" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}