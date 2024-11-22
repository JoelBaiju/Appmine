import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import WelcomeBanner from '../../components/WelcomeBanner/WelcomeBanner'
import WeBuild from '../../components/WeBuild/WeBuild'
import Products from '../../components/Products/Products'

function AppMineExperience() {
  return (
    <div className='relative z-10'>
        <Navbar/>
        <WelcomeBanner/>
        <WeBuild/>
        <Products/>
        <div className='w-2 h-screen bg-slate-50'>
        
        </div>
    </div>
  )
}

export default AppMineExperience
