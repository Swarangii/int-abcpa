import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ChevronDown, ChevronRight, Menu } from 'lucide-react';
import './Leadership.css';
import bannerimage from "../../../public/Leadership/bannerimage.png"
import breadcrumbIcon from "../../../public/assets/breadcrumbIcon.svg"
import leaderPhotoSrc from "../../../public/Leadership/zb.png"

const tabs = ["Founders", "Trustees", "Executive Committee", "Advisory Council", "Management"];

const leaders = [
  { id: 1, name: "Damubhai Jhaveri", role: "Founder Member | The Custodian of a Cultural Continuum",image: leaderPhotoSrc, bio: "Indian National Theatre was shaped by Damubhai Jhaveri's unwavering belief that culture must belong to the people..." },
  { id: 2, name: "Mansukhbhai Joshi", role: "Co-Founder",image: leaderPhotoSrc, bio: "Details for Mansukhbhai Joshi..." },
  { id: 3, name: "Rohit Dave", role: "Co-Founder",  image: leaderPhotoSrc, bio: "Details for Rohit Dave..." },
  { id: 4, name: "Chandravadan Bhat", role: "Co-Founder",image: leaderPhotoSrc, bio: "Details for Chandravadan Bhat..." },
  { id: 5, name: "M R A Baig", role: "Member",image: leaderPhotoSrc, bio: "Details for M R A Baig..." },
  { id: 6, name: "Dr. GY Chitnis", role: "Member",image: leaderPhotoSrc, bio: "Details for Dr. GY Chitnis..." },
  { id: 7, name: "Narayan Mistry", role: "Member",image: leaderPhotoSrc, bio: "Details for Narayan Mistry..." },
];

const chunkArray = (arr, size) => 
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const LeadershipReplica = () => {
  const [activeTab, setActiveTab] = useState("Founders");
  const [expandedId, setExpandedId] = useState(1);

  const groupedLeaders = chunkArray(leaders, 4);

  return (
    <div className="page-leadership">
      {/* <Header /> */}
      <Hero />

      <main className="main-content-leadership">
        <h1 className="title-serif-leadership">Leadership</h1>
        <p className="subtitle-serif-leadership">
          The Indian National Theatre was not shaped by a single vision, but by a convergence of conviction, scholarship, discipline, and civic thought. Its founders and pioneering members built more than productions, they built frameworks. They strengthened rehearsal rooms, formalised stagecraft, documented living traditions, and articulated culture as public responsibility. Together, they ensured that INT would endure not as momentary success, but as an institution. That shared foundation continues to guide the INT Aditya Birla Centre for Performing Arts.
        </p>
        
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid-container-leadership">
          {groupedLeaders.map((group, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {group.map((leader) => (
                <div 
                  key={leader.id} 
                  className={`leader-card-leadership ${expandedId === leader.id ? 'selected-leadership' : ''}`}
                  onClick={() => setExpandedId(expandedId === leader.id ? null : leader.id)}
                >
                  <div className="image-aspect-placeholder-leadership">
                  {/* Replace the empty mask div with an actual image tag */}
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="leader-photo-leadership" 
                      />
                  </div>
                  <div className="label-footer-leadership">
                    <span className="label-name-leadership">{leader.name}</span>
                    {expandedId === leader.id ? <ChevronDown size={18} /> : <ChevronRight size={18} className="inactive-icon-leadership" />}
                  </div>
                </div>
              ))}

              <AnimatePresence>
                {group.some(leader => leader.id === expandedId) && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bio-box-expansion-leadership"
                  >
                    <BioPanel leader={leaders.find(l => l.id === expandedId)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
};

// UI Components
const Header = () => (
  <nav className="navbar-leadership">
    <div className="nav-group-leadership desktop-only-leadership">
      <a>HOME</a>
      <div className="dropdown-leadership">ABOUT <ChevronDown size={12}/></div>
      <div className="dropdown-leadership">LEGACY <ChevronDown size={12}/></div>
      <div className="dropdown-leadership">INITIATIVES <ChevronDown size={12}/></div>
    </div>
    <div className="logo-centre-leadership">
      <img src="/logo-replica.png" alt="Aditya Birla Centre" />
    </div>
    <div className="nav-group-right-leadership">
      <div className="desktop-only-leadership dropdown-leadership">PULSE & PAGE <ChevronDown size={12}/></div>
      <a>HELLO</a>
      <button className="book-now-btn-leadership">BOOK NOW</button>
      <Search size={20} className="desktop-only-leadership text-maroon-leadership" />
      <User size={20} className="text-maroon-leadership"/>
      <Menu size={20} className="mobile-only-leadership text-maroon-leadership"/>
    </div>
  </nav>
);

const Hero = () => (
  <header className="hero-leadership">
    <div className="stage-overlay-leadership"></div>
    <img src={bannerimage} alt="Spotlight Stage" className="stage-chair-leadership" />
    <div className="about-breadcrumbs">
        <span>HOME</span> <img src={breadcrumbIcon} alt="" /> <span>ABOUT</span> <img src={breadcrumbIcon} alt="" /> <span>MANAGEMENTS</span> 
    </div>
  </header>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => (
  <div className="tabs-container-leadership">
    {tabs.map((tab) => (
      <button key={tab} className={`tab-leadership ${activeTab === tab ? 'active-leadership' : ''}`} onClick={() => setActiveTab(tab)}>
        {tab}
        {activeTab === tab && <motion.div layoutId="slider" className="slider-leadership" />}
      </button>
    ))}
  </div>
);

const BioPanel = ({ leader }) => (
  <div className="bio-inner-leadership">
    <h2 className="bio-name-oxygen-leadership">{leader.name}</h2>
    <p className="bio-role-label-leadership">{leader.role}</p>
    <div className="bio-text-justify-leadership">
      <p>{leader.bio}</p>
    </div>
  </div>
);

export default LeadershipReplica;