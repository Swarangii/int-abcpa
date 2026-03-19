import React, { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import './About.css';

// Import your placeholder/actual assets here
import maskHeroImg from "../../../public/assets/mask-banner.png"; 
import vintageTheatreImg from "../../../public/assets/honourImg.png";
import historyImg1 from "../../../public/assets/hist1.png";
import historyImg2 from "../../../public/assets/hist2.png";
import historyImg3 from "../../../public/assets/hist3.png";
// import smallAvatarImg from "../../../public/assets/avatar.png";
import visionIcon from "../../../public/assets/visionIcon.svg";
import missionIcon from "../../../public/assets/goalIcon.svg";
import iconIntegrity from "../../../public/assets/integrityIcon.svg";
import iconCommitment from "../../../public/assets/comitmentIcon.svg";
import iconPassion from "../../../public/assets/passionIcon.svg";
import iconSeamlessness from "../../../public/assets/seamlessnessIcon.svg";
import iconSpeed from "../../../public/assets/speedIcon.svg";
import centerLogoImg from "../../../public/assets/logo.svg";
import auditoriumImg from "../../../public/assets/auditoriumImg.png"
// Reusable animation variants matching your project style
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.2 } }
};

const revealFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const revealFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const statisticsData = [
  { id: 1, target: 1944, suffix: "", label: "Founding year" },
  { id: 2, target: 10000, suffix: "+", label: "Artists" },
  { id: 3, target: 243, suffix: "", label: "Beneficiaries" },
  { id: 4, target: 4500, suffix: "+", label: "Performances" }
];

const historyData = [
  {
    id: 1,
    image: historyImg1,
    reverse: false,
    paragraphs: [
      "By the 1950s, it pioneered folk ballets such as Jesal Toral (1951) and staged mobile performances like Grow More Food, taking theatre to the streets atop lorries. Productions such as Dekh Teri Bambai (1959) travelled internationally, representing India at the World Theatre Festival in Paris and showcasing Mumbai's cultural spirit to global audiences.",
      "Across the 1960s and 70s, Indian National Theatre became synonymous with experimentation and regional authenticity. From Atmaram Bhende's Marathi adaptations of Samuel Beckett and Karel Čapek to Mansukh Joshi's folk epics and pioneering Parsi-English collaborations, the institution fostered a vibrant performance culture. Iconic productions including Batatyachi Chaal, Yayati, Napoleon and Santu Rangili explored themes of identity, class, modernity and memory cementing INT's position as a cultural thought-leader. Its Raas-Garba competitions, Urdu mushairas, city-wide festivals and dance ballets turned Mumbai into a thriving artistic landscape and shaped generations of rasiks.",
      "Collaborations between Hima Kala Kendra and Adi Marzban expanded the reach into English theatre, presenting ten plays over twenty-four years including Kiss and Tell, Wait Until Dark, and Two-Way Man."
    ]
  },
  {
    id: 2,
    image: historyImg2,
    reverse: true, // This flag swaps the layout to right-aligned image
    paragraphs: [
      "Across decades, Indian National Theatre trained and inspired artists such as Smita Patil, Amrish Puri, Sanjeev Kumar, Sarita Joshi, Amol Palekar, Ashok Saraf, Tiku Talsania, Pravin Joshi, Swaroop Sampat, Burjor Patel, Swati Chitnis, Rohini Hattangadi, Bhakti Barve, P.L. Deshpande, Satish Dubhashi, Shriram Lagoo, Sadashiv Amrapurkar, Mohan Agashe, Atul Parchure, Shivaji Satam, Ankush Choudhari, Bharat Jadhav, Siddharth Jadhav, Sameer Chougule, Spruha Joshi, Aditi Sarangdhar, Paresh Rawal, Adwait Dadarkar, Veena Jamkar, Sukhada Ayare, Pallavi Patil, Aarti More, Rutuja Bagwe, Bhagyashree Milind, Phiroz Antia, Suhas Joshi, Atmaram Bhende, etc.",
      "Nurturing young talent was equally central to its mission. Under the steady, imaginative leadership of Vatsala Mehta, the Children's Theatre Academy staged eleven full-length children's dramas, creating a foundational training space for young performers and introducing countless children to the world of theatre. This became one of Indian National Theatre's most cherished legacies, ensuring that creativity passed organically from one generation to the next."
    ]
  },
  {
    id: 3,
    image: historyImg3,
    reverse: false,
    paragraphs: [
      "With the establishment of its Research Centre in 1978, it began systematically documenting and reviving India's folk arts, preserving more than thirty forms such as Garba, Bhavai, Ras, Akhyans, Kirtans, Lavani and Powada. Through workshops, festivals, publications and a growing library and audio-visual archive, Indian National Theatre became one of India's most respected cultural resource centres. The 1980s and 90s saw greater focus on arts education, international collaborations, and training through Kamlakar Sontakke's Theatre Course, solidifying its role as both a performance stage and a cultural school.",
      "By the early 2000s, Indian National Theatre stood as a pillar of India's performing arts, an institution that had evolved with the times while remaining anchored in its founding ideals. It had grown from a flame lit in captivity to a nationally recognised platform that nurtured artists, documented traditions, and shaped the country's theatrical landscape."
    ]
  }
];

