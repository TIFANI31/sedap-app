import React, { useRef } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "New Arrivals" },
  { id: 3, name: "Best Sellers" },
  { id: 4, name: "Featured" },
];

const products = [
  { id: 1, name: "Sedap1", price: 799, desc: "Fast and powerful", rating: 4.7, image: "/img/sedap.png" },
  { id: 2, name: "Sedap2", price: 999, desc: "Latest performance", rating: 4.5, image: "/img/sedap.png" },
  { id: 3, name: "Sedap3", price: 899, desc: "Still a favorite", rating: 3.9, image: "/img/sedap.png" },
  { id: 4, name: "Sedap4", price: 699, desc: "Affordable and fast", rating: 4.1, image: "/img/sedap.png" },
  { id: 5, name: "Sedap5", price: 499, desc: "Compact power", rating: 3.2, image: "/img/sedap.png" },
  { id: 6, name: "Sedap6", price: 1099, desc: "All new features", rating: 4.3, image: "/img/sedap.png" },
];

const ProductShowcase = () => {
  const sliderRef = useRef();
  const categoryRef = useRef();

  const scrollProducts = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollLeft -= 300;
    } else {
      sliderRef.current.scrollLeft += 300;
    }
  };

  const scrollCategories = (direction) => {
    if (direction === "left") {
      categoryRef.current.scrollLeft -= 100;
    } else {
      categoryRef.current.scrollLeft += 100;
    }
  };


  //Produk Unggulan
  return (
    <section className="py-15 px-6 bg-latar font-poppins">
      <div className="max-w-6xl mx-auto">
  
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Top Categories</h3>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCategories("left")}
                className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full text-gray-600 text-sm"
              >
                <MdChevronLeft />
              </button>
              <button
                onClick={() => scrollCategories("right")}
                className="bg-green-500 hover:bg-green-600 text-white p-1 rounded-full text-sm"
              >
                <MdChevronRight />
              </button>
            </div>
          </div>
          <div
            ref={categoryRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className="bg-white rounded-full py-2 px-4 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm uppercase tracking-widest text-red-400 font-semibold mb-2">
          Special Picks
        </p>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-green-800">Standout iPhones</h2>
          <div className="flex gap-3">
            <button
              onClick={() => scrollProducts("left")}
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full text-xl"
            >
              <MdChevronLeft />
            </button>
            <button
              onClick={() => scrollProducts("right")}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full text-xl"
            >
              <MdChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide scroll-smooth pb-4"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="relative min-w-[250px] bg-white rounded-3xl p-6 shadow-md flex-shrink-0"
            >
              <div className="absolute top-0 right-0 bg-green-500 rounded-bl-3xl p-3 text-white text-sm">
                <FaHeart />
              </div>

              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
                {product.name}
              </h3>


              <p className="text-sm text-center text-gray-500 mb-3">{product.desc}</p>

              <div className="flex justify-between items-center">
                <p className="text-red-500 font-bold text-md">${product.price}.00</p>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <FaStar />
                  <span className="text-gray-600">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;