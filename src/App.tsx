import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import WhyUsSection from "./components/WhyUsSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Job from "./components/Job";

function App() {
  const [, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openJobModal = () => setIsJobModalOpen(true);
  const closeJobModal = () => setIsJobModalOpen(false);

  return (
    <div className="min-h-screen bg-white pt-safe-top pb-safe-bottom">
      <Navbar scrollToSection={scrollToSection} onOpenModal={openModal} onOpenJobModal={openJobModal} />
      <HeroSection scrollToSection={scrollToSection} onOpenModal={openModal} />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <ReviewsSection />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <Job isOpen={isJobModalOpen} onClose={closeJobModal} />
    </div>
  );
}

export default App;
