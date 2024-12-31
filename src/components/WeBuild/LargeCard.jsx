import React from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react'
import Button from '../Button/Button';
import SpinText from '../Magic/SpinText';
import react from '../../assets/images/React.png'
import python from '../../assets/images/Python.png'
import vs from '../../assets/images/Vs.png'
import cStand from '../../assets/images/CanvasStand.svg'
gsap.registerPlugin(ScrollTrigger);

function LargeCard({data}) {





    return (

            <div id='largecard' className='  p-5 relative  mb-3 rounded-3xl flex md:flex-row bg-black flex-col items-center w-screen ' >
            
                <div className={`p-5 relative mx-3 mb-3 rounded-3xl flex  flex-col ${data.flexdirection} items-center md:w-full  w-full `}>
                    <div className='flex flex-col items-left gap-5 bg-white rounded-l-2xl pl-10 justify-center md:w-1/2 h-56  ' >
                        <h1 className='text-black/55 astralaga text-2xl '>{data.head}</h1>
                        <p className="mb-5 text-black gmarket font-bold  mt-2 md:mt-0 text-sm md:text-xl w-10/12 text-left"  >
                            <span className='text-blue-800'><SpinText text={data.decoratedText} /></span> {data.text}
                        </p>
                        {/* <Button texttoshow={"Explore"}/> */}
                    </div>
                    <video autoPlay muted loop src={data.bg} className='blueshado inners border-[1px] border-[#FFFCE1] w-3/5 rounded-3xl ' />
                </div>
            </div>

    )
}

export default LargeCard
