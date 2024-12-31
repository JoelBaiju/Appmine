import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MotoCards from './MotoCards';
import aboutbg from '../../assets/images/AboutBG.jpg'

function Scrollin() {


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();
        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });


        mm.add("(min-width: 992px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#container",
                    start: "top top",
                    end: "+=4000",
                    pin: true,
                    scrub: 3,
                    // markers: true,
                }
            })

                .fromTo("#gate_l", { rotatez: 0, }, { rotateZ: 5, duration: 0.2 })
                .fromTo("#gate_r", { rotatez: 0, }, { rotateZ: 5, duration: 0.2 }, "<")
                .fromTo("#gate_l", { translateX: 0 }, { translateX: -1000, duration: 1 })
                .fromTo("#gate_r", { translateX: 0 }, { translateX: 1000, duration: 1 }, "<")


                // .fromTo("#gate", { scale: 0.5, filter: "blur(1rem)" }, { scale: 1, filter: "blur(0rem)", duration: 1 })

                // .to("#gate", { opacity: 0, duration: 0.5 })
                .to("#box1", { opacity: 0, scale: 3, duration: 0.5 })
                .to("#box1", { scale: 0, opacity: 0, duration: 0 })
                .fromTo("#box2", { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 1 })
                .to("#box2", { opacity: 0, duration: 0.5 })
                // .fromTo("#box3", { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 1 })

                .fromTo(".boxrise", { filter: "blur(2rem)",opacity:'0%',translateY: 400 }, { filter: "blur(0rem)",opacity:'100%',translateY: 0 , duration: 1 })
                .fromTo(".boxfall", { filter: "blur(2rem)",opacity:'0%',translateY: -400 }, { filter: "blur(0rem)",opacity:'100%',translateY: 0 , duration: 1 },"<")

                .to("#box3", { opacity: 0, duration: 0.5 })

                .fromTo("#box4", { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 1 })
                .to("#box4", { opacity: 0, duration: 0.5 })
                .fromTo("#box5", { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 1 })
        });

        mm.add("(max-width: 991px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#container",
                    start: "top top",
                    end: "+=4000",
                    pin: true,
                    scrub: 3,
                    // markers: true,
                }
            })
                .fromTo("#gate_l", { rotatez: 0, }, { rotateZ: 5, duration: 0.2 })
                .fromTo("#gate_r", { rotatez: 0, }, { rotateZ: 5, duration: 0.2 }, "<")
                .fromTo("#gate_l", { translateX: 0 }, { translateX: -1000, duration: 1 })
                .fromTo("#gate_r", { translateX: 0 }, { translateX: 1000, duration: 1 }, "<")

                // .fromTo("#gate", { scale: 0.5, filter: "blur(1rem)" }, { scale: 1, filter: "blur(0rem)", duration: 0.5 })
                // .to("#gate", { opacity: 0, duration: 0.25 })
                .to("#box1", { scale: 3, opacity: 0, duration: 0.2 })
                .to("#box1", { scale: 0, opacity: 0, duration: 0 })
                .fromTo("#box2", { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 0.5 })
                .to("#box2", { opacity: 0, duration: 0.25 })
                // .fromTo("#box3", { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 0.5 })

                .fromTo(".boxrise", { filter: "blur(2rem)", opacity:'0%',translateY: 400 }, { filter: "blur(0rem)",opacity:'100%',translateY: 0 , duration: 1 })
                .fromTo(".boxfall", { filter: "blur(2rem)",opacity:'0%',translateY: -400 }, { filter: "blur(0rem)",opacity:'100%',translateY: 0 , duration: 1 },"<")


                .to("#box3", { opacity: 0, duration: 0.25 })
                .fromTo("#box4", { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 0.5 })
                .to("#box4", { opacity: 0, duration: 0.25 })
                .fromTo("#box5", { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 0.5 })
        });


        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1500);
        return () => {
            ScrollTrigger.kill();
        };
    }, []);

    return (
        <div id="container" className="bg-black text-white relative z-0 h-screen">
            <div className="absolute  w-screen h-screen   z-[110] flex items-center justify-center" id="gate">

                <div className='flex justify-center flex-row items-center bg-red w-full h-full'>
                    <div className=' w-1/2  h-144 bg-black border-r-white border-r-2' id='gate_l'>
                    </div>

                    <div className=' w-1/2 h-144 bg-black border-l-white border-l-2' id='gate_r'>
                    </div>
                </div>
            </div>
            <div className="absolute bg-black w-screen h-full   z-[100] flex items-center justify-center" id="box1">
                <div className=''>


                    <h1 className="astralaga font-extrabold tracking-tight text-6xl md:text-[15rem] text-center ">
                        ABOUT<span style={{ WebkitTextStroke: "2px white", }} className="stroke-[#ffffff] text-transparent "> US</span>
                    </h1>

                </div>
            </div>
            <div className="w-screen doodle h-screen flex md:flex-row flex-col items-center justify-center absolute gap-5 backdrop-blur-lg z-[90]" id="box2">
                <div className='relative bg-black/95 w-full h-full flex items-center justify-center top-0 left-0'>
                    {/* <img className='absolute object-cover w-screen h-screen blur-sm top-0 left-0 opacity-50' src={aboutbg} alt="" /> */}
                    <p className="text-white w-10/12  absolute   font-normal gmarket md:w-2/3 text-left md:text-center text-base md:text-lg">

                        <span className="gradient-text text-2xl md:text-5xl font-semibold gmarket">At Appmine Studio</span><br />
                        WE don’t just build software; we create experiences that leave a lasting impact.
                        Every line of code, every feature, and every interface is crafted with purpose and passion.
                        For us, development is more than a skill—it’s an art form. We pour our creativity,
                        expertise, and dedication into every project, transforming ideas into solutions that inspire,
                        empower, and elevate. This isn’t just what we do; it’s who we are.
                    </p>
                </div>
            </div>
            <div className="w-screen h-screen flex items-center justify-center absolute z-[80] " id="box3">
                <h1 className='text-5xl boxrise md:text-9xl astralaga font-semibold rise'>O</h1>
                <h1 className='text-5xl boxfall md:text-9xl astralaga font-semibold rise'>U</h1>
                <h1 className='text-5xl boxrise md:text-9xl astralaga font-semibold rise'>R </h1>
                <div className='w-5 md:w-10 '></div>
                <h1 className='text-5xl boxfall md:text-9xl astralaga font-semibold rise'> P</h1>
                <h1 className='text-5xl boxrise md:text-9xl astralaga font-semibold rise'>R</h1>
                <h1 className='text-5xl boxfall md:text-9xl astralaga font-semibold rise'>I</h1>
                <h1 className='text-5xl boxrise md:text-9xl astralaga font-semibold rise'>O</h1>
                <h1 className='text-5xl boxfall md:text-9xl astralaga font-semibold rise gradient-text'>R</h1>
                <h1 className='text-5xl boxrise md:text-9xl astralaga font-semibold rise gradient-text'>I</h1>
                <h1 className='text-5xl boxfall md:text-9xl astralaga font-semibold rise gradient-text'>T</h1>
                <h1 className='text-5xl boxrise md:text-9xl astralaga font-semibold rise gradient-text'>I</h1>
                <h1 className='text-5xl boxfall md:text-9xl astralaga font-semibold rise gradient-text'>E</h1>
                <h1 className='text-5xl boxrise md:text-9xl astralaga font-semibold rise gradient-text'>S</h1>
            </div>
            <div className="noisebg w-screen h-screen flex gap-10 md:gap-20 gmarket items-center   md:flex-row flex-col justify-center absolute z-[70]" id="box4">
                <MotoCards color={'black'} head={'QUALITY'} body={'We believe that the time invested in creating something innovative is never wasted. If the end result is truly groundbreaking, every moment spent on it becomes worthwhile.'} />
                <MotoCards color={'black'} head={'INNOVATION'} body={'Above all else we value quality. A project isn’t complete until it produces optimal results.'} />
                <MotoCards color={'black'} head={'SERVICE'} body={'Providing the best customer experience is always top priority. Beyond providing a quality product, you’ll have a seamless experience.'} />
            </div>
            <div className=" noisebg w-screen h-screen flex md:flex-row flex-col gap-10 md:gap-20 items-center  justify-center absolute z-[60]" id="box5">
                <MotoCards color={'white'} head={'VALUE'} body={'Cost is irrelevant unless we provide the best value to our customers.'} />
                <MotoCards color={'white'} head={'INTEGRITY'} body={'We will only operate with the highest standard of integrity and honesty.'} />
                <MotoCards color={'white'} head={'LOYALITY'} body={'We take care of our customers, partners, and our own.'} />
            </div>

        </div>
    );
}

export default Scrollin;
