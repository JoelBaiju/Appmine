
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import inticure from '../../assets/images/INTICURE-removebg-preview.png'
import inticureoverview from '../../assets/images/intiureoverview.png'
import kriyado from '../../assets/images/KRIYADO.png'
import spenmax from '../../assets/images/Spenmax_blackbg.jpg'
import skystream from '../../assets/images/SkyStream-removebg-preview (1).png'
import kriyadooverview from '../../assets/images/KriyadoOverview.png'
import skystreamoverview from '../../assets/images/SkyStreamOverview.png'
import tripifymeoverview from '../../assets/images/TripifymeOverview.png'
import tripifyme from '../../assets/images/tripifyme.png'


import Portfolio from "./Portfolio";
import Clients from "./Clients";
import './Gettoknowus.css'
import About from "./About";
gsap.registerPlugin(ScrollTrigger);

function GetToKnowUs() {
    const portfoliodata = [
    {
        image:inticure,
        name:'Inticure',
        shortdesription:'A Comprehensive Telehealth Platform for Sexual Health and Wellness',
        overview:inticureoverview,
        about:'“ At Appmine Studio, we take pride in crafting innovative and impactful digital solutions. One of our flagship projects, Inticure, is a telehealth platform dedicated to addressing sexual health and wellness issues with a holistic approach. “',
        technologies:['Frontend: React, for a seamless and responsive user experience.','Backend: Python Flask, ensuring robust and efficient server-side operations.','Database: MySQL, for secure and structured data management.'],
        features:['Expert Matching Algorithm: Patients answer a predefined set of questions to identify symptoms, which are analyzed to assign the most suitable specialist for their needs.','Secure Payment Integration: A user-friendly and safe interface for seamless transactions.','Privacy-Centric Authentication: Advanced systems to protect user data and ensure confidentiality.'],
        linktowebsite:''
    },
    {
        image:tripifyme,
        name:'Tripifyme',
        shortdesription:'Travel Booking Website  ',
        overview:tripifymeoverview,
        about:'Tripify is an advanced travel booking platform designed to simplify vacation planning. With high-end animations and a user-friendly interface, it offers seamless navigation and an engaging user experience.',
        technologies:[
            'MERN (MongoDB, Express.js, React with TypeScript, Node.js)  ',
            
        ],
       
        features:[  'Destination Map: Interactive maps to explore travel options. ',
                    'Payment Integration: Secure transactions via PhonePe.',
                    'Blog Management: Blogs for travel inspiration, with an admin panel for easy uploads.  ',
                    'Real-Time Bookings: Hassle-free reservations for travel destinations.  '
                ],
        linktowebsite:''
    },
    {
        image:skystream,
        name:'Sky Stream',
        shortdesription:'Streaming Platform  ',
        overview:skystreamoverview,
        about:'The goal was to create a platform that redefines streaming by offering a superior viewing experience with high-end technologies tailored for modern needs. Sky Stream is a cutting-edge streaming platform designed to deliver high-quality video content with minimal latency. Developed with MERN technology, it leverages advanced streaming protocols such as *MPD, **M3U8, **RTMP, and **SRT* to ensure smooth and efficient content delivery.  ',
        technologies:[
            'MERN (MongoDB, Express.js, React.js, Node.js)',
        ],
        features:[
            'Ultra-Low Latency Streaming: Ensures real-time streaming without delays. ',
            'High-Quality Video: Supports seamless streaming of HD and 4K content.  ',
            'Flexible Protocols: Integrated with multiple streaming protocols for versatility',
            'Scalable Architecture: Supports a growing user base with robust performance',
        ],
        linktowebsite:''
    },
    {
        image:spenmax,
        name:'Spenmax',
        shortdesription:' E-commerce Application (Web & Mobile)',
        overview:'',
        about:'Spenmax is a feature-rich e-commerce platform designed to offer users the best deals on utilities through a seamless and secure shopping experience. It integrates real-time functionalities and user-focused features to enhance both buyer and admin operations.',
        technologies:['Python (Django), React  '],
        features:['Expert Matching Algorithm: Patients answer a predefined set of questions to identify symptoms, which are analyzed to assign the most suitable specialist for their needs.','Secure Payment Integration: A user-friendly and safe interface for seamless transactions.','Privacy-Centric Authentication: Advanced systems to protect user data and ensure confidentiality.'],
        linktowebsite:''
    }, ]
    
    
  






    useEffect(() => {
        const specificElement = document.querySelector('#portfolio'); // Use ID
        const targetElement = document.querySelector('#portfolionav'); // Element to change color
      
        if (specificElement && targetElement) {
          gsap.to(
            specificElement,
            {
  
              scrollTrigger: {
                trigger: specificElement,
                start: 'top 100%',
                end: 'bottom 50%',
                scrub: true,
                onEnter: () => targetElement.classList.add('gradient-text'), // Change color on enter
                onLeave: () => targetElement.classList.remove('gradient-text'), // Revert color on leave
                onEnterBack: () => targetElement.classList.add('gradient-text'), // Handle reverse scroll
                onLeaveBack: () => targetElement.classList.remove('gradient-text'),  // Handle reverse scroll exit
              },
            }
          );
        }
      }, []);
      
      

    useEffect(() => {
      const specificElement = document.querySelector('#clients'); // Use ID
      const targetElement = document.querySelector('#clientsnav'); // Element to change color
    
      if (specificElement && targetElement) {
        gsap.to(
          specificElement,

          {
    
            scrollTrigger: {
              trigger: specificElement,
              start: 'top 20%',
              end: 'bottom 50%',
              scrub: true,
              onEnter: () => targetElement.classList.add('gradient-text'), // Change color on enter
              onLeave: () => targetElement.classList.remove('gradient-text'), // Revert color on leave
              onEnterBack: () => targetElement.classList.add('gradient-text'), // Handle reverse scroll
              onLeaveBack: () => targetElement.classList.remove('gradient-text'),  // Handle reverse scroll exit
            },
          }
        );
      }
    }, []);

      
    useEffect(() => {
      const specificElement = document.querySelector('#about'); // Use ID
      const targetElement = document.querySelector('#aboutnav'); // Element to change color
    
      if (specificElement && targetElement) {
        gsap.to(
          specificElement,

          {
    
            scrollTrigger: {
              trigger: specificElement,
              start: 'top 20%',
              end: 'bottom 50%',
              scrub: true,
              onEnter: () => targetElement.classList.add('gradient-text'), // Change color on enter
              onLeave: () => targetElement.classList.remove('gradient-text'), // Revert color on leave
              onEnterBack: () => targetElement.classList.add('gradient-text'), // Handle reverse scroll
              onLeaveBack: () => targetElement.classList.remove('gradient-text'),  // Handle reverse scroll exit
            },
          }
        );
      }
    }, []);
      
      


      

    //   useEffect(() => {
    //     const elements = gsap.utils.toArray('#clients');
    //     elements.forEach((element) => {
    //       gsap.fromTo(
    //         element,
    //         { opacity: 0, y: 100 },
    //         {
    //           opacity: 1,
    //           y: 0,
    //           duration: 1,
    //           scrollTrigger: {
    //             trigger: element, 
    //             start: "top 20%",
    //             end: "bottom 20%",
    //             scrub: true,
    //           },
    //         }
    //       );
    //     });
    //   }, []);



      useEffect(() => {
        const elements = gsap.utils.toArray('.navigations');
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
              },
            }
          );
        });
      }, []);
      
   










    useEffect(() => {

        ScrollTrigger.create({
            trigger: "#left",
            start: "top top", 
            end: () => {
                const rightHeight = document.querySelector("#right").clientHeight;
                const leftHeight = document.querySelector("#left").clientHeight;
                return `+=${rightHeight-leftHeight}`;
                            },
            pin: true,
            scrub: true, 
        });
    }, []);



    const viewportfolio=()=>{
        const portfolio=document.getElementById('portfolio')
        portfolio.scrollIntoView({behavior:'smooth',block:'start'})
      }
    const viewclients=()=>{
        const portfolio=document.getElementById('clients')
        portfolio.scrollIntoView({behavior:'smooth',block:'start'})
      }
      const viewabout=()=>{
        const portfolio=document.getElementById('about')
        portfolio.scrollIntoView({behavior:'smooth',block:'start'})
      }


    return (

        <div className="w-full">
                <div className="h-40 w-full flex flex-row px-10 pr-14 justify-center items-center">
                    <h1 className="md:text-5xl text-2xl poppins font-semibold">
                        Get To <span className="gradient-text">Know</span> Us
                    </h1>
                </div>

                <div className="w-full">
                    <div className="w-full bg-black   flex flex-col md:flex-row relative">
                        <div className="md:w-2/12 h-20 flex flex-row md:flex-col justify-center md:h-screen abolute  z-30 bg-black" id="left"> 
                            <h1 className="navigations text-sm md:text-3xl poppins font-medium m-5 text-neutral-700" id="portfolionav" onClick={viewportfolio}>Portfolio</h1>
                            <h1 className="navigations text-xs md:text-3xl poppins font-medium m-5 text-neutral-700" id="clientsnav"   onClick={viewclients}>Clients</h1>
                            {/* <h1 className="navigations text-xs md:text-3xl poppins font-medium m-5 text-neutral-700" id="storynav">Our Story</h1> */}
                            <h1 className="navigations text-xs md:text-3xl poppins font-medium m-5 text-neutral-700" id="aboutnav"     onClick={viewabout}>About Us</h1>
                        </div>   

    
                        <div className="md:w-10/12 bg-neutral-950 " id="right">

                            <div className="w-full" id="portfolio">
                                <Portfolio  portfoliodata={portfoliodata}/>
                            </div>

                            <div className="w-full" id="clients">
                                <Clients/>
                            </div> 
                            <div className="w-full" id="about" >
                                <About/>
                            </div>
                          

                        </div>
                    </div>
                </div>

            </div>

    );
}

