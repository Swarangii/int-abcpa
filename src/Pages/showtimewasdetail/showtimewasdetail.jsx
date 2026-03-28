import './showtimewasdetail.css'
import '../../index.css'
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- MOCK ASSETS (Replace with your actual imports) ---
import heroBanner from "../../../public/showtime/banner.png"; 
import gallery1 from "../../../public/showtime/bottom2.png";
import gallery2 from "../../../public/showtime/bottom1.png";
import gallery3 from "../../../public/showtime/bottom2.png";

// --- MOCK DATA ---
const eventData = {
  title: "A Perfect Murder:\nClassic Suspense, Crafted with Precision",
  meta: "4 August 2024 | 7:00 PM | Royal Opera House, Girgaon",
  credits: {
    adapted: "Neeraj Shirvaikar (from Alfred Hitchcock's original story)",
    directed: "Vijay Kenkre",
    cast: "Aniket Vishwasrao (Niranjan), Priya Marathe (Meera), Satish Rajwade (Inspector Gharge), Shrikant Prabhakar (Divyajeet), Subodh Pande (Sohoni/Karmarkar)"
  },
  paragraphs: [
    "A Perfect Murder, adapted by Neeraj Shirvaikar from Alfred Hitchcock's classic, is a taut crime thriller that understands the power of restraint. Set firmly in the 1980s, the play builds its world with meticulous attention to detail, allowing the audience to step into a time where secrets travel slowly, technology offers fewer escapes, and psychological tension carries real weight. The period setting is established with quiet confidence through its set and props—vintage telephones, old-fashioned light switches, desks, and furnishings instantly signal an era far removed from the present. Costumes featuring caps, vests, suspenders and tailored silhouettes reinforce this temporal distance, grounding the narrative in a believable past rather than a stylised abstraction. The set design is particularly effective in creating depth; the space outside the bedroom door suggests a passage and a larger house, lending realism while giving actors the freedom to use the stage dynamically. This spatial intelligence enhances both movement and suspense.",
    "At the heart of the production lies Vijay Kenkre's assured direction. Known for his command over narrative rhythm, Kenkre resists melodrama, allowing tension to simmer rather than explode. His handling of silences, pauses, and entrances—especially those of Inspector Gharge—echoes the measured pacing of Hitchcock's cinema, where anticipation often proves more powerful than action. The plot unfolds with clarity, never losing sight of the emotional motivations driving the characters. Neeraj Shirvaikar's adaptation deserves equal credit. While the skeleton of Hitchcock's original remains intact, the play is infused with a distinctly Marathi sensibility. The dialogue feels natural, the relationships authentic, and the moral ambiguities deeply human. The adaptation respects the intelligence of its audience, inviting them to engage actively with the unfolding mystery rather than spoon-feeding conclusions.",
    "Lighting and sound design play a crucial role in amplifying suspense. Subtle shifts in light heighten unease, while atmospheric sound cues—rainfall, creaking doors, distant silences—immerse the audience in the world of the play. These elements work in harmony, supporting performances without overpowering them. Ultimately, A Perfect Murder succeeds because it balances craft with conviction. It is not merely a puzzle to be solved, but a layered exploration of deceit, control, and consequence. The result is gripping theatre that remains faithful to Hitchcock's legacy while standing confidently on its own."
  ],
  gallery: [gallery1, gallery2, gallery3]
};

// --- FRAMER MOTION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const ShowtimeWasDetail = () => {
  return (
    <div className="ed-page-wrapper">
      
      {/* Top Section: Breadcrumbs & Hero Image */}
      <div className="ed-top-container">
        
        <nav className="ed-breadcrumbs">
          HOME <span className="ed-sep">▸</span> SHOWTIME <span className="ed-sep">▸</span> <span className="ed-current">WAS LIVE</span>
        </nav>

        <motion.div 
          className="ed-hero-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroBanner} alt="A Perfect Murder" className="ed-hero-img" />
        </motion.div>

      </div>

      {/* Content Section */}
      <motion.div 
        className="ed-content-section"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="ed-title" variants={fadeUp}>
          {eventData.title}
        </motion.h1>

        <motion.div className="ed-meta-box" variants={fadeUp}>
          <p className="ed-meta-text">{eventData.meta}</p>
          <p className="ed-credit-text">
            <span className="ed-bold">Adapted by:</span> {eventData.credits.adapted}
          </p>
          <p className="ed-credit-text">
            <span className="ed-bold">Directed by:</span> {eventData.credits.directed}
          </p>
          <p className="ed-credit-text">
            <span className="ed-bold">Cast:</span> {eventData.credits.cast}
          </p>
        </motion.div>

        <motion.div className="ed-description-box" variants={fadeUp}>
          {eventData.paragraphs.map((para, index) => (
            <p key={index} className="ed-paragraph">{para}</p>
          ))}
        </motion.div>

      </motion.div>

      {/* Gallery Section */}
      <motion.div 
        className="ed-gallery-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="ed-subtitle">Photo Gallery</h2>
        
        <div className="ed-gallery-container">
          <button className="ed-gallery-nav ed-nav-left" aria-label="Previous image">
            <ChevronLeft size={36} className="ed-arrow-icon" />
          </button>
          
          <div className="ed-gallery-grid">
            {eventData.gallery.map((imgSrc, i) => (
              <div key={i} className="ed-gallery-item">
                <img src={imgSrc} alt={`Gallery ${i + 1}`} />
              </div>
            ))}
          </div>

          <button className="ed-gallery-nav ed-nav-right" aria-label="Next image">
            <ChevronRight size={36} className="ed-arrow-icon" />
          </button>
        </div>

        {/* Mobile Pagination Dots (CSS Only Display) */}
        <div className="ed-mobile-dots">
          <span className="ed-dot"></span>
          <span className="ed-dot active"></span>
          <span className="ed-dot"></span>
          <span className="ed-dot"></span>
        </div>

      </motion.div>

    </div>
  );
};

export default ShowtimeWasDetail;