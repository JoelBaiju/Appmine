import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import WelcomeBanner from '../../components/WelcomeBanner/WelcomeBanner'
import WeBuild from '../../components/WeBuild/WeBuild'
import Products from '../../components/Products/Products'
import GetToKnowUs from '../../components/GetToKnowUs/GetToKnowUs'
import TextRevealByWord from '../../components/MagicUi/TextRevealByWord'
import Footer from '../../components/Footer/Footer'

function AppMineExperience() {

  const addblur=()=>{
    const welcome=document.getElementById('welcome')
    welcome.classList.add('blur-lg')
  }  
  
  const removeblur=()=>{
    const welcome=document.getElementById('welcome')
    welcome.classList.remove('blur-lg')
  }

  return (
    <div className=''>
        <Navbar addblur={addblur} removeblur={removeblur}/>
        <div className='w-full bg-black'>
          <div id='welcome' className='w-ful transition-all ease-in-out duration-500'> 
          <WelcomeBanner/>
          </div>
        </div>
       
        <WeBuild/>
        <Products/>
        <GetToKnowUs/>
        <Footer/>
 
    </div>
  )
}

export default AppMineExperience
