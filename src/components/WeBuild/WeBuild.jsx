import React, { useState } from 'react'
import './WeBuild.css'
import WebBg from '../../assets/videos/Untitled video - Made with Clipchamp.mp4'
import appminelogo from '../../assets/images/Appmine logo new BG T.png'
import ai from '../../assets/videos/AI_BG.mp4'
import Button from '../Button/Button'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react'
import react from '../../assets/images/React.png'
import vs from '../../assets/images/Vs.png'
import python from '../../assets/images/Python.png'
import chrome from '../../assets/images/chrome (1).png'
import docker from '../../assets/images/Docker.png'
import github from '../../assets/images/Github.png'
import SpinText from '../Magic/SpinText'
import Part2 from './Part2'
import Game from './Game'
import webtools from '../../assets/images/Web_tools.png'

gsap.registerPlugin(ScrollTrigger);



function WeBuild() {


    const data = [
        {
            'head': 'Websites',
            'text': "web designs tailored to your business needs",
            'decoratedText': 'Stunning and responsive',
            'bg': WebBg,
            'flexdirection': 'md:flex-row'
        },
        {
            'head': 'apps',
            'text': "web designs tailored to your business needs",
            'decoratedText': 'Stunning and responsive',
            'bg': { WebBg },
            'flexdirection': 'md:flex-row-reverse'
        }
    ]
    const [CardData, setCardData] = useState(data[0])





    const handlechange = () => {
        setCardData(data[1])
    }
    const handlechangeback = () => {
        setCardData(data[0])
    }






    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#twin1",
                    start: "top 50%",
                    end: "bottom 50%",

                    scrub: true,
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
                    "#twin1",
                    { translateX: '0rem' },
                    { translateX: '20rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'

                )
                .fromTo(
                    "#twin2",
                    { translateX: '0rem' },
                    { translateX: '-15rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" }
                    , '<'
                )
                .fromTo(
                    ".tools",
                    { rotateY: '0' },
                    { rotateY: '360', duration: 0.5, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" }
                    , '<'
                )
                .fromTo(
                    "#textbox",
                    { textAlign: 'start', alignItems: 'start' },
                    { textAlign: 'end', alignItems: 'end', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" }
                    , '<'
                )
        });

        mm.add("(max-width: 991px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#twin1",
                    start: "top 60%",
                    end: "bottom 70%",
                    scrub: 1,
                    // markers: true,
                }
            })

                .fromTo(
                    ".tools",
                    { rotateY: '0' },
                    { rotateY: '360', duration: 0.5, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" }
                    , '<'
                )
                .fromTo(
                    "#twin1",
                    { translateY: '0rem' },
                    { translateY: '6rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" },
                    '<'

                )
                .fromTo(
                    "#twin2",
                    { translateY: '0rem' },
                    { translateY: '-6rem', duration: 0.2, ease: "cubic-bezier(0.075, 0.82, 0.165, 1)" }
                    , '<'
                )

        });


    }, []);










    return (
        <div className='' id='webuild'>
            <div className='h-28  bg-neutral-950 w-full flex flex-row md:px-10 px-5  justify-between items-center' >
                <h1 className=' md:text-4xl text-white text-xl astralaga font-semibold' >We Create</h1>
                <p className='text-sm  text-right md:text-2xl text-white  gmarket font-medium'  >Anything You Can Imagine</p>
            </div>


            <Part2 />


            <div id='' className=' relative  mb-3 flex  h-160  items-center w-screen ' >

                <div className='absolute top-10 h-auto justify-center items-center w-full px-10 mx-3 gap-5 opacity-15 flex '>
                    <img className='h-5 md:h-14 tools ' src={react} alt="React Logo" />
                    <img className='h-5 md:h-14 tools' src={python} alt="Python Logo" />
                    <img className='h-5 md:h-14 tools' src={vs} alt="VS Code Logo" />
                    <img className='h-5 md:h-14 tools grayscale-[100]' src={chrome} alt="React Logo" />
                    <img className='h-5 md:h-14 tools' src={react} alt="Python Logo" />
                    <img className='h-5 md:h-14 tools' src={docker} alt="VS Code Logo" />
                    <img className='h-5 md:h-14 tools' src={github} alt="React Logo" />
                    <img className='h-5 md:h-14 tools' src={docker} alt="Python Logo" />
                    <img className='h-5 md:h-14 tools' src={github} alt="VS Code Logo" />
                    <img className='h-5 md:h-14 tools' src={docker} alt="VS Code Logo" />
                    <img className='h-5 md:h-14 tools' src={github} alt="React Logo" />
                    <img className='h-5 md:h-14 tools' src={docker} alt="Python Logo" />


                </div>


                <div id='twin1' className='p-5 absolute md:mx-3  justify-center items-center mb-3 rounded-3xl md:w-full  w-full '>
                    <div id='textbox' className='  relative bg-white rounded-3xl md:w-1/2 w-full h-56 flex justify-end  ' >

                        <div className='absolute  flex justify-end items-end z-0 w-full h-full'>
                            <img className='absolute h-full cover opacity-10 rounded-3xl' src={webtools} alt="" />
                        </div>

                        <div className='p-10 gap-3 z-10 flex flex-col justify-end text-left md:text-right items-start md:items-end w-188 '>

                            <h1 id='' className='text-black astralaga  text-xl '>Designing Success,<br /> Developing Dreams.</h1>
                            
                            <p id='text' className="  text-black gmarket md:w-3/4 font-bold w-full  mt-2 md:mt-0 text-xs md:text-sm  "  >
                                Your Vision, Our Code—Let’s Create a Digital Masterpiece That Redefines Your Business
                            </p>


                            <button className='text-lg bg-[#000] rounded-xl py-1 px-8  md:text-base '>
                                <h1 className='myshine_gray'>Explore</h1>
                            </button>                                
                           
                        </div>


                    </div>

                </div>


                <div id='twin2' className='p-5 absolute  justify-center items-center mb-3 rounded-3xl md:w-full  w-full '>
                    <video autoPlay muted loop src={WebBg} className='blueshado white-shadow border-[1px] border-white w-full md:w-3/5 rounded-3xl ' />
                </div>
            </div>











            <Game />














            <div className='w-screen px-5 h-24 bg-neutral-900 flex justify-center items-center'>
                <img src={appminelogo} className='w-5 mr-7' alt="" />
                <h1 className='text-xs  gmarket md:text-xl  text-white'>Appmine Studio + You
                    Empowering ideas with art and innovation for the future of technology</h1>
            </div>








            {/* <div className='h-32 w-full flex flex-row px-10  items-center '>
                <h1 className=' md:text-5xl h-14 text-2xl gmarket font-semibold'>Artificial Intelli<span className=' md:text-5xl h-14 text-2xl gmarket font-semibold gradient-text-blue'>gence & ML</span></h1>

            </div> */}

            <div className=' w-full h-160 p-3 pt-0 relative flex flex-row items-center justify-center'>
                <video autoPlay loop muted className='hidden md:block  w-full h-144 object-cover rounded-3xl ' src={ai} alt="" />
                <div className='w-full h-full flex md:flex-row flex-col items-center justify-center md:justify-between p-10 absolute  z-20 top-0 left-0 rise'>
                    <h1 className=' md:text-8xl text-center md:text-left text-[#FFFCE1 text-white text-4xl font-bold  astralaga my-5'>
                        Discover
                        Our AI <br />
                        Solutions
                    </h1>
                    <video autoPlay loop muted className=' md:hidden  object-cover rounded-3xl ' src={ai} alt="" />
                    <div className='flex flex-col md:items-end items-center'>
                        <p className='text-[#FFFCE1 text-white md:text-right text-center font-light md:text-xl text-sm gmarket mb-6 md:w-1/2'>
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
