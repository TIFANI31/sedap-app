import React, { useState } from 'react';

export default function Orders() {
  const [showForm, setShowForm] = useState(false);

  const [orders, setOrders] = useState([
    { item: "Laptop", quantity: 2 },
    { item: "Mouse", quantity: 10 },
    { item: "Keyboard", quantity: 5 },
    { item: "Monitor", quantity: 3 },
    { item: "Printer", quantity: 1 },
    { item: "Scanner", quantity: 2 },
    { item: "Flashdisk", quantity: 20 },
    { item: "Webcam", quantity: 4 },
    { item: "Speaker", quantity: 6 },
    { item: "Router", quantity: 2 },
  ]);

  const [newOrder, setNewOrder] = useState({
    item: '',
    quantity: '',
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setNewOrder({
      ...newOrder,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders([...orders, { ...newOrder, quantity: parseInt(newOrder.quantity) }]);
    setNewOrder({ item: '', quantity: '' });
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Halaman Orders</h1>

      <button
        onClick={toggleForm}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showForm ? 'Batal Tambah Order' : 'Tambah Order'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
          <div className="mb-2">
            <label className="block font-medium mb-1">Nama Barang:</label>
            <input
              type="text"
              name="item"
              value={newOrder.item}
              onChange={handleChange}
              className="border rounded px-3 py-1 w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium mb-1">Jumlah:</label>
            <input
              type="number"
              name="quantity"
              value={newOrder.quantity}
              onChange={handleChange}
              className="border rounded px-3 py-1 w-full"
              required
              min="1"
            />
          </div>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Simpan
          </button>
        </form>
      )}

      {/* Tabel Data Order */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Nama Barang</th>
              <th className="px-4 py-2 text-left">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{order.item}</td>
                <td className="px-4 py-2">{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
