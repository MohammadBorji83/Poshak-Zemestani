import React from "react";
import HeroI from "../assets/Hero.jpg";



function Hero (){


    return(

        <section className="bg-cover bg-center w-full h-80 md:h-128 text-orange-700"
        style={{ backgroundImage: `url(${HeroI})` }}>
        <div className="flex flex-col justify-center items-start container mx-5 h-[60vh]">
         <h1 className="text-4xl font-extrabold mb-6 md:text-6xl ">
           کالکشن جدید پاییز
         </h1>

         <p className="text-lg max-w-lg mb-8 mx-4">
           با جدیدترین طراحی‌های ما، استایلی بی‌نظیر برای فصل جدید بسازید.
         </p>

         <button  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
           همین حالا خرید کنید
         </button>
        </div>

        </section>
    )
}

export default Hero;