import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    const quickLinks = [
        { key: "menu.home", href: "#home" },
        { key: "menu.services", href: "#services" },
        { key: "menu.projects", href: "#projects" },
        { key: "menu.whyUs", href: "#why-us" },
        { key: "menu.contact", href: "#contact" },
    ];

    return (
        <footer className="bg-black text-gray-400 border-t border-white/10">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-8">
                            <span
                                className="text-4xl text-white font-bold"
                                style={{
                                    fontFamily: 'system-ui, -apple-system, sans-serif',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                dhmg.
                            </span>
                        </div>
                        <p className="text-base leading-relaxed text-gray-400 mb-8">
                            {t("footer.description")}
                        </p>
                        {/* Social Media */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">
                                {t("footer.followUs")}
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#C9A962] transition-colors"
                                    aria-label="Facebook"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#C9A962] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-normal text-sm uppercase tracking-widest mb-8 text-[#C9A962]">
                            {t("footer.quickLinks")}
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.key}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-base"
                                    >
                                        {t(link.key)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-normal text-sm uppercase tracking-widest mb-8 text-[#C9A962]">
                            {t("footer.contactInfo")}
                        </h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{t("footer.addressLabel") || "Adres"}</p>
                                <p className="text-gray-300 text-base">{t("footer.address")}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{t("footer.phoneLabel") || "Telefon"}</p>
                                <a
                                    href={`tel:${t("footer.phone")}`}
                                    className="text-gray-300 hover:text-[#C9A962] transition-colors text-base"
                                >
                                    {t("footer.phone")}
                                </a>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{t("footer.emailLabel") || "Email"}</p>
                                <a
                                    href={`mailto:${t("footer.email")}`}
                                    className="text-gray-300 hover:text-[#C9A962] transition-colors text-base"
                                >
                                    {t("footer.email")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-sm text-gray-500">
                            {t("footer.copyright")}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center">
                            {t("footer.madeWith")}
                            <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" />
                            dhmg.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
