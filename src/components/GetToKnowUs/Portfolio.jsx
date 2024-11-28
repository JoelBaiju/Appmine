import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
function Portfolio({portfoliodata}) {




    useEffect(() => {
        const elements = gsap.utils.toArray('.rise');
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0.5, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: element, 
                        start: "top 100%",
                        end:"bottom 20%",
                        scrub: true,
                        toggleActions: "play none none reverse",  
                    },
                }
            );
        });
    }, []);
    

    useEffect(() => {
        const elements = gsap.utils.toArray('.overview');
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0,  scale:1.5 },
                {
                    opacity: 100,
                    scale:1,
                    
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: element, 
                        start: "top 100%",
                        end:'bottom 70%',

                        scrub: 2,
                        toggleActions: "play none none reverse",  
                    },
                }
            );
        });
    }, []);
    
   


    return (

        <div className="w-full flex flex-col items-center text-white ">

        {portfoliodata.map((item, index) => (
            <div id={index} className='p-5 flex flex-col justify-center items-center md:p-20 poppins '>
                <div className=" flex flex-col  md:flex-row items-center  md:items-center md:text-xl mt-20 rise">
                    <img className="md:w-24 w-20   rounded-3xl " src={item['image']} alt="" />
                    <h1 className="md:p-3">{item['name']}</h1>
                    <h1 className="md:py-3">-</h1>
                    <h1 className="md:p-3">{item['shortdesription']}</h1>
                </div>

                <div className="flex flex-col items-center rise  ">
                    <img className="md:h-64 rounded-3xl mt-10 md:m overview" src={item['overview']}  alt="" />
                    <p className="text-center md:px-20 py-14 text-sm font-light">{item['about']}</p>
                </div>

                <div className="w-full md:px-20 py-7 rise">
                    <h1 className="py-5 text-lg ">Technologies Behind {item['name']}</h1>
                    {item['technologies'].map((tech)=>(
                        <p className=" text-neutral-300 font-light my-3 text-sm">• {tech}</p>
                    ))}
                
                </div>
                <div  className="w-full md:px-20 rise">
                    <h1 className="py-5 text-lg ">Key Features of  {item['name']}</h1>
                    {item['features'].map((tech)=>(
                        <p className=" text-neutral-300 font-light my-3 text-sm">• {tech}</p>
                    ))}
                
                </div>
                
            </div>
        ))}
        </div>


    )
    }

export default Portfolio
