import React,{useState} from 'react'
import logo from '../../assets/images/Appmine logo new BG T.png'
import menu from '../../assets/images/menu.png'
import './Navbar.css'
import Menu from '../Menu/Menu'
import ProjectEnquiry from '../Modals/ProjectEnquiry'
import JoinTeam from '../Modals/JoinTeam'
function Navbar({addblur,removeblur}) {
    const [droped,setdroped] = useState(false); 





    const magic = () => {
        console.log('magic1')
        document.body.style.overflow = 'hidden'; // Disable scrolling
        setdroped(true)
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
        console.log('magic2')
        setdroped(false)
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


    const [modaldropped,setmodaldropped]=useState(false)

    const openmodal=(which)=>{
        addblur()
        const enquiryform=document.getElementById(which)
        enquiryform.classList.remove('scale-y-0')
        // enquiryform.classList.remove('-translate-y-full')
        // enquiryform.classList.remove('translate-x-full')
        enquiryform.classList.add('scale-y-100')
        setmodaldropped(true)
    }

    const closemodal=(which)=>{
        removeblur()
        const enquiryform=document.getElementById(which)
        enquiryform.classList.add('scale-y-0')
        // enquiryform.classList.add('-translate-y-full')
        // enquiryform.classList.add('translate-x-full')
        enquiryform.classList.remove('scale-y-100')
        setmodaldropped(false)
    }
  return (
    <div id='navbar' className='absolute  z-50 fall-animation w-full'>
        {/* <h1 className='text-red-700'>hwloooo</h1> */}
        <div className='bg-black h-12 p-4  flex flex-row justify-between z-20 relative  '>

            <div className='flex items-center flex-row h-full'>
                <img  src={logo} className='h-9'  alt="" />
            </div>

            

            <div className=' hidden md:block '>
                <div className=' flex flex-row'>
                    <p className='gmarket text-neutral-500 font-semibold text-xs mx-5 hover:text-neutral-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>Home</p>
                    <p onClick={(e)=>openmodal('projectenquiry')}  className='gmarket text-neutral-500 font-semibold text-xs mx-5 hover:text-neutral-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>Project Enquiry</p>
                    <p onClick={(e)=>openmodal('jointeam')}        className='gmarket text-neutral-500 font-semibold text-xs mx-5 hover:text-neutral-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>Join Our Team</p>
                    {/* <p className='text-neutral-500 font-semibold text-xs mx-5 hover:text-neutral-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>Contact</p> */}
                </div>  
            </div>
    
 
            
          
            <div className="md:hidden h-full flex flex-row items-center">
                <Menu droped={droped} magic1={magic} magic2={magic2}/>
            </div>

            <div    id='projectenquiry' 
                    className=' pt-12 px-2 enquiryForm transition-all ease-in-out duration-500 w-full h-screen absolute flex flex-row justify-center top-0 left-0 scale-y-0  '> 
                <ProjectEnquiry closemodal={closemodal}/>
            </div>

            <div    id='jointeam'       
                    className=' pt-12 px-2 enquiryForm transition-all ease-in-out duration-500 w-full h-screen absolute flex flex-row justify-center top-0 left-0 scale-y-0  '> 
                <JoinTeam closemodal={closemodal}/>
            </div>

        </div>
  
        <div className="flex w-full  flex-row justify-center">
            <div id='greeting'  className='bg-black  text-black text-left  overflow-hidden w-full h-0'>
                <p className='navitem text-transparent font-semibold text-2xl  mt-10 ml-10 '>Home</p>
                <p onClick={(e)=>openmodal('projectenquiry')}   className='navitem text-transparent font-semibold text-2xl   mt-5 ml-10'>Project Enquiry</p>
                <p onClick={(e)=>openmodal('jointeam')}         className='navitem text-transparent font-semibold text-2xl   mt-5 ml-10'>Join Our Team</p>
                {/* <p className='navitem text-transparent font-semibold text-2xl   mt-5 ml-10'>Contact</p> */}
       
                {/* <button className='bg-white' onClick={magic2}>magic2</button> */}
            </div>
            
        </div>
            
      
    </div>
  )
}

export default Navbar


