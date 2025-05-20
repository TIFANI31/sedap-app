// src/components/TestimonialSection.jsx
import React from "react";

// Data testimoni dengan gambar avatar lokal
const testimonials = [
  {
    id: 1,
    name: "Amanda Putri",
    review: "Hotel ini luar biasa! Pelayanan yang ramah dan kamar yang sangat bersih.",
    avatar: "/img/avatar.png",  // Ganti dengan path gambar lokal
  },
  {
    id: 2,
    name: "Rizky Pratama",
    review: "Pemandangan lautnya menakjubkan. Sangat cocok untuk liburan keluarga.",
    avatar: "/img/avatar.png",  // Ganti dengan path gambar lokal
  },
  {
    id: 3,
    name: "Dewi Anggraini",
    review: "Fasilitas lengkap dan nyaman. Saya pasti akan kembali lagi!",
    avatar: "/img/avatar.png",  // Ganti dengan path gambar lokal
  },
  {
    id: 4,
    name: "Budi Santoso",
    review: "Lokasi strategis dan dekat dengan banyak tempat wisata.",
    avatar: "/img/avatar.png",  // Ganti dengan path gambar lokal
  },
  {
    id: 5,
    name: "Lina Marlina",
    review: "Makanan di restoran hotel sangat enak, recommended banget!",
    avatar: "/img/avatar.png",  // Ganti dengan path gambar lokal
  },
  {
    id: 5,
    name: "Tifani",
    review: "Suasana disini sangat asri, besok kembali lagi!",
    avatar: "/img/avatar.png",  // Ganti dengan path gambar lokal
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Apa Kata Mereka?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md text-left hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              </div>
              <p className="text-gray-600">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
