import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import './WebDevelopment.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import react from '../../assets/images/atom (1).png'

function WebDevelopment() {






    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();
        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });

        mm.add("(min-width: 992px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#techslide",
                    start: "top top",
                    end: "+=4000",
                    pin: true,
                    scrub: 2, // Adjusted scrub for smoother animation
                    // markers: true,
                    // snap: {
                    //   snapTo: 1, 
                    //   duration: { min: 0.2, max: 0.5 }, 
                    //   delay: 0.1, 
                    //   ease: "power1.inOut" 
                    // },
                }
            })






                .fromTo("#wetext", { translateY: 200 }, { translateY: 0, duration: 0.2 })
                .fromTo("#frontend", { translateY: 200, opacity: 0 }, { translateY: 0, opacity: 1, duration: 0.2 })
                .to("#frontend", { opacity: 0, duration: 0.2 })
                .fromTo("#backend", { translateY: 200, opacity: 0 }, { translateY: 0, opacity: 1, duration: 0.2 })
                .to("#backend", { opacity: 0, duration: 0.2 })
                .fromTo("#database", { translateY: 200, opacity: 0 }, { translateY: 0, opacity: 1, duration: 0.2 })
                .to("#database", { opacity: 0, duration: 0.2 });

        });

        mm.add("(max-width: 991px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#techslide",
                    start: "top top",
                    end: "+=4000",
                    pin: true,
                    scrub: 3,
                    // markers: true,
                }
            })

                .fromTo("#wetext", { translateY: 200 }, { translateY: 0, duration: 0.2 })
                .fromTo("#frontend", { translateY: 200, opacity: 0 }, { translateY: 0, opacity: 1, duration: 0.2 })
                .to("#frontend", { opacity: 0, duration: 0.2 })
                .fromTo("#backend", { translateY: 200, opacity: 0 }, { translateY: 0, opacity: 1, duration: 0.2 })
                .to("#backend", { opacity: 0, duration: 0.2 })
                .fromTo("#database", { translateY: 200, opacity: 0 }, { translateY: 0, opacity: 1, duration: 0.2 })
                .to("#database", { opacity: 0, duration: 0.2 });


        });


        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1500);
        return () => {
            ScrollTrigger.kill();
        };
    }, []);








    useEffect(() => {
        const scrollduration = 4000;
        gsap.timeline({
            scrollTrigger: {
                trigger: "#webContainer",
                start: "top top",
                end: '', // Pinned until the bottom of #webactualcontainer
                pin: true,
                scrub: 3,
                // markers: true,
            }
        })
            .fromTo("#webContainer", { scale: 1 }, { scale: 1.3, duration: 0.2 });

    }, []);










    // const [currentscreen, setcurrentscreen] = useState(1)
    // useEffect(() => {
    //     const change = () => {
    //         const webscreen = document.getElementById('webScreen');
    //         webscreen.classList.remove(`webbg${currentscreen}`);

    //         if (currentscreen <= 2) {
    //             webscreen.classList.add(`webbg${currentscreen + 1}`);
    //             console.log(`webbg${currentscreen}`)
    //             setcurrentscreen((prevScreen) => prevScreen + 1);
    //         }
    //         else {
    //             webscreen.classList.add(`webbg${1}`);
    //             console.log(`webbg${currentscreen}`)
    //             setcurrentscreen(1);
    //         }

    //     };

    //     const interval = setInterval(() => {
    //         console.log('Changing background...');
    //         change();
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, [currentscreen]);




    return (
        <div className='bg-black relative   flex flex-col items-center justify-end ' id='webactualcontainer'>

            <div className='bg-black  z-10 top-0 left-0 flex flex-col items-center justify-end w-screen h-screen' id='webContainer'>
                <div className='w-9/12 h-4/6 text-center rounded-t-2xl transition-all ease-in-out duration-1000 webbg1 flex flex-col justify-top pt-20 items-center' id='weScreen'>

                    <h1 className='text-xl astralaga mb-5'>
                        Our Services
                    </h1>
                    <div className='flex gap-3 w-full justify-around'>

                    <p className='text-md w-1/5 bg-white/10 rounded-md border-[1px] py-5 px-7  border-white/10'>
                        <span className='text-md mb-5'>Custom Web Design & Development:</span>
                    
                    Bespoke websites that reflect your brand’s uniqueness.
                    </p>

                    <p className='text-md w-1/5 bg-white/10 rounded-md border-[1px] py-5 px-7  border-white/10 '>
                    <span className='text-md mb-5'> E-Commerce Platforms:</span>

                
Scalable and secure online stores with advanced features like AI-driven recommendations and payment integrations.
                    </p>
                    <p className='text-md w-1/5 bg-white/10 rounded-md border-[1px] py-5 px-7  border-white/10'>
                    <span className='text-md mb-5'>Progressive Web Applications (PWAs):</span>

                    
Mobile-first applications with offline capabilities for enhanced user experience.

                    </p>
                    <p className='text-md w-1/5 bg-white/10 rounded-md border-[1px] py-5 px-7  border-white/10'>
                    <span className='text-md mb-5'>Content Management Systems (CMS):</span>

                 
Content Management Systems (CMS):
Dynamic and easy-to-manage platforms for seamless content updates.

                    </p>
                    
                    </div>
                  

                </div>
            </div>


            <div className=' p-5 absolute z-20 top-0 left-0 flex flex-col items-center justify-end w-screen h-screen backdrop-blur-md' >
                <h1 className='rise-animation text-[#FFFCE1] gradient-text-gra font-bold astralaga text-3xl md:text-8xl' id='webdev'><i className="fa-solid fa-angle-left" /> WEB DEVELOPMENT /<i className="fa-solid fa-angle-right" /></h1>

                <div className='h-1/2 flex flex-col items-center gap-4 justify-end pb-20'>
                    <p className='text-white animate-pulse'>Welcome Keep scrolling</p>
                    <p className='text-white animate-bounce rotate-90'><i className="fa-solid fa-angle-down" ></i></p>
                </div>
            </div>
            <div className='w-screen h-screen bg-transparent z-20'></div>



















            <div id='techslide' className=' bg-black p-5 w-screen relative flex flex-col md:flex-row  justify-center items-center backdrop-blur-md  h-screen z-10 ' >

                <div className='absolute flex  opacity-25 z-10 top-50% left-50%'>
                    <svg className='h-144 ' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad"><stop stop-color="hsl(230, 55%, 50%)" stop-opacity="1" offset="45%"></stop><stop stop-color="hsl(230, 55%, 70%)" stop-opacity="1" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad-2"><stop stop-color="hsl(230, 55%, 70%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(230, 55%, 50%)" stop-opacity="1" offset="45%"></stop></linearGradient><linearGradient gradientTransform="rotate(270)" x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad-3"><stop stop-color="hsl(230, 55%, 50%)" stop-opacity="1" offset="45%"></stop><stop stop-color="hsl(230, 55%, 70%)" stop-opacity="1" offset="100%"></stop></linearGradient><linearGradient gradientTransform="rotate(270)" x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad-4"><stop stop-color="hsl(230, 55%, 70%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(230, 55%, 50%)" stop-opacity="1" offset="45%"></stop></linearGradient></defs><g stroke-width="2" stroke="url(#rrreflection-grad)" fill="none"><circle r="375" cx="50%" cy="0"></circle><circle r="362.5" cx="50%" cy="0"></circle><circle r="350" cx="50%" cy="0"></circle><circle r="337.5" cx="50%" cy="0"></circle><circle r="325" cx="50%" cy="0"></circle><circle r="312.5" cx="50%" cy="0"></circle><circle r="300" cx="50%" cy="0"></circle><circle r="287.5" cx="50%" cy="0"></circle><circle r="275" cx="50%" cy="0"></circle><circle r="262.5" cx="50%" cy="0"></circle><circle r="250" cx="50%" cy="0"></circle><circle r="237.5" cx="50%" cy="0"></circle><circle r="225" cx="50%" cy="0"></circle><circle r="212.5" cx="50%" cy="0"></circle><circle r="200" cx="50%" cy="0"></circle><circle r="187.5" cx="50%" cy="0"></circle><circle r="175" cx="50%" cy="0"></circle><circle r="162.5" cx="50%" cy="0"></circle><circle r="150" cx="50%" cy="0"></circle><circle r="137.5" cx="50%" cy="0"></circle><circle r="125" cx="50%" cy="0"></circle><circle r="112.5" cx="50%" cy="0"></circle><circle r="100" cx="50%" cy="0"></circle><circle r="87.5" cx="50%" cy="0"></circle><circle r="75" cx="50%" cy="0"></circle><circle r="62.5" cx="50%" cy="0"></circle><circle r="50" cx="50%" cy="0"></circle><circle r="37.5" cx="50%" cy="0"></circle><circle r="25" cx="50%" cy="0"></circle><circle r="12.5" cx="50%" cy="0"></circle></g><g stroke-width="2" stroke="url(#rrreflection-grad-2)" fill="none"><circle r="375" cx="50%" cy="100%"></circle><circle r="362.5" cx="50%" cy="100%"></circle><circle r="350" cx="50%" cy="100%"></circle><circle r="337.5" cx="50%" cy="100%"></circle><circle r="325" cx="50%" cy="100%"></circle><circle r="312.5" cx="50%" cy="100%"></circle><circle r="300" cx="50%" cy="100%"></circle><circle r="287.5" cx="50%" cy="100%"></circle><circle r="275" cx="50%" cy="100%"></circle><circle r="262.5" cx="50%" cy="100%"></circle><circle r="250" cx="50%" cy="100%"></circle><circle r="237.5" cx="50%" cy="100%"></circle><circle r="225" cx="50%" cy="100%"></circle><circle r="212.5" cx="50%" cy="100%"></circle><circle r="200" cx="50%" cy="100%"></circle><circle r="187.5" cx="50%" cy="100%"></circle><circle r="175" cx="50%" cy="100%"></circle><circle r="162.5" cx="50%" cy="100%"></circle><circle r="150" cx="50%" cy="100%"></circle><circle r="137.5" cx="50%" cy="100%"></circle><circle r="125" cx="50%" cy="100%"></circle><circle r="112.5" cx="50%" cy="100%"></circle><circle r="100" cx="50%" cy="100%"></circle><circle r="87.5" cx="50%" cy="100%"></circle><circle r="75" cx="50%" cy="100%"></circle><circle r="62.5" cx="50%" cy="100%"></circle><circle r="50" cx="50%" cy="100%"></circle><circle r="37.5" cx="50%" cy="100%"></circle><circle r="25" cx="50%" cy="100%"></circle><circle r="12.5" cx="50%" cy="100%"></circle></g><g stroke-width="2" stroke="url(#rrreflection-grad-3)" fill="none"><circle r="375" cx="0" cy="50%"></circle><circle r="362.5" cx="0" cy="50%"></circle><circle r="350" cx="0" cy="50%"></circle><circle r="337.5" cx="0" cy="50%"></circle><circle r="325" cx="0" cy="50%"></circle><circle r="312.5" cx="0" cy="50%"></circle><circle r="300" cx="0" cy="50%"></circle><circle r="287.5" cx="0" cy="50%"></circle><circle r="275" cx="0" cy="50%"></circle><circle r="262.5" cx="0" cy="50%"></circle><circle r="250" cx="0" cy="50%"></circle><circle r="237.5" cx="0" cy="50%"></circle><circle r="225" cx="0" cy="50%"></circle><circle r="212.5" cx="0" cy="50%"></circle><circle r="200" cx="0" cy="50%"></circle><circle r="187.5" cx="0" cy="50%"></circle><circle r="175" cx="0" cy="50%"></circle><circle r="162.5" cx="0" cy="50%"></circle><circle r="150" cx="0" cy="50%"></circle><circle r="137.5" cx="0" cy="50%"></circle><circle r="125" cx="0" cy="50%"></circle><circle r="112.5" cx="0" cy="50%"></circle><circle r="100" cx="0" cy="50%"></circle><circle r="87.5" cx="0" cy="50%"></circle><circle r="75" cx="0" cy="50%"></circle><circle r="62.5" cx="0" cy="50%"></circle><circle r="50" cx="0" cy="50%"></circle><circle r="37.5" cx="0" cy="50%"></circle><circle r="25" cx="0" cy="50%"></circle><circle r="12.5" cx="0" cy="50%"></circle></g><g stroke-width="2" stroke="url(#rrreflection-grad-4)" fill="none"><circle r="375" cx="100%" cy="50%"></circle><circle r="362.5" cx="100%" cy="50%"></circle><circle r="350" cx="100%" cy="50%"></circle><circle r="337.5" cx="100%" cy="50%"></circle><circle r="325" cx="100%" cy="50%"></circle><circle r="312.5" cx="100%" cy="50%"></circle><circle r="300" cx="100%" cy="50%"></circle><circle r="287.5" cx="100%" cy="50%"></circle><circle r="275" cx="100%" cy="50%"></circle><circle r="262.5" cx="100%" cy="50%"></circle><circle r="250" cx="100%" cy="50%"></circle><circle r="237.5" cx="100%" cy="50%"></circle><circle r="225" cx="100%" cy="50%"></circle><circle r="212.5" cx="100%" cy="50%"></circle><circle r="200" cx="100%" cy="50%"></circle><circle r="187.5" cx="100%" cy="50%"></circle><circle r="175" cx="100%" cy="50%"></circle><circle r="162.5" cx="100%" cy="50%"></circle><circle r="150" cx="100%" cy="50%"></circle><circle r="137.5" cx="100%" cy="50%"></circle><circle r="125" cx="100%" cy="50%"></circle><circle r="112.5" cx="100%" cy="50%"></circle><circle r="100" cx="100%" cy="50%"></circle><circle r="87.5" cx="100%" cy="50%"></circle><circle r="75" cx="100%" cy="50%"></circle><circle r="62.5" cx="100%" cy="50%"></circle><circle r="50" cx="100%" cy="50%"></circle><circle r="37.5" cx="100%" cy="50%"></circle><circle r="25" cx="100%" cy="50%"></circle><circle r="12.5" cx="100%" cy="50%"></circle></g></svg>
                    <svg className='h-144 ' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad"><stop stop-color="hsl(230, 55%, 50%)" stop-opacity="1" offset="45%"></stop><stop stop-color="hsl(230, 55%, 70%)" stop-opacity="1" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad-2"><stop stop-color="hsl(230, 55%, 70%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(230, 55%, 50%)" stop-opacity="1" offset="45%"></stop></linearGradient><linearGradient gradientTransform="rotate(270)" x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad-3"><stop stop-color="hsl(230, 55%, 50%)" stop-opacity="1" offset="45%"></stop><stop stop-color="hsl(230, 55%, 70%)" stop-opacity="1" offset="100%"></stop></linearGradient><linearGradient gradientTransform="rotate(270)" x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad-4"><stop stop-color="hsl(230, 55%, 70%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(230, 55%, 50%)" stop-opacity="1" offset="45%"></stop></linearGradient></defs><g stroke-width="2" stroke="url(#rrreflection-grad)" fill="none"><circle r="375" cx="50%" cy="0"></circle><circle r="362.5" cx="50%" cy="0"></circle><circle r="350" cx="50%" cy="0"></circle><circle r="337.5" cx="50%" cy="0"></circle><circle r="325" cx="50%" cy="0"></circle><circle r="312.5" cx="50%" cy="0"></circle><circle r="300" cx="50%" cy="0"></circle><circle r="287.5" cx="50%" cy="0"></circle><circle r="275" cx="50%" cy="0"></circle><circle r="262.5" cx="50%" cy="0"></circle><circle r="250" cx="50%" cy="0"></circle><circle r="237.5" cx="50%" cy="0"></circle><circle r="225" cx="50%" cy="0"></circle><circle r="212.5" cx="50%" cy="0"></circle><circle r="200" cx="50%" cy="0"></circle><circle r="187.5" cx="50%" cy="0"></circle><circle r="175" cx="50%" cy="0"></circle><circle r="162.5" cx="50%" cy="0"></circle><circle r="150" cx="50%" cy="0"></circle><circle r="137.5" cx="50%" cy="0"></circle><circle r="125" cx="50%" cy="0"></circle><circle r="112.5" cx="50%" cy="0"></circle><circle r="100" cx="50%" cy="0"></circle><circle r="87.5" cx="50%" cy="0"></circle><circle r="75" cx="50%" cy="0"></circle><circle r="62.5" cx="50%" cy="0"></circle><circle r="50" cx="50%" cy="0"></circle><circle r="37.5" cx="50%" cy="0"></circle><circle r="25" cx="50%" cy="0"></circle><circle r="12.5" cx="50%" cy="0"></circle></g><g stroke-width="2" stroke="url(#rrreflection-grad-2)" fill="none"><circle r="375" cx="50%" cy="100%"></circle><circle r="362.5" cx="50%" cy="100%"></circle><circle r="350" cx="50%" cy="100%"></circle><circle r="337.5" cx="50%" cy="100%"></circle><circle r="325" cx="50%" cy="100%"></circle><circle r="312.5" cx="50%" cy="100%"></circle><circle r="300" cx="50%" cy="100%"></circle><circle r="287.5" cx="50%" cy="100%"></circle><circle r="275" cx="50%" cy="100%"></circle><circle r="262.5" cx="50%" cy="100%"></circle><circle r="250" cx="50%" cy="100%"></circle><circle r="237.5" cx="50%" cy="100%"></circle><circle r="225" cx="50%" cy="100%"></circle><circle r="212.5" cx="50%" cy="100%"></circle><circle r="200" cx="50%" cy="100%"></circle><circle r="187.5" cx="50%" cy="100%"></circle><circle r="175" cx="50%" cy="100%"></circle><circle r="162.5" cx="50%" cy="100%"></circle><circle r="150" cx="50%" cy="100%"></circle><circle r="137.5" cx="50%" cy="100%"></circle><circle r="125" cx="50%" cy="100%"></circle><circle r="112.5" cx="50%" cy="100%"></circle><circle r="100" cx="50%" cy="100%"></circle><circle r="87.5" cx="50%" cy="100%"></circle><circle r="75" cx="50%" cy="100%"></circle><circle r="62.5" cx="50%" cy="100%"></circle><circle r="50" cx="50%" cy="100%"></circle><circle r="37.5" cx="50%" cy="100%"></circle><circle r="25" cx="50%" cy="100%"></circle><circle r="12.5" cx="50%" cy="100%"></circle></g><g stroke-width="2" stroke="url(#rrreflection-grad-3)" fill="none"><circle r="375" cx="0" cy="50%"></circle><circle r="362.5" cx="0" cy="50%"></circle><circle r="350" cx="0" cy="50%"></circle><circle r="337.5" cx="0" cy="50%"></circle><circle r="325" cx="0" cy="50%"></circle><circle r="312.5" cx="0" cy="50%"></circle><circle r="300" cx="0" cy="50%"></circle><circle r="287.5" cx="0" cy="50%"></circle><circle r="275" cx="0" cy="50%"></circle><circle r="262.5" cx="0" cy="50%"></circle><circle r="250" cx="0" cy="50%"></circle><circle r="237.5" cx="0" cy="50%"></circle><circle r="225" cx="0" cy="50%"></circle><circle r="212.5" cx="0" cy="50%"></circle><circle r="200" cx="0" cy="50%"></circle><circle r="187.5" cx="0" cy="50%"></circle><circle r="175" cx="0" cy="50%"></circle><circle r="162.5" cx="0" cy="50%"></circle><circle r="150" cx="0" cy="50%"></circle><circle r="137.5" cx="0" cy="50%"></circle><circle r="125" cx="0" cy="50%"></circle><circle r="112.5" cx="0" cy="50%"></circle><circle r="100" cx="0" cy="50%"></circle><circle r="87.5" cx="0" cy="50%"></circle><circle r="75" cx="0" cy="50%"></circle><circle r="62.5" cx="0" cy="50%"></circle><circle r="50" cx="0" cy="50%"></circle><circle r="37.5" cx="0" cy="50%"></circle><circle r="25" cx="0" cy="50%"></circle><circle r="12.5" cx="0" cy="50%"></circle></g><g stroke-width="2" stroke="url(#rrreflection-grad-4)" fill="none"><circle r="375" cx="100%" cy="50%"></circle><circle r="362.5" cx="100%" cy="50%"></circle><circle r="350" cx="100%" cy="50%"></circle><circle r="337.5" cx="100%" cy="50%"></circle><circle r="325" cx="100%" cy="50%"></circle><circle r="312.5" cx="100%" cy="50%"></circle><circle r="300" cx="100%" cy="50%"></circle><circle r="287.5" cx="100%" cy="50%"></circle><circle r="275" cx="100%" cy="50%"></circle><circle r="262.5" cx="100%" cy="50%"></circle><circle r="250" cx="100%" cy="50%"></circle><circle r="237.5" cx="100%" cy="50%"></circle><circle r="225" cx="100%" cy="50%"></circle><circle r="212.5" cx="100%" cy="50%"></circle><circle r="200" cx="100%" cy="50%"></circle><circle r="187.5" cx="100%" cy="50%"></circle><circle r="175" cx="100%" cy="50%"></circle><circle r="162.5" cx="100%" cy="50%"></circle><circle r="150" cx="100%" cy="50%"></circle><circle r="137.5" cx="100%" cy="50%"></circle><circle r="125" cx="100%" cy="50%"></circle><circle r="112.5" cx="100%" cy="50%"></circle><circle r="100" cx="100%" cy="50%"></circle><circle r="87.5" cx="100%" cy="50%"></circle><circle r="75" cx="100%" cy="50%"></circle><circle r="62.5" cx="100%" cy="50%"></circle><circle r="50" cx="100%" cy="50%"></circle><circle r="37.5" cx="100%" cy="50%"></circle><circle r="25" cx="100%" cy="50%"></circle><circle r="12.5" cx="100%" cy="50%"></circle></g></svg>
                </div>

                <div className='pb-10 md:w-1/2 w-full flex items-center px-20 h-1/3 overflow-hidden md:h-96'>
                    <h1 id='wetext' className='gmarket tracking-wider font-extralight text-2xl text-[#FFFCE1] md:text-left text-center md:text-5xl '>We leverage cutting-edge technologies to ensure your work stands out.</h1>
                </div>

                <div className='md:w-1/2 noiseb z-30 w-full flex flex-row justify-end items-center backdrop-blur-sm border-[1px] blueshadow border-white overflow-hidden  md:mx-5 relative rounded-xl md:px-20 h-1/2'>


                    <div className='absolute   md:p-0 p-5 rounded-lg md:text-right ' id='frontend'>
                        <h1 className='text-[#FFFCE1]  text-2xl md:text-4xl astralaga tracking-wider font-semibold'><span className='gradient-text-blue'>Frontend</span> Technologies</h1>
                        <p className='text-xl mt-5 font-light text-[#FFFCE1] gmarket'>
                            HTML5 <br />
                            CSS3 (Bootstrap, Tailwind CSS, Material-UI) <br />
                            JavaScript (React.js, Angular, Vue.js, Svelte)  <br />
                            TypeScript <br />
                        </p>
                    </div>


                    <div className='absolute md:p-0 p-5 rounded-lg md:text-right' id='backend'>
                        <h1 className='text-[#FFFCE1]  text-2xl md:text-4xl astralaga tracking-wider font-semibold'><span className='gradient-text-blue'>Backend</span> Technologies</h1>
                        <p className='text-lg mt-5 font-light text-[#FFFCE1] gmarket'>
                            Node.js (Express.js, NestJS)  <br />
                            Python (Django, Flask, FastAPI)  <br />
                            PHP (Laravel, CodeIgniter)  <br />
                            Ruby on Rails  <br />
                            Java (Spring Boot)  <br />
                            C# (.NET Core)  <br />
                        </p>
                    </div>

                    <div className='absolute   md:p-0 p-5 rounded-lg md:text-right' id='database'>
                        <h1 className='text-[#FFFCE1]  text-2xl md:text-4xl astralaga tracking-wider font-semibold'><span className='gradient-text-blue'>Database</span> Technologies</h1>
                        <p className='text-xl mt-5 font-light text-[#FFFCE1] gmarket'>
                            MySQL  <br />
                            PostgreSQL  <br />
                            MongoDB  <br />
                            DynamoDB  <br />
                            Redis  <br />

                        </p>
                    </div>

                </div>
            </div>
            <div className=' w-screen px-5 flex flex-row gap-5 z-50'>
                <div className='w-1 mt-40 h-100 bg-[#202437] '></div>
                <div className='w-1 mt-60 h-100 bg-blue-950 '></div>
            </div>

            <div className=' w-screen px-5 flex flex-row justify-end mt-52 gap-5 z-50'>
                <div className='w-1 mt-40 h-100 bg-[#202437] '></div>
                <div className='w-1 mt-60 h-100 bg-blue-950 '></div>
            </div>

            <div className=' w-screen px-5 flex flex-row  mt-52 gap-5 z-50'>
                <div className='w-1 mt-40 h-100 bg-[#202437] '></div>
                <div className='w-1 mt-60 h-100 bg-blue-950 '></div>
            </div>
            <div className=' w-screen px-5 flex flex-row justify-end mt-52 gap-5 z-50'>
                <div className='w-1 mt-40 h-100 bg-[#202437] '></div>
                <div className='w-1 mt-60 h-100 bg-blue-950 '></div>
            </div>


        </div>

    )
}

export default WebDevelopment









