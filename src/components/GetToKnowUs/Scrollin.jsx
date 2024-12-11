// // import React, { useEffect } from 'react';
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // function Scrollin() {
// //     useEffect(() => {
// //         gsap.registerPlugin(ScrollTrigger);

// //         const boxes = ["#box1", "#box2", "#box3"];
// //         const duration = 33.33;

// //         boxes.forEach((selector, index) => {
// //             gsap.fromTo(
// //                 selector,
// //                 { scale: 1 }, // Initial state
// //                 {
// //                     scale: 1.5, // Final state
// //                     scrollTrigger: {
// //                         trigger: "#container",
// //                         start: `${index * duration}% top`, 
// //                         end: `${(index + 1) * duration}% top`, 
// //                         scrub: true,
// //                         markers: {
// //                             startColor: "green",
// //                             endColor: "red",
// //                             fontSize: "12px",
// //                         },
// //                     },
// //                 }
// //             );
// //         });
// //     }, []); 

// //     return (
// //         <div id="container" className='relative z-0'>
// //             <div className="box absolute z-10"  id="box1">Box 1</div>
// //             <div className="box absolute z-20" id="box2">Box 2</div>
// //             <div className="box absolute z-30" id="box3">Box 3</div>
// //         </div>
// //     );
// // }

// // export default Scrollin;








// import React, { useEffect } from 'react';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// function Scrollin() {








//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const calculateStartPosition = () => {
//             const container = document.querySelector("#container");
//             const containerTopOffset = container.getBoundingClientRect().top + window.scrollY; // Get offset from the top of the document
//             const viewportHeight = window.innerHeight;

//             const isMobile = window.innerWidth < 768; // Detect mobile screens
//             return isMobile
//                 ? `top ${Math.max(0, containerTopOffset - viewportHeight)}px` // Dynamically adjust start for mobile
//                 : "top top"; // Default for larger screens
//         };

//         const scrollduration = 2000;

//         // Apply GSAP animation after calculating the start position
//         const scrollAnimation = () => {
//             const startPosition = calculateStartPosition();

//             gsap.to("#container", {
//                 scrollTrigger: {
//                     trigger: "#container",
//                     start: startPosition, // Dynamically calculated start
//                     end: `+=${scrollduration}`,
//                     pin: true,
//                     scrub: true,
//                     markers: {
//                         startColor: "green",
//                         endColor: "red",
//                         fontSize: "14px",
//                         indent: 20,
//                     },
//                 },
//             });
//         };

//         // Wait for DOM content to load completely, then initialize GSAP
//         window.addEventListener("load", () => {
//             scrollAnimation();
//             ScrollTrigger.refresh(); // Recalculate measurements for accuracy
//         });

//         return () => {
//             ScrollTrigger.kill(); // Cleanup on component unmount
//         };
//     }, []);













//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const boxes = ["#box1", "#box2", "#box3"];
//         const duration = 1 / boxes.length;

//         const timeline = gsap.timeline({
//             scrollTrigger: {
//                 trigger: "#container",
//                 start: "top top", // Container reaches the top of the viewport
//                 end: "+=1000", // Duration of the pinned section
//                 scrub: 4,
//                 markers: true,
//             },
//         });

//         // First animation for box1
//         timeline.fromTo(
//             "#box1",
//             { scale: 0.5 , filter: "blur(1rem)"},
//             { scale: 1, filter: "blur(0rem)", duration:1000 }
//         ) .to(
//             "#box1",
//             { opacity: 0, duration: 500 } 
//         );

//         timeline.fromTo(
//             "#box2",
//             { scale: 0.5,filter: "blur(1rem)" },
//             { scale: 1,filter: "blur(0rem)", duration:1000 }
//         )
//         .to(
//             "#box2",
//             { opacity: 0, duration: 500 } 
//         );

//         timeline.fromTo(
//             "#box3",
//             { scale: 0.5,filter: "blur(1rem)" },
//             { scale: 1,filter: "blur(0rem)", duration: 1000 }
//         ).to(
//             "#box3",
//             { opacity: 0, duration:500} 
//         );

//     }, []);

//     return (
//         <div id="container" className=" bg-black text-white relative z-0 h-screen">


//             <div className="bg-red-500/5 absolute w-screen h-screen z-30 flex items-center backdrop-blur-lg justify-center" id="box1">
//                 <h1 className='text-5xl  font-bold'>BOX 1</h1>
//             </div>
//             <div className="w-screen h-screen bg-blue-500/5 flex items-center justify-center absolute backdrop-blur-lg z-20" id="box2">
//             <h1 className='text-5xl  font-bold'>BOX 2</h1>
//             </div>
//             <div className="w-screen h-screen bg-green-500/5 flex items-center justify-center absolute z-10" id="box3">
//             <h1 className='text-5xl  font-bold'>BOX 3</h1>
//             </div>

//         </div>
//     );
// }

// export default Scrollin;


















































