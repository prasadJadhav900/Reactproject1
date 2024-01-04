import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900 justify-center items-center lg:flex">
      <div className="grid justify-center lg:mb-auto ">
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png"
          alt=""
          className="ml-16 py-10 "
        />
        <p className="m-4 text-center text-lg font-medium mb-12 text-slate-400 md:items-start order-1 ">
          Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut
          quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis
          faucibus urna. Suspendisse pellentesque.
        </p>
      </div>

      <div className=" lg:flex justify-around items-center  ">
        <div className="lg:mb-60">
          <div>
            <h1 className="py-8 text-3xl ml-24 text-white md:text-center lg:text-2xl">
              Quick Links
            </h1>
            <ul className="ml-30  font-medium text-slate-400 text-center lg:ml-28 lg:text-start ">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="ml-24 py-14 text-3xl text-white md:text-center">
              Site Links
            </h1>
            <ul className="text-center text-xl text-slate-400 lg:ml-20 lg:text- text-">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Shipping Details</a>
              </li>
              <li>
                <a href="#">Offers Coupons</a>
              </li>
              <li>
                <a href="#">Trems & Condtions</a>
              </li>
            </ul>
          </div>
          </div>
        <div className="lg:mb-96 lg:p-40">
          <div>
            <h1 className=" py-13 text-center mt-14  text-2xl text-white ">
              Download Our Mobile App
            </h1>
            <p className="m-10 text-center text- text-slate-400 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              vero commodi corrupti veniam quibusdam ipsa dignissimos
              distinctio. Tempore repellendus quos suscipit assumenda!
            </p>
          </div>

          <div className="text-center">
            <h1 className="py-8 text-3xl text-white">Quick Links</h1>
            <ul className="text-xl text-green-500 mb-5">
              <li>
                <a href="#">Know More About Us</a>
              </li>
              <li>
                <a href="#">Visit Store</a>
              </li>
              <li>
                <a href="#">Let's Connects</a>
              </li>
              <li>
                <a href="#">Locate Store</a>
              </li>
            </ul>
          </div>
          <div className=" flex h-8 ml-16 lg:ml-44 lg:h-14">
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png"
              alt=""
              className=""
            />
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
