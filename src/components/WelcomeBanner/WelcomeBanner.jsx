import React from 'react'
import './WelcomeBanner.css'
function WelcomeBanner() {
  return (
    <div className='  bg-black flex items-center flex-col justify-center  relative h-screen   '>
        <div className='welcomebannergradient w-full h-screen absolute z-20'></div>
        <div className='welcomebannerimage w-full h-screen absolute z-10' ></div>

        <div className='text-white  flex items-center flex-col justify-center rise-animation absolute z-20 '>


          <h1 className=" poppins font-bold  gradient-text text-center text-4xl md:text-5xl leading-" >
            Welcome To <br/> Appmine Studio
          </h1>

          <p className='poppins font-extralight md:text-xl mt-5'>The ultimate destination for software solutions</p>



          <button className='  h-9 w-36 mt-5 border-2 border-neutral-700  rounded-3xl text-center'>View Portfolio</button>
        </div>
    
    </div>
  )
}

export default WelcomeBanner







{/*   
        <h1 className="font-bold poppins-semibold text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Welcome To <br/> Appmine Studio
        </h1> */}