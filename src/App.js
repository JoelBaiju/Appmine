import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppMineExperience from './pages/AppMineExperience/AppMineExperience';
import gsap from 'gsap';
import ParticlesBackground from './components/particle/ParticlesBackground';
import { BorderBeam } from './components/MagicUi/BorderBeam';
function App() {

  return (
    <div className="App relative  overflow-x-hidden">
     
      <AppMineExperience/>
    </div>
  );
}

export default App;
