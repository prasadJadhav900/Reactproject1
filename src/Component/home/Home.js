import React from "react";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 md:w-[80%]">

        <div className="md:order-2 gap-6 flex flex-col justify-center items-center mt-12 md:items-start ">
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt=""/>
          <h3 className="text-center text-base  md:text-start">Best Quality Product</h3>
          <h1 className="text-center text-3xl font-bold   md:text-start">
            Join The Organic Movement! </h1>
          <p className="text-center font-thin p-2  md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa unde iure quas fugiat officia expedita exercitationem blanditiis</p>
          <button className="px-4 rounded-2xl py-3    md:text-start mb-24 bg-green-600">SHOP NOW</button>
        </div>

        <div className=" grid justify-center md:order-1">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero-300x257.png"
            alt=""  className="mb-6"
          />
        </div>
      </div>

      {/* //FreeShipping */}

      <div className="">
        
      </div>

      



    </div>
    
  );
}

export default Home;
