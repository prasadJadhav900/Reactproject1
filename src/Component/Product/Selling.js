import React from "react";

function Selling() {
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className=" my-12 text-xl">
        <h1 className="my-2">Best Selling Products</h1>
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png"
          alt=""
          className="h-16 ml-12"
        />
      </div>
      <div className="grid md:grid-cols-4">
        <div className="m-10 text-center">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg"
            alt=""
          />
          <p>Groceries</p>
          <h3>Assorted Coffee</h3>

          <p>$35.00</p>
        </div>

        <div className="m-10 text-center">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg"
            alt=""
          />
          <p>Groceries</p>
          <h3>Hand Sanitizer</h3>

          <p>$15.00</p>
        </div>

        <div className="m-10 text-center">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg"
            alt=""
          />
          <p>Groceries</p>
          <h3>Handpicked Red Chillies</h3>

          <p>$19.00</p>
        </div>

        <div className="m-10 text-center">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg"
            alt=""
          />
          <p>Groceries</p>
          <h3>Natural Extracted Edible Oil</h3>

          <p>$19.00</p>
        </div>
      </div>
    </div>
  );
}

export default Selling;
