import React, { useState } from 'react';

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  const [customers, setCustomers] = useState([
    { name: "Andi", email: "andi@mail.com" },
    { name: "Budi", email: "budi@mail.com" },
    { name: "Citra", email: "citra@mail.com" },
    { name: "Dewi", email: "dewi@mail.com" },
    { name: "Eka", email: "eka@mail.com" },
    { name: "Fajar", email: "fajar@mail.com" },
    { name: "Gita", email: "gita@mail.com" },
    { name: "Hendra", email: "hendra@mail.com" },
    { name: "Indra", email: "indra@mail.com" },
    { name: "Joko", email: "joko@mail.com" },
    { name: "Kiki", email: "kiki@mail.com" },
    { name: "Lina", email: "lina@mail.com" },
    { name: "Maya", email: "maya@mail.com" },
    { name: "Nina", email: "nina@mail.com" },
    { name: "Oka", email: "oka@mail.com" },
    { name: "Putra", email: "putra@mail.com" },
    { name: "Qori", email: "qori@mail.com" },
    { name: "Rian", email: "rian@mail.com" },
    { name: "Sinta", email: "sinta@mail.com" },
    { name: "Tono", email: "tono@mail.com" },
    { name: "Umi", email: "umi@mail.com" },
    { name: "Vina", email: "vina@mail.com" },
    { name: "Wawan", email: "wawan@mail.com" },
    { name: "Xena", email: "xena@mail.com" },
    { name: "Yusuf", email: "yusuf@mail.com" },
    { name: "Zara", email: "zara@mail.com" },
    { name: "Agus", email: "agus@mail.com" },
    { name: "Bela", email: "bela@mail.com" },
    { name: "Cahyo", email: "cahyo@mail.com" },
    { name: "Dian", email: "dian@mail.com" },
  ]);

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, newCustomer]);
    setNewCustomer({ name: '', email: '' });
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Halaman Customers</h1>

      <button
        onClick={toggleForm}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showForm ? 'Batal Tambah Customer' : 'Tambah Customer'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
          <div className="mb-2">
            <label className="block font-medium mb-1">Nama:</label>
            <input
              type="text"
              name="name"
              value={newCustomer.name}
              onChange={handleChange}
              className="border rounded px-3 py-1 w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={newCustomer.email}
              onChange={handleChange}
              className="border rounded px-3 py-1 w-full"
              required
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

      {/* Tabel Data Customer */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{cust.name}</td>
                <td className="px-4 py-2">{cust.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
