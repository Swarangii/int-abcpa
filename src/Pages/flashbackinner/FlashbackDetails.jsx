import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FlashbackDetails.css';
import bredcrumbred from "../../../public/flashback-media/breadcrumbred.svg";
import bakiEtihas from "../../../public/flashback-media/baki-etihas.png";
import bhatuki from "../../../public/flashback-media/bhatuki.png";
import housefull from "../../../public/flashback-media/housefull.png";
import intBhiya from "../../../public/flashback-media/int-bhiya.png";
import meredeshkegao from "../../../public/flashback-media/meredeshkegao.png";
import shrugal from "../../../public/flashback-media/shrugal.png";
import Facebook from "../../../public/flashback-media/Facebook.svg";
import Instagram from "../../../public/flashback-media/Instagram.svg";
import twitter from "../../../public/flashback-media/twitter.svg";
import Linkedin from "../../../public/flashback-media/Linkedin.svg";
const flashbackData = [
  {
    id: 'baaki-itihas',
    title: 'Baaki Itihas',
    date: 'Jan 12, 2026',
    image: bakiEtihas,
    categories: ['National', 'Music'],
    content: [
      {
        heading: 'The Writing on the Wall: Why the Middle Class is Still Haunted by Baaki Itihas',
        paragraphs: [
          '"The bourgeoisie might blast and ruin its own world before it leaves the stage of history." This grim prophecy feels less like a political statement and more like the atmospheric pressure inside Badal Sircar\'s Baaki Itihas.',
          'Written in 1965, the play is a ruthless interrogation of the dreary middle class. It captures the suffocating obsession with the trifecta of suburban safety: owning a home, securing a promotion, and maintaining a career. But beneath this veneer of stability lies a numbing apathy toward the monstrously transformational events of the world. It suggests that while we are busy picking out tiles for a kitchen, the other side of history—the wars, the exploitation, the mindless violence—is the real ghost in the room.'
        ]
      },
      {
        heading: 'A Trinity of Imagined Despairs',
        paragraphs: [
          'The play functions as three stories in one, triggered by the unexplained suicide of a professor named Sitanath. As Sharad, a college lecturer, and Vasanti, a writer, attempt to make sense of his death, they inadvertently reveal the rot in their own imaginations.',
          'In Vasanti\'s version, the tragedy is one of domestic betrayal. She imagines a Sitanath who bankrupts himself to shield his wife, Kana, from the reality of her parasitic father. It is a story of land, mortgages, and the desperate desire for a site of land to call one\'s own. It is the tragedy of the bank balance.',
          'In Sharad\'s version, the crisis is one of morality and abnormality. He imagines Sitanath reacting with disproportionate violence to a student reading Nabokov\'s Lolita. Here, the suicide is framed as a breakdown of social order and rigid middle-class values.',
          'Both versions are comfortable because they offer a why. They allow the living to believe that suicide is a result of specific, avoidable failures.'
        ]
      },
      {
        heading: 'A Staging of Silence',
        paragraphs: [
          'Staged by the Indian National Theatre in the 1970s, across two consecutive days in February, the production allowed this unease to surface without emphasis or explanation. Directed by Dinesh Thakur, and featuring performances by both Dinesh Thakur and Minakshi Thakur, the staging remained spare and attentive to silence, pause, and moral fatigue rather than dramatic assertion.',
          'In an era where theater often leaned toward grand gestures and oratorical flourish, Thakur\'s Baaki Itihas was a masterclass in restraint. The production leaned into the power of the pause. It allowed silence to sit heavy in the room, forcing the audience to sit with their own discomfort. There were no dramatic outbursts to provide a cathartic release. Instead, there was only the steady, rhythmic ticking of a clock—a reminder of the time passing for those who suffer while we debate our domestic trivialities.'
        ]
      },
      {
        heading: 'The True Story: When the Ghost Speaks',
        paragraphs: [
          'The power of the legacy of this play lies in the final act: the true story told by Sitanath\'s ghost. This is not a tale of financial ruin or moral outrage. It is the story of a life falling into a routine so aimless and repetitive that it becomes a form of living death.',
          'As Sitanath narrates his descent into the mundane, a terrifying shift occurs. Sharad begins to see himself in the ghost. The boundary between the observer and the observed vanishes until Sharad addresses Sitanath by his own name. The suicide was not an escape from a problem; it was a desperate attempt to stop falling a prey to a meaningless existence. Sitanath chose to leave the stage before the routine could completely hollow him out.'
        ]
      },
      {
        heading: 'Why It Matters Now',
        paragraphs: [
          'Revisiting Baaki Itihas at INTABCPA today reveals a surprising and painful resonance. In the light of stifled uprisings and the weight of suppressed collective cries, our own frustration with callous governance and a terrifying globalisation makes the play more urgent than ever. It addresses a middle class that struggles with the same old obsessions—inane, bored, and scared to read the writing on the wall.',
          'Sircar\'s work does not seek to be relevant; it simply is. It asks whether a life lived in total isolation from the pain of others can ever truly be called successful. It reminds us that while we are busy writing our own small stories, the rest of history is waiting just outside the door, demanding to be acknowledged.'
        ]
      }
    ]
  }
  // Add more articles here...
];
const flashbackItems = [
//   { id: 1, title: 'Mere Desh Ke Gaon', date: 'Nov 04, 2022', image: meredeshkegao },
//   { id: 2, title: 'Baki Itihas', date: 'Nov 04, 2022', image: bakiEtihas },
//   { id: 3, title: 'Miya Fuski', date: 'Nov 04, 2022', image: intBhiya },
  { id: 4, title: 'Batukji Nonyaya {Children}', date: 'Nov 04, 2022', image: bhatuki },
  { id: 5, title: 'Mogarana Saap', date: 'Nov 04, 2022', image: housefull },
  { id: 6, title: 'Shrugal', date: 'Nov 04, 2022', image: shrugal },
];

