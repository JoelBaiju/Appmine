import React,{useState} from 'react'
import logo from '../../assets/images/Appmine logo B 2.png'
import menu from '../../assets/images/menu.png'
import './Navbar.css'
import Menu from '../Menu/Menu'
function Navbar() {
    let droped = false; 






    const magic = () => {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        droped=true
        const greeting = document.getElementById('greeting')
        for (let i = 0; i < window.screen.height; i++) {
                setTimeout(() => {
                    greeting.style.height = `${i}px`;  
                }, i * 1/3); 
            }


        const elements = document.getElementsByClassName('navitem');

        for (let i = 0; i < elements.length; i++) {
            setTimeout(() => {
                elements[i].classList.remove('text-transparent');
                elements[i].classList.add('text-neutral-500');
                elements[i].classList.add('fall-animation');
            }, i * 50); // Delay of 500ms (0.5 seconds) for each element
        }
             
        
    }   

    const magic2 = () => {
        droped=false
        document.body.style.overflow = 'scroll'; // Disable scrolling

        const greeting = document.getElementById('greeting');
        let delay = 0;  
    
        for (let i = window.screen.height; i >= 0; i--) {
            setTimeout(() => {
                greeting.style.height = `${i}px`;
            }, delay);
            delay += 0.3; 
        }
        const elements = document.getElementsByClassName('navitem');

        for (let i = 0; i < elements.length; i++) {
            setTimeout(() => {

                elements[i].classList.add('text-transparent');
                elements[i].classList.remove('text-neutral-500');
                elements[i].classList.remove('fall-animation');
            }, i * 50); // Delay of 500ms (0.5 seconds) for each element
        }
    }
  return (
    <div id='navbar' className='absolute z-50 fall-animation'>
        {/* <h1 className='text-red-700'>hwloooo</h1> */}
        <div className='bg-black h-12 p-4 flex flex-row justify-between z-20  '>

            <div className='flex items-center flex-row h-full'>
                <img src={logo} className='w-10'  alt="" />
            </div>

            

            <div className=' hidden md:block'>
                <div className=' flex flex-row'>
                    <p className='text-neutral-500 font-semibold text-xs mx-5'>Experience</p>
                    <p className='text-neutral-500 font-semibold text-xs mx-5'>Project Enquiry</p>
                    <p className='text-neutral-500 font-semibold text-xs mx-5'>Join Our Team</p>
                    <p className='text-neutral-500 font-semibold text-xs mx-5 '>Contact</p>
                </div>
            </div>
    

            
          
            <div className="md:hidden h-full flex flex-row items-center" onClick={droped?magic2:magic}>
                <Menu />
            </div>

   
        </div>
        {/* <div 
            id='navv' 
            className='h-full w-full navv bg-black transform transition-transform duration-300 -translate-y-full fixed top-0 left-0 md:translate-y-0 md:relative z-10 md:block ease-in'
        >
            <div className='p-5 flex flex-row items-center justify-between h-full'>

                    <div  className=' flex flex-col bg-black p-10 items-start '>
                        <p className='navitem text-transparent font-semibold text-2xl  m-2'>Experience</p>
                        <p className='navitem text-transparent font-semibold text-2xl  m-2'>Project Enquiry</p>
                        <p className='navitem text-transparent font-semibold text-2xl  m-2'>Join Our Team</p>
                        <p className='navitem text-transparent font-semibold text-2xl  m-2'>Contact</p>
                    </div>
    
                <button className='h-20 md:hidden' onClick={hide}>
                    <i className="fa-solid fa-xmark" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                </button>
            </div>
            
        </div> */}
        <div className="flex w-screen  flex-row justify-center">
            <div id='greeting'  className='bg-black  text-black text-left  overflow-hidden w-full h-0'>
                <p className='navitem text-transparent font-semibold text-2xl  mt-10 ml-10 '>Experience</p>
                <p className='navitem text-transparent font-semibold text-2xl   mt-5 ml-10'>Project Enquiry</p>
                <p className='navitem text-transparent font-semibold text-2xl   mt-5 ml-10'>Join Our Team</p>
                <p className='navitem text-transparent font-semibold text-2xl   mt-5 ml-10'>Contact</p>
       
                <button className='bg-white' onClick={magic2}>magic2</button>
            </div>
            
        </div>
            
      
    </div>
  )
}

export default Navbar


