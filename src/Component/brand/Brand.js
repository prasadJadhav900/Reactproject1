import React from 'react'

function Brand() {
  return (
    <div className='bg-red-50'>
    
     <div className='flex justify-center font-semibold text-xl mt-8 shadow-2xl'>
        <h1>Featured Brands:</h1>
    </div>
    <div className='grid md:grid-cols-5'>
    <div  className='flex justify-center py-3 shadow-orange-400'>
        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg" alt="" />
    </div>

    <div  className='flex justify-center py-3 '>
        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg" alt="" />
    </div>

    <div  className='flex justify-center py-3'>
    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg" alt="" />
    </div>

    <div  className='flex justify-center py-3'>
        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg" alt="" />
    </div>

    <div  className='flex justify-center py-3'>
        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg" alt="" />
    </div>
    </div>

    </div>
  )
}

export default Brand
