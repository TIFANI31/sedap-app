import React from "react";
import { FaStar } from "react-icons/fa";
import destinations from "../../data/guest/ListProduct.json";


const ProductShowcase = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Our Most Popular Destination
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              It is a long established fact that a reader will be distracted by the readable content of a page.
            </p>
          </div>
          <button className="border border-red-400 text-red-500 px-4 py-2 rounded-md hover:bg-red-50">
            View All
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          {/* Featured Destination */}
          {destinations
            .filter((d) => d.featured)
            .map((dest) => (
              <div
                key={dest.id}
                className="relative flex-1 h-[420px] rounded-2xl overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6 text-white">
                  <p className="text-sm">{dest.location}</p>
                  <h3 className="text-2xl font-semibold">{dest.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-lg">{dest.price}</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      <span className="text-white">{dest.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Smaller Destinations */}
          <div className="flex flex-col gap-4 flex-1">
            {destinations
              .filter((d) => !d.featured)
              .map((dest) => (
                <div
                  key={dest.id}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-32 h-24 rounded-xl object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-red-400 font-semibold">
                        {dest.location}
                      </p>
                      <h4 className="text-md font-semibold text-gray-800 leading-snug">
                        {dest.name}
                      </h4>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-2">
                      <span className="text-gray-700">{dest.price}</span>
                      <div className="flex items-center text-yellow-400">
                        <FaStar size={14} />
                        <span className="ml-1 text-gray-600">
                          {dest.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
