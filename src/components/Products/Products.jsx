import React, { useEffect, useState } from "react";
import "./Products.css";
import panchara from '../../assets/images/Panchara.png';
import youtube from '../../assets/images/youtube (1).png';
import spotify from '../../assets/images/spotify (1).png';
import chrome from '../../assets/images/chrome (1).png';
import ImageAnimator from "./ImageAnimator";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Products() {
  const items = [
    {
      image: panchara,
      name: 'Panchara',
      text: 'We deliver cutting-edge AI and ML solutions tailored to your business.',
      shadow: '#441D3C',
      gtheme1: 'from-pink-700',
      gtheme3: 'to-pink-300',
      // gtheme3: 'to-pink-900',
    },
    {
      image: spotify,
      name: 'Spotify',
      text: 'Discover music with innovative sound and features.',
      shadow: '#354B33',
      gtheme1: 'from-green-700',
      gtheme3: 'to-green-300',
      // gtheme3: 'to-green-900',
    },
    {
      image: youtube,
      name: 'YouTube',
      text: 'A platform for video innovation and entertainment.',
      shadow: '#616161',
      gtheme1: 'from-red-700',
      gtheme3: 'to-red-300',
      // gtheme2: 'to-red-900',
    },
    {
      image: chrome,
      name: 'Chrome',
      text: 'Explore the web with the fastest browser.',
      shadow: '#8a8522',
      gtheme1: 'from-yellow-700',
      gtheme3: 'to-yellow-300',
      // gtheme3: 'to-yellow-900',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = items[currentIndex];
  const follow1 = items[(currentIndex + 1) % items.length];
  const follow2 = items[(currentIndex + 2) % items.length];

  var play=true
  setTimeout(() => {
    if (play){
        Next()
    }
  }, 2500);

  const handleNext=()=>{
    play=false
    Next()
  }

  const Next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

 




  const className = `products text-transition  opacity-70 md:w-188 w-64 md:text-8xl text-2xl poppins font-bold text-center md:text-right text-white  md:bg-gradien-to-b bg-gradient-to-l ${current.gtheme1}  ${current.gtheme3} text-transparent bg-clip-text`;

  return (
    <div className="">
        <div className=" md:text-8xl poppins font-bold text-right md:mx-14  my-8 w-">
            <p className="text-center text-sm md:text-lg poppins font-normal mx-5">
            "At <span className="gradient-text font-semibold">Appmine Studio</span>,
            we craft innovative IT solutions with a commitment to excellence, 
            reliability, and lasting impact, ensuring every project reflects the
            beauty of precision and trust."
            </p>
        </div>

        <div className="w-full p-3 rounded-3xl h-144 border-2 border-white/20">
            <div className="bg-black h-full w-full rounded-3xl flex flex-col-reverse md:flex-row items-center justify-between  p-5">
                <div className="md:w-1/2 h-full w-full text-white poppins flex flex-row items-center md:m-0 mt-10 justify-around">
                    
                    
                    <div className="md:block hidden">
                        <img
                            src={follow2.image}
                            className="opacity-35 w-20"
                            style={{ filter: "grayscale(100%)" }}
                            alt="Black and White Logo"
                        />
                    </div>



                    <div className="md:block hidden">
                        <img
                            src={follow1.image}
                            className="opacity-45 w-32"
                            style={{ filter: "grayscale(100%)" }}
                            alt="Black and White Logo"
                        />
                    </div>


                    <div className="relative md:w-144 md:h-100 w-full h-full ">
                      <div className="absolute  w-full h-100 z-10 opacity-30" style={{background: `radial-gradient(circle, ${current.shadow}, black)`}}>

                      </div>
                      <div    className="absolute z-20 flex w-full h-100 flex-col md:flex-row items-center justify-between productscurrent py-8 px-10 rounded-3xl ">
                            {/* // style={{ boxShadow: `0 0 50px 5px ${current.shadow}` }}> */}

                        <ImageAnimator imageSrc={current.image} altText={'eof'}/>
                        <div>
                            <h1 className="md:text-2xl mb-5 ml-2 text-white">{current.name}</h1>
                            <p className="md:text-lg ml-2">{current.text}</p>
                        </div>
                      </div>

                    </div>
                    

                </div>
          
                <div className=" mt-10 md:mt-0 ">
                    <h1 className={className}>
                        Innovative Products, Endless Possibilities
                    </h1>
                </div>
            </div>
        </div>

      {/* <div className="carousel-container bg-black">
        <button
          onClick={handlePrev}
          className="w-20 h-10 bg-slate-50 nav-button"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          className="nav-button w-20 h-10 bg-slate-50 nav-button"
        >
          →
        </button>
      </div> */}
    </div>
  );
}

export default Products;














//   const currentElementRef = useRef(null);
//   const followingElement1Ref = useRef(null);
//   const followingElement2Ref = useRef(null);

//   useEffect(() => {
//     // Access DOM elements only after the render
//     const currentElement = document.getElementById(0);
//     const followingElement1 = document.getElementById(1);
//     const followingElement2 = document.getElementById(2);
//     // Update refs to point to the correct elements
//     currentElementRef.current = currentElement;
//     followingElement1Ref.current = followingElement1;
//     followingElement2Ref.current = followingElement2;

//     if (currentElementRef.current) {
//       currentElementRef.current.classList.remove('hidden', 'inactive','order-3');
//       currentElementRef.current.classList.add('order-1','active')
//     }
//     if (followingElement1Ref.current) {
//       followingElement1Ref.current.classList.remove('hidden');
//     }
//     if (followingElement2Ref.current) {
//       followingElement2Ref.current.classList.remove('hidden');
//     }
//   }, []);  




  

//   var cind=0
//   var fol1=1
//   var fol2=2

//   const change = () => {
//     console.log('gobus')
//     if (currentElementRef.current) {
//         currentElementRef.current.classList.add('inactive','order-3');
//         currentElementRef.current.classList.remove('order-1','active');
//     }
//     if (followingElement2Ref.current) {
//       followingElement2Ref.current.classList.add('hidden');
//     }
//     const newCurrentElement=document.getElementById(cind)
//     const newFollowingElement1=document.getElementById(fol1)
//     const newFollowingElement2=document.getElementById(fol2)
//     newCurrentElement.classList.remove('inactive','hidden','order-3')
//     newCurrentElement.classList.add('order-1','active')


//     currentElementRef.current = newCurrentElement;
//     followingElement1Ref.current = newFollowingElement1;
//     followingElement2Ref.current = newFollowingElement2;

//   };



  

//   const forward=()=>{
//     console.log(fol2,fol1,cind)

//     if (fol2===items.length-1){
//         fol2=0
//         fol1+=1
//         cind+=1
//     }
    
//     else if (fol2===0){
//         fol2+=1
//         fol1=0
//         cind+=1
//     }    
//     else if (fol2===1){
//         fol2+=1
//         fol1+=1
//         cind=0
//     }
//     else{
//         cind+=1
//         fol1+=1
//         fol2+=1
//     }
//     change()
//         console.log(fol2,fol1,cind)

//   }






//   return (

//     <div className="h-screen flex flex-col items-center justify-center ">
        

//                 <div className="flex flex-row-reverse ">
//                     {items.map((item, index) => (
//                         <div id={index} className='inactive hidden order-1'>
//                             <img className="h-44 " src={item['image']} alt="" />
//                         </div>
//                     ))}
//                 </div>
    
    
//                 <div>
//                     <button className="bg-slate-500 mr-10 w-32 h-10 " onClick={(e)=>forward()}>
//                         next
//                     </button>  
//                     <button className="bg-slate-500">
//                         next
//                     </button>
//                 </div>
    



//             </div>





//   );
// };

// export default Products;
