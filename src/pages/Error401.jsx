import React from 'react';
import errorImage from '../assets/images/404.png'; // Sesuaikan path dengan lokasi gambar

export default function Error401() {
  return (
    <div className="p-10 text-center">
      <img
        src={errorImage} // Menggunakan gambar yang sudah diimport
        alt="Unauthorized"
        className="mx-auto mb-6"
        style={{ maxWidth: '300px' }}
      />
      <h1 className="text-5xl font-bold text-orange-500">401</h1>
      <p className="text-xl mt-4">Unauthorized</p>
      <p className="text-gray-500 mt-2">You are not authorized to view this page.</p>
    </div>
  );
}
