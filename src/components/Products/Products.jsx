import React, { useState } from "react";
import "./Products.css";
import panchara from '../../assets/images/Panchara.png'
import playstore from '../../assets/images/playstore.png'
import chatgpt from '../../assets/images/chatgpt.png'

function Products() {



    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {'image':panchara,'name':'Panchara','text':'We deliver cutting-edge AI and ML solutions tailored to your bus','shadow':'441D3C'},
        {'image':chatgpt,'name':'ChatGPT','text':'We deliver cutting-edge AI and ML solutions tailored to your bus','shadow':'354B33'},
        {'image':playstore,'name':'PlayStore','text':'We deliver cutting-edge AI and ML solutions tailored to your bus','shadow':'616161'},
        ]; 
    const current=0
    const follow1=1
    const follow2=2

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };
  return (
    <div>
        <div className='h-40   w-full flex flex-row md:px-28 justify-between items-center ' >
            <p className=' text-center text-sm md:text-lg  poppins font-normal mx-5'  >
                "At <span className='gradient-text font-semibold'>Appmine Studio</span> , 
                we craft innovative IT solutions with a commitment to excellence,
                 reliability, and lasting impact, ensuring every project reflects the beauty of precision and trust."
            </p>
        </div>

        <div className=' w-full p-3 rounded-3xl h-144 '>
            <div className='  bg-black h-full w-full rounded-3xl flex flex-row items-center justify-between p-5'>
                <div className='w-1/2'>

                </div>
                <div className='w-1/2'>
                    <h1 className='gradient-text-pink md:text-8xl poppins font-bold text-right ris' 
                        style={{  background: 'linear-gradient(to right, #612C70, #B03E95);' }}>
                            Innovative <br /> Products, <br />Endless <br />Possibilities
                    </h1>
                </div>
            </div>
        </div>



        <div className="carousel-container">
            <button onClick={handlePrev} className="nav-button">←</button>
                <div className="carousel">
{/* 
                        <div >
                            {items[current]}
                        </div>
                        <div>
                            {items[follow1]}
                        </div>
                        <div>
                            {items[follow2]}
                        </div> */}
                    
                </div>
            <button onClick={handleNext} className="nav-button">→</button>
        </div>


       
    </div>
  )
}

export default Products
