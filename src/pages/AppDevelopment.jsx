import React from 'react'
import PhoneModel from '../components/3D/PhoneModel'

function AppDevelopment() {
    return (
        <div className='bg-black flex w-screen h-screen'  >
           
            <div className='z-10 w-1/2 h-full '>
                <PhoneModel />
            </div>
            <div className=' flex flex-row justify-start items-center z-20 h-full w-1/2'>
                <h1   style={{ WebkitTextStroke: '1px black' }} className='text-shadow text-[#E2E2E2] text-stroke stroke-2 poppins font-bold  text-6xl'>APP DEVELOPMENT</h1>
            </div>

        </div>
    )
}

export default AppDevelopment
