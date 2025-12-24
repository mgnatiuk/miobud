import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyUsSection = () => {
    const { t } = useTranslation();

    const values = t("whyUs.values", { returnObjects: true }) as Array<{ title: string; description: string }>;

    return (
        <section id="why-us" className="py-32 bg-[#F5F1E8] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-[1.1]">
                        {t("whyUs.sectionTitle")}
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
                        {t("whyUs.sectionSubtitle")}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((item, i) => (
                        <div key={i} className="group">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-[#C9A962] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
