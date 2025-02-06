import React from 'react'
import image1 from '../images/img02.jpg'
import image2 from '../images/img03.jpg'
import image3 from '../images/img04.jpg'
import image4 from '../images/img05.jpg'
import image5 from '../images/img06.jpg'

export const Product = () => {
  return (
    <div>
        <h3 className='font-medium text-4xl mt-8 text-center'>Featured Product</h3>

        <div className="container mx-auto px-5">
            <div className="grid gap-5 mt-4 grid-cols-1 md:grid-cols-5">
                <div className="image1">
                    <img src={image1} className='w-52 mx-auto mt-4' alt="" />
                    <p className='text-center mt-3'>Sit voluptatem</p>
                    <p className='font-bold text-center'>68.00 $</p>
                </div>
                <div className="image2">
                    <img src={image2} className='w-52 mx-auto mt-4' alt="" />
                    <p className='text-center mt-3'>Neque Porro Quisquamest</p>
                    <p className='font-bold text-center'>60.50 $</p>
                </div>
                <div className="image3">
                 <img src={image3} className='w-52 mt-4 mx-auto' alt="" />
                 <p className='text-center mt-3'>Pellentesque aliquet</p>
                    <p className='font-bold text-center'>68.50 $</p>
                </div>
                <div className="image4">
                  <img src={image4} className='w-52 mt-4 mx-auto' alt="" />
                  <p className='text-center mt-3'>Aspetur Autodit Autfugit</p>
                    <p className='font-bold text-center'>70.50 $</p>
                </div>
                <div className="image5">
                  <img src={image5} className='w-52 mt-4 mx-auto' alt="" />
                  <p className='text-center mt-3'>Aliquam Quaerat</p>
                    <p className='font-bold text-center'>56.50 $</p>
                </div>
            </div>
        </div>
    </div>
  )
}
