// src/pages/AddCustomer.jsx
import React, { useState } from 'react';

const AddCustomer = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer added:', { customerName, customerEmail });
    // Tambahkan logika untuk menambah customer (misalnya ke API atau ke state)
  };

  return (
    <div>
      <h2>Tambah Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Tambah Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
