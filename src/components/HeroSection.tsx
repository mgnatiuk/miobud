import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
    onOpenModal: () => void; // zamiast setIsModalOpen
}

const HeroSection = ({ scrollToSection, onOpenModal }: HeroSectionProps) => {
    const [offsetY, setOffsetY] = useState(0);
    const { t } = useTranslation();

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg')",
                    transform: `translateY(${offsetY * 0.5}px)`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 rounded-full text-sm font-semibold border border-amber-400/30">
                                {t("hero.trusted")}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                            {t("hero.heroTitle")}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed drop-shadow-lg max-w-2xl">
                            {t("hero.heroSubtitle")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onOpenModal}
                                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
                            >
                                {t("hero.freeQuote")}
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300"
                            >
                                {t("hero.seeProjects")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
