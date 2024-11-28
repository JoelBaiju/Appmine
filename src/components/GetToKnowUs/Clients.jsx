// import React from 'react';
// import './Clients.css'
// import icareindia from '../../assets/images/icareindia.png';
// import spenmax from '../../assets/images/Spenmax_blackbg.jpg';
// import skystream from '../../assets/images/SkyStream-removebg-preview (1).png';
// import kriyado from '../../assets/images/KRIYADO.png';
// import letmego from '../../assets/images/letmego.png';
// import inticure from '../../assets/images/INTICURE-removebg-preview.png';
// import trainonex from '../../assets/images/trainonex.png';
// import tripifyme from '../../assets/images/tripifyme.png';

// function Clients() {
//     const squares1 = [
//         { logo: '' }, { logo: '' }, { logo: '' }, { logo: skystream }, { logo: inticure }, { logo: '' }, { logo: '' }, { logo: '' }]
//     const squares2 = [
//         { logo: '' }, { logo: '' }, { logo: trainonex }, { logo: tripifyme }, { logo: spenmax }, { logo: kriyado }, { logo: '' }, { logo: '' }]
//     const squares3 = [
//         { logo: '' }, { logo: '' }, { logo: '' }, { logo: icareindia }, { logo: letmego }, { logo: '' }, { logo: '' }, { logo: '' },
//     ];

//     return (
//         <div className='mt-36'>
//             <div className='text-white poppins flex flex-col items-center w-full  bg-neutral-950'>
//                 <div className='flex flex-col items-center'>
//                     <h1 className='text-2xl font-semibold'>Trusted by Industry Leaders</h1>
//                     <p className='font-extralight pt-4 text-sm'>
//                         Discover how our clients achieve success with innovative solutions and tailored services.
//                     </p>
//                 </div>


//                 <div className='w-full flex flex-wrap justify-center  mt-20'>
//                     {squares1.map((square, index) => (
//                         <div key={index} className='border w-1/8 aspect-square  h flex justify-center items-center'>
//                             {square.logo && <img src={square.logo} alt={`client-logo-${index}`} className='w-3/6 rounded-3xl object-contain' />}
//                         </div>
//                     ))}
//                 </div> 
//                 <div className='w-full flex flex-wrap justify-center  '>
//                     {squares2.map((square, index) => (
//                         <div key={index} className='border w-1/8 aspect-square h flex justify-center items-center'>
//                             {square.logo && <img src={square.logo} alt={`client-logo-${index}`} className='w-3/6 rounded- object-contain' />}
//                         </div>
//                     ))}
//                 </div> 
//                 <div className='w-full flex flex-wrap justify-center  '>
//                     {squares3.map((square, index) => (
//                         <div key={index} className='border w-1/8 aspect-square h flex justify-center items-center'>
//                             {square.logo && <img src={square.logo} alt={`client-logo-${index}`} className='w-3/6 rounded-l object-contain' />}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Clients;







import React from 'react';
import { useRef,useState , useEffect } from 'react';
import './Clients.css';
import icareindia from '../../assets/images/icareindia.png';
import spenmax from '../../assets/images/Spenmax_blackbg.jpg';
import skystream from '../../assets/images/SkyStream-removebg-preview (1).png';
import kriyado from '../../assets/images/KRIYADO.png';
import letmego from '../../assets/images/letmego.png';
import inticure from '../../assets/images/INTICURE-removebg-preview.png';
import trainonex from '../../assets/images/trainonex.png';
import tripifyme from '../../assets/images/tripifyme.png';

function Clients() {
    const squares = [
        { logo: '' }, { logo: '' }, { logo: '' }, { logo: skystream }, { logo: inticure }, { logo: '' }, { logo: '' }, { logo: '' },
        { logo: '' }, { logo: '' }, { logo: trainonex }, { logo: tripifyme }, { logo: spenmax }, { logo: kriyado }, { logo: '' }, { logo: '' },
        { logo: '' }, { logo: '' }, { logo: '' }, { logo: icareindia }, { logo: letmego }, { logo: '' }, { logo: '' }, { logo: '' },
    ];
    const squares2 = [
        { logo: '' }, { logo: skystream }, { logo: inticure }, { logo: '' } ,
        { logo: trainonex }, { logo: tripifyme }, { logo: spenmax }, { logo: kriyado },
        { logo: '' }, { logo: icareindia }, { logo: letmego }, { logo: '' } ,
    ];


    const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); // Dimensions of the source

    useEffect(() => {
        setDimensions({width:document.getElementById('source').offsetWidth,height:document.getElementById('source').offsetHeight})
    }, []);
    

    return (
        <div className="pt-36 pb-80">
            <div className="text-white poppins flex flex-col items-center w-full bg-neutral-950">
                <div className="flex flex-col items-center ">
                    <h1 className="font-bold poppins-semibold text-4xl text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        Trusted by Industry Leaders
                    </h1>
                    <p className="font-extralight pt-2 text-sm text-center mx-3 mb-10">
                        Discover how our clients achieve success with innovative solutions and tailored services.
                    </p>
      
                </div>





            
                <div className="md:grid hidden grid-cols-4 md:grid-cols-8 relative  justify-center  w-full px-4" id='source'>
                        
                <div className='gradientcover absolute z-20 w-full h-full'></div>
                    {squares.map((square, index) => (
                        <div
                            key={index}
                            className="border aspect-square flex justify-center items-center "
                        >
                            {square.logo && (
                                <img
                                    src={square.logo}
                                    alt={`client-logo-${index}`}
                                    className="w-3/5 h-auto object-contain"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="md:hidden grid grid-cols-4  justify-center mt-20 w-full px-4">
                    {squares2.map((square, index) => (
                        <div
                            key={index}
                            className="border aspect-square flex justify-center items-center "
                        >
                            {square.logo && (
                                <img
                                    src={square.logo}
                                    alt={`client-logo-${index}`}
                                    className="w-3/5 h-auto object-contain"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
     
        </div>
    );
}

export default Clients;

