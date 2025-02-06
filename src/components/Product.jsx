import React from 'react'
import image1 from '../images/img02.jpg'
import image2 from '../images/img03.jpg'
import image3 from '../images/img04.jpg'
import image4 from '../images/img05.jpg'
import image5 from '../images/img06.jpg'
import image6 from '../images/img07.jpg'
import image7 from '../images/img08.jpg'
import image8 from '../images/img09.jpg'
import image9 from '../images/img10.jpg'
import image10 from '../images/img11.jpg'


export const Product = () => {
  return (
    <div>
        <h3 className='font-medium text-4xl mt-8 text-center'>Featured Product</h3>

        <div className="container mx-auto px-5">
            <div className="grid gap-5 mt-8 grid-cols-1 md:grid-cols-5">
                <div className="image1 card">
                    <img src={image1} className='w-52 mx-auto mt-4' alt="" />
                    <p className='text-center mt-3'>Sit voluptatem</p>
                    <p className='font-bold text-center mb-2'>68.00 $</p>
                </div>
                <div className="image2 card">
                    <img src={image2} className='w-52 mx-auto mt-4' alt="" />
                    <p className='text-center mt-3'>Neque Porro Quisquamest</p>
                    <p className='font-bold text-center mb-2'>60.50 $</p>
                </div>
                <div className="image3 card">
                 <img src={image3} className='w-52 mt-4 mx-auto' alt="" />
                 <p className='text-center mt-3'>Pellentesque aliquet</p>
                    <p className='font-bold text-center mb-2'>68.50 $</p>
                </div>
                <div className="image4 card">
                  <img src={image4} className='w-52 mt-4 mx-auto' alt="" />
                  <p className='text-center mt-3'>Aspetur Autodit Autfugit</p>
                    <p className='font-bold text-center mb-2'>70.50 $</p>
                </div>
                <div className="image5 card">
                  <img src={image5} className='w-52 mt-4 mx-auto' alt="" />
                  <p className='text-center mt-3'>Aliquam Quaerat</p>
                    <p className='font-bold text-center mb-2'>56.50 $</p>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-5 mt-10 mb-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="image11 card">
               <img src={image6} className='mt-4 w-52 mx-auto' alt="" />
               <p className='text-center mt-3'>Sint Incidunt Utlabore</p>
               <p className='text-center font-bold mb-2'>60.50 $</p>
            </div>
            <div className="image12 card">
              <img src={image7} className='mt-4 w-52 mx-auto' alt="" />
              <p className='text-center mt-3'>Aliquam Quaerat Voluptem</p>
              <p className='text-center font-bold mb-2'>58.00 $</p>
            </div>
            <div className="image13 card">
              <img src={image8} className='mt-4 w-52 mx-auto' alt="" />
              <p className='text-center mt-3'>Neque Porro Quisquam</p>
              <p className='text-center font-bold mb-2'>48.00 $</p>
            </div>
            <div className="image14 card">
              <img src={image9} className='mt-4 w-52 mx-auto' alt="" />
              <p className='text-center mt-3'>Sit voluptatem</p>
              <p className='text-center font-bold mb-2'>65.00 $</p>
            </div>
            <div className="image15 card">
              <img src={image10} className='mt-4 w-52 mx-auto' alt="" />
              <p className='text-center mt-3'>Pellentesque aliquet</p>
              <p className='text-center font-bold mb-2'>80.00 $</p>
            </div>
          </div>
        </div>
    </div>
  )
}
