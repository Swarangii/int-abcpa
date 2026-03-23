import React from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react'; // Using Ticket icon to represent the seat/premium badge
import './Bookings.css';
import bookingImg1 from "../../../public/assets/show-1.png"
import bookingImg2 from "../../../public/assets/show-2.png"
const Bookings = () => {
  // Mock data based on your screenshots
  const bookingsData = [
    {
      id: 1,
      title: "Romeo & Juliet",
      image: bookingImg1,
      screen: "Screen 1",
      date: "Tue, 03 March 2026",
      time: "7:00PM",
      venue: "INTABCPA Auditorium, Mumbai",
      ticketType: "M-Ticket",
      seatClass: "Premium",
      seatDetails: "G1, Row 3rd, Seat 1",
      ticketPrice: "450.00",
      fees: "53.10",
      total: "503.00",
    },
    {
      id: 2,
      title: "Zen Katha",
      image: bookingImg2,
      screen: "Screen 1",
      date: "Tue, 02 March 2026",
      time: "7:00PM",
      venue: "INTABCPA Auditorium, Mumbai",
      ticketType: "M-Ticket",
      seatClass: "Premium",
      seatDetails: "G1, Row 3rd, Seat 1",
      ticketPrice: "450.00",
      fees: "53.10",
      total: "503.00",
    }
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bookings-section">
      <h2 className="section-title">My Bookings</h2>

      <motion.div 
        className="bookings-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {bookingsData.map((booking) => (
          <motion.div 
            key={booking.id} 
            variants={cardVariants}
            className={`booking-card ${booking.isHighlighted ? 'highlighted-card' : ''}`}
          >
            {/* Image Container */}
            <div className="booking-image-wrapper">
              <img src={booking.image} alt={booking.title} className="booking-image" />
            </div>

            {/* Details Container */}
            <div className="booking-details">
              
              <div className="booking-header">
                <div>
                  <h3 className="booking-title">{booking.title}</h3>
                  <span className="booking-screen">{booking.screen}</span>
                </div>
                <span className="m-ticket-badge">{booking.ticketType}</span>
              </div>

              <div className="booking-datetime">
                {booking.date} | {booking.time}
              </div>
              <div className="booking-venue">{booking.venue}</div>

              <div className="seat-info">
                <Ticket size={16} className="seat-icon" />
                <span className="seat-class">{booking.seatClass}</span>
                <span className="seat-numbers">{booking.seatDetails}</span>
              </div>

              {/* Pricing breakdown */}
              <div className="pricing-section">
                <div className="price-row">
                  <span className="price-label">Ticket Price</span>
                  <span className="price-value">₹{booking.ticketPrice}</span>
                </div>
                <div className="price-row fees-row">
                  <div>
                    <span className="price-label">Convenience fees</span>
                    <span className="tax-note">Incl. of Tax</span>
                  </div>
                  <span className="price-value">₹{booking.fees}</span>
                </div>
                
                <div className="price-divider"></div>
                
                <div className="price-row total-row">
                  <span className="price-label total-label">Amount Paid</span>
                  <span className="price-value total-value">₹{booking.total}</span>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Bookings;