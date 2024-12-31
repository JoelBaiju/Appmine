import React from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SpinTextOnScroll from '../Magic/SpinTextOnScroll'


import char1 from '../../assets/images/GameChar1.png'
import char2 from '../../assets/images/GameChar2.png'
import tool1 from '../../assets/images/Cocos2d-x-removebg.png'
import tool2 from '../../assets/images/cryengine_icon_138710.webp'
import tool3 from '../../assets/images/blender.png'
import tool4 from '../../assets/images/ai.jpg'
import tool5 from '../../assets/images/GameMaker Studio 2.jpg'
import tool6 from '../../assets/images/godot.png'
import tool7 from '../../assets/images/unity.png'
import tool8 from '../../assets/images/Construct 3.webp'



function Game() {



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#tools",
                    start: "top 40%",
                    end: "bottom bottom ",

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
                    "#a",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '20rem', translateY: '10rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#b",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '15rem', translateY: '20rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#c",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '20rem', translateY: '-10rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#d",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '15rem', translateY: '-20rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#e",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '25rem', translateY: '0rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                // -----------------------------------------------
                .fromTo(
                    "#f",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-20rem', translateY: '10rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#g",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-15rem', translateY: '20rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#h",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-20rem', translateY: '-10rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#i",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-15rem', translateY: '-20rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#j",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-25rem', translateY: '0rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )
                //  ---------------------------
                .fromTo(
                    "#char1",
                    { translateX: '-25rem' },
                    { translateX: '0rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#char2",
                    { translateX: '25rem' },
                    { translateX: '0rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )
                // -------------------------
                .fromTo(
                    "#head",
                    { translateY: '0rem', height: '20rem' },
                    { translateY: '-10rem', height: '5rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )
                .fromTo(
                    "#body",
                    { translateY: '5rem' },
                    { translateY: '1rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

        });






        mm.add("(max-width: 991px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#tools",
                    start: "top 60%",
                    end: "bottom bottom",
                    // pin: true,
                    scrub: 1,
                    // markers: true,
                }
            })


                .fromTo(
                    "#a",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '7rem', translateY: '14rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#b",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '9rem', translateY: '7rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#c",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '11rem', translateY: '0rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#d",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '9rem', translateY: '-7rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#e",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '7rem', translateY: '-14rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                // -----------------------------------------------
                .fromTo(
                    "#f",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-7rem', translateY: '14rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#g",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-9rem', translateY: '7rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#h",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-11rem', translateY: '0rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#i",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-9rem', translateY: '-7rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#j",
                    { translateX: '0rem', translateY: '0rem' },
                    { translateX: '-7rem', translateY: '-14rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )
                //  ---------------------------
                .fromTo(
                    "#char1",
                    { translateX: '-25rem' },
                    { translateX: '0rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )

                .fromTo(
                    "#char2",
                    { translateX: '25rem' },
                    { translateX: '0rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )
                // -------------------------
                .fromTo(
                    "#head",
                    { translateY: '0rem', height: '6rem' },
                    { translateY: '-10rem', height: '5rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )
                .fromTo(
                    "#body",
                    { translateY: '5rem' },
                    { translateY: '1rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'
                )









        });



    }, []);




    return (
        <div className='w-screen relative  h-160 bg-white overflow-hidden'>
            <div className='w-full h-full  flex items-center justify-center bg-transparent absolute '>
                <div className='absolute w-full h-full flex'>
                    <div className='relative items-center flex justify-center w-full h-full z-10 ' id='tools'>
                        <img src={tool1} id='a' className='h-14 md:h-32 opacity-10 absolute' alt="" />
                        <img src={tool2} id='b' className='h-14 md:h-32 opacity-10 absolute' alt="" />
                        <img src={tool3} id='c' className='h-14 md:h-32 opacity-10 absolute' alt="" />
                        <img src={tool4} id='d' className='h-14 md:h-32 opacity-10 absolute' alt="" />
                        <img src={tool5} id='e' className='h-14 md:h-32 opacity-10 absolute' alt="" />
                        <img src={tool6} id='f' className='h-14 md:h-32 opacity-10 absolute' alt="" />
                        <img src={tool7} id='g' className='h-14 md:h-32 opacity-10 absolute' alt="" />
                        <img src={tool8} id='h' className='h-14 md:h-32 opacity-10 absolute' alt="" />
                        <img src={tool8} id='i' className='h-14 md:h-32 opacity-10 absolute' alt="" />
                        <img src={tool5} id='j' className='h-14 md:h-32 opacity-10 absolute' alt="" />

                    </div>
                </div>

                <div id='head' className='sp bg-black/60 backdrop-blur-md w-52  md:w-100  md:h-100 z-30 rounded-2xl absolute flex justify-center items-center'>
                    <h1 className='text-white md:text-3xl text-2xl astralaga '>Games</h1>
                </div>

                <div id='body' className='text-black gap-5 gmarket bg-white/10 pt-15 blue-shadow w-2/3 md:w-1/2 p-10 md:h-100  z-20 flex-col rounded-2xl backdrop-blur-[4px] absolute flex justify-center items-center'>
                    <div className='md:block hidden text-2xl  font-medium'>
                        <SpinTextOnScroll text={"Where Imagination Meets Play."} />
                    </div>

                    <div className='md:hidden text-lg mt- font-medium'>
                        <h1>Where Imagination Meets Play.</h1>
                    </div>
                    <p className='md:text-sm text-xs '>
                    Step into the Art of Game Development—Where Creativity Shapes Reality, and Every Pixel Tells a Story Worth Exploring. Experience the Art of Game Crafting—Turning Ideas into Immersive Worlds.
                    </p>
                    <button className=' px-5 py-1 rounded-xl bg-black'>
                        <h1 className='text-xl myshine_gray'>Explore</h1>
                    </button>
                </div>
            </div>




            <div className=' flex justify-between w-full  items-end h-full '>
                <img id='c1' className='md:h-80 h-32 char translate-y-20' src={char2} alt="" />
                <img id='c2' className='md:h-80 h-32 char translate-y-20' src={char1} alt="" />
            </div>
        </div>
    )
}

export default Game
