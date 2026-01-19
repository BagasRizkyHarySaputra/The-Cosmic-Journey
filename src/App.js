
import './App.css';
import HeaderHome from './components/headerHome';
import MainHome from './components/mainHome';
import SidebarHome from './components/sidebarHome';
import SolarSystem from './components/solarSystem';
import SpaceObject from './components/spaceObject';
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
    </div>
  );
}

export default App;