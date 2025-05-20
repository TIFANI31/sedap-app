//fontnya sans serif
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 rounded-lg shadow-md p-6">
          {/* Gambar di Kiri */}
          <div className="w-full md:w-1/2 rounded-t-lg md:rounded-tr-none md:rounded-l-lg overflow-hidden">
            <img
              src="/img/hotel2.jpg"
              alt="About Us"
              className="w-full h-auto"
            />
          </div>
          {/* Teks di Kanan */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-red-500 mb-2">ABOUT US</h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Explore All Corners Of The World With Us
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure.
            </p>
            <button
              className="bg-red-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-600 transition duration-300"
            >
              Discover More
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h4 className="text-3xl font-bold text-black-500">302+</h4>
            <p className="text-gray-700">Room & Suites</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-black-500">25+</h4>
            <p className="text-gray-700">Restaurant</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-black-500">510+</h4>
            <p className="text-gray-700">Exceptional Food</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-black-500">65+</h4>
            <p className="text-gray-700">Destination</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;