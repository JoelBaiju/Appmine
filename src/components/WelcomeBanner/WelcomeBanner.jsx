import React from 'react'
import './WelcomeBanner.css'
import ParticlesBackground from '../particle/ParticlesBackground';
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
  
  


  return (

    <div className='  bg-black flex items-center flex-col justify-center  relative h-screen     '>
        <div className='welcomebannergradient w-full h-screen absolute z-20 '></div>

        <div className='welcomebannerimage ,d:welcomebannerimagephone  w-full h-screen absolute z-10' ><ParticlesBackground/></div>

        <div className='text-white  flex items-center flex-col justify-center rise-animation absolute z-20'>


          <h1 className=" poppins font-semibold md:font-medium poppins  gradient-text text-center text-4xl md:text-8xl" >
            Welcome To <br/> Appmine Studio
          </h1>

          <p className='poppins font-extralight md:text-xl mt-5'>The ultimate destination for software solutions</p>



          <button className='   mt-5 border-2 border-neutral-700 text-sm flex flex-col justify-center items-center px-6 py-1 rounded-3xl text-center hover:bg-appmine transition-all duration-300 ease-out cursor-pointer  ' onClick={viewportfolio}>View Portfolio</button>
        </div>

    
    </div>
  )
}

export default WelcomeBanner







{/* <h1 className="font-bold poppins-semibold text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
Welcome To <br/> Appmine Studio
</h1>  */}
