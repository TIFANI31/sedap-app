import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";
import Loading from "./components/Loading";
import ErrorPage from "./components/ErrorPage";

// Importing guest components
import Navbar from './components/guest/Navbar';
import HeroSection from './components/guest/HeroSection';
import About from './components/guest/About';
import Footer from './components/guest/Footer';
import CategorySection from './components/guest/CategorySection';
import FacilitiesSection from './components/guest/FacilitiesSection';
import Testimoni from './components/guest/Testimoni';
import HomePage from "./pages/guest/HomePage";
import ProductShowcase from "./components/guest/ProductShowcase";

// Lazy imports for main layout, auth layout, and pages
const GuestLayout = lazy(() => import("./layouts/GuestLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const UserList = lazy(() => import("./pages/UserList"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* All pages that use MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> {/* "/" */}
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="users" element={<UserList />} />
        </Route>

        {/* Routes for AuthLayout */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
        </Route>

        {/* Routes GuestLayout */}
        <Route path="/guest" element={<GuestLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="fasilitas" element={<FacilitiesSection />} />
          <Route path="product" element={<ProductShowcase />} />
          <Route path="home" element={<HeroSection />} />
          <Route path="testimoni" element={<Testimoni />} />
        </Route>

       
        <Route path="*" element={<ErrorPage code={404} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
