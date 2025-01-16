import React from 'react'
import { Navbar } from './Navbar'
import banner from '../images/banner.jpg'
import plant from '../images/plant-1.png'

export const Home = () => {
  return (
    <div>
        <Navbar/>
          <div className="back">
             <div className="container  mx-auto px-4">
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
    </div>
  )
}
