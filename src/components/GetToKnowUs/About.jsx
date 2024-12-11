// import React,{useEffect} from 'react'
// import aboutusbg from '../../assets/images/AboutBG.jpg'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; 
// import TextRevealByWord from '../MagicUi/TextRevealByWord';
// import { FlipText } from '../MagicUi/FlipText';
// import { div, title } from 'framer-motion/client';

// function About() {




//     gsap.registerPlugin(ScrollTrigger);

//     useEffect(() => {
//         const rightHeight = document.querySelector("#about-main").clientHeight;
//         const leftHeight = document.querySelector("#about-image").clientHeight;
//         const scrollduration=4000;
//         // ScrollTrigger with inner text change
//         gsap.fromTo(
//             "#about-image", // The target element
//             { opacity: 1 }, // Starting state
//             {
//                 opacity: 1,

//                 scrollTrigger: {
//                     trigger: "#about-image",
//                     start: "top top",
//                     end: cc,
//                     pin: true,
//                     scrub: true,
//                     markers: {
//                         startColor: "green",
//                         endColor: "red",
//                         fontSize: "14px",
//                         indent: 20,
//                     },
//                     // onUpdate: (self) => {
//                     //     const textElement = document.querySelector("#about-text");
//                     //     const titleElement = document.querySelector("#about-title");
//                     //     const titlehighstart=document.querySelector("#about-high-start")
//                     //     const titlehighend=document.querySelector("#about-high-end")
//                     //     const titlenothigh=document.querySelector("#about-nothigh")
//                     //     const progress = self.progress; // Get scroll progress as a value between 0 and 1

//                     //     if (progress < 0.12) {
//                     //         titlenothigh.innerHTML="About"
//                     //         titlehighend.innerText = "Us";
//                     //         titlehighstart.innerHTML=''
//                     //         textElement.innerHTML=''
//                     //     } else if (progress < 0.24) {
//                     //         titlenothigh.innerHTML=''
//                     //         titlehighstart.innerHTML=''
//                     //         titlehighend.innerHTML=''
//                     //         textElement.innerText = "At Appmine Studio, we don’t just build software; we create experiences that leave a lasting impact. Every line of code, every feature, and every interface is crafted with purpose and passion.  For us, development is more than a skill—it’s an art form. We pour our creativity,  expertise, and dedication into every project, transforming ideas into solutions that inspire, empower, and elevate. This isn’t just what we do; it’s who we are.  "

//                     //     }else if (progress < 0.36) {
//                     //         titlenothigh.innerHTML='nnovative'
//                     //         titlehighstart.innerHTML='I'
//                     //         titlehighend.innerHTML=''
//                     //         textElement.innerHTML='Innovation is the cornerstone of our company. It has always been the key to our success.'
//                     //     }else if (progress < 0.48) {
//                     //         titlehighstart.innerHTML='Q'
//                     //         titlehighend.innerHTML=''
//                     //         titlenothigh.innerHTML='uality'
//                     //         textElement.innerHTML='  Above all else we value quality. A project isn’t complete until it produces optimal results.'
//                     //     }else if (progress < 0.60) {
//                     //         titlehighstart.innerHTML='S'
//                     //         titlehighend.innerHTML=''
//                     //         titlenothigh.innerHTML='ervice'
//                     //         textElement.innerHTML=' Providing the best customer experience is always top priority. Beyond providing a quality product, you’ll have a seamless experience.'
//                     //     }else if (progress < 0.72) {
//                     //         titlehighstart.innerHTML='V'
//                     //         titlehighend.innerHTML=''
//                     //         titlenothigh.innerHTML='alue'
//                     //         textElement.innerHTML='Cost is irrelevant unless we provide the best value to our customers.'
//                     //     } else if (progress < 0.84) {
//                     //         titlehighstart.innerHTML='I'
//                     //         titlehighend.innerHTML=''
//                     //         titlenothigh.innerHTML='ntegrity'
//                     //         textElement.innerHTML=' We will only operate with the highest standard of integrity and honesty.'
//                     //     }else {
//                     //         titlehighstart.innerHTML='L'
//                     //         titlehighend.innerHTML=''
//                     //         titlenothigh.innerText = "oyality";
//                     //         textElement.innerHTML="We take care of our customers, partners, and our own."
//                     //     }
//                     // }

