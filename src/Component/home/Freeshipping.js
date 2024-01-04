import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoIosPricetags } from "react-icons/io";
import { GiReturnArrow } from "react-icons/gi";

function Freeshipping() {
  return (
    <div className='bg-black flex justify-center items-center lg:p-4'>
    <div className=' py-3  grid md:grid-cols-4  w-full  lg:w-[60%]'>
     <div className='m-2 p-2 rounded-lg bg-gray-700   text-zinc-50 '>
        <p><MdLocalShipping style={{color:'green', fontSize:'40px'}} /></p>
        <h3>Free Shipping</h3>
        <h5>Above $5 Only</h5>
    </div>   
    
    <div className='m-2 p-2  rounded-lg bg-gray-700 tex  text-zinc-50'>
        <p><IoMdContact style={{color:'green',fontSize:'40px'}} /></p>
        <h3>Certified Organic</h3>
        <h5>100@Guarantee</h5>
    </div>

    <div className='m-2 p-2  rounded-lg bg-gray-700 text-zinc-50'>
        <p><IoIosPricetags style={{color:'green',fontSize:'40px'}} /></p>
        <h3>Huge Savings</h3>
        <hp>At Kowest Price</hp>
    </div>

    <div className='m-2 p-2  rounded-lg bg-gray-700  text-zinc-50'>
        <p><GiReturnArrow  style={{color:'green',fontSize:'40px'}}/></p>
        <h3>Easy Returns</h3>
        <p>No Questions Asked</p>
    </div>

    </div>
    </div>
  )
}

export default Freeshipping
