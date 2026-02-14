import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import '../static/css/headerHome.css';

function HeaderHome() {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('mainHome');
  const prevScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle header hide/show
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else if (currentScrollY < prevScrollY.current || currentScrollY < 100) {
        setHidden(false);
      }
      
      prevScrollY.current = currentScrollY;

      // Detect active section
      if (location.pathname === '/') {
        const sections = ['mainHome', 'solarSystem', 'spaceObject', 'astronomicEvent', 'aboutUS', 'contact'];
        const windowHeight = window.innerHeight;
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const isActive = (sectionId) => {
    return location.pathname === '/' && activeSection === sectionId;
  };

  return (
    <motion.nav 
      className="header-nav"
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="header-container">
        <img src="/img/LOGO.png" alt="Logo" className="header-logo" onClick={() => scrollToSection('mainHome')} style={{ cursor: 'pointer' }} />
        <ul className="header-menu">
          <li onClick={() => scrollToSection('mainHome')} style={{ cursor: 'pointer' }}>
            <span className={`menu-num ${isActive('mainHome') ? 'menu-active' : ''}`}>01</span>
            <span className="menu-row">
              <span className="menu-slash">{'//'}</span>
              <span className={isActive('mainHome') ? 'menu-active' : ''}>Home</span>
            </span>
          </li>
          <li onClick={() => scrollToSection('solarSystem')} style={{ cursor: 'pointer' }}>
            <span className={`menu-num ${isActive('solarSystem') ? 'menu-active' : ''}`}>02</span>
            <span className="menu-row">
              <span className="menu-slash">{'//'}</span>
              <span className={isActive('solarSystem') ? 'menu-active' : ''}>Solar system</span>
            </span>
          </li>
          <li onClick={() => scrollToSection('spaceObject')} style={{ cursor: 'pointer' }}>
            <span className={`menu-num ${isActive('spaceObject') ? 'menu-active' : ''}`}>03</span>
            <span className="menu-row">
              <span className="menu-slash">{'//'}</span>
              <span className={isActive('spaceObject') ? 'menu-active' : ''}>Objects</span>
            </span>
          </li>
          <li onClick={() => scrollToSection('astronomicEvent')} style={{ cursor: 'pointer' }}>
            <span className={`menu-num ${isActive('astronomicEvent') ? 'menu-active' : ''}`}>04</span>
            <span className="menu-row">
              <span className="menu-slash">{'//'}</span>
              <span className={isActive('astronomicEvent') ? 'menu-active' : ''}>Events</span>
            </span>
          </li>
          <li onClick={() => scrollToSection('aboutUS')} style={{ cursor: 'pointer' }}>
            <span className={`menu-num ${isActive('aboutUS') ? 'menu-active' : ''}`}>05</span>
            <span className="menu-row">
              <span className="menu-slash">{'//'}</span>
              <span className={isActive('aboutUS') ? 'menu-active' : ''}>About Us</span>
            </span>
          </li>
          <li onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>
            <span className={`menu-num ${isActive('contact') ? 'menu-active' : ''}`}>06</span>
            <span className="menu-row">
              <span className="menu-slash">{'//'}</span>
              <span className={isActive('contact') ? 'menu-active' : ''}>Contacts</span>
            </span>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
export default HeaderHome;