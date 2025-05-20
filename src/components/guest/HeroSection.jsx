import React from "react";
import { BsCalendarDate, BsPerson, BsChevronDown } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="relative bg-blue-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 py-16 md:py-24 lg:py-32">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Stay Once Carry <br /> Memories Forever
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white hover:bg-red-600 font-semibold rounded-md">
            Book Now
          </button>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9 md:aspect-h-4 lg:aspect-h-3">
            <img
              src="/img/hotel.jpg"
              alt="Hotel Room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Form Pemesanan yang Disesuaikan */}
      <div className="bg-white py-6 px-8 md:py-8 md:px-12 relative z-10 w-full" style={{ marginBottom: 0 }}> {/* Mengubah max-width dan menambahkan width: 100% */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 items-center max-w-7xl mx-auto"> {/* Menambahkan max-w-7xl dan mx-auto */}
          <div className="flex items-center">
            <BsCalendarDate className="text-gray-500 mr-3" size={20} />
            <div className="flex flex-col">
              <label htmlFor="checkin" className="block text-gray-700 text-sm font-semibold mb-1">
                Check In
              </label>
              <input
                type="date"
                id="checkin"
                className="appearance-none border-b border-gray-300 w-full py-1 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center">
            <BsCalendarDate className="text-gray-500 mr-3" size={20} />
            <div className="flex flex-col">
              <label htmlFor="checkout" className="block text-gray-700 text-sm font-semibold mb-1">
                Check Out
              </label>
              <input
                type="date"
                id="checkout"
                className="appearance-none border-b border-gray-300 w-full py-1 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center">
            <BsPerson className="text-gray-500 mr-3" size={20} />
            <div className="relative">
              <label htmlFor="adults" className="block text-gray-700 text-sm font-semibold mb-1">
                0 Adults
              </label>
              <select
                id="adults"
                className="appearance-none border-b border-gray-300 w-full py-1 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <BsChevronDown className="fill-current h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <BsPerson className="text-gray-500 mr-3" size={20} />
            <div className="relative">
              <label htmlFor="children" className="block text-gray-700 text-sm font-semibold mb-1">
                0 Children
              </label>
              <select
                id="children"
                className="appearance-none border-b border-gray-300 w-full py-1 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <BsChevronDown className="fill-current h-4 w-4" />
              </div>
            </div>
          </div>
          <button className="bg-white text-grey-500 font-semibold py-2 px-6 rounded-full border border-grey-100 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-grey-100 focus:ring-opacity-50 justify-self-end">
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
