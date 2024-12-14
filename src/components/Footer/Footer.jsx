import React from 'react';
import appminelogo from '../../assets/images/Appmine logo B.png';

function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white py-10">
      <div className="container mx-auto px-10 flex flex-col gap-10 ">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={appminelogo} className="h-20 mb-4 opacity-80" alt="Appmine Logo" />
          <p className="text-sm text-gray-400">Building Future-Ready Solutions</p>
        </div>





        <div className='w-full  flex md:flex-row flex-col md:gap-0 gap-10'>

          <div className="flex w-full md:w-1/2  flex-row-reverse md:justify-around justify-between gap-10">
            {/* Company Section */}
            <div className='w-1/2'>
              <h2 className="font-semibold text-lg mb-4 ">Company</h2>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            {/* We Build Section */}
            <div className='w-1/2'>
              <h2 className="font-semibold text-lg mb-4 ">We Build</h2>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/web-development" className="hover:text-white transition">Web Development</a></li>
                <li><a href="/app-development" className="hover:text-white transition">App Development</a></li>
                <li><a href="/ecommerce" className="hover:text-white transition">E-Commerce</a></li>
                <li><a href="/erp-solutions" className="hover:text-white transition">ERP Solutions</a></li>
              </ul>
            </div>
          </div>



          <div className="flex w-full md:w-1/2 flex-row md:justify-around justify-between  gap-10">
            {/* Contact Section */}
            <div className='w-1/2'>
              <h2 className="font-semibold text-lg mb-4 ">Contact Us</h2>
              <address className="not-italic text-gray-300 text-sm">
                Phase 1, Thejaswini,<br />
                Technopark Campus,<br />
                Thiruvananthapuram,<br />
                Kerala 695581<br />
                <a href="tel:+917034730964" className="block mt-2 hover:text-white transition">Ph: 7034730964</a>
              </address>
            </div>

            {/* Social Section */}
            <div className='w-1/2'>
              <h2 className="font-semibold text-lg mb-4 ">Social</h2>
              <div className="flex space-x-4 text-gray-300">
                <a href=" " target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <i className="fa-brands fa-instagram fa-xl" style={{ color: "#ffffff" }}></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <i className="fa-brands fa-facebook fa-xl" style={{ color: "#ffffff" }}></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <i className="fa-brands fa-linkedin fa-xl" style={{ color: "#ffffff" }}></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <i className="fa-brands fa-twitter fa-xl" style={{ color: "#ffffff" }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="border-t-[1px]  mt-10 pt-5 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Appmine Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
