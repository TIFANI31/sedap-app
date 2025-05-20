// src/pages/AddOrder.jsx
import React, { useState } from 'react';

const AddOrder = () => {
  const [orderDetails, setOrderDetails] = useState('');

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    console.log('Order Details:', orderDetails);
    // Tambahkan logika untuk menangani data order
  };

  return (
    <div>
      <h2>Tambah Order</h2>
      <form onSubmit={handleOrderSubmit}>
        <div>
          <label>Order Details:</label>
          <input
            type="text"
            value={orderDetails}
            onChange={(e) => setOrderDetails(e.target.value)}
            required
          />
        </div>
        <button type="submit">Tambah Order</button>
      </form>
    </div>
  );
};

export default AddOrder;
