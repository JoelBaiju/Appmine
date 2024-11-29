import React,{useEffect} from 'react'
import aboutusbg from '../../assets/images/AboutBG.jpg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import TextRevealByWord from '../MagicUi/TextRevealByWord';
import { FlipText } from '../MagicUi/FlipText';
import { div } from 'framer-motion/client';

function About() {
    gsap.registerPlugin(ScrollTrigger);




    useEffect(() => {

        ScrollTrigger.create({
            trigger: "#about-image",
            start: "top top", 
            end: () => {
                const aboutheight = document.querySelector("#about-main").clientHeight;
                const aboutimageheight=document.querySelector('#about-image').clientHeight
                return `+=${aboutheight-aboutimageheight}`;
                            },
            pin: true,
            scrub: true,
             
        });
    }, []);

    // useEffect(() => {

    //     ScrollTrigger.create({
    //         trigger: "#about-s1",
    //         start: "top top", 
    //         // end: () => {
    //         //     const aboutheight = document.querySelector("#about-main").clientHeight;
    //         //     return `+=${aboutheight}`;
    //         //                 },
    //         pin: true,
    //         scrub: true, 
    //     });
    // }, []);

// // Scroll effect for Div B
// gsap.to(".box.b", {
//   y: "-50%", // Moves less compared to Div A
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//   }
// });

  return (
    
//     <div className='about-main relative' id='about-main'>
//         <img src={aboutusbg} id='aboutimage' className='w-full h-screen about-image absolute z-10 ' alt="" />

//         <div className="container relative z-20">
//             <div className=" h-screen w-full a flex flex-col justify-center backdrop-blur-md bg-black/80 items-center">
//                 <h1 className='text-5xl md:text-8xl poppins text-white font-semibold '> 
//                     About<span className='gradient-text'>Us</span>   
//                 </h1>
            
//             </div>         
           
        
//             <div id='about-s2' className=" bg-black  w-full a flex flex-col justify-center  items-">
//                 <div className='w-full text-center px-5 py-32 '>
//                     <p className='text-white font-light poppins text-base md:text-lg'>
//                         At
//                         <span className='gradient-text text-2xl md:text-3xl font-semibold poppins'> Appmine Studio</span> 
//                         , we don’t just build software; we create experiences that leave a lasting impact.
//                         Every line of code, every feature, and every interface is crafted with purpose and passion. 
//                         For us, development is more than a skill—it’s an art form. We pour our creativity, 
//                         expertise, and dedication into every project, transforming ideas into solutions that inspire, 
//                         empower, and elevate. This isn’t just what we do; it’s who we are.   
//                     </p>
//                 </div>  
               
//             </div>    

       

       

            
//         </div>
       
//     </div>






    <div className='w-full relative bg-slate-600' id='about-main'> 
        <div className='aboutusbg w-full h-screen absolute z-10' id='about-image'></div>


        <div className="relative h-screen w-full z-20 flex flex-col justify-center backdrop-blur-md bg-black/80 items-center">
            <h1 className='text-5xl md:text-8xl poppins text-white font-semibold '> 
                About<span className='gradient-text'>Us</span>   
            </h1>
        </div>      


        <div id='about-s2' className=" bg-black relative z-20  w-full  flex flex-col justify-center  items-">
            <div className='w-full text-center px-5 py-32 '>
                <p className='text-white font-light poppins text-base md:text-lg'>
                    At
                    <span className='gradient-text text-2xl md:text-3xl font-semibold poppins'> Appmine Studio</span> 
                    , we don’t just build software; we create experiences that leave a lasting impact.
                    Every line of code, every feature, and every interface is crafted with purpose and passion. 
                    For us, development is more than a skill—it’s an art form. We pour our creativity, 
                    expertise, and dedication into every project, transforming ideas into solutions that inspire, 
                    empower, and elevate. This isn’t just what we do; it’s who we are.   
                </p>
            </div>          
        </div>   



        <div id='about-s2' className="  w-full relative z-20 flex flex-col justify-center bg-black/70 items-">
            <div className='w-full text-end px-5 py-32 '>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Innovative</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>Innovation is the cornerstone of our company. It has always been the key to our success.</p>
            </div>  
            <div className='w-full text-start px-5 py-32 backdrop-blur-lg bg-black/20'>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Quality</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>
                    Above all else we value quality. A project isn’t complete until it produces optimal results.
                </p>
            </div> 
        </div>   



        <div id='about-s2' className="relative z-20  w-full a flex flex-col justify-center  bg-black/20 ">
            <div className='w-full text-end px-5 py-32 bg-black/20'>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins  mb-3'>Service</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>
                    Providing the best customer experience is always top priority. Beyond providing a quality product, you’ll have a seamless experience.
                </p>
            </div> 
            <div className='w-full text-start px-5 py-32 backdrop-blur-lg bg-black/20'>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Value</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>Cost is irrelevant unless we provide the best value to our customers.</p>
            </div>
        </div>   



        <div id='about-s2' className="relative z-20  w-full a flex flex-col justify-center  bg-black/70 items-">
            <div className='w-full text-end px-5 py-32 '>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3 '>Integrity</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>
                    We will only operate with the highest standard of integrity and honesty.
                </p>
            </div> 
            <div className='w-full text-start px-5 py-32 backdrop-blur-lg bg-black/20'>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Loyality</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>
                    We take care of our customers, partners, and our own.
                </p>
            </div>
        </div>




    </div>
 )}

export default About
