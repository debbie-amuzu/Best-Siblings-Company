// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo2.png";
// import { FaBars, FaTimes } from "react-icons/fa";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
// //  const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
//  // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   // Active link style
//   const getLinkClass = (path) => {
//     const baseClass =
//       "py-2 px-4 font-medium text-sm transition-all duration-300 relative";
//     const isActive = location.pathname === path;

//     return `${baseClass} ${
//       isActive
//         ? "text-green-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-400"
//         : "text-[#fbf4d8] hover:text-green-400"
//     }`;
//   };


//   return (
//     <nav className="bg-gold-500/90  backdrop-blur-sm text-gold-500 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               <img
//                 src={logo}
//                 className="h-[70px]  w-auto object-contain"
//                 alt="Company Logo"
//               />
//               <span className="ml-2 text-xl font-bold text-black italic">
//                 Best Siblings Company
//               </span>
//             </Link>
//           </div>

//           <div className="-mr-2 flex items-center md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-black focus:outline-none"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="hidden md:flex md:items-center md:space-x-2">
//              <Link to="/" 
//              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Home
     
//             </Link>
//             <Link
//               to="/products"
//               className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Products
//             </Link>
//             <Link
//               to="/about"
//               className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/blog"
//               className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Blog
//             </Link>
//             <Link
//               to="/contact"
//               className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Contact
//             </Link>
//             <Link
//               to="/cart"
//               className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Cart (0)
//             </Link>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/products"
//               className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Products
//             </Link>
//             <Link
//               to="/about"
//               className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/blog"
//               className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Blog
//             </Link>
//             <Link
//               to="/contact"
//               className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Contact
//             </Link>
//             <Link
//               to="/cart"
//               className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Cart (0)
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-white underline font-bold px-3 py-2"
      : "text-black hover:text-yellow-200 px-3 py-2";

  return (
    <nav className="bg-gold-500/90  backdrop-blur-sm text-gold-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center ">
          <div className="flex items-center gap-8">
{/* Logo */}
         
               <img
                 src={logo}
                className="h-[70px]  w-auto object-contain"
                alt="Company Logo"
               />
          <div className="flex-shrink-0  ">
            <Link to="/" className="text-black text-xl font-bold italic">
              Best Siblings Company Ltd.
            </Link>
          </div>
          </div>
          

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <NavLink to="/" className= {getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={getLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/products" className={getLinkClass}>
              Products
            </NavLink>
            <NavLink to="/blog" className={getLinkClass}>
              Blog
            </NavLink>
           
            <NavLink to="/contact" className={getLinkClass}>
              Contact
            </NavLink>
             <NavLink to="/cart" className={getLinkClass}>
              <FaCartShopping/>
            </NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gold-500/90  px-2 pb-3 space-y-1">
          <NavLink to="/" className={getLinkClass} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkClass} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/products" className={getLinkClass} onClick={toggleMenu}>
            Products
          </NavLink>
          <NavLink to="/blog" className={getLinkClass} onClick={toggleMenu}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={getLinkClass} onClick={toggleMenu}>
            Contact
          </NavLink>
          <NavLink to="/cart" className={getLinkClass} onClick={toggleMenu}>
    <FaCartShopping/>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
