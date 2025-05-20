import React, { useEffect, useState } from 'react';
import customersData from '../data/customers.json';

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(customersData); // Menyimpan data customers ke dalam state
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>
              <td>{customer.customerName}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
