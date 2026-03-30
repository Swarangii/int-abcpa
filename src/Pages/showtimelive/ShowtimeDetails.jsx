import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram } from 'lucide-react';
import './ShowtimeDetails.css';
import show1 from "../../../public/assets/show-1.png"
import show2 from "../../../public/assets/show-2.png"
import bookmyshowLogo from "../../../public/showtime/bookmyshow.png"
import artist from "../../../public/showtime/artist.png"
import location from "../../../public/showtime/location.svg"
import call from "../../../public/showtime/call.svg"

// --- CUSTOM HOOK FOR RESPONSIVE JSX ---
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

// --- MOCK DATA ---
const showData = {
  title: "Romeo & Juliet",
  bannerImage: show1,
  aboutText1: "Classical dance is a refined and ancient art form that has evolved over centuries, representing the spiritual, cultural, and artistic ethos of various civilizations. In India, classical dance holds a prominent place as one of the oldest and most revered expressions of heritage. Each classical dance form is rooted in the Natya Shastra, an ancient Sanskrit text on performing arts, and serves as a combination of music, rhythm, movement, and expression. These dances are not just physical performances but are deeply symbolic, often reflecting themes of devotion, mythology, nature, and human emotions. What distinguishes classical dance from other dance styles is its emphasis on abhinaya (expression), mudras (hand gestures), and nritta (pure dance movements), all woven together in a disciplined structure.",
  aboutText2: "There are eight officially recognized classical dance forms in India: Bharatanatyam, Kathak, Odissi, Kuchipudi, Kathakali, Mohiniyattam, Manipuri, and Sattriya. Each of these dances originates from a particular region and carries the cultural and historical influences of that area. For instance, Bharatanatyam, which originated in Tamil Nadu, is known for its linear movements, geometrical poses, and powerful expressions. Kathak, from North India, is celebrated for its graceful spins, rhythmic footwork, and storytelling techniques often derived from epics like the Ramayana and Mahabharata. Odissi from Odisha is recognized for its fluidity and sculpturesque poses that resemble temple art. Kuchipudi from Andhra Pradesh blends drama and dance, where performers sometimes deliver dialogues while dancing. Kathakali, native to Kerala, is visually striking with its elaborate makeup, heavy costumes, and dramatic expressions that bring mythological tales to life. Mohiniyattam, also from Kerala, is more subtle and feminine, with swaying movements and soft expressions. Manipuri from the northeastern state of Manipur is gentle, devotional, and emphasizes the spiritual aspect of dance. Sattriya, the least known but equally significant, hails from Assam and has its roots in Vaishnavite monasteries, focusing on devotional themes.",
  venue: "Aditya Birla Auditorium",
  date: "June 20, 2026",
  time: "9 PM - 11 PM",
  address: "INTABCPA, 38, Dadi Seth Lane, Babulnath, Mumbai 400007, India",
  phone: "8657893038",
  artists: [
    { id: 1, name: "Clint Valladares", role: "Actor, director, writer, producer", image: artist },
    { id: 2, name: "Dr. N. Rajan", role: "Violin", image: artist },
    { id: 3, name: "Clint Valladares", role: "Actor, director, writer, producer", image: artist }
  ]
};
const topEvents = [
  {
    id: 1,
    title: 'Romeo & Juliet',
    description: 'When Romeo of the Montagues locks eyes with Juliet of the Capulets, it is love at first sight .. and war at first breath. Their forbidden romance rips through Bollywood backlots, disco-lit nights and tapori street showdowns - bold enough to set an entire city on fire.',
    time: '15 Jan, 2025 9 PM - 11 PM',
    image: show1
  },
  {
    id: 2,
    title: 'Zen Katha',
    description: 'A fascinating story of Bodhidharma, a Prince from the ancient kingdom of Kanchi,who was the true founder of Zen and the Martial Arts, as we know them today.',
    time: '15 Jan, 2025 9 PM - 11 PM',
    image: show2 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
};

// --- ANIMATION VARIANTS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ShowtimeDetails = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 991px)');
  return (
    <div className="std-page-wrapper">
      
      {/* Breadcrumbs */}
      <nav className="flashback-breadcrumbs">
      HOME <span><div style={{ fontSize: "5px", color: "#545454" }} className="fa">
  &#xf04b;
</div></span>SHOWTIME <div style={{ fontSize: "5px", color: "#7D0B15" }} className="fa">
  &#xf04b;
</div>
<span className="flashback-current">DETAILS </span>
      </nav>

      {/* Main Grid Layout */}
      <motion.div 
        className="std-main-grid"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        
        {/* Banner Area */}
        <motion.div className="std-banner-area" variants={fadeUp}>
          <img src={showData.bannerImage} alt={showData.title} className="std-banner-img" />
        </motion.div>

        {/* Info Card (Right Sidebar on Desktop, Middle on Mobile) */}
        <motion.div className="std-info-area" variants={fadeUp}>
          <div className="std-info-card">
            
            <div className="std-info-header">
              <div className="std-info-group">
                <label>Venue</label>
                <p className="std-maroon-text">{showData.venue}</p>
              </div>
              <button className="std-icon-btn">
                <Instagram size={18} />
              </button>
            </div>

            <div className="std-info-group">
              <label>Date & Time</label>
              <p className="std-maroon-text">{showData.date} {showData.time}</p>
            </div>

            <div className="std-info-group">
              <label>Contact Details</label>
              <div className="std-contact-item">
                <img src={location}></img>
                <p>{showData.address}</p>
              </div>
              <div className="std-contact-item">
                <img src={call}></img>
                <p>{showData.phone}</p>
              </div>
            </div>

            <div className="std-booking-section">
              <label>Book a Ticket on</label>
              {/* Replace with actual BookMyShow logo image */}
              <div className="std-bms-logo">
                 <img src={bookmyshowLogo}></img>
              </div>
              <button className="std-btn-book">BOOK NOW</button>
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div className="std-about-area" variants={fadeUp}>
          <h2>About the Show</h2>
          <p>{showData.aboutText1}</p>
          <p>{showData.aboutText2}</p>
        </motion.div>

        {/* Artists Section */}
        <motion.div className="std-artists-area" variants={fadeUp}>
          <h2>Performing Artists</h2>
          <div className="std-artists-grid">
            {showData.artists.map((artist) => (
              <div className="std-artist-card" key={artist.id}>
                <div className="std-artist-img-wrapper">
                  <img src={artist.image} alt={artist.name} />
                </div>
                <div className="std-artist-info">
                  <h3>{artist.name}</h3>
                  <p>{artist.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
      </motion.div>
      {/* ... Previous code ... */}
      <h2 className='st-bottom-heading'>You may also like</h2>
      
      <motion.div className="st-grid st-margin-bottom" variants={containerVariants} initial="hidden" animate="visible">
        
        {isTabletOrMobile ? (
          /* =========================================
             MOBILE / TABLET: RENDER ONLY ONE CARD
             ========================================= */
          <motion.div className="st-card-mobile-variant" key={`mob-${topEvents[0].id}`} variants={cardVariants}>
            <div className="st-mob-image-wrapper">
              <img src={topEvents[0].image} alt={topEvents[0].title} />
            </div>
            <div className="st-mob-card-content">
              <h2>{topEvents[0].title}</h2>
              <p className="st-mob-description">{topEvents[0].description}</p>
              <span className="st-mob-time">{topEvents[0].time}</span>
              
              <div className="st-mob-card-actions">
                <button className="st-mob-btn-outline">MORE INFO</button>
                <button className="st-mob-btn-book">BOOK NOW</button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* =========================================
             DESKTOP: LOOP THROUGH ALL CARDS
             ========================================= */
          topEvents.map((event) => (
            <motion.div className="st-card" key={`desk-${event.id}`} variants={cardVariants}>
              <div className="st-card-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="st-card-content">
                <h2>{event.title}</h2>
                <p className="st-description">{event.description}</p>
                <span className="st-time">{event.time}</span>
                <div className="st-card-actions">
                  <button className="st-btn-outline">MORE INFO</button>
                  <button className="nav-btn-book">BOOK NOW</button>
                </div>
              </div>
            </motion.div>
          ))
        )}

      </motion.div>
    </div>
  );
};

export default ShowtimeDetails;