//                 },
//             }
//         );
//     }, []);




//   return (

//     <div className='w-full bg-gradient-to-br from-black  via-appmine to-black  relative bg-white/50' id='about-main'> 

//         <div className='aboutusbg brightness-50 w-full h-screen  absolute z-10 ' > </div> 


//         <div id='about-image' className="relative h-screen w-full z-20 flex flex-col justify-center backdrop-blur-md  items-center">



//         </div>      


//         {/* <div id='about-s2' className=" bg-black relative z-20  w-full  flex flex-col justify-center  items-">
//             <div className='w-full text-center px-5 py-32 '>
//                 <p className='text-white font-light poppins text-base md:text-lg'>
//                     At
//                     <span className='gradient-text text-2xl md:text-3xl font-semibold poppins'> Appmine Studio</span> 
//                     , we don’t just build software; we create experiences that leave a lasting impact.
//                     Every line of code, every feature, and every interface is crafted with purpose and passion. 
//                     For us, development is more than a skill—it’s an art form. We pour our creativity, 
//                     expertise, and dedication into every project, transforming ideas into solutions that inspire, 
//                     empower, and elevate. This isn’t just what we do; it’s who we are.   
//                 </p>
//             </div>          
//         </div>    */}



//         {/* <div id='about-s2' className="  w-full relative z-20 flex flex-col justify-center bg-black/70 items-">
//             <div className='w-full text-end px-5 py-32 '>
//                 <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Innovative</h1>
//                 <p className='text-white font-light poppins text-base md:text-xl'>
//                     Innovation is the cornerstone of our company. It has always been the key to our success.
//                     </p>
//             </div>  
//             <div className='w-full text-start px-5 py-32 backdrop-blur-lg bg-black/20'>
//                 <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Quality</h1>
//                 <p className='text-white font-light poppins text-base md:text-xl'>
//                     Above all else we value quality. A project isn’t complete until it produces optimal results.
//                 </p>
//             </div> 
//         </div>    */}



//         {/* <div id='about-s2' className="relative z-20  w-full a flex flex-col justify-center  bg-black/20 ">
//             <div className='w-full text-end px-5 py-32 bg-black/20'>
//                 <h1 className='text-white text-3xl md:text-5xl font-semibold poppins  mb-3'>Service</h1>
//                 <p className='text-white font-light poppins text-base md:text-xl'>
//                     Providing the best customer experience is always top priority. Beyond providing a quality product, you’ll have a seamless experience.
//                 </p>
//             </div> 
//             <div className='w-full text-start px-5 py-32 backdrop-blur-lg bg-black/20'>
//                 <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Value</h1>
//                 <p className='text-white font-light poppins text-base md:text-xl'>
//                     Cost is irrelevant unless we provide the best value to our customers.
//                     </p>
//             </div>
//         </div>    */}



//         {/* <div id='about-s2' className="relative z-20  w-full a flex flex-col justify-center  bg-black/70 items-">
//             <div className='w-full text-end px-5 py-32 '>
//                 <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3 '>Integrity</h1>
//                 <p className='text-white font-light poppins text-base md:text-xl'>
//                     We will only operate with the highest standard of integrity and honesty.
//                 </p>
//             </div> 
//             <div className='w-full text-start px-5 py-32 backdrop-blur-lg bg-black/20'>
//                 <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Loyality</h1>
//                 <p className='text-white font-light poppins text-base md:text-xl'>
//                     We take care of our customers, partners, and our own.
//                 </p>
//             </div>
//         </div> */}




//     </div>





//  )}


// export default About





















































































import React, { useEffect } from 'react'
import aboutusbg from '../../assets/images/AboutBG.jpg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextRevealByWord from '../MagicUi/TextRevealByWord';
import { FlipText } from '../MagicUi/FlipText';
import { div, title } from 'framer-motion/client';
import FlickeringGrid from '../MagicUi/FlickeringGrid'

gsap.registerPlugin(ScrollTrigger);

