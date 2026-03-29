import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Leadership.css";

const TABS = [
  "Founders",
  "Trustees",
  "Executive Committee",
  "Advisory Council",
  "Management",
];

const FOUNDERS_DATA = [
  {
    id: 1,
    name: "Damubhai Jhaveri",
    role: "Founder Member | The Custodian of a Cultural Continuum",
    bio: [
      "Indian National Theatre was shaped by Damubhai Jhaveri's unwavering belief that culture must belong to the people who create and receive it. As Founder and General Secretary of INT for over five decades, he transformed conviction into continuity, giving structure and permanence to a movement born in idealism.",
      "Under his stewardship, INT became a meeting ground of forms, folk vitality alongside modern dramaturgy, alongside urban experimentation in the arena of performing arts. From research-driven initiatives to ambitious productions such as the ballet Discovery of India, he ensured artistic scale was matched by institutional strength. He stood firmly behind distinguished directors and thespians like Vijaya Mehta, Arvind Deshpande, Pravin Joshi, Atmaram Bhende and others, providing the stability that allowed excellence to endure.",
      "At the heart of Damubhai's vision was the understanding that theatre must evolve with time while remaining anchored in its inheritance. As INT's artistic journey expanded, its leading thespians approached the Aditya Birla Group, seeking long-term custodianship and institutional support. The Aditya Group envisioned the creation of a dedicated cultural complex, one that would provide structural strength, technical advancement, and continuity to INT's growing legacy. In 2004, this shared commitment culminated in the establishment of the INT Aditya Birla Centre for Performing Arts, reinforcing infrastructure while preserving the Indian National Theatre's foundational spirit."
    ]
  },
  { id: 2, name: "Mansukh Joshi", role: "Founder Member", bio: ["Details coming soon..."] },
  { id: 3, name: "Rohit Dave", role: "Founder Member", bio: ["Details coming soon..."] },
  { id: 4, name: "Chandravadan Bhat", role: "Founder Member", bio: ["Details coming soon..."] },
  { id: 5, name: "M R A Baig", role: "Founder Member", bio: ["Details coming soon..."] },
  { id: 6, name: "Dr. GY Chitnis", role: "Founder Member", bio: ["Details coming soon..."] },
  { id: 7, name: "Narayan Mistry", role: "Founder Member", bio: ["Details coming soon..."] },
];

export default function Leadership() {
  const [activeTab, setActiveTab] = useState("Founders");
  const [activeProfileId, setActiveProfileId] = useState(1);

  // Group into rows to insert the expanded view directly below the active row
  const row1 = FOUNDERS_DATA.slice(0, 4);
  const row2 = FOUNDERS_DATA.slice(4);

  const activeProfile = FOUNDERS_DATA.find((p) => p.id === activeProfileId);

  const ProfileCard = ({ profile, isActive }) => (
    <div 
      className={`profile-card ${isActive ? "active" : ""}`} 
      onClick={() => setActiveProfileId(profile.id)}
    >
      <div className="profile-image-placeholder">
        {/* SVG Silhouette Placeholder */}
        <svg viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <div className="profile-name-row">
        <span className="profile-name">{profile.name}</span>
        <span className="profile-arrow">›</span>
      </div>
    </div>
  );

  const ExpandedDetails = ({ profile }) => (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="expanded-details-container"
    >
      <div className="expanded-details-content">
        <h3>{profile.name}</h3>
        <span className="expanded-role">{profile.role}</span>
        <div className="expanded-bio">
          {profile.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="leadership-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="breadcrumbs">HOME &gt; ABOUT &gt; MANAGEMENTS</div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Leadership
        </motion.h2>
        
        <motion.p 
          className="intro-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The Indian National Theatre was not shaped by a single vision, but by a convergence of conviction, scholarship, discipline, and civic thought. Its founders and pioneering members built more than productions, they built frameworks. They strengthened rehearsal rooms, formalized stagecraft, documented living traditions, and articulated culture as public responsibility. Together, they ensured that INT would endure not as momentary success, but as an institution. That shared foundation continues to guide the INT Aditya Birla Centre for Performing Arts.
        </motion.p>

        {/* Tabs */}
        <div className="tabs-container">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Area */}
        {activeTab === "Founders" && (
          <motion.div 
            className="profiles-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* ROW 1 */}
            <div className="profiles-row">
              {row1.map((profile) => (
                <ProfileCard 
                  key={profile.id} 
                  profile={profile} 
                  isActive={activeProfileId === profile.id} 
                />
              ))}
            </div>

            {/* EXPANDED DETAILS (Checks if active profile is in Row 1) */}
            <AnimatePresence>
              {activeProfile && row1.some(p => p.id === activeProfileId) && (
                <ExpandedDetails profile={activeProfile} />
              )}
            </AnimatePresence>

            {/* ROW 2 */}
            <div className="profiles-row">
              {row2.map((profile) => (
                <ProfileCard 
                  key={profile.id} 
                  profile={profile} 
                  isActive={activeProfileId === profile.id} 
                />
              ))}
            </div>

            {/* EXPANDED DETAILS (Checks if active profile is in Row 2) */}
            <AnimatePresence>
              {activeProfile && row2.some(p => p.id === activeProfileId) && (
                <ExpandedDetails profile={activeProfile} />
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </section>
    </div>
  );
}