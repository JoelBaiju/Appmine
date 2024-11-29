import React from 'react'
import appminelogo from '../../assets/images/Appmine logo B.png'
function Footer() {
  return (

    <div className='w-full  flex flex-col md:flex-row pt-20 justify-around bg-neutral-950 p-5'>
        <div >
            <img src={appminelogo} className='h-52  opacity-60' alt="" />
        </div>
        <div className='text-white font-extralight m-10 poppins text-base'>
            <h1 className='font-semibold pb-5'>Contact</h1>
            <div>
              <p>About Us</p>
              <p>Careers</p>
            </div>
           
        </div> 
        <div className='text-white poppins m-10 font-extralight text-base'>
            <h1 className='font-semibold pb-5'>Technology</h1>
            <div>
              <p>Web Development</p>
              <p>App Development</p>
              <p>E-Commerce</p>
              <p>ERP Solutions</p>
            </div>
           
        </div>  

 
        
        <div className='text-white poppins m-10 font-extralight text-base'>
            <h1 className='font-semibold pb-5'>Contact Us</h1>
            <div>
              <p>Phase 1, Thejaswini, <br />
                  Technopark Campus, <br />
                  Thiruvananthapuram,<br />
                  Kerala 695581</p>
              <p>Ph : 7034730964</p>
            </div>
           
        </div>
    </div>
    
  )
}

export default Footer
