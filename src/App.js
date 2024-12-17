import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppMineExperience from './pages/AppMineExperience/AppMineExperience';
import gsap from 'gsap';
import ParticlesBackground from './components/particle/ParticlesBackground';
import { BorderBeam } from './components/MagicUi/BorderBeam';
import About from './components/GetToKnowUs/About';
import PhoneModel from './components/3D/PhoneModel';
import AppDevelopment from './pages/AppDevelopment';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
function App() {

  return (
    <div className="App relative  overflow-x-hidden">
     {/* <AppDevelopment/> */}
      {/* <WebDevelopment/> */}
      <AppMineExperience/>
      {/* <About/> */}
    </div>
  );
}

export default App;
