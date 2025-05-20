// src/pages/guest/ProductPage.jsx
import React from 'react';
import GuestLayout from '../../layouts/GuestLayout';

const ProductPage = () => {
  return (
    <GuestLayout>
      <div className="product-page">
        <h1>Our Featured Products</h1>
        <div className="product-list">
          {/* Menampilkan produk menggunakan JSON data atau API */}
        </div>
      </div>
    </GuestLayout>
  );
};

export default ProductPage;
