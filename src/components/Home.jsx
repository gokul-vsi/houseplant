import React from 'react'
import { Navbar } from './Navbar'
import banner from '../images/banner.jpg'
import plant from '../images/plant-1.png'
import plants from '../images/plnat-2.jpg'

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
              </div>
    
          </div>
        </div>
    </div>
  )
}