// Framer Motion Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Delays each card slightly
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 15 } 
  }
};

// --- ANIMATION VARIANTS ---
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } }
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const FlashbackDetail = () => {
  // In a real app, this might come from useParams() or a prop
  const [activeItem, setActiveItem] = useState(flashbackData[0]);

  if (!activeItem) return <div>Loading...</div>;

  return (
    <motion.div 
      className="fbd-page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Hero Banner Area */}
      <section className="fbd-hero-section">
        <nav className="fbd-breadcrumbs">
              HOME <span><img src={bredcrumbred}></img></span> LEGACY <span><img src={bredcrumbred}></img></span> <span className="fbd-current">FLASHBACK</span>
            </nav>
        <div className="fbd-hero-content">
            
          <div className="fbd-hero-text">
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              {activeItem.title}
            </motion.h1>
          </div>
          <motion.div 
            className="fbd-hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={activeItem.image} alt={activeItem.title} />
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="fbd-main-section">
        <div className="fbd-content-grid">
          
          {/* Left Sidebar */}
          <aside className="fbd-sidebar">
            <div className="fbd-meta-block">
              <span className="fbd-date">{activeItem.date}</span>
            </div>
            
            <div className="fbd-meta-block fbd-share-block">
              <h4>SHARE THIS</h4>
              <div className="fbd-social-icons">
                <button aria-label="Share on Facebook"><img src={Facebook}></img></button>
                <button aria-label="Share on LinkedIn"><img src={Linkedin}></img></button>
                <button aria-label="Share on X"><img src={twitter}></img></button>
                <button aria-label="Share on Instagram"><img src={Instagram}></img></button>
              </div>
            </div>

            <div className="fbd-meta-block fbd-categories-block">
              <h4>CATEGORIES</h4>
              <div className="fbd-category-tags">
                {activeItem.categories.map((cat, index) => (
                  <span key={index} className="fbd-tag">{cat}</span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Article Content */}
          <motion.article 
            className="fbd-article"
            variants={contentVariants}
            initial="initial"
            animate="animate"
          >
            {activeItem.content.map((section, index) => (
              <motion.div key={index} className="fbd-article-section" variants={itemVariants}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((para, pIndex) => (
                  <p key={pIndex}>{para}</p>
                ))}
              </motion.div>
            ))}
          </motion.article>

        </div>
        <div className='flashbackInner-cards-divider'></div>
        <motion.div 
              className="flashback-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {flashbackItems.map((item) => (
                <motion.div className="flashback-card" key={item.id} variants={cardVariants}>
                  <div className="flashback-card-image-container">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="flashback-card-info">
                    <span className="flashback-card-date">{item.date}</span>
                    <h3 className="flashback-card-title">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
      </section>
      
    </motion.div>
  );
};

export default FlashbackDetail;