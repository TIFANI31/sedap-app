// src/pages/Dashboard.jsx
import React from 'react';
import '../assets/tailwind.css';

import PageHeader from '../components/PageHeader';
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div id="dashboard-container" className="w-full h-full">

      <div className="flex-1 p-5">
        {/* Page Header */}
        <PageHeader title="Dashboard" breadcrumb="Order List">
          <div className="space-x-2">
            <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg">
              Add
            </button>
            <button id="export-button" className="bg-biru text-white px-4 py-2 rounded-lg">
              Export
            </button>
            <button id="kembali-button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
              Kembali
            </button>
          </div>
        </PageHeader>

        {/* Konten dashboard lainnya */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-white shadow-md rounded-2xl p-4 flex items-center space-x-4">
            <div className="bg-green-100 text-green-600 rounded-full p-4">
              <FaShoppingCart size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">75</span>
              <span className="text-gray-500">Total Orders</span>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4 flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-600 rounded-full p-4">
              <FaTruck size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">175</span>
              <span className="text-gray-500">Total Delivered</span>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4 flex items-center space-x-4">
            <div className="bg-red-100 text-red-600 rounded-full p-4">
              <FaBan size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">40</span>
              <span className="text-gray-500">Total Canceled</span>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4 flex items-center space-x-4">
            <div className="bg-yellow-100 text-yellow-600 rounded-full p-4">
              <FaDollarSign size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Rp.128</span>
              <span className="text-gray-500">Total Revenue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
