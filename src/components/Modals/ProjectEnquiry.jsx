import React from 'react'
import { BorderBeam } from '../Magic/BorderBeam'
import { ShineBorder } from '../Magic/ShineBorder'
import Button from '../Button/Button'

function ProjectEnquiry({closemodal}) {
  return (
    <ShineBorder color="#849B25" className=' bg-black/60 enquiryForm w-full  backdrop-blur-2xl flex relative p-6 flex-col items-center '>

      <div className='flex justify-end w-full flex-row'>
        <button onClick={(e)=>closemodal('projectenquiry')} className='text-white pb-16'>Close</button>
      </div>

      <div className='overflow-y-scroll removescrollbar h-full  flex flex-col md:flex-row items-center  justify-around w-full'>
        <div>
          <h1 className='gradient-text-gray proppins text-5xl md:text-7xl'>Let’s <span className='gradient-text'>Collaborate!</span></h1>
          <p className='text-white text-sm md:text-base font-extralight poppins w-3/4 pt-5'>Share your vision with us, and together we’ll bring your ideas to life. Reach out today to start creating something extraordinary!</p>
        </div>
   
        <div className='w- h-5/6 rounded-2xl md:pt-0 pt-10'>

          <div className='w-full flex flex-col '>
            <label htmlFor="name" className='text-white text-base font-light pr-3 poppins'>Name</label>
            <input type="text" className='text-white text-base p-2 w-full md:w-122 h-10 bg-transparent border-2 border-white/30 rounded-lg ' id='name'  />
          </div>
          <div className='w-full flex flex-col mt-10'>
            <label htmlFor="name" className='text-white text-base font-light pr-3 poppins'>Company Name</label>
            <input type="text" className='text-white text-base p-2 w-full md:w-122 h-10 bg-transparent border-2 border-white/30 rounded-lg ' id='name'  />
          </div>
          <div className='w-full flex flex-col mt-10'>
            <label htmlFor="name" className='text-white text-base font-light pr-3 poppins'>Phone</label>
            <input type="text" className='text-white text-base p-2 w-full md:w-122 h-10 bg-transparent border-2 border-white/30 rounded-lg ' id='name'  />
          </div>
          <div className='w-full flex flex-col mt-10'>
            <label htmlFor="name" className='text-white text-base font-light pr-3 poppins'>Email</label>
            <input type="text" className='text-white text-base p-2 w-full md:w-122 h-10 bg-transparent border-2 border-white/30 rounded-lg ' id='name'  />
          </div>

         
        </div>

      </div>
          <div className='flex flex-row justify-end mt-10 '>
            <button className=' text-white border-2 border-neutral-400 rounded-3xl px-10 py-1 text-base'>Send</button>
          </div>
    </ShineBorder>

  )
}

export default ProjectEnquiry
