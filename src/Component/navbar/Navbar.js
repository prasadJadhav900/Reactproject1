import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="m-2 md:flex md:justify-between">
        <div className="flex justify-between">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
            alt=""
            className="h-16 md:h-20"
          />
           <li className="text-2xl mb-8 ml-24"><FaBasketShopping />
          </li>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            <FiAlignJustify className="text-end text-3xl " />
          </button>
        </div>

        <ul
          className={
            open
              ? "fixed top-13 left-[1%] w-[100%] duration-500 h-screen ease-in-out bg-gray-200 text-black md:hidden "
              : "fixed duration-300 ease-in-out right-0 h-screen left-[100%] md:hidden"
          }
        >
          <li className="p-2">Everything</li>
          <li className="p-2">Groceries</li>
          <li className="p-2">Juice</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact</li>
          <li className="p-2">Everything</li>
        </ul>

        <ul className="hidden md:flex gap-32 md:text-xl font-thin mr">
          <li className="p-2">Everything</li>
          <li className="p-2">Groceries</li>
          <li className="p-2 ">Juice</li>
          <li className="p-2 ">About</li>
          <li className="p-2">Contact</li>
          <li className="p-3"><FaBasketShopping />
          </li>
          <li className="p-3"><IoIosContact />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
