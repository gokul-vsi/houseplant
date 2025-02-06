import React from 'react'
import { Navbar } from './Navbar'
import banner from '../images/banner.jpg'
import plant from '../images/plant-1.png'
import plants from '../images/plnat-2.jpg'
import { PiPlantFill } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";
import { LuTreePalm } from "react-icons/lu";
import { Product } from './Product'

export const Home = () => {
  return (
    <div>
        <Navbar/>
          <div className="back">
             <div className="container  mx-auto px-5">
              <div className="flex mt-9 flex-col md:flex-row md:gap-8">
                <div className="md:w-1/2">
                <h1 className='text-4xl md:text-6xl md:mt-32 font-medium'>House Plant is Perfect choice</h1>
                <div className='bottom mt-5'></div>
                <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae officiis dignissimos laudantium voluptatibus asperiores assumen.</p>
                <button className='btn-1 px-4 py-2 mt-5 rounded'>Order now</button>
                </div>
                <div className="md:w-1/2">
                <img src={plant} className='rounded' alt="" />
                </div>
              </div>
             </div>
          </div>
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
              <img src={plants} alt="" />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
              <h1 className='text-3xl md:text-4xl font-bold mt-6'>Why Choose Us ?</h1>
              <div className="plain-line mt-5 ms-5 md:ms-0"></div>
              <p className='text-justify mt-5'>Lorem ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley ... <span style={{color:'#06D001'}}>Learn More</span></p>
              <div className='mt-10  flex gap-5 flex-col md:flex-row'>
              <PiPlantFill  className='text-8xl flex justify-center mx-auto items-center md:justify-start ' style={{color:'#3E7B27'}}  />
               <div className='flex flex-col'>
                <h5 className='text-2xl font-bold'>Hand Planted</h5>
               <p className='mt-2 text-justify'>
              There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.
              </p>
               </div>
              </div>
              <div className='mt-5 flex flex-col gap-5 md:flex-row'>
              <RiPlantFill className='text-7xl md:mt-2 flex justify-center items-center mx-auto md:justify-start' style={{color:'#3E7B27'}} />
              <div className='flex flex-col'>
               <h5 className='text-2xl font-bold'>
               Natural Sunlight</h5>
               <p className='mt-2 text-justify'>It is a long established fact that a reader will be distracted by the reable content of a page.</p>
              </div>
              </div>
              <div className='mt-5 flex flex-col md:flex-row gap-5 '>
             <LuTreePalm className='text-7xl md:mt-2 flex justify-center items-center mx-auto md:justify-start' style={{color:'#3E7B27'}}/>
             <div className='flex flex-col'>
             <h5 className='text-2xl font-bold'>
             Clean Air</h5>
             <p className='mt-2 text-justify'>There are many variations of passages of lorem ipsum available, but the majority have suffered.</p>
             </div>
            </div>
              </div>

             
           

          </div>
        </div>
        <Product/>
    </div>
  )
}
