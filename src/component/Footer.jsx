import React from "react";



function Footer (){


    return(

       <section className="py-7 bg-gray-800">
        <div className="container mx-auto text-center text-white ">
        <h2 className="text-2xl mb-4 font-bold">Aura</h2>
        <div className="flex justify-center space-x-6 mb-6">
         <a href="" className="hover:text-gray-400">درباره ما </a>
         <a href="" className="hover:text-gray-400">تماس با ما </a>
         <a href="" className="hover:text-gray-400"> راهنمای سایز</a>
         <a href="" className="hover:text-gray-400">قوانین و مقرارت </a>
        </div>
        <p className="text-gray-400"> تمامی حقوق محفوظ می باشد </p>
        </div>
       </section>
    )
}

export default Footer;