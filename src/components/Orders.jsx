import React, { useEffect, useState } from 'react';
import ordersData from '../data/orders.json';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData); // Menyimpan data orders ke dalam state
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Total Price</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.status}</td>
              <td>${order.totalPrice}</td>
              <td>{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
