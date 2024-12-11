// import React from 'react'
// import appminelogo from '../../assets/images/Appmine logo B.png'
// function Footer() {
//   return (

//     <div className='w-full  flex flex-col md:flex-row pt-20 justify-around bg-neutral-950 p-5'>
//         <div >
//             <img src={appminelogo} className='h-52  opacity-60' alt="" />
//         </div>
//         <div className='text-white font-extralight m-10 poppins text-base'>
//             <h1 className='font-semibold pb-5'>Company</h1>
//             <div>
//               <p>About Us</p>
//               <p>Careers</p>
//             </div>
           
//         </div> 
//         <div className='text-white poppins m-10 font-extralight text-base'>
//             <h1 className='font-semibold pb-5'>We Build</h1>
//             <div>
//               <p>Web Development</p>
//               <p>App Development</p>
//               <p>E-Commerce</p>
//               <p>ERP Solutions</p>
//             </div>
           
//         </div>  

 
        
//         <div className='text-white poppins m-10 font-extralight text-base'>
//             <h1 className='font-semibold pb-5'>Contact Us</h1>
//             <div>
//               <p>Phase 1, Thejaswini, <br />
//                   Technopark Campus, <br />
//                   Thiruvananthapuram,<br />
//                   Kerala 695581</p>
//               <p>Ph : 7034730964</p>
//             </div>
           
//         </div>   
//         <div className='text-white poppins m-10 font-extralight text-base'>
//             <div>
              
//             </div>
           
//         </div>
//     </div>
    
//   )
// }

// export default Footer


























import React from 'react';
import appminelogo from '../../assets/images/Appmine logo B.png';

function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={appminelogo} className="h-20 mb-4 opacity-80" alt="Appmine Logo" />
          <p className="text-sm text-gray-400">Building Future-Ready Solutions</p>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Company</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">We Build</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/web-development" className="hover:text-white transition">Web Development</a></li>
            <li><a href="/app-development" className="hover:text-white transition">App Development</a></li>
            <li><a href="/ecommerce" className="hover:text-white transition">E-Commerce</a></li>
            <li><a href="/erp-solutions" className="hover:text-white transition">ERP Solutions</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
          <address className="not-italic text-gray-300 text-sm">
            Phase 1, Thejaswini,<br />
            Technopark Campus,<br />
            Thiruvananthapuram,<br />
            Kerala 695581<br />
            <a href="tel:+917034730964" className="block mt-2 hover:text-white transition">Ph: 7034730964</a>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Appmine Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
