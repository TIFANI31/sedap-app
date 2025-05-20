// src/pages/guest/GuestHome.jsx
import HeroSection from "../../components/guest/HeroSection";
import About from "../../components/guest/About";
import FacilitiesSection from "../../components/guest/FacilitiesSection";
import ProductShowcase from "../../components/guest/ProductShowcase";
import BlogSection from "../../components/guest/TestimonialSection";
import TestimonialSection from "../../components/guest/Testimoni";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <FacilitiesSection />
      <ProductShowcase />
      <TestimonialSection />
    </>
  );
};

export default HomePage;