export default GetToKnowUs;





// import React, { useState, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function GetToKnowUs() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     useEffect(() => {
//         // Pinning the black div until its scrollable content is fully scrolled
//         ScrollTrigger.create({
//             trigger: "#black",
//             start: "top top",
//             end: () => {
//                 const contentHeight = document.querySelector("#black .inner-content").scrollHeight;
//                 return `+=${contentHeight}`;
//             },
//             pin: true,
//             scrub: true,
//         });
//     }, []);

//     const toggleMenu = () => {
//         setMenuOpen((prev) => !prev);
//         const animationTarget = document.querySelector("#nav-menu");
//         if (menuOpen) {
//             gsap.to(animationTarget, {
//                 x: "-100%",
//                 duration: 0.5,
//                 ease: "power2.out",
//             });
//         } else {
//             gsap.to(animationTarget, {
//                 x: "0%",
//                 duration: 0.5,
//                 ease: "power2.out",
//             });
//         }
//     };

//     return (
//         <div className="w-full">
//             {/* Navbar */}
//             <div className="h-16 w-full flex items-center px-10 bg-gray-900 text-white fixed top-0 z-50 md:relative">
//                 <h1 className="text-2xl font-bold flex-grow">GetToKnowUs</h1>
//                 <div className="hidden md:block">
//                     <nav className="flex gap-5">
//                         <a href="#portfolio" className="hover:text-gray-400">Portfolio</a>
//                         <a href="#clients" className="hover:text-gray-400">Clients</a>
//                         <a href="#story" className="hover:text-gray-400">Our Story</a>
//                         <a href="#about" className="hover:text-gray-400">About Us</a>
//                     </nav>
//                 </div>
//                 <button
//                     className="block md:hidden text-2xl"
//                     onClick={toggleMenu}
//                 >
//                     ☰
//                 </button>
//             </div>

