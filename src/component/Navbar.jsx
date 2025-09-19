import React, { useState } from "react";
import { FaFireAlt } from "react-icons/fa";
import { AiOutlineSun } from "react-icons/ai";
import { FaMoon } from "react-icons/fa6";   //<FaMoon />
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";




function Navbar() {
const [Open,setOpen]=useState(false);
const [Dark,setDark]=useState(false);


    return(
      <div className="bg-white p-2 w-full ">
        <nav className="flex flex-row justify-between ">
          {/* لوگو در سمت راست */}
          <div className="flex justify-end mr-3 p-2">
             <h1 className="text-3xl font-bold">AURA</h1>
          </div>

          {/* منوی وسط */}
          <div className="hidden md:flex gap-6 justify-center items-center ">
            <a href="#" className="hover:text-gray-500 transition">جدید ترین ها</a>
            <a href="#" className="hover:text-gray-500 transition">مردانه</a>
            <a href="#" className="hover:text-gray-500 transition">زنانه</a>
            <a  href="#" className="text-red-600 flex"> حراج  <FaFireAlt size={20} /> </a>
          </div>

          {/* دکمه در سمت چپ */}
          <div className="hidden md:flex justify-center items-center gap-3  ">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              خرید کنید
            </button>
            <button onClick={()=>setDark(!Dark)} className="w-12 h-12 rounded-full  p-2 items-center justify-center my-auto mx-auto">
             {Dark ?<AiOutlineSun size={20} className="mr-1.5" />:<FaMoon size={20} className="mr-1.5"/>}
            </button>
          </div>
          <div className="items-center justify-center my-auto mx-auto ml-4 p-4 md:hidden cursor-pointer">
           <button className="" onClick={() => setOpen(!Open)}>
           {Open ?<MdClose  size={30}/>:<TiThMenu size={30}/>}
           </button>
           
          </div> 
        </nav>
        {Open && (
        <ul className="flex flex-col mt-4 space-y-4 items-center md:hidden">
          <li><a href="#" className="hover:text-gray-500 transition">جدید ترین ها</a></li>
          <li><a href="#" className="hover:text-gray-500 transition">مردانه </a></li>
          <li><a href="#" className="hover:text-gray-500 transition">زنانه </a></li>
          <li><a  href="#" className="text-red-600 flex"> حراج  <FaFireAlt size={20} /> </a></li>
          <li><button onClick={()=>setDark(!Dark)} className="w-12 h-12 rounded-full hover:bg-gray-600 p-2 items-center justify-center my-auto mx-auto">
             {Dark ?<AiOutlineSun size={20} className="mr-1.5" />:<FaMoon size={20} className="mr-1.5"/>}</button></li>
          <li> <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              خرید کنید
            </button></li>
        </ul>
      )}
      </div>
    )
}

export default Navbar;