import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MotoCards from './MotoCards';
import aboutbg from '../../assets/images/AboutBG.jpg'

function Scrollin() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#container",
                    start: "top top",
                    end: "+=4000",
                    pin: true,
                    scrub: true,
                    // markers: true,
                }
            })
                .fromTo("#box1", { scale: 0.5, filter: "blur(1rem)" }, { scale: 1, filter: "blur(0rem)", duration: 1 })
                .to("#box1", { opacity: 0, duration: 0.5 })
                .fromTo("#box2", { scale: 0.5, filter: "blur(1rem)" }, { scale: 1, filter: "blur(0rem)", duration: 1 })
                .to("#box2", { opacity: 0, duration: 0.5 })
                .fromTo("#box3", { scale: 0.5, filter: "blur(1rem)" }, { scale: 1, filter: "blur(0rem)", duration: 1 })
                .to("#box3", { opacity: 0, duration: 0.5 })

                .fromTo("#box4", {  filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 1 })
                .to("#box4", { opacity: 0, duration: 0.5 })
                .fromTo("#box5", {  filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 1 })
        });

        mm.add("(max-width: 991px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#container",
                    start: "top top",
                    end: "+=4000", 
                    pin: true,
                    scrub: true,
                    // markers: true,
                }
            })
                .fromTo("#box1", { scale: 0.5, filter: "blur(1rem)" }, { scale: 1, filter: "blur(0rem)", duration: 0.5 })
                .to("#box1", { opacity: 0, duration: 0.25 })
                .fromTo("#box2", { scale: 0.5, filter: "blur(1rem)" }, { scale: 1, filter: "blur(0rem)", duration: 0.5 })
                .to("#box2", { opacity: 0, duration: 0.25 })
                .fromTo("#box3", { scale: 0.5, filter: "blur(1rem)" }, { scale: 1, filter: "blur(0rem)", duration: 0.5 })
                .to("#box3", { opacity: 0, duration: 0.25 })

                .fromTo("#box4", { filter: "blur(1rem)" }, {filter: "blur(0rem)", duration: 0.5 })
                .to("#box4", { opacity: 0, duration: 0.25 })
                .fromTo("#box5", { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 0.5 })
        });

        return () => {
            ScrollTrigger.kill(); 
        };
    }, []);

    return (
        <div id="container" className="bg-black text-white relative z-0 h-screen">
            <div className="absolute w-screen h-screen z-50 flex items-center backdrop-blur-lg justify-center" id="box1">
                <div>


                    <h1 className="kantumruy font-medium text-5xl md:text-9xl text-center ">
                        A B O U T<span className="gradient-text"> U S</span>
                    </h1>

                </div>
            </div>
            <div className="w-screen  h-screen flex md:flex-row flex-col items-center justify-center absolute gap-5 backdrop-blur-lg z-40" id="box2">
               
                <img className='w-11/12 md:w-1/4' src={aboutbg} alt="" />
                <p className="text-white w-10/12   kantumruy font-semibold md:w-1/3 text-left text-base md:text-lg">
                    At
                    <span className="gradient-text text-2xl md:text-2xl font-normal poppins"> Appmine Studio</span>
                    , we don’t just build software; we create experiences that leave a lasting impact.
                    Every line of code, every feature, and every interface is crafted with purpose and passion.
                    For us, development is more than a skill—it’s an art form. We pour our creativity,
                    expertise, and dedication into every project, transforming ideas into solutions that inspire,
                    empower, and elevate. This isn’t just what we do; it’s who we are.
                </p>
            </div>
            <div className="w-screen h-screen flex items-center justify-center absolute z-30" id="box3">
                <h1 className='text-3xl md:text-5xl kantumruy font-semibold'>Our top priorities are</h1>
            </div>
            <div className=" w-screen h-screen flex gap-20 items-center  md:flex-row flex-col justify-center absolute z-20" id="box4">
                <MotoCards color={'black'} head={'QUALITY'} body={'We believe that the time invested in creating something innovative is never wasted. If the end result is truly groundbreaking, every moment spent on it becomes worthwhile.'} />
                <MotoCards color={'black'} head={'INNOVATION'} body={'Above all else we value quality. A project isn’t complete until it produces optimal results.'} />
                <MotoCards color={'black'} head={'SERVICE'} body={'Providing the best customer experience is always top priority. Beyond providing a quality product, you’ll have a seamless experience.'} />
            </div>    
            <div className=" w-screen h-screen flex md:flex-row flex-col gap-20 items-center  justify-center absolute z-10" id="box5">
                <MotoCards color={'white'} head={'VALUE'} body={'Cost is irrelevant unless we provide the best value to our customers.'} />
                <MotoCards color={'white'}  head={'INTEGRITY'} body={'We will only operate with the highest standard of integrity and honesty.'} />
                <MotoCards color={'white'} head={'LOYALITY'} body={'We take care of our customers, partners, and our own.'} />
            </div>
          
        </div>
    );
}

export default Scrollin;