function About() {
    // const isMobile = window.innerWidth < 768;
    // const startPosition = isMobile ? "top 10%" : "top top";
    // useEffect(() => {
    //     const scrollduration = 4000;

    //     gsap.to("#aboutmain", {
    //         scrollTrigger: {
    //             trigger: "#aboutmain",
    //             start: startPosition,
    //             end: `+=${scrollduration}`,
    //             pin: true,
    //             scrub: true,
    //             markers: {
    //                 startColor: "green",
    //                 endColor: "red",
    //                 fontSize: "14px",
    //                 indent: 20,
    //             },
    //         },
    //     })
    // }, [])








    // useEffect(() => {
    //     const scrollduration = 1000;
    //     const isMobile = window.innerWidth < 768;
    //     const startPosition = isMobile ? "top bottom" : "top 60%";
    //     const scale = isMobile ? 2 : 5;

    //     gsap.fromTo(
    //         "#abouttext",
    //         { scale: scale }, // Initial state
    //         {
    //             scale: 1, // Final state
    //             scrollTrigger: {
    //                 trigger: "#aboutmain",
    //                 start: startPosition,
    //                 end: 'bottom bottom',
    //                 scrub: 2,
    //                 markers: {
    //                     startColor: "green",
    //                     endColor: "red",
    //                     fontSize: "14px",
    //                     indent: 20,
    //                 },
    //             },
    //         }
    //     );
    // }, [])








    return (

        <div className='w-full' >
            <div className="p-5 h-[70rem]  flex flex-col items-center pt:20 md:pt-4 relative z-10" id="aboutmain">

                <div className="relative z-20 flex flex-col items-center justify-center h-full" id='abouttext'>
                    <h1 className="kantumruy text-neutral-400 text-center text-[5rem] md:text-[14rem]">
                        A B O U T<span className="gradient-text"> U S</span>
                    </h1>
                    <p className="text-white font-extralight poppins text-center text-base md:text-lg">
                        At
                        <span className="gradient-text text-2xl md:text-3xl font-normal poppins"> Appmine Studio</span>
                        , we don’t just build software; we create experiences that leave a lasting impact.
                        Every line of code, every feature, and every interface is crafted with purpose and passion.
                        For us, development is more than a skill—it’s an art form. We pour our creativity,
                        expertise, and dedication into every project, transforming ideas into solutions that inspire,
                        empower, and elevate. This isn’t just what we do; it’s who we are.
                    </p>
                </div>
                <div className='h-full w-full relative' id='container'>
                    <div className='w-full h-full absolute z-10' id='a'> </div>
                    <div className='w-full h-full absolute z-20' id='b'> </div>
                    <div className='w-full h-full absolute z-30' id='c'> </div>
                </div>

            </div>





            {/* <div id='about-s2' className=" bg-black relative z-20  w-full  flex flex-col justify-center  items-">
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
        </div>    */}



            {/* <div id='about-s2' className="  w-full relative z-20 flex flex-col justify-center bg-black/70 items-">
            <div className='w-full text-end px-5 py-32 '>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Innovative</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>
                    Innovation is the cornerstone of our company. It has always been the key to our success.
                    </p>
            </div>  
            <div className='w-full text-start px-5 py-32 backdrop-blur-lg bg-black/20'>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Quality</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>
                    Above all else we value quality. A project isn’t complete until it produces optimal results.
                </p>
            </div> 
        </div>    */}



            {/* <div id='about-s2' className="relative z-20  w-full a flex flex-col justify-center  bg-black/20 ">
            <div className='w-full text-end px-5 py-32 bg-black/20'>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins  mb-3'>Service</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>
                    Providing the best customer experience is always top priority. Beyond providing a quality product, you’ll have a seamless experience.
                </p>
            </div> 
            <div className='w-full text-start px-5 py-32 backdrop-blur-lg bg-black/20'>
                <h1 className='text-white text-3xl md:text-5xl font-semibold poppins mb-3'>Value</h1>
                <p className='text-white font-light poppins text-base md:text-xl'>
                    Cost is irrelevant unless we provide the best value to our customers.
                    </p>
            </div>
        </div>    */}



            {/* <div id='about-s2' className="relative z-20  w-full a flex flex-col justify-center  bg-black/70 items-">
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
        </div> */}




        </div>





    )
}

export default About
