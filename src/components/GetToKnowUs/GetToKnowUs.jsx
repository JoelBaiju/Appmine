
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
import icareindiaSS from '../../assets/images/icareindia.png'
import spenmaxSS from '../../assets/images/spenmaxSS.png'


import Portfolio from "./Portfolio";
import Clients from "./Clients";
import './Gettoknowus.css'
import About from "./About";
import Scrollin from "./Scrollin";
import SpinText from "../Magic/SpinText";
import Portfolio2 from "./Portfolio2";
import Blogs from "../Blogs/Blogs";
import SpinTextOnScroll from "../Magic/SpinTextOnScroll";
gsap.registerPlugin(ScrollTrigger);

function GetToKnowUs() {
  const portfoliodata = [
    {
      image: inticure,
      name: 'Inticure',
      shortdesription: 'A Comprehensive Telehealth Platform for Sexual Health and Wellness',
      overview: inticureoverview,
      about: '“Inticure, is a telehealth platform dedicated to addressing sexual health and wellness issues with a holistic approach. “',
      technologies: ['Frontend: React, for a seamless and responsive user experience.', 'Backend: Python Flask, ensuring robust and efficient server-side operations.', 'Database: MySQL, for secure and structured data management.'],
      features: ['Expert Matching Algorithm: Patients answer a predefined set of questions to identify symptoms, which are analyzed to assign the most suitable specialist for their needs.', 'Secure Payment Integration: A user-friendly and safe interface for seamless transactions.', 'Privacy-Centric Authentication: Advanced systems to protect user data and ensure confidentiality.'],
      linktowebsite: ''
    },
    {
      image: tripifyme,
      name: 'Tripifyme',
      shortdesription: 'Travel Booking Website  ',
      overview: tripifymeoverview,
      about: 'Tripify is an advanced travel booking platform designed to simplify vacation planning. it offers seamless navigation and an engaging user experience.',
      technologies: [
        'MERN (MongoDB, Express.js, React with TypeScript, Node.js)  ',

      ],

      features: ['Destination Map: Interactive maps to explore travel options. ',
        'Payment Integration: Secure transactions via PhonePe.',
        'Blog Management: Blogs for travel inspiration, with an admin panel for easy uploads.  ',
        'Real-Time Bookings: Hassle-free reservations for travel destinations.  '
      ],
      linktowebsite: ''
    },
    {
      image: skystream,
      name: 'Sky Stream',
      shortdesription: 'Streaming Platform  ',
      overview: skystreamoverview,
      about: ' Sky Stream is a cutting-edge streaming platform designed to deliver high-quality video content with minimal latency.',
      technologies: [
        'MERN (MongoDB, Express.js, React.js, Node.js)',
      ],
      features: [
        'Ultra-Low Latency Streaming: Ensures real-time streaming without delays. ',
        'High-Quality Video: Supports seamless streaming of HD and 4K content.  ',
        'Flexible Protocols: Integrated with multiple streaming protocols for versatility',
        'Scalable Architecture: Supports a growing user base with robust performance',
      ],
      linktowebsite: ''
    },
    {
      image: spenmax,
      name: 'Spenmax',
      shortdesription: ' E-commerce Application (Web & Mobile)',
      overview: spenmaxSS,
      about: 'Spenmax is a feature-rich e-commerce platform designed to offer users the best deals on utilities through a seamless and secure shopping experience',
      technologies: ['Python (Django), React  '],
      features: ['Expert Matching Algorithm: Patients answer a predefined set of questions to identify symptoms, which are analyzed to assign the most suitable specialist for their needs.', 'Secure Payment Integration: A user-friendly and safe interface for seamless transactions.', 'Privacy-Centric Authentication: Advanced systems to protect user data and ensure confidentiality.'],
      linktowebsite: ''
    },

  ]









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
            onEnter: () => targetElement.classList.add('text-white'), // Change color on enter
            onLeave: () => targetElement.classList.remove('text-white'), // Revert color on leave
            onEnterBack: () => targetElement.classList.add('text-white'), // Handle reverse scroll
            onLeaveBack: () => targetElement.classList.remove('text-white'),  // Handle reverse scroll exit
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
            onEnter: () => targetElement.classList.add('text-white'), // Change color on enter
            onLeave: () => targetElement.classList.remove('text-white'), // Revert color on leave
            onEnterBack: () => targetElement.classList.add('text-white'), // Handle reverse scroll
            onLeaveBack: () => targetElement.classList.remove('text-white'),  // Handle reverse scroll exit
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
            onEnter: () => targetElement.classList.add('text-white'), // Change color on enter
            onLeave: () => targetElement.classList.remove('text-white'), // Revert color on leave
            onEnterBack: () => targetElement.classList.add('text-white'), // Handle reverse scroll
            onLeaveBack: () => targetElement.classList.remove('text-white'),  // Handle reverse scroll exit
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



  // useEffect(() => {
  //   const elements = gsap.utils.toArray('.navigations');
  //   elements.forEach((element) => {
  //     gsap.fromTo(
  //       element,
  //       { opacity: 0, y: 100 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: element,
  //           start: "top 100%",
  //           end: "bottom 20%",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   });
  // }, []);












  useEffect(() => {

    ScrollTrigger.create({
      trigger: "#left",
      start: "top top",
      end: () => {
        const rightHeight = document.querySelector("#right").clientHeight;
        const leftHeight = document.querySelector("#left").clientHeight;
        return `+=${rightHeight - leftHeight}`;
      },
      pin: true,
      scrub: true,
    });
  }, []);



  const viewportfolio = () => {
    const portfolio = document.getElementById('portfolio')
    portfolio.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const viewclients = () => {
    const portfolio = document.getElementById('clients')
    portfolio.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const viewabout = () => {
    const portfolio = document.getElementById('about')
    portfolio.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  return (

    <div className="w-full">
      <div className="p-5 bg-neutral-900 w-full flex flex-row px-10 pr-14 justify-center items-center">
        <div className="md:text-2xl block  text-sm   tracking-wider  text-white gmarket">
          {/* Get To <span className="text-white">Know</span> Us */}
          {/* Meet the Artists Behind the Innovation */}
          <SpinText text={'Disover our story. Explore our vision'} />

        </div>
        {/* <h1 className="md:text-2xl md:hidden text-sm  gmarket tracking-wider  text-white ">
          Disover our story Explore our vision
        </h1> */}
      </div>

      <div className="w-full">
        <div className="w-full bg-black flex flex-col relative">
          <div className="  flex flex-row backdrop-blur-lg  justify-center abolute back z-30 p-3 gap-5 " id="left">
            <h1 className="navigations text-sm md:text-lg poppins font-medium  text-neutral-700" id="portfolionav" onClick={viewportfolio}>Portfolio</h1>
            <h1 className="navigations text-xs md:text-lg poppins font-medium  text-neutral-700" id="clientsnav" onClick={viewclients}>Blogs</h1>
            {/* <h1 className="navigations text-xs md:text-xl poppins font-medium m-5 text-neutral-700" id="storynav">Our Story</h1> */}
            <h1 className="navigations text-xs md:text-lg poppins font-medium  text-neutral-700" id="aboutnav" onClick={viewabout}>About Us</h1>
          </div>


          <div className="w-full bg-neutral-950 " id="right">

            <div className="w-full" id="portfolio">
              <Portfolio2 data={portfoliodata} />
            </div>

            <div className="w-full" id="clients">
              <Blogs />
              {/* <Clients/> */}
            </div>
            <div className="w-full" id="about" >
              {/* <About/> */}
              <Scrollin />
            </div>


          </div>
        </div>
      </div>

    </div>

  );
}

export default GetToKnowUs;




