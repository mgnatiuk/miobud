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
        <section id="services" className="py-32 bg-[#F5F1E8] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-[1.1]">
                        {t("services.sectionTitle")}
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
                        {t("services.sectionSubtitle")}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/50 backdrop-blur-sm p-10 border border-gray-200/50 hover:bg-white hover:border-[#C9A962]/30 transition-all duration-300"
                        >
                            <div className="mb-8">
                                <div className="w-16 h-16 bg-[#C9A962] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                {t(service.titleKey)}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {t(service.descKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
