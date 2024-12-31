import React from 'react'
import './WelcomeBanner.css'
import ParticlesBackground from '../particle/ParticlesBackground';
import Plane from '../Objects/Plane';
import { useEffect } from 'react';

function WelcomeBanner() {
  // const viewportfolio=()=>{
  //   const portfolio=document.getElementById('portfolio')
  //   portfolio.scrollIntoView({behavior:'smooth',block:'start'})
  // }

  const viewportfolio = () => {
    const portfolio = document.getElementById('portfolio');
    portfolio.scrollIntoView({ behavior: 'smooth', block: 'start' ,inline:'nearest'})
    // window.scrollTo({ left: 0 })
  };
  
  
 
  useEffect(()=>{
    setTimeout(() => {
      document.getElementById('welcome').classList.add('rise-animation')
      document.getElementById('splash').classList.add('opacity-0')
      document.getElementById('splash').classList.add('scale-0')
    }, 5000);
  },[])

  return (

    <div className='  bg-black flex items-center flex-col justify-center  relative h-screen     '>
        {/* <div className='welcomebannergradient w-full h-screen absolute z-20 '></div> */}


        <div className='welcomebannerimage ,d:welcomebannerimagephone  w-full h-full absolute z-10' ><ParticlesBackground/></div>

        <div id='welcome'  className='text-white  flex items-center flex-col justify-center  absolute z-20'>


          <h1 className=" astralaga font-semibold md:font-medium leading-normal  gradient-text-gra text-[#FFFCE1] text-center text-4xl md:text-8xl" >
          "Transforming Ideas into Masterpieces <span className='text-2xl'> – The Art of Development"  </span>
          </h1>

          <p className='gmarket pt-3  font-extralight md:text-xs mt-5 text-[#ababab] '>Powered by Appmine Studio</p>



          <button className='   mt-5 border-2 border-neutral-700 text-sm text-[#ababab] flex flex-col justify-center items-center px-6 py-1 rounded-3xl text-center transition-all duration-300 ease-out cursor-pointer gmarket myshine_gray ' onClick={viewportfolio}>See Our Gallery</button>
        </div>

    
    </div>
  )
}

export default WelcomeBanner







{/* <h1 className="font-bold poppins-semibold text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
Welcome To <br/> Appmine Studio
</h1>  */}
