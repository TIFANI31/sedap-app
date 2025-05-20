// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-10">
        {/* Brand + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Para<span className="text-red-400">dor</span>
          </h2>
          <p className="text-sm mb-4">
            Management consulting includes a broad range of activities, and the many firms and their members often define these practices.
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGooglePlusG /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Delicious Food</li>
            <li>Parking Area</li>
            <li>Free Wifi</li>
            <li>Swimming Pool</li>
            <li>Spa Salon</li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">IMPORTANT LINK</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Populer Destination</li>
            <li>Awesome Rooms</li>
            <li>Our Services</li>
            <li>Pricing Plan</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start"><FaMapMarkerAlt className="mt-1 mr-2" /> 7 Green Lake Street, Crawfordsville, IN 47933</li>
            <li className="flex items-center"><FaPhoneAlt className="mr-2" /> +1 800 123 456 789</li>
            <li className="flex items-center"><FaEnvelope className="mr-2" /> parador@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-12 border-t border-gray-700 pt-4">
        Copyright © 2025 Parador by woOceans. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
