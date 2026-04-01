import React, { useState } from 'react';
import './Checkout.css';
import romoe from "../../../public/assets/show-1.png";

// SVG Icons for clean, dependency-free rendering
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function CheckoutPage() {
  const [paymentType, setPaymentType] = useState('card');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="checkout-page-wrapper">
      {/* HEADER */}
      
      <main className="checkout-main-content">
        <div className="checkout-breadcrumbs">
          HOME &gt; MY ACCOUNT &gt; <span> CHECKOUT</span>
        </div>
        
        <h1 className="checkout-page-title">Summary/Checkout</h1>

        <div className="checkout-layout">
          {/* LEFT COLUMN */}
          <div className="checkout-left-column">
            
            {/* Event Summary */}
            <section className="checkout-event-card">
              <div className="checkout-card-header">
                <h2>Event Summary</h2>
                <a href="#" className="checkout-text-link">Change Seats</a>
              </div>
              <div className="checkout-event-details">
                <div className="checkout-event-image">
                  <img src={romoe} alt="Romeo & Juliet" className="checkout-image-placeholder" />
                </div>
                <div className="checkout-event-info">
                  <h3>Romeo & Juliet</h3>
                  <div className="checkout-event-meta">
                    <span>📅 Sat, March 14, 2026</span>
                    <span>🕒 8:00 PM</span>
                  </div>
                  <div className="checkout-event-location">📍 The INTABCPA, Mumbai</div>
                </div>
              </div>
            </section>

            {/* Selected Seats */}
            <section className="checkout-card">
              <div className="checkout-card-header checkout-border-bottom">
                <h2>Selected Seats</h2>
                <span className="checkout-meta-text">3 Seats</span>
              </div>
              <div className="checkout-seat-list">
                <div className="checkout-seat-item">
                  <div>
                    <h4>Row A - Seat 3</h4>
                    <p>VIP / Premium Section</p>
                  </div>
                  <div className="checkout-price">₹ 1149</div>
                </div>
                <div className="checkout-seat-item">
                  <div>
                    <h4>Row A - Seat 7</h4>
                    <p>VIP / Premium Section</p>
                  </div>
                  <div className="checkout-price">₹ 1149</div>
                </div>
                <div className="checkout-seat-item checkout-border-none">
                  <div>
                    <h4>Row D - Seat 7</h4>
                    <p>Main Floor Section</p>
                  </div>
                  <div className="checkout-price">₹ 749</div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="checkout-card">
              <div className="checkout-card-header">
                <h2>Contact Information</h2>
              </div>
              <div className="checkout-form-grid">
                <div className="checkout-form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter" />
                </div>
                <div className="checkout-form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter" />
                </div>
                <div className="checkout-form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="rahul@example.com" />
                </div>
                <div className="checkout-form-group">
                  <label>Contact No.</label>
                  <input type="tel" placeholder="+91" />
                </div>
              </div>
            </section>

            {/* Payment Details */}
            <section className="checkout-card">
              <div className="checkout-card-header">
                <h2>Payment Details</h2>
                <span className="checkout-ssl-badge">🔒 SSL Encrypted</span>
              </div>
              
              <div className="checkout-payment-type-selector">
                <span className="checkout-label-inline">Payment Type :</span>
                <label className="checkout-radio-label">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={paymentType === 'card'} 
                    onChange={() => setPaymentType('card')}
                  />
                  <span className="checkout-radio-custom"></span>
                  Card
                </label>
                <label className="checkout-radio-label">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={paymentType === 'netbanking'} 
                    onChange={() => setPaymentType('netbanking')}
                  />
                  <span className="checkout-radio-custom"></span>
                  Netbanking
                </label>
              </div>

              {paymentType === 'card' && (
                <div className="checkout-payment-form">
                  <div className="checkout-form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="0" />
                  </div>
                  <div className="checkout-form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="Name as shown on card" />
                  </div>
                  <div className="checkout-form-grid checkout-half">
                    <div className="checkout-form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM / YY" />
                    </div>
                    <div className="checkout-form-group">
                      <label>CVV / CVC</label>
                      <input type="password" placeholder="****" />
                    </div>
                  </div>
                </div>
              )}

              <div className="checkout-promo-section">
                <input type="text" placeholder="Promo / Gift Code" />
                <button className="checkout-apply-btn">APPLY</button>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="checkout-right-column">
            <div className="checkout-booking-summary-card">
              <div className="checkout-summary-header">
                <h2 className="checkout-booking-title">Booking Summary</h2>
                <h3>Romeo & Juliet</h3>
                <div className="checkout-summary-meta">
                  <span>📅 Sat, March 14, 2026</span>
                  <span>🕒 8:00 PM</span>
                </div>
              </div>
              
              <div className="checkout-summary-body">
                <div className="checkout-cost-row">
                  <div>
                    <strong>VIP Seats × 2</strong>
                    <p>Row A - Seats 3, 7</p>
                  </div>
                  <span>₹ 2298</span>
                </div>
                <div className="checkout-cost-row">
                  <div>
                    <strong>Main Floor × 1</strong>
                    <p>Row D - Seat 7</p>
                  </div>
                  <span>₹ 749</span>
                </div>
                <div className="checkout-cost-row">
                  <div>
                    <strong>Service Fee</strong>
                    <p>10% of subtotal</p>
                  </div>
                  <span>₹ 49</span>
                </div>
                <div className="checkout-cost-row">
                  <div>
                    <strong>Delivery</strong>
                    <p>e-ticket (instant)</p>
                  </div>
                  <strong>Free</strong>
                </div>

                <div className="checkout-total-row">
                  <div>
                    <span className="checkout-total-label">Total Due</span>
                    <span className="checkout-total-amount">₹ 3,096</span>
                  </div>
                  <span className="checkout-total-tickets">3 tickets</span>
                </div>

                <button className="checkout-pay-btn">PAY ₹ 3,096</button>
                
                <div className="checkout-secure-badge">256-bit SSL - PCI DSS Compliant</div>
                <p className="checkout-terms-text">
                  By completing this purchase, you agree to our Terms of Service and Refund Policy. Tickets are non-refundable within 48 hours of the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}