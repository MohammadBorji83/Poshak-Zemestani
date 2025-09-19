import React from "react";
import Abouti from "../assets/about.jpg";

function About (){


    return(

        <section className="container mx-auto py-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-orange-400">
             <img src={Abouti} alt="About"  className="rounded-l-lg shadow-xl"/>
            </div>
        <div className="text-center md:text-right">
        <h3 className="font-extrabold text-3xl md:text-4xl mb-4">کتابچه استایل Aura</h3>
        <p className="text-gray-600 mb-6">الهام‌بخش استایل روزمره شما. با ترکیب قطعات کلیدی کالکشن ما، ظاهری منحصر به فرد برای خود بسازید.</p>
        <button className="bg-black text-white text-center rounded-lg font-bold px-8 py-3">مشاهده کالکشن</button>
            </div>
            </div>
        </section>
    )
}

export default About;