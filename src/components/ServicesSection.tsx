import { Home, Wrench, Hammer, CheckCircle, Lamp, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
    const { t } = useTranslation();

    const services = [
        { icon: <Home className="h-8 w-8 text-white" />, titleKey: "services.remontyMieszkan", descKey: "services.remontyMieszkanDesc" },
        { icon: <Wrench className="h-8 w-8 text-white" />, titleKey: "services.wykonczenia", descKey: "services.wykonczeniaDesc" },
        { icon: <Hammer className="h-8 w-8 text-white" />, titleKey: "services.praceMurarskie", descKey: "services.praceMurarskieDesc" },
        { icon: <CheckCircle className="h-8 w-8 text-white" />, titleKey: "services.lazienkiKuchnie", descKey: "services.lazienkiKuchnieDesc" },
        { icon: <Lamp className="h-8 w-8 text-white" />, titleKey: "services.instalacje", descKey: "services.instalacjeDesc" },
        { icon: <Layers className="h-8 w-8 text-white" />, titleKey: "services.projektowanie", descKey: "services.projektowanieDesc" },
    ];

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">{t("services.badge")}</span>
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">{t("services.sectionTitle")}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("services.sectionSubtitle")}</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative flex flex-col items-center">
                                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(service.titleKey)}</h3>
                                <p className="text-gray-600 leading-relaxed">{t(service.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
