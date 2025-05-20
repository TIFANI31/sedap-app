//fontnya Muli
import React from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi"; // Import icons

const Navbar = () => {
  return (
    <nav className="bg-blue-50 shadow-md py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
       <a href="/" className="flex items-center"> {/* Ubah jadi flex untuk atur gambar */}
   <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
          Sedap <b id="logo-dot" className="text-hijau">.</b>
        </span> {/* Tambahkan tag <img> */}
  {/* Anda bisa menambahkan teks di samping logo jika diperlukan */}
  {/* <span className="text-2xl font-bold text-red-500 ml-2">Parador</span> */}
</a>
        <ul className="flex items-center space-x-8">
          <li>
            <a href="#about" className="text-gray-700 hover:text-red-500">
              About
            </a>
          </li>
          <li>
            <a href="#room" className="text-gray-700 hover:text-red-500">
              Room
            </a>
          </li>
          <li>
            <a href="#destination" className="text-gray-700 hover:text-red-500">
              Destination
            </a>
          </li>
          <li>
            <a href="#blog" className="text-gray-700 hover:text-red-500">
              Blog
            </a>
          </li>
          <li>
            <a href="#pages" className="text-gray-700 hover:text-red-500">
              Pages
            </a>
          </li>
          <li>
            <a href="#shop" className="text-gray-700 hover:text-red-500">
              Shop
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-red-500">
              Contact
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <a href="#cart" className="text-gray-700 hover:text-red-500">
              <FiShoppingCart size={20} />
            </a>
            <a href="#account" className="text-gray-700 hover:text-red-500">
              <FiUser size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;