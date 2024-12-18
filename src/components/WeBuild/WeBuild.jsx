import React from 'react'
import './WeBuild.css'
import WebBg from '../../assets/images/WebBG.png'
import AppsBg from '../../assets/images/Mountain View.gif'
import Game from '../../assets/images/Game.gif'
import LargeCard from './LargeCard'
import joystick from '../../assets/images/rb_63550.png'
import ai from '../../assets/images/Ai-ml-bg.gif'
import Button from '../Button/Button'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

function WeBuild() {





    useEffect(() => {
        const elements = gsap.utils.toArray('.rise');
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 100%",
                        end: "bottom 20%",
                        scrub: true,
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);


    useEffect(() => {
        const elements = gsap.utils.toArray('.overlay');

        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                gsap.to(element, { opacity: 100, duration: 0.1 });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(element, { opacity: 0, duration: 0.1 });
            });
        });

    }, [])






    return (
        <div className=' '>
            <div className='h-40   w-full flex flex-row px-10 pr-14 justify-between items-center' >
                <h1 className=' md:text-5xl text-2xl poppins font-semibold' >We Build</h1>
                <p className='text-sm  text-right md:text-2xl poppins font-medium'  >Anything You Can  <br /> Imagine</p>
            </div>

            <LargeCard WebBg={WebBg} />

            <div className='  w-full flex-col flex md:flex-row ' >

                <div className='  md:w-1/2 w-11/12 mx-3 mb-3 md:mr-1.5 flex flex-row relative aspect-4/3 appsbg rounded-3xl ' >

                    <div className='rounded-3xl opacity-0 transition-all duration-200 ease-in-out overlay w-full h-full absolute z-50 bg-slate-300/10 backdrop-blur-sm poppins flex items-center justify-center'>
                        <h1 className='text-xl text-gray-700 cursor-pointer hover:scale-[1.07] transition-all ease-in-out duration-200 hover:text-gray-950 font-semibold'>Know More <i className="fa-solid fa-arrow-up-right-from-square"></i></h1>
                    </div>

                    <div className='absolute z-20 flex flex-row items-center justify-between w-full md:p-2 md:pt-20 pt-10 '>
                        <div className=' appsheading  flex  flex-col justify-center items-center p-4 ml-3 w-3/12  rounded-3xl rise'>
                            <div>
                                <h1 className='md:text-5xl text-3xl font-bold text-black text-left'>APP</h1>
                                <h1 className='md:text-4xl text-2xl font-bold text-white text-left'>DEV <br />ELO <br />PME <br />NT</h1>
                            </div>
                        </div>
                        <div className='pr-3'>
                            <p className='text-white text-left md:text-2xl text-sm rise'>Our expert <br />team builds <br />robust <br />applications<br />for both ios and <br />android</p>
                        </div>
                    </div>

                </div>







                <div className='  w-11/12 md:w-1/2 mx-3 md:ml-1.5 mb-3 bg-black md:144 rounded-3xl flex flex-col items-center justify-center relative'>

                    <div className='rounded-3xl  opacity-0 transition-all duration-300 ease-in-out overlay w-full h-full absolute z-50 bg-slate-300/10 backdrop-blur-sm poppins flex items-center justify-center'>
                    <h1 className='text-xl text-gray-200 cursor-pointer hover:scale-[1.07] transition-all ease-in-out duration-200 hover:text-gray-50 font-semibold'>Know More <i className="fa-solid fa-arrow-up-right-from-square"></i></h1>
                    </div>
                    <div className='flex flex-row items-center mt-10 m-5 rise'>
                        <h1 className=' text-white text-2xl md:text-4xl font-bold poppins '>GAME</h1>
                        <h1 className='gradient-text-gray text-4xl md:text-7xl poppins font-bold md:h-20 '>Developing</h1>
                    </div>

                    <img className='w-8/12 md:w-5/12 rounded-xl m-10 game border-1  border-black' src={Game} alt="" />


                    <p className='text-gray-300 font-normal text-sm md:text-lg text-center m-5 z-20 mb-10'>We build immersive and high-performance games <br /> for both mobile and desktop platforms.</p>

                    <img className='absolute translate-y-24 md:translate-y-32 w-5/12 md:w-4/12 ' src={joystick} alt="" />
                </div>

            </div>


            <div className='h-32 w-full flex flex-row px-10  items-center '>
                <h1 className=' md:text-5xl h-14 text-2xl poppins font-semibold'>Artificial Intelli<span className=' md:text-5xl h-14 text-2xl poppins font-semibold gradient-text-blue'>gence & ML</span></h1>

            </div>

            <div className=' w-full p-3 pt-0 relative flex flex-row items-center justify-center'>
                <img className='  w-full h-144 object-cover rounded-3xl ' src={ai} alt="" />
                <div className='w-full h-full flex md:flex-row flex-col items-center justify-center md:justify-between p-10 absolute  z-20 top-0 left-0 rise'>
                    <h1 className=' md:text-8xl text-6xl font-bold aitext poppins my-5'>
                        Discover <br />
                        Our AI <br />
                        Solutions
                    </h1>
                    <div className='flex flex-col md:items-end items-center'>
                        <p className='text-white md:text-right text-center font-light md:text-xl text-sm poppins mb-6 md:w-1/2'>
                            We deliver cutting-edge AI
                            and ML solutions tailored to
                            your business needs,
                            empowering smarter decisions
                            and driving innovation.
                        </p>
                        <Button texttoshow={'Explore'} />
                    </div>
                </div>

            </div>



        </div>
    )
}

export default WeBuild
