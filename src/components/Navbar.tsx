import { useState, useEffect } from "react";
import { Menu, X, Hammer, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    scrollToSection: (id: string) => void;
    setIsModalOpen: (open: boolean) => void;
}

const Navbar = ({ scrollToSection, setIsModalOpen }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showLangDropdown, setShowLangDropdown] = useState(false);

    const languages = [
        { code: "pl", label: "Polski 🇵🇱" },
        { code: "en", label: "English 🇬🇧" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setShowLangDropdown(false);
    };

    const currentLang = languages.find((l) => l.code === i18n.language)?.label || "Polski 🇵🇱";

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white shadow-md text-gray-900" : "bg-transparent text-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-xl">
                            <Hammer className="h-6 w-6 text-white" />
                        </div>
                        <span
                            className={`text-2xl font-bold ${isScrolled ? "bg-gradient-to-r from-gray-900 to-gray-600" : "bg-gradient-to-r from-white to-gray-200"
                                } bg-clip-text text-transparent`}
                        >
                            {t("menu.companyName")}
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <button onClick={() => scrollToSection("home")} className="px-4 py-2 hover:text-amber-500 transition-all font-medium">
                            {t("menu.home")}
                        </button>
                        <button onClick={() => scrollToSection("services")} className="px-4 py-2 hover:text-amber-500 transition-all font-medium">
                            {t("menu.services")}
                        </button>
                        <button onClick={() => scrollToSection("projects")} className="px-4 py-2 hover:text-amber-500 transition-all font-medium">
                            {t("menu.projects")}
                        </button>
                        <button onClick={() => scrollToSection("why-us")} className="px-4 py-2 hover:text-amber-500 transition-all font-medium">
                            {t("menu.whyUs")}
                        </button>

                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setShowLangDropdown(!showLangDropdown)}
                                className="px-4 py-2 flex items-center hover:text-amber-500 transition-all font-medium"
                            >
                                <Globe className="w-5 h-5 mr-2" />
                                {currentLang}
                            </button>

                            {showLangDropdown && (
                                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${i18n.language === lang.code ? "font-bold bg-gray-100" : ""
                                                }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="ml-3 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
                        >
                            {t("menu.contact")}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={`md:hidden ${isScrolled ? "bg-white text-gray-900" : "bg-black/70 text-white"} backdrop-blur-md border-t border-white/10`}>
                    <div className="px-4 py-4 space-y-3">
                        <button onClick={() => scrollToSection("home")} className="block w-full text-left py-2">
                            {t("menu.home")}
                        </button>
                        <button onClick={() => scrollToSection("services")} className="block w-full text-left py-2">
                            {t("menu.services")}
                        </button>
                        <button onClick={() => scrollToSection("projects")} className="block w-full text-left py-2">
                            {t("menu.projects")}
                        </button>
                        <button onClick={() => scrollToSection("why-us")} className="block w-full text-left py-2">
                            {t("menu.whyUs")}
                        </button>

                        <div className="border-t border-gray-300 my-2"></div>

                        {/* Language Switcher in mobile */}
                        <div>
                            <span className="block mb-2 font-semibold">{t("menu.language")}:</span>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`block w-full text-left py-2 hover:text-amber-500 ${i18n.language === lang.code ? "font-bold text-amber-500" : ""
                                        }`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>

                        <button onClick={() => setIsModalOpen(true)} className="block w-full text-left py-2 font-semibold text-amber-600">
                            {t("menu.contact")}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
