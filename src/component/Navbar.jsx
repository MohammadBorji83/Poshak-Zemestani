import React from "react";
import { FaFireAlt } from "react-icons/fa";


function Navbar() {
    return(
      <div className="bg-white p-2 w-full ">
        <nav className="flex flex-row justify-between ">
          {/* لوگو در سمت راست */}
          <div className="flex justify-end mr-3 p-2">
             <h1 className="text-3xl font-bold">AURA</h1>
          </div>

          {/* منوی وسط */}
          <div className="flex gap-6 justify-center ">
            <a href="#" className="hover:text-gray-500 transition">جدید ترین ها</a>
            <a href="#" className="hover:text-gray-500 transition">مردانه</a>
            <a href="#" className="hover:text-gray-500 transition">زنانه</a>
            <a  href="#" className="text-red-600 flex"> حراج  <FaFireAlt size={20} /> </a>
          </div>

          {/* دکمه در سمت چپ */}
          <div className="flex justify-start ">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              خرید کنید
            </button>
          </div>
        </nav>
      </div>
    )
}

export default Navbar;