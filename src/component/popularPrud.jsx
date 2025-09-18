import React from "react";

function Popular() {
  const products = [
    { id: 1, name: "نیم بوت زنانه", price: "1,500,000 تومان", img: "/assets/BOOT.jpg" },
    { id: 2, name: "پیراهن پشمی", price: "500,000 تومان", img: "/assets/pir.jpg" },
    { id: 3, name: "مانتو پاییزه", price: "2,500,000 تومان", img: "/assets/manto.jpg" },
    { id: 4, name: "شلوار بگ زنانه", price: "2,500,000 تومان", img: "/assets/shal.jpg" },
  ];
   
  

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">محصولات منتخب</h1>
          <p className="text-gray-500 text-lg">پرفروش‌ترین‌های این هفته را از دست ندهید.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* عکس در بالا */}
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    console.error(`خطا در لود عکس ${product.name}`);
                    e.target.src = "https://via.placeholder.com/300x300/gray/white?text=عکس+موجود+نیست";
                  }}
                />
                {/* overlay برای hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                  >
                    خرید کنید
                  </button>
                </div>
              </div>
              
              {/* اطلاعات زیر عکس */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-blue-600 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;