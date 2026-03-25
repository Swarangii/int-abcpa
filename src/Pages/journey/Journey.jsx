import React, { useState, useEffect } from 'react';
import './Journey.css';
import { motion } from 'framer-motion';
import maskHeroImg from "../../../public/journey/banner.png"; 
import breadcrumbIcon from "../../../public/assets/breadcrumbIcon.svg";
import img1 from "../../../public/journey/1944.png";
import img2 from "../../../public/journey/1947.png";
import img3 from "../../../public/journey/1951.png";
import img4 from "../../../public/journey/1978.png";

const timelineData = [
  {
    id: 1,
    year: "1944",
    content: ["Laid the foundation of Indian National Theatre."],
    image: img1,
    imageFirst: true,
  },
  {
    id: 2,
    year: "1947",
    content: [
      "Discovery of India, inspired by Pandit Jawaharlal Nehru's work, marked its beginning and set the tone for socially conscious theatre.",
    ],
    image: img2,
    imageFirst: false,
  },
  {
    id: 3,
    year: "1951",
    hasBullets: true,
    content: [
      "Ballet 'By 1951' based on the slogan 'Grow more Food' brought performance to the streets, turning lorries into moving stages. Dekh Teri Bambai (1959) travelled beyond India, reaching audiences at the World Theatre Festival in Paris.",
      "From Awaz by Ismat Chughtai (Hindi, 1945) to Lagnani Bedi (Gujarati, 1949), Indian National Theatre redefined the way audiences engaged with theatre, drawing crowds to ticket windows rather than homes.",
      "Collaborations between Hima Kasarkod and Adi Marzban expanded Indian National Theatre's reach into English theatre, presenting ten plays over twenty-four years including Kiss and Tell, Wait Until Dark, and Two-Way Man.",
      "Across decades, Indian National Theatre trained and inspired artists such as Smita Patil, Amrish Puri, Sanjeev Kumar, Paresh Rawal, and Sarita Joshi, Amol Palekar, Ashok Saraf, Tiku Talsania, Pravin Joshi, Swaroop Sampat, Burjor Patel, Swati Chitnis, Rohini Hattangadi, Bhakti Barve, P.L Deshpande, Satish Dubhashi, Shriram Lagoo, Sadashiv Amrapurkar, Mohan Agashe, Atul Parchure, Shivaji Satam, Ankush Chaudhari, Bharat Jadhav, Siddharth Jadhav, Sameer Chougule, Spruha Joshi, Aditi Sarangdhar, Adwait Dadarkar, Veena Jamkar, Sukhada Khandkekar, Pallavi Patil, Aarti More, Rutuja Bagwe, Bhagyashree Milind, Phiroz Antia, Suhas Joshi, Atmaram Bhende, etc.",
    ],
    image: img3,
    imageFirst: true,
  },
  {
    id: 4,
    year: "1978",
    content: [
      "In 1978, the Research Centre began documenting India's folk art traditions, reviving more than 30 forms including Garba, Bhavai, Ras, Akhyana, Kirtans, Lavni, and Powada. Through festivals, workshops, & journals, Indian National Theatre built one of the country's most comprehensive archives of folk expression.",
      "This commitment to preservation remains the Centre's foundation, keeping performance alive not as nostalgia, but as continuity.",
    ],
    image: img4,
    imageFirst: false,
  },
];

const Journey = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Switch to mobile layout at 992px (Tablet view)
      setIsTablet(window.innerWidth <= 992);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <section className="journey-hero-section">
        <div className="journey-hero-image-container">
          <img src={maskHeroImg} alt="Theatre Masks" className="journey-hero-img" />
          <div className="journey-breadcrumbs">
            <span>HOME</span> <img src={breadcrumbIcon} alt="" /> <span>ABOUT</span><img src={breadcrumbIcon} alt="" /> <span>JOURNEY</span>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Preserving a Living Tradition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Each era in Indian National Theatre's history has carried a defining performance.
          </motion.p>
        </div>

        {isTablet ? (
          /* ========================================= */
          /* 📱 MOBILE & TABLET LAYOUT                 */
          /* ========================================= */
          <div className="timeline-container-mobile">
            <div className="timeline-center-line-mobile"></div>

            {timelineData.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="timeline-row-mobile"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                {/* Dot on the far left main line */}
                <div className="timeline-dot-mobile"></div>

                <div className="timeline-content-mobile">
                  {/* Year Header */}
                  {/* Year Header */}
                  <div className="year-container-mobile">
                    <div className="connector-group-mobile">
                      <span className="horizontal-dash-mobile"></span>
                      <span className="year-dot"></span>
                    </div>
                    <span className="year-text">{item.year}</span>
                  </div>

                  {/* Image */}
                  <div className="timeline-img-wrapper-mobile">
                    <img src={item.image} alt={`Theatre history ${item.year}`} />
                  </div>

                  {/* Text Description */}
                  <div className="timeline-text-wrapper-mobile">
                    {item.content.map((paragraph, i) => (
  <div className="content-bullet" key={i}>
    {/* Conditionally render the bullet based on the data flag */}
    {item.hasBullets && <span className="bullet-point"></span>}
    <p>{paragraph}</p>
  </div>
))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* ========================================= */
          /* 💻 DESKTOP LAYOUT (Your Existing Code)    */
          /* ========================================= */
          <div className="timeline-container">
            <div className="timeline-center-line"></div>

            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`timeline-row ${item.imageFirst ? "image-left" : "image-right"}`}
              >
                <div className="timeline-dot"></div>

                {/* Desktop Left Side */}
                <motion.div
                  className="timeline-half left-half"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {item.imageFirst ? (
                    <div className="timeline-img-wrapper">
                      <img src={item.image} alt={`Theatre history ${item.year}`} />
                    </div>
                  ) : (
                    <div className="timeline-text-wrapper text-right">
                      <div className="year-container year-left">
                        <span className="year-text">{item.year}</span>
                        <div className="connector-group">
                          <span className="year-dot"></span>
                          <span className="horizontal-dash dash-right-fix"></span>
                        </div>
                      </div>
                      {item.content.map((paragraph, i) => (
  <div className="content-bullet" key={i}>
    {/* Conditionally render the bullet based on the data flag */}
    {item.hasBullets && <span className="bullet-point"></span>}
    <p>{paragraph}</p>
  </div>
))}
                    </div>
                  )}
                </motion.div>

                {/* Desktop Right Side */}
                <motion.div
                  className="timeline-half right-half"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {!item.imageFirst ? (
                    <div className="timeline-img-wrapper">
                      <img src={item.image} alt={`Theatre history ${item.year}`} />
                    </div>
                  ) : (
                    <div className="timeline-text-wrapper text-left">
                      <div className="year-container year-right">
                        <span className="year-text">{item.year}</span>
                        {/* NEW: Unified Connector Group */}
                        <div className="connector-group">
                          <span className="year-dot"></span>
                          <span className="horizontal-dash dash-left-fix"></span>
                        </div>
                      </div>
                      {item.content.map((paragraph, i) => (
  <div className="content-bullet" key={i}>
    {/* Conditionally render the bullet based on the data flag */}
    {item.hasBullets && <span className="bullet-point"></span>}
    <p>{paragraph}</p>
  </div>
))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Journey;