const valuesData = [
  { id: 1, title: "Integrity", icon: iconIntegrity },
  { id: 2, title: "Commitment", icon: iconCommitment },
  { id: 3, title: "Passion", icon: iconPassion },
  { id: 4, title: "Seamlessness", icon: iconSeamlessness },
  { id: 5, title: "Speed", icon: iconSpeed },
];
const AnimatedCounter = ({ target, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString('en-US') + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { 
        duration: 2, 
        ease: "easeOut" 
      });
      return controls.stop;
    }
  }, [isInView, target, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};
const About = () => {
  return (
    <div className="about-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-image-container">
            <img src={maskHeroImg} alt="Theatre Masks" className="about-hero-img" />
            <div className="about-breadcrumbs">
                <span>HOME</span> &bull; <span>ABOUT</span>
            </div>
        </div>
      </section>

      {/* 2. LEGACY CONTENT SECTION */}
      <section className="about-legacy-section">
        <motion.div 
            className="about-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
          <motion.h1 className="about-main-heading" variants={fadeInUp}>
            Honouring Legacy, Shaping What's Next
          </motion.h1>

          <div className="about-legacy-grid">
            <motion.div className="about-legacy-text-col" variants={revealFromLeft}>
              <p>
                INT Aditya Birla Centre for Performing Arts carries forward the enduring legacy of the Indian 
                National Theatre, one of India's oldest and most influential performing arts institutions. It was 
                conceived inside a Bombay prison on 5 May 1944, at the height of India's freedom struggle.
              </p>
              <p>
                Indian National Theatre emerged from young revolutionaries who believed art could echo the 
                heartbeat of a rising nation. Founded by Rohit Dave, Damu Jhaveri, Mansukh Joshi, M.R.A. Baig, 
                Chandrakant Dali, Dr. G.Y. Chitnis, Narayan Mistri and Chandravadan Bhatt, it became a 
                transformative force that revived folk traditions, shaped modern theatre, and created a national 
                platform for artistic expression.
              </p>
              <p>
                From multilingual mushairas and early ballets like Mirabai (1944), Amrapali and Narsaiyo, to the 
                cultural landmark production Discovery of India (1947), Indian National Theatre quickly became a 
                hub where India's artistic identity took shape.
              </p>
              <p>
                From Awaz by Ismat Chughtai (Hindi, 1945) to Lagnani Bedi (Gujarati, 1949), Indian National 
                Theatre redefined the way audiences engaged with theatre, drawing crowds to ticket windows 
                rather than homes.
              </p>
            </motion.div>

            <motion.div className="about-legacy-image-col" variants={revealFromRight}>
              <div className="about-vintage-wrapper">
                <img src={vintageTheatreImg} alt="Historical Indian National Theatre Performance" className="about-vintage-img" />
                {/* <div className="about-avatar-overlay">
                    <img src={smallAvatarImg} alt="User Avatar" />
                </div> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. STATISTICS SECTION */}
      <section className="about-statistics-section">
        <motion.div 
            className="about-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
        >
          <motion.h2 className="about-stats-heading" variants={fadeInUp}>
            The Statistics
          </motion.h2>

          <div className="about-stats-grid">
            {statisticsData.map((stat) => (
              <motion.div className="about-stat-card" key={stat.id} variants={fadeInUp}>
                {/* 3. Implement the Custom Animated Counter */}
                <h3 className="about-stat-number">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </h3>
                <p className="about-stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. NEW DEEP DIVE HISTORY SECTION */}
      <section className="about-history-section">
        <div className="about-container">
          {historyData.map((block) => (
            <motion.div 
              className={`about-history-row ${block.reverse ? 'reverse-layout' : ''}`} 
              key={block.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {/* Dynamic animation: If reversed, image comes from right. If standard, image comes from left. */}
              <motion.div 
                className="about-history-img-col" 
                variants={block.reverse ? revealFromRight : revealFromLeft}
              >
                <img src={block.image} alt="History Archive" />
              </motion.div>

              <motion.div 
                className="about-history-text-col"
                variants={block.reverse ? revealFromLeft : revealFromRight}
              >
                {block.paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- The INTABCPA Era Section --- */}
      <section className="about-era-section">
        <motion.div 
          className="about-container" // Removed about-era-content from here
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Heading is now at the top, outside the flex container */}
          <motion.h2 className="about-section-title" variants={fadeInUp}>
            The INTABCPA Era
          </motion.h2>

          {/* New inner wrapper to handle the side-by-side layout */}
          <div className="about-era-content">
            <div className="era-text-column">
              <motion.p variants={fadeInUp}>
                In 2004, a new chapter began with the Aditya Birla Group's support. The partnership formalised a shared vision to sustain the arts while preparing them for a contemporary audience. Under the guidance of Smt. Rajashree Birla, Indian National Theatre was renamed the INT Aditya Birla Centre for Performing Arts (INTABCPA).
              </motion.p>
              <motion.p variants={fadeInUp}>
                INTABCPA was inaugurated in 2010 at Babulnath, Mumbai, establishing a vibrant space for theatre, dance, and music. In the redevelopment phase, the Centre's stage never dimmed. INTABCPA continued to present performances across Mumbai's leading venues, The Royal Opera House, Nehru Centre, Tata Theatre and St. Andrew's presenting more than 65+ productions that kept its rhythm alive.
              </motion.p>
              <motion.p variants={fadeInUp}>
                In 2026, a new reimagined and refurbished centre was inaugurated. This centre includes an auditorium, mini theatre, rehearsal & training spaces, audio recording studios, fine dining restaurant and cafés, a campus where artists and audiences meet in creative dialogue.
              </motion.p>
            </div>
            
            <motion.div className="era-image-column" variants={fadeInUp}>
              <img src={auditoriumImg} alt="INTABCPA Auditorium" className="era-image" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- Looking Ahead Section (Your existing code) --- */}
      <section className="about-future-section">
        <motion.div 
          className="about-container about-future-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
        >
          <motion.h2 className="about-section-title centered" variants={fadeInUp}>
            Looking Ahead
          </motion.h2>
          <motion.p variants={fadeInUp}>
            Today, this rich legacy continues at INT Aditya Birla Centre for Performing Arts, where tradition meets innovation, and India's artistic heritage is reimagined for the future. Its vision is to be a global destination for the performing arts, where Indian creativity engages the world with confidence and grace.
          </motion.p>
          <motion.p variants={fadeInUp}>
            The Centre remains a home where creators rehearse ideas, audiences discover new worlds, and the timeless vision lives on resonant, inclusive and ever-evolving.
          </motion.p>
        </motion.div>
      </section>

        {/* 6. VISION & MISSION */}
        <section className="about-vml-section">
          <motion.div 
            className="about-container about-vml-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Left: Vision */}
            <motion.div className="about-vml-block" variants={fadeInUp}>
              <img src={visionIcon} alt="Vision Icon" className="about-vml-icon" />
              <h3 className="about-vml-title">Our Vision</h3>
              <p className="about-vml-text">
                To be a global Centre of excellence for the performing arts, an aspirational home for creativity and cultural exchange.
              </p>
            </motion.div>

            {/* Center: Graphic (Hidden on Mobile) */}
            <motion.div className="about-vml-center-graphic" variants={fadeInUp}>
              <img src={centerLogoImg} alt="INT Aditya Birla Centre Logo" />
            </motion.div>

            {/* Right: Mission */}
            <motion.div className="about-vml-block" variants={fadeInUp}>
              <img src={missionIcon} alt="Mission Icon" className="about-vml-icon" />
              <h3 className="about-vml-title">Our Mission</h3>
              <p className="about-vml-text">
                To foster diverse eclectic genres in the performing arts and to engage, educate, amplify, entertain and inspire audiences through an experiential journey.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* 7. OUR VALUES */}
        <section className="about-values-section">
          <motion.div 
            className="about-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="about-values-header" variants={fadeInUp}>
              <h2 className="about-section-title centered">Our Values</h2>
              <p className="about-values-subtitle">
                Rooted in Indian National Theatre's founding spirit and the values that the Aditya Birla Group endorses, INT Aditya Birla Centre for Performing Arts upholds authenticity, inclusivity, and artistic excellence. It believes in theatre as a catalyst for thought, emotion, and social dialogue, a craft that shapes both the individual and the collective imagination.
              </p>
            </motion.div>

            <div className="about-values-grid">
              {valuesData.map((val) => (
                <motion.div 
                  className="about-value-card" 
                  key={val.id} 
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 15px 30px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img src={val.icon} alt={val.title} className="about-value-icon" />
                  <h4 className="about-value-title">{val.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
    </div>
  );
};

export default About;