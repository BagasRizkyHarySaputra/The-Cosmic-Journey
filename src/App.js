
import './App.css';
import HeaderHome from './components/headerHome';
import MainHome from './components/mainHome';
import SidebarHome from './components/sidebarHome';
import SolarSystem from './components/solarSystem';
import SpaceObject from './components/spaceObject';
import AstronomicEvent from './components/astronomicEvent';
import AboutUS from './components/aboutUS';
import BackgroundSet from './components/backgroundSet';


function App() {
  return (
    <div className="App">
      <BackgroundSet />
      <HeaderHome />
      <SidebarHome />
      <MainHome />
      <SolarSystem />
      <SpaceObject />
      <AstronomicEvent />
      <AboutUS />
    </div>
  );
}

export default App;