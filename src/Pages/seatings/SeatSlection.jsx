import React, { useState, useEffect } from 'react';
import './SeatSelection.css';

const SEAT_CATEGORIES = {
  PREMIUM: { id: 'premium', name: 'Premium Seats', price: 3500, rows: ['A', 'B', 'C'] },
  STANDARD: { id: 'standard', name: 'Standard Seats', price: 2200, rows: ['D', 'E', 'F', 'G'] },
  BALCONY: { id: 'balcony', name: 'Balcony Seats', price: 1300, rows: ['H', 'I'] }
};

const SECTIONS = [
  {
    name: 'PREMIUM CIRCLE',
    rows: [
      { row: 'A', layout: ['null', 1, 1, 'gap', 1, 1, 1, 1, 'gap', 1, 1, 1, 1, 'null'] },
      { row: 'B', layout: [1, 1, 1, 'gap', 1, 1, 1, 1, 'gap', 1, 1, 1, 1, 1] },
      { row: 'C', layout: [1, 1, 1, 'gap', 1, 1, 1, 1, 'gap', 1, 1, 1, 1, 1] },
    ]
  },
  {
    name: 'GRAND STALLS',
    rows: [
      { row: 'D', layout: ['null', 1, 1, 1, 1, 'gap', 1, 1, 1, 1, 1, 1, 1, 1, 'null'] },
      { row: 'E', layout: ['null', 1, 1, 1, 1, 'gap', 1, 1, 1, 1, 1, 1, 1, 1, 'null'] },
      { row: 'F', layout: [1, 1, 1, 1, 1, 'gap', 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { row: 'G', layout: [1, 1, 1, 1, 1, 'gap', 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    ]
  },
  {
    name: 'BALCONY',
    rows: [
      { row: 'H', layout: [1, 1, 1, 1, 1, 1, 1, 1, 'gap', 1, 1, 1, 1, 1, 1, 1, 1] },
      { row: 'I', layout: [1, 1, 1, 1, 1, 1, 1, 1, 'gap', 1, 1, 1, 1, 1, 1, 1, 1] },
    ]
  }
];

// Based on the grey blocks in your layout image
const UNAVAILABLE_SEATS = [
  'A-2', 'A-8', 'B-5', 'C-1', 'C-4',
  'D-3', 'D-4', 'D-8', 'D-9',
  'E-3', 'E-4', 'E-8', 'E-10',
  'F-9', 'F-14', 'G-4', 'G-5', 'G-9',
  'H-6', 'H-7', 'H-14', 'I-4', 'I-11', 'I-12', 'I-14'
];

export default function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const getSeatCategory = (row) => {
    if (SEAT_CATEGORIES.PREMIUM.rows.includes(row)) return SEAT_CATEGORIES.PREMIUM;
    if (SEAT_CATEGORIES.STANDARD.rows.includes(row)) return SEAT_CATEGORIES.STANDARD;
    return SEAT_CATEGORIES.BALCONY;
  };

  const toggleSeat = (seatId) => {
    if (UNAVAILABLE_SEATS.includes(seatId)) return;
    setSelectedSeats((prev) => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  // Generate dynamic summary data
  const summaryData = selectedSeats.reduce((acc, seatId) => {
    const row = seatId.split('-')[0];
    const category = getSeatCategory(row);
    if (!acc[category.id]) acc[category.id] = { name: category.name, count: 0, total: 0, price: category.price };
    acc[category.id].count += 1;
    acc[category.id].total += category.price;
    return acc;
  }, {});

  const totalAmount = Object.values(summaryData).reduce((sum, cat) => sum + cat.total, 0);

  const renderSeatingGrid = () => {
    return SECTIONS.map(section => (
      <div key={section.name} className="seat-section">
        <h4 className="seat-section-title">{section.name}</h4>
        <div className="seat-section-rows">
          {section.rows.map(rowConfig => {
            let seatNumber = 1;
            return (
              <div key={rowConfig.row} className="seat-row">
                <div className="seat-row-label">{rowConfig.row}</div>
                <div className="seat-group">
                  {rowConfig.layout.map((item, index) => {
                    if (item === 'gap') return <div key={`gap-${index}`} className="seat-aisle"></div>;
                    if (item === 'null') return <div key={`null-${index}`} className="seat-item seat-invisible"></div>;
                    
                    const seatId = `${rowConfig.row}-${seatNumber}`;
                    const isUnavailable = UNAVAILABLE_SEATS.includes(seatId);
                    const isSelected = selectedSeats.includes(seatId);
                    
                    seatNumber++;

                    return (
                      <button
                        key={seatId}
                        className={`seat-item ${isSelected ? 'seat-selected' : ''} ${isUnavailable ? 'seat-unavailable' : ''}`}
                        disabled={isUnavailable}
                        onClick={() => toggleSeat(seatId)}
                        title={`${seatId} - ₹${getSeatCategory(rowConfig.row).price}`}
                        aria-label={`Seat ${seatId}`}
                      >
                        <span className="sr-only">{seatId}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="seat-row-label right">{rowConfig.row}</div>
              </div>
            );
          })}
        </div>
      </div>
    ));
  };

  return (
    <div className="seat-booking-container">
      <div className="seat-main-content">
        
        {/* Left: Interactive Seat Map */}
        <div className="seat-map-section">
          <div className="seat-stage-container">
            <div className="seat-stage-banner">STAGE</div>
            <div className="seat-stage-glow"></div>
          </div>
          
          <div className="seat-seating-area">
            {renderSeatingGrid()}
          </div>
        </div>

        {/* Right: Booking Summary Sidebar (Match Image 2 perfectly) */}
        <aside className="seat-sidebar">
          
          <div className="seat-sidebar-section">
            <h3 className="seat-heading">Seat Availability</h3>
            <div className="seat-legend">
              <div className="seat-legend-item">
                <div className="seat-item seat-dummy seat-selected"></div>
                <span>Selected</span>
              </div>
              <div className="seat-legend-item">
                <div className="seat-item seat-dummy seat-unavailable"></div>
                <span>Unavailable</span>
              </div>
            </div>
          </div>

          <div className="seat-sidebar-section">
            <h3 className="seat-heading">Seat Category</h3>
            <div className="seat-flex-row">
              <span className="seat-text-light">Seat Selection</span>
              <span className="seat-text-maroon">Premium Seats <i className="seat-icon-down"></i></span>
            </div>
          </div>

          <div className="seat-sidebar-section">
            <h3 className="seat-heading">Seat Pricing</h3>
            <div className="seat-flex-row">
              <span className="seat-text-light">Premium (Rows A-C)</span>
              <span className="seat-text-maroon">₹3,500 <i className="seat-icon-down"></i></span>
            </div>
          </div>

          <div className="seat-sidebar-section">
            <h3 className="seat-heading">No of Seats</h3>
            <div className="seat-flex-row">
              <span className="seat-text-light">Members</span>
              <span className="seat-text-maroon">{selectedSeats.length || 0} <i className="seat-icon-down"></i></span>
            </div>
          </div>

          <div className="seat-sidebar-section">
            <h3 className="seat-heading">Selected Seats</h3>
            <div className="seat-selected-chips">
              {selectedSeats.length === 0 ? (
                <p className="seat-text-light" style={{fontSize: '13px'}}>Select seats on the map.</p>
              ) : (
                selectedSeats.map(seat => (
                  <div key={seat} className="seat-chip" onClick={() => toggleSeat(seat)} title="Click to remove">
                    ROW {seat}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="seat-sidebar-section seat-summary-section">
            <h3 className="seat-heading">Summary</h3>
            <div className="seat-summary-list">
              {Object.values(summaryData).map(cat => (
                <div key={cat.name} className="seat-flex-row">
                  <span className="seat-text-light">{cat.name}</span>
                  <span className="seat-text-maroon">{cat.count} x ₹{cat.price.toLocaleString('en-IN')}</span>
                </div>
              ))}
              {selectedSeats.length === 0 && (
                <div className="seat-flex-row">
                  <span className="seat-text-light">No seats selected</span>
                  <span className="seat-text-maroon">0 x ₹0</span>
                </div>
              )}
            </div>
            
            <div className="seat-total-row">
              <span className="seat-total-label">Total</span>
              <span className="seat-total-amount">₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button className="seat-reserve-btn" disabled={selectedSeats.length === 0}>
            RESERVE SEATS
          </button>
        </aside>
      </div>
    </div>
  );
}