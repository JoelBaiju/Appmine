import React from 'react'
import apps from '../../assets/videos/Apps.mp4'
import WebBg from '../../assets/videos/Untitled video - Made with Clipchamp.mp4'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpinTextOnScroll from '../Magic/SpinTextOnScroll';
import react from '../../assets/images/atom (1).png'
import dart from '../../assets/images/target.png'
import apple from '../../assets/images/apple.png'
import play from '../../assets/images/playstore.png'
import android from '../../assets/images/android.png'
import tools from '../../assets/images/appsToolsBG.png'

function Part2() {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();


    mm.add("(min-width: 992px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#overview",
          start: "top 40%",
          end: "bottom 70%",

          scrub: 1,
          // markers: true,
          // snap: {
          //   snapTo: 'labels', 
          //   duration: { min: 0, max: 0.0001 }, 
          //   delay: 0, 
          //   ease: "power1.in" 
          // },
        }
      })


        .fromTo(
          "#textarea",
          { translateX: '0rem' },
          { translateX: '-14rem', translateY: '14rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },


        )
        .fromTo(
          "#overview",
          { left: '20%' },
          { left: '25%', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
          '<'
        )


    });






    mm.add("(max-width: 991px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#webuild",
          start: "top 50%",
          end: "top 20%",
          scrub: 1,
          // markers: true,
        }
      })
        .fromTo(
          "#textarea",
          { translateY: '0rem' },
          { translateY: '10rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },


        )
      // .fromTo(
      //   "#overview",
      //   { left: '20%' },
      //   { left: '25%', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
      //   '<'
      // )


    });


  }, []);






  return (
    <div className='bg-white w-screen h-160 p-5 md:p-10'>
      <div className='h-full relative w-full flex  justify-center'>
        <video id='overview' className='w-full md:w-1/2 rounded-2xl border-[1px] border-white black-shadow absolute md:left-[20%] z-20' src={WebBg} muted autoPlay loop ></video>

        <div id='textarea' className=' rounded-2xl md:h-100 md:w-100 h-32 w-full flex absolute black-shadow md:left-[25%] z-10 items-center justify-center bg-neutral-950'>
          <h1 className='md:text-3xl text-xl astralaga'>Mobile Apps</h1>
        </div>



        <div className='md:pl-52 h-full w-11/12 md:w-1/2    text-2xl flex flex-col  justify-end'>
          <div className='h-1/2 flex gmarket font-bold text-neutral-600 justify-center flex-col' >
            <div className='w-1/2 hidden  md:block '>
              <SpinTextOnScroll text={'The Art of Creating Impactful Applications'} />
            </div>
            <div className='w-full mb-4 md:hidden'>
              <h1>The Art of Creating Impactful Applications</h1>
            </div>
            <p className='text-sm w-full'>
              At the heart of our development process lies the passion for creating apps that are as beautiful as they are powerful.
              We believe that technology should seamlessly blend with creativity, ensuring that every app we develop not only meets the highest functional standards but also provides an intuitive and visually stunning experience.
            </p>
            {/* <button className=' px-5 py-1 rounded-xl bg-black'>
            <h1 className='text-xl myshine_gray'>Explore</h1>
          </button> */}
          </div>

        </div>

        <div className='opacity-10 gap-5 w-full h-full flex flex-col justify-end items-end absolute z-10'>

          <img src={tools} className='w-2/3 grayscale-[100%]' alt="" />

        </div>
      </div>

    </div>
  )
}

export default Part2
