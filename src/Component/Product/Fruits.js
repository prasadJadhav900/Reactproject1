import React from "react";

function Fruits() {
  const FruitsData = [
    {
      id: 1,
      name: "Farm Fresh Fruits",
      details:
        "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
      image:
        "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg",
    },
    {
      id: 2,
      name: "Fresh Vegetables",
      details:
        "Aliquam porta justo nibh, id laoreet sapien sodales vitae justo",
      image:
        "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product13-free-img.jpg",
    },
    {
      id: 3,
      name: "Organic Legume",
      details: "Phasellus sed urna mattis, viverra libero sed, aliquam est.",
      image:
        "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product17-free-img.jpg",
    },
  ];
  return (
    <div className="">
      <div className=" md:grid grid-cols-3 ">
        
        {FruitsData.map((fruit) => (
          <div className="h-60 m-12 relative shadow-xl">
            <img src={fruit.image} className="h-full float-right" />

            <div className="absolute inset-0 flex flex-col p-4">
              <h1 className="text-2xl font-bold">{fruit.name}</h1>
              <p className="text-xl">{fruit.details}</p>
              <button
                className="self-start mt-7 ml-12 bg-green-600 px-5 rounded-lg p-1"
                onClick={() => alert(`selected product ${fruit.id}`)}
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}

        {/* <div className='h-60 m-12 relative shadow-xl'>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product13-free-img.jpg"
                    className='h-full float-right'/>

                <div className='absolute inset-0 flex flex-col p-4'>
                    <h1 className='text-2xl font-bold'>Fresh Vegetables</h1>
                    <p className='text-xl'>Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.</p>
                    <button className='self-start mt-7 ml-12 bg-green-600 px-6 rounded-lg p-1'>Shop Now</button>
                </div>
            </div> */}

        {/* <div className='h-60 m-12 relative shadow-xl'>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product17-free-img.jpg"
                    className='h-full float-right'/>

                <div className='absolute inset-0 flex flex-col p-4'>
                    <h1 className='text-2xl font-bold'>Organic Legume</h1>
                    <p className='text-xl'>Phasellus sed urna mattis, viverra libero sed, aliquam est.</p>
                    <button className='self-start mt-7 ml-12 bg-green-600 px-6 rounded-lg p-1'>Shop Now</button>
                </div>
            </div> */}
      </div>
    </div>
  );
}

export default Fruits;
