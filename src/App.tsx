import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import WhyUsSection from "./components/WhyUsSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollToSection={scrollToSection} onOpenModal={openModal} />
      <HeroSection scrollToSection={scrollToSection} onOpenModal={openModal} />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <ReviewsSection />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
