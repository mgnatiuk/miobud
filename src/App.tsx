import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";
import OffersSection from "./components/OffersSection";
import WhyUsSection from "./components/WhyUsSection";
import ReviewsSection from "./components/ReviewsSection";
import ConsultationSection from "./components/ConsultationSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Job from "./components/Job";
import ScrollToTop from "./components/ScrollToTop";

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
    <div className="min-h-screen bg-black pt-safe-top pb-safe-bottom">
      <Navbar scrollToSection={scrollToSection} onOpenModal={openModal} onOpenJobModal={openJobModal} />
      <HeroSection scrollToSection={scrollToSection} onOpenModal={openModal} />
      <ServicesSection />
      <ProjectsSection />
      <OffersSection />
      <ProcessSection />
      <WhyUsSection />
      <ReviewsSection />
      <ConsultationSection onOpenModal={openModal} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <Job isOpen={isJobModalOpen} onClose={closeJobModal} />
      <ScrollToTop />
    </div>
  );
}

export default App;
