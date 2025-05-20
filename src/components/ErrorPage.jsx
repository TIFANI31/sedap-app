import React from 'react';
import { useNavigate } from 'react-router-dom'; // Mengimpor hook navigate untuk navigasi

// Import gambar untuk berbagai error
import error400Image from '../assets/images/404.png';
import error401Image from '../assets/images/404.png';
import error403Image from '../assets/images/404.png';

export default function ErrorPage({ code }) {
  let errorImage;
  let errorMessage;
  let errorDescription;

  // Menentukan gambar dan pesan sesuai dengan kode error
  switch (code) {
    case 400:
      errorImage = error400Image;
      errorMessage = "400 Bad Request";
      errorDescription = "The server could not understand the request.";
      break;
    case 401:
      errorImage = error401Image;
      errorMessage = "401 Unauthorized";
      errorDescription = "You are not authorized to view this page.";
      break;
    case 403:
      errorImage = error403Image;
      errorMessage = "403 Forbidden";
      errorDescription = "You do not have permission to access this page.";
      break;
    default:
      errorImage = error401Image; // Gambar default jika error tidak diketahui
      errorMessage = `${code} Error`;
      errorDescription = "An unexpected error occurred.";
      break;
  }

  const navigate = useNavigate(); // Hook untuk navigasi

  // Fungsi untuk kembali ke halaman utama
  const handleBackToHome = () => {
    navigate('/'); // Mengarah ke halaman utama (root)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto">
        <img
          src={errorImage}
          alt={`Error ${code}`}
          className="mx-auto mb-6 w-full h-auto"
          style={{ maxWidth: '500px' }}
        />
        <h1 className="text-6xl font-bold text-red-500">{errorMessage}</h1>
        <p className="text-xl mt-4 text-gray-600">{errorDescription}</p>
        <p className="text-gray-500 mt-2">Please try again later or contact support.</p>
        
        {/* Tombol Back to Home */}
        <button
          onClick={handleBackToHome} // Mengarahkan kembali ke halaman utama
          className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
