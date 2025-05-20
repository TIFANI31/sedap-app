import React from "react";
import {
  FaUtensils,
  FaParking,
  FaSwimmingPool,
  FaSpa,
  FaDumbbell,
  FaWifi,
  FaCoffee,
  FaEllipsisH,
} from "react-icons/fa";

const FacilitiesSection = () => {
  const facilities = [
    { icon: <FaUtensils />, label: "Delicious Food" },
    { icon: <FaParking />, label: "Parking Area" },
    { icon: <FaSwimmingPool />, label: "Swimming Pool" },
    { icon: <FaSpa />, label: "Spa Salon" },
    { icon: <FaDumbbell />, label: "Exercise Space" },
    { icon: <FaWifi />, label: "Free Wifi" },
    { icon: <FaCoffee />, label: "Breakfast" },
    { icon: <FaEllipsisH />, label: "Other Service" },
  ];

  return (
    <section className="-mt-8 bg-white py-20"> {/* dinaikkan 2cm & latar luar putih */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#f6fbff] rounded-xl p-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Bagian Kiri */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                We are Providing You <br /> Our Best Facilities
              </h2>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout.
              </p>
              <button className="bg-red-500 text-white text-sm font-semibold py-3 px-6 rounded-md hover:bg-red-600 transition duration-300">
                Discover More
              </button>
            </div>

            {/* Bagian Kanan */}
            <div className="lg:w-1/2 border border-gray-200 grid grid-cols-2 sm:grid-cols-4">
              {facilities.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white flex flex-col items-center justify-center text-center p-6 h-40"
                >
                  <div className="text-3xl text-[#9ea1b4] mb-2">{item.icon}</div>
                  <p className="text-sm text-gray-700 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
