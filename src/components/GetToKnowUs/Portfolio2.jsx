import React from 'react'
import { ShineBorder } from '../Magic/ShineBorder'

function Portfolio2({ data }) {

    const maxLength = 200;

    function truncateText(text, maxLength) {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength) + '...';
    }
    
    return (
        <div>
            <div className='h-170 p-5 '>
                <h1 className='text-2xl md:text-4xl m-5 astralaga text-white'>Our Canvas</h1>
                <div className=' flex flex-row overflow-x-scroll remove_scrollbar gmarket'>

                    {data.map((item, index) => (
                        <ShineBorder color={'white'} id={index} className='  bg-neutral-900 rounded-xl mx-3 w-122 h-144 overflow-y-hidden remove_scrollbar p-5 text-left'>

                            <div className=" flex flex-col h-60 overflow-hidden md:text-xl">
                                <div className='flex gap-3 h-20 items-center pb-3'>
                                    <img className=" w-12   rounded-3xl " src={item['image']} alt="" />
                                    <h1 className="">{item['name']}</h1>
                                </div>

                                <h1 className="text-sm">{truncateText(item['shortdesription'],100)}</h1>

                                <p className="  py-4 text-sm font-light">{truncateText(item['about'],100)}</p>
                            </div>


                            <div className="w-full h-60 rise p-3">
                                <h1 className=" text-sm ">Key Features of  {item['name']}</h1>
                                {item['features'].slice(0,2).map((tech ) => (
                                    <p className=" text-neutral-300 font-light my-3 text-xs">• {tech}</p>
                                ))}

                            </div>

                            <button className='bg-black  px-4 py-2 rounded-2xl  font-bold'> 
                                <h1 className='myshine_gray'>View more</h1>
                            </button>

                        </ShineBorder>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Portfolio2
