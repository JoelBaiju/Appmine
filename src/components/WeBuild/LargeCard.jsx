import React from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect,useRef } from 'react'
import Button from '../Button/Button';

gsap.registerPlugin(ScrollTrigger);

function LargeCard({WebBg}) {

    

    // const boxRef = useRef(null);
    
    //   useEffect(() => {
    //     gsap.fromTo(
    //       boxRef.current,
    //       { opacity: 0, y: 100 },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         duration: 1,
    //         scrollTrigger: {
    //           trigger: boxRef.current, // The element to trigger the animation
    //           start: "top 100%", // Trigger when the top of the element hits 75% of the viewport
    //           end: "bottom 70%", // End when the bottom hits 25% of the viewport
    //           scrub: true, // Smooth scrubbing
    //         },
    //       }
    //     );
    //   }, []);
    
    
    
    
    
   

  return (
    
       <div className='webBg  relative mx-3 mb-3 rounded-3xl flex md:flex-row flex-col items-center md:w-auto  w-11/12 ' >
             
            <div className='flex flex-col items-left md:pt-20 pt-32 p-20 justify-center md:w-1/2 h-56  rise' >
                <div className='flex flex-row items-center '>
                    <h1 className='text-white text-2xl md:text-4xl font-bold poppins ' >WEB</h1>
                    <h1 className='gradient-text text-4xl md:text-7xl poppins font-bold md:h-20 ' >Developing</h1>
                </div>
                <p className='mb-5 text-white w-10/12 mt-2 md:mt-0 text-sm md:text-lg md:w-7/12 text-left' >We create stunning and responsive web designs tailored to your buisness needs</p>
                <Button texttoshow={"Explore"}/>
            </div>
            <img src={WebBg} className='rounded-3xl md:w-1/2' />
        </div>
    
  )
}

export default LargeCard
