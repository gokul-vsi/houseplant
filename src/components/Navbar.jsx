import React, { useState } from 'react';
import { TfiMenu,TfiClose } from "react-icons/tfi";
import logo from '../images/plant-logo.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-white text-black navbar">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div>
          <img src={logo} alt="" className='h-14' />
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="">Home</a>
          <a href="#about" className="">About</a>
          <a href="#product" className="">Product</a>
          <a href="#contact" className="">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <TfiClose />
          ) : (
            <TfiMenu />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black text-center">
          <a href="#home" className="block px-4 py-2 hover:bg-blue-500">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-blue-500">
            About
          </a>
          <a href="#product" className="block px-4 py-2 hover:bg-blue-500">
            Product
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
    </>
  );
};
