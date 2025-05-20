import { Outlet } from "react-router-dom";
import Navbar from "../components/guest/Navbar";
import Footer from "../components/guest/Footer";

export default function GuestLayout() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
