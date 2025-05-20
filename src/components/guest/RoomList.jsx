const rooms = [
  { id: 1, title: "Deluxe Room", image: "/images/room1.jpg", price: "$120/night" },
  { id: 2, title: "Suite Room", image: "/images/room2.jpg", price: "$180/night" },
  { id: 3, title: "Presidential Room", image: "/images/room3.jpg", price: "$250/night" },
];

const RoomList = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Rooms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={room.image} alt={room.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{room.title}</h3>
                <p className="text-yellow-600 font-bold mt-2">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomList;
