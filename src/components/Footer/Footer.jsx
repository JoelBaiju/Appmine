import React from 'react'
import appminelogo from '../../assets/images/Appmine logo B.png'
function Footer() {
  return (

    <div className='w-full h-144 flex flex-row items-center justify-around bg-neutral-950 p-5'>
        <div >
            <img src={appminelogo} className='h-52 opacity-60' alt="" />
        </div>
        <div className='text-white'>
            <h1>Contact</h1>
            <h1>Company Policy</h1>
            
            <h1></h1>
        </div>
    </div>
    
  )
}

export default Footer
