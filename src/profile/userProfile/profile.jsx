import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin, LogOut, Calendar as CalendarIcon } from 'lucide-react';
import './profile.css';
import Bookings from '../bookings/Bookings';
import Address from '../address/Address';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Navigation Items
  const navItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'bookings', label: 'My Bookings', icon: Calendar },
    { id: 'address', label: 'My Address', icon: MapPin },
    { id: 'logout', label: 'Logout', icon: LogOut, isAction: true }
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.4, staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="account-page-wrapper">
      <motion.div 
        className="account-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Breadcrumbs - Desktop Only */}
        <motion.div variants={itemVariants} className="breadcrumbs">
          <span className="bc-link">HOME</span>
          <span className="bc-separator">•</span>
          <span className="bc-current">MY ACCOUNT</span>
        </motion.div>

        {/* Page Title */}
        

        <div className="account-layout">
            <div className="side-content">
                <motion.h1 variants={itemVariants} className="page-title">
          My Account
        </motion.h1>
          {/* Sidebar / Mobile Tabs */}
          <motion.aside variants={itemVariants} className="account-sidebar">
            <nav className="account-nav">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;
                
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.01, x: item.isAction ? 0 : 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => !item.isAction && setActiveTab(item.id)}
                    className={`nav-item ${isActive ? 'active' : ''} ${item.isAction ? 'action-item' : ''}`}
                  >
                    <Icon className="nav-icon" size={18} />
                    {item.label}
                  </motion.button>
                );
              })}
            </nav>
          </motion.aside>
            </div>
          {/* Main Content Area */}
          <motion.main variants={itemVariants} className="account-content">
            {activeTab === 'profile' && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="profile-section"
              >
                <h2 className="section-title">My Profile</h2>
                
                <form className="profile-form">
                  <div className="form-grid">
                    
                    <motion.div variants={itemVariants} className="form-group">
                      <label>First Name</label>
                      <input type="text" defaultValue="Rahul" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="form-group">
                      <label>Last Name</label>
                      <input type="text" defaultValue="Seth" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="form-group">
                      <label>Email Address</label>
                      <input type="email" defaultValue="rahul.seth@example.com" readOnly className="readonly-input" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" defaultValue="+91 1234567890" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="form-group relative">
                      <label>Birthday Date</label>
                      <div className="input-with-icon">
                        <input type="text" placeholder="DD/MM/YY" />
                        <CalendarIcon className="input-icon" size={16} />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="form-group">
                      <label>City</label>
                      <input type="text" defaultValue="Mumbai" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="form-group full-width">
                      <label>Gender</label>
                      <select defaultValue="Male">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </motion.div>

                  </div>

                  <motion.div variants={itemVariants} className="form-actions">
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#6A0F13" }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="save-btn"
                    >
                      SAVE
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            )}

            {/* Placeholders for other tabs */}
            {activeTab === 'bookings' && <div className="placeholder-content"><Bookings/></div>}
            {activeTab === 'address' && <div className="placeholder-content"><Address/></div>}
          </motion.main>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;