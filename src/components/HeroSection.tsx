import { useTranslation } from "react-i18next";

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
    onOpenModal: () => void; // zamiast setIsModalOpen
}

const HeroSection = ({ scrollToSection, onOpenModal }: HeroSectionProps) => {
    const { t } = useTranslation();

    return (
        <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="https://videos.pexels.com/video-files/8580866/8580866-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <span className="text-xs uppercase tracking-widest text-[#C9A962] font-normal">
                            {t("hero.trusted")}
                        </span>
                    </div>
                    <h1 className="text-[3.3rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] max-w-5xl">
                        {t("hero.heroTitle")}
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl font-light">
                        {t("hero.heroSubtitle")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button
                            onClick={onOpenModal}
                            className="px-12 py-5 bg-[#C9A962] text-black text-base font-medium hover:bg-[#B89952] transition-colors duration-300 uppercase tracking-wide"
                        >
                            {t("hero.freeQuote")}
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="px-12 py-5 bg-transparent text-white border border-white/30 text-base font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 uppercase tracking-wide"
                        >
                            {t("hero.seeProjects")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
