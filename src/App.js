import logo from './assets/images/Appmine logo new BG black.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppMineExperience from './pages/AppMineExperience/AppMineExperience';
import AppDevelopment from './pages/AppDevelopment';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import SlideOnScroll from './components/Essentials/SlideOnScroll/SlideOnScroll';
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
    setTimeout(() => {
      document.getElementById('splash').classList.add('hidden')
      document.getElementById('splash').classList.add('opacity-0')
      document.getElementById('splash').classList.add('scale-0')
    }, 5000);
  },[])

  return (
    <div className="App relative bg-[#F4E7D3 bg-black text-white overflow-x-hidden">
      
      <div id='splash' className='w-screen  absolute flex items-center justify-center z-[1000] h-screen  bg-black'>
        <img src={logo} className='h-20 animate-pulse' alt="" />
      </div>

  {/* <Navbar/> */}
      {/* <WebDevelopment/>  */}
      <AppMineExperience/>
      {/* <AppDevelopment/> */}
      {/* <SlideOnScroll/> */}
      {/* <ShaderCc:\Users\91703\Downloads\phoneblack.glbDgrids/> */}
    
    </div>
  );
}

export default App;
