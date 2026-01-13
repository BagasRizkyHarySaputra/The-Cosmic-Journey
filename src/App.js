
import './App.css';
import HeaderHome from './components/headerHome';
import MainHome from './components/mainHome';
import SidebarHome from './components/sidebarHome';
import SolarSystem from './components/solarSystem';
import BackgroundSet from './components/backgroundSet';


function App() {
  return (
    <div className="App">
      <BackgroundSet />
      <HeaderHome />
      <SidebarHome />
      <MainHome />
      <SolarSystem />
    </div>
  );
}

export default App;