//             {/* Mobile Navigation */}
//             <div
//                 id="nav-menu"
//                 className={`fixed top-16 left-0 w-2/3 bg-gray-900 text-white h-full md:hidden transform -translate-x-full`}
//             >
//                 <nav className="flex flex-col gap-5 p-5">
//                     <a href="#portfolio" className="hover:text-gray-400">Portfolio</a>
//                     <a href="#clients" className="hover:text-gray-400">Clients</a>
//                     <a href="#story" className="hover:text-gray-400">Our Story</a>
//                     <a href="#about" className="hover:text-gray-400">About Us</a>
//                 </nav>
//             </div>

//             {/* Main Section */}
//             <div className="pt-16 w-full">
//                 <div className="h-40 w-full flex flex-row px-10 pr-14 justify-center items-center">
//                     <h1 className="md:text-5xl text-2xl font-semibold">
//                         Get To <span className="text-gradient">Know</span> Us
//                     </h1>
//                 </div>

//                 <div className="w-full">
//                     <div
//                         id="black"
//                         className="w-full bg-black h-screen overflow-hidden flex flex-row"
//                     >
//                         {/* Left Section */}
//                         <div className="bg-black w-2/12 h-full flex items-center">
//                             <div>
//                                 <h1 id="portfolio" className="text-5xl text-gradient m-5">
//                                     Portfolio
//                                 </h1>
//                                 <h1 id="clients" className="text-5xl text-gray-500 m-5">
//                                     Clients
//                                 </h1>
//                                 <h1 id="story" className="text-5xl text-gray-500 m-5">
//                                     Our Story
//                                 </h1>
//                                 <h1 id="about" className="text-5xl text-gray-500 m-5">
//                                     About Us
//                                 </h1>
//                             </div>
//                         </div>

//                         {/* Scrollable Right Section */}
//                         <div className="overflow-y-scroll w-10/12 inner-content">
//                             <div className="bg-gray-800 p-5 text-white">
//                                 <p>
//                                     {/* Add long text content here */}
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit...
//                                 </p>
//                             </div>
//                             <div className="bg-green-800 p-5 text-white">
//                                 <p>
//                                     {/* Add long text content here */}
//                                     More lorem ipsum...
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default GetToKnowUs;
