
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeaderHome from './components/headerHome';
import MainHome from './components/mainHome';
import SidebarHome from './components/sidebarHome';
import SolarSystem from './components/solarSystem';
import SpaceObject from './components/spaceObject';
import AstronomicEvent from './components/astronomicEvent';
import AboutUS from './components/aboutUS';
import BackgroundSet from './components/backgroundSet';
import SpaceExpedition from './components/spaceExpedition';
import AstronomyCalendar from './components/astronomyCalendar';
import Contact from './components/contact';
import Footer from './components/footer';
import TargetCursor from './components/TargetCursor';
import { useEffect } from 'react';
function HomePage() {
  return (
    <>
      <SidebarHome />
      <MainHome />
      <SolarSystem />
      <SpaceObject />
      <AstronomicEvent />
      <AboutUS />
      <Contact />
      <Footer />
    </>
  );
}

function AppContent() {
  useEffect(() => {
    document.body.classList.add('target-cursor-global-hide-cursor');
    return () => {
      document.body.classList.remove('target-cursor-global-hide-cursor');
    };
  }, []);
  const location = useLocation();
  const hideBackground = location.pathname === '/space-expedition' || location.pathname === '/astronomy-calendar';

  return (
    <div className="App">
      <TargetCursor spinDuration={2} hideDefaultCursor parallaxOn hoverDuration={0.2} />
      {!hideBackground && <BackgroundSet />}
      <HeaderHome />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/space-expedition" element={<SpaceExpedition />} />
        <Route path="/astronomy-calendar" element={<AstronomyCalendar />} />
      </Routes>
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;