import React from 'react'
import './Journey.css'
import { motion, AnimatePresence } from 'framer-motion';
import maskHeroImg from "../../../public/assets/mask-banner.png"; 
import breadcrumbIcon from "../../../public/assets/breadcrumbIcon.svg"
const timelineData = [
  {
    id: 1,
    year: "1944",
    content: ["Laid the foundation of Indian National Theatre."],
    image: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=600",
    imageFirst: true, // Image on left, text on right for desktop
  },
  {
    id: 2,
    year: "1947",
    content: [
      "Discovery of India, inspired by Pandit Jawaharlal Nehru's work, marked its beginning and set the tone for socially conscious theatre.",
    ],
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=600",
    imageFirst: false, // Text on left, image on right for desktop
  },
  {
    id: 3,
    year: "1951",
    content: [
      "Ballet 'By 1951' based on the slogan 'Grow more Food' brought performance to the streets, turning lorries into moving stages. Dekh Teri Bambai (1959) travelled beyond India, reaching audiences at the World Theatre Festival in Paris.",
      "From Awaz by Ismat Chughtai (Hindi, 1945) to Lagnani Bedi (Gujarati, 1949), Indian National Theatre redefined the way audiences engaged with theatre, drawing crowds to ticket windows rather than homes.",
      "Collaborations between Hima Kasarkod and Adi Marzban expanded Indian National Theatre's reach into English theatre, presenting ten plays over twenty-four years including Kiss and Tell, Wait Until Dark, and Two-Way Man.",
      "Across decades, Indian National Theatre trained and inspired artists such as Smita Patil, Amrish Puri, Sanjeev Kumar, Paresh Rawal, and Sarita Joshi, Amol Palekar, Ashok Saraf, Tiku Talsania, Pravin Joshi, Swaroop Sampat, Burjor Patel, Swati Chitnis, Rohini Hattangadi, Bhakti Barve, P.L Deshpande, Satish Dubhashi, Shriram Lagoo, Sadashiv Amrapurkar, Mohan Agashe, Atul Parchure, Shivaji Satam, Ankush Chaudhari, Bharat Jadhav, Siddharth Jadhav, Sameer Chougule, Spruha Joshi, Aditi Sarangdhar, Adwait Dadarkar, Veena Jamkar, Sukhada Khandkekar, Pallavi Patil, Aarti More, Rutuja Bagwe, Bhagyashree Milind, Phiroz Antia, Suhas Joshi, Atmaram Bhende, etc.",
    ],
    image: "https://images.unsplash.com/photo-1510520638067-c20e2eebfcce?auto=format&fit=crop&q=80&w=600",
    imageFirst: true,
  },
  {
    id: 4,
    year: "1978",
    content: [
      "In 1978, the Research Centre began documenting India's folk art traditions, reviving more than 30 forms including Garba, Bhavai, Ras, Akhyana, Kirtans, Lavni, and Powada. Through festivals, workshops, & journals, Indian National Theatre built one of the country's most comprehensive archives of folk expression.",
      "This commitment to preservation remains the Centre's foundation, keeping performance alive not as nostalgia, but as continuity.",
    ],
    image: "https://images.unsplash.com/photo-1507676184212-d0330a15233c?auto=format&fit=crop&q=80&w=600",
    imageFirst: false,
  },
];
const Journey = () => {
  return (
    <div>
      <section className="about-hero-section">
              <div className="about-hero-image-container">
                  <img src={maskHeroImg} alt="Theatre Masks" className="about-hero-img" />
                  <div className="about-breadcrumbs">
                      <span>HOME</span> <img src={breadcrumbIcon} alt="" /> <span>ABOUT</span>
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

      <div className="timeline-container">
        {/* Central dashed line */}
        <div className="timeline-center-line"></div>

        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-row ${item.imageFirst ? "image-left" : "image-right"}`}
          >
            {/* Dot on the central line */}
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
                  <div className="year-container year-right">
                    <span className="year-text">{item.year}</span>
                    <span className="horizontal-dash dash-right"></span>
                  </div>
                  {item.content.map((paragraph, i) => (
                    <div className="content-bullet" key={i}>
                      <span className="bullet-point"></span>
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
                  <div className="year-container year-left">
                    <span className="horizontal-dash dash-left"></span>
                    <span className="year-text">{item.year}</span>
                  </div>
                  {item.content.map((paragraph, i) => (
                    <div className="content-bullet" key={i}>
                      <span className="bullet-point"></span>
                      <p>{paragraph}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Journey;
