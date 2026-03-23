import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import './Address.css';

const Address = () => {
  // State for selections
  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const [addressType, setAddressType] = useState('Home');

  // Mock data based on your screenshots
  const addresses = [
    {
      id: 1,
      title: "Address #1",
      details: "Marvel Residency, Flat No.6,\nNear Malad Police Station, Link Road,\nMalad (West), 400064",
      contact: "098172727272"
    },
    {
      id: 2,
      title: "Address #2",
      details: "Marvel Residency, Flat No.6,\nNear Malad Police Station, Link Road,\nMalad (West), 400064",
      contact: "098172727272"
    }
  ];

  // Framer Motion Variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="address-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          My Address
        </motion.h2>

        {/* Existing Addresses Grid */}
        <motion.div variants={itemVariants} className="address-grid">
          {addresses.map((addr) => {
            const isActive = selectedAddressId === addr.id;
            
            return (
              <motion.div 
                key={addr.id} 
                className={`address-card ${isActive ? 'active-card' : 'inactive-card'}`}
                whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedAddressId(addr.id)}
              >
                <div className="card-header">
                  <label className="custom-radio">
                    <input 
                      type="radio" 
                      name="savedAddress" 
                      checked={isActive}
                      onChange={() => setSelectedAddressId(addr.id)}
                    />
                    <span className="radio-mark"></span>
                  </label>
                  <h3 className="address-title">{addr.title}</h3>
                </div>

                <div className="address-details">
                  {addr.details.split('\n').map((line, index) => (
                    <span key={index}>{line}<br/></span>
                  ))}
                </div>

                <div className="address-contact">
                  Contact Number : {addr.contact}
                </div>

                <div className="card-actions">
                  <button className="btn-edit" onClick={(e) => e.stopPropagation()}>EDIT</button>
                  <button className="btn-remove" onClick={(e) => e.stopPropagation()}>REMOVE</button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Add New Address Section */}
        <motion.div variants={itemVariants} className="add-new-section">
          <div className="add-address-header">
            <PlusCircle className="add-icon" size={24} strokeWidth={2.5} />
            <h2 className="section-title m-0">Add New Address</h2>
          </div>

          <form className="address-form" onSubmit={(e) => e.preventDefault()}>
            
            {/* Address Type Radio Group */}
            <div className="form-group row-group">
              <label className="type-label">Address Type :</label>
              <div className="radio-group">
                <label className="custom-radio type-radio">
                  <input 
                    type="radio" 
                    name="addressType" 
                    value="Home"
                    checked={addressType === 'Home'}
                    onChange={(e) => setAddressType(e.target.value)}
                  />
                  <span className="radio-mark"></span>
                  <span className="radio-label">Home</span>
                </label>
                
                <label className="custom-radio type-radio">
                  <input 
                    type="radio" 
                    name="addressType" 
                    value="Office"
                    checked={addressType === 'Office'}
                    onChange={(e) => setAddressType(e.target.value)}
                  />
                  <span className="radio-mark"></span>
                  <span className="radio-label">Office</span>
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="form-group full-width">
              <label>Address Line1</label>
              <input type="text" placeholder="Building Name, House Number, flat no." />
            </div>

            <div className="form-group full-width">
              <label>Address Line2</label>
              <input type="text" placeholder="Road name, area, colony" />
            </div>

            <div className="form-row-3">
              <div className="form-group">
                <label>City</label>
                <input type="text" defaultValue="Mumbai" />
              </div>

              <div className="form-group">
                <label>Pincode</label>
                <input type="text" defaultValue="400064" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" defaultValue="+91 1234567890" />
              </div>
            </div>

            <div className="form-actions">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#6A0F13" }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="save-btn"
              >
                SAVE
              </motion.button>
            </div>

          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Address;