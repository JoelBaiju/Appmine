import React from 'react'
import { ShineBorder } from '../Magic/ShineBorder'
import './Modals.css'

function JoinTeam({closemodal}) {
  return (
    <ShineBorder color="#849B25" className='bg-black/60 enquiryForm w-full  backdrop-blur-2xl flex relative p-6 flex-col items-center '>

      <div className='flex  justify-end w-full flex-row'>
        <button onClick={(e)=>closemodal('jointeam')} className='text-white pb-16'>Close</button>
      </div>

      <div className='overflow-y-scroll removescrollbar h-full flex flex-col md:flex-row items-center  justify-around w-full'>
        <div>
          <h1 className='gradient-text-gray proppins text-5xl md:text-7xl'>Let’s Build <span className='gradient-text'>Together!</span></h1>
          <p className='text-white text-sm md:text-base font-extralight poppins w-3/4 pt-5'>Join a team that values creativity, collaboration, and continuous learning. Together, we’ll reach new heights!</p>
        </div>
   
        <div className=' h-5/6 rounded-2xl  md:pt-0 pt-10'>

          <div className='flex flex-col w-full '>
            <label htmlFor="name" className='text-white text-base font-light pr-3 poppins'>Name</label>
            <input type="text" className='w-  md:w-122 h-10 bg-transparent border-2 border-white/30 rounded-lg ' id='name'  />
          </div>
          <div className='flex flex-col mt-10 w-full'>
            <label htmlFor="name" className='text-white text-base font-light pr-3 poppins'>Interested Position</label>
            <input type="text" className='w-full md:w-122 h-10 bg-transparent border-2 border-white/30 rounded-lg ' id='name'  />
          </div>
          <div className='flex flex-col mt-10 w-full'>
            <label htmlFor="name" className='text-white text-base font-light pr-3 poppins'>Phone</label>
            <input type="text" className='w-full md:w-122 h-10 bg-transparent border-2 border-white/30 rounded-lg ' id='name'  />
          </div>
          <div className='flex flex-col mt-10 w-full'>
            <label htmlFor="name" className='text-white text-base font-light pr-3 poppins'>Email</label>
            <input type="text" className='w-full md:w-122 h-10 bg-transparent border-2 border-white/30 rounded-lg ' id='name'  />
          </div>

          
        </div>

      </div>
      <div className='flex flex-row justify-end mt-10'>
            <button className=' text-white px-10 py-1 rounded-3xl border-2 border-neutral-400  text-base'>Send</button>
          </div>
    </ShineBorder>

    )
}

export default JoinTeam
