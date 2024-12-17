import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import './WebDevelopment.css'

function WebDevelopment() {

    const isMobile = window.innerWidth < 768;
    const startPosition = isMobile ? "top 10%" : "top top";
    useEffect(() => {
        const scrollduration = 4000;
        gsap.timeline({
            scrollTrigger: {
                trigger: "#webContainer",
                start: "top top",
                end: "",
                pin: true,
                scrub: 3,
                // markers: true,
            }
        })

        // .fromTo("#gate_l", { rotatez: 0, }, { rotateZ: 5, duration: 0.2 })
        // .fromTo("#gate_r", { rotatez: 0, }, { rotateZ: 5, duration: 0.2 }, "<")
        // .fromTo("#gate_l", { translateX: 0 }, { translateX: -1000, duration: 1 })
        // .fromTo("#gate_r", { translateX: 0 }, { translateX: 1000, duration: 1 }, "<")

    }, [])

    const [currentscreen,setcurrentscreen]=useState(1)
    useEffect(() => {
        const change = () => {
            const webscreen = document.getElementById('webScreen');
            webscreen.classList.remove(`webbg${currentscreen}`);

            if (currentscreen<=4){
                webscreen.classList.add(`webbg${currentscreen + 1}`);
                console.log(`webbg${currentscreen}`)
                setcurrentscreen((prevScreen) => prevScreen + 1);
            }  
            else{
                webscreen.classList.add(`webbg${1}`);
                console.log(`webbg${currentscreen}`)
                setcurrentscreen(1);
            }
          
        };
    
        const interval = setInterval(() => {
            console.log('Changing background...');
            change();
        }, 2000);
    
        return () => clearInterval(interval);
    }, [currentscreen]);
    


    return (
        <div className='bg-black relative  flex flex-col items-center justify-end '>

            <div className='bg-black absolute z-10 top-0 left-0 flex flex-col items-center justify-end w-screen h-screen' id='webContainer'>
                <h1 className='text-white/25 gradient-text-gray font-bold poppins text-8xl'>WEB DEVELOPMENT</h1>

                <div className='w-9/12 h-4/6 webbg rounded-t-2xl transition-all ease-in-out duration-1000' id='webScreen'></div>
            </div>

            <div className='w-screen h-screen bg-transparent z-20'></div>
            <div className='w-screen h-screen z-30 bg-black'>

            </div>


        </div>

    )
}

export default WebDevelopment
