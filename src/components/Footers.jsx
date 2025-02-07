import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export const Footers = () => {
  return (
    <div className='bg-gray-100'>
       
       <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 md:ms-24 md:mt-16">
           <div className="contact-1 mt-5 mb-5 text-center md:text-start">
           <h3 className='text-xl font-bold'>Contact Us</h3>
                <div className="flex justify-center items-center md:justify-start gap-1 mb-2 mt-2">
                    <CiLocationOn className='mt-1 md:text-2xl'/>
                    <p>Address: London Oxford Street,012 United Kingdom.</p>
                </div>
                <div className="flex justify-center items-center md:justify-start gap-1  mb-2">
                    < IoCallOutline className='mt-1'/>
                    <p>Phone : (+032) 3456 7890</p>
                </div>
                <div className="flex justify-center items-center md:justify-start gap-1  mb-2">
                    <CiMail className='mt-1'/>
                    <p>
                    Email: Botanicalstore@gmail.com</p>
                </div>
                <div className="flex justify-center items-center md:justify-start">
                    <p className='font-bold'>Follow Us:</p>
                    <FaFacebook className='mt-1 ms-4 md:ms-5'/>
                    <FaInstagram className='mt-1 ms-2'/>
                    <FaWhatsapp className='mt-1 ms-2'/>
                    <FaGoogle className='mt-1 ms-2'/>
                </div>
           </div>
           <div className="contact-2 md:ms-7 mt-5 mb-5 text-center md:text-start">
            <h3 className='text-xl font-bold'>INFORMATION</h3>
            <p className=' mb-2 mt-2'>New Products</p>
            <p className=' mb-2'>Top Sellers</p>
            <p className=' mb-2'>Our Blogs</p>
            <p className=' mb-2'>About Our Shops</p>
            <p className=' mb-2'>Privacy Policy</p>
           </div>
           <div className="contact-3 mt-5 mb-5 text-center md:text-start">
            <h3 className='text-xl font-bold'>MY ACCOUNTS</h3>
            <p className=' mb-2 mt-2'>Accounts</p>
            <p className=' mb-2'>Discount</p>
            <p className=' mb-2'>Order History</p>
            <p className=' mb-2'>Personal Information</p>
           </div>
           <div className="contact-4 mt-5 mb-5 text-center md:text-start">
            <h3 className='text-xl font-bold'>POPULAR TAGS</h3>
            <div className="flex justify-center items-center md:justify-start gap-2 md:mt-2">
                <p>Trend</p>
                <p className=''>Decor</p>
            </div>
            <div className="flex gap-2 justify-center items-center md:justify-start mt-2">
                <p>Plant</p>
                <p className=''>Table tree</p>
            </div>
            <div className="flex gap-2 justify-center items-center md:justify-start mt-2">
                <p>Bedroom tree</p>
                <p className=''>Living room</p>
            </div>
           </div>
        </div>
       </div>
       
    </div>
  )
}
