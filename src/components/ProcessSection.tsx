import { useTranslation } from "react-i18next";

const ProcessSection = () => {
    const { t } = useTranslation();

    const steps = [
        {
            number: "01",
            title: "Spotkanie z Ekspertem Wnętrz i wybór programu wykończeniowego"
        },
        {
            number: "02",
            title: "Podpisanie umowy"
        },
        {
            number: "03",
            title: "Projektowanie i wybór materiałów wspólnie z architektem"
        },
        {
            number: "04",
            title: "Prace budowlane pod opieką Koordynatora"
        },
        {
            number: "05",
            title: "Odbiór kluczy do wymarzonego wnętrza"
        }
    ];

    return (
        <section id="process" className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-[2.9rem] md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
                        {t("process.sectionTitle") || "Jak pracujemy"}
                    </h2>
                    <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed">
                        {t("process.sectionSubtitle") || "Kompleksowe wykończenie wnętrza krok po kroku"}
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A962]"></div>

                        {/* Steps */}
                        <div className="grid grid-cols-5 gap-8 pt-12">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative">
                                    {/* Vertical Line */}
                                    <div className="absolute top-0 left-0 w-px h-12 bg-[#C9A962] -translate-y-12"></div>

                                    {/* Number */}
                                    <div className="text-8xl font-bold text-[#C9A962] mb-6">
                                        {step.number}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-normal text-gray-300 leading-relaxed">
                                        {step.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Vertical Timeline */}
                <div className="lg:hidden space-y-16">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative border-l border-[#C9A962] pl-12">
                            {/* Number */}
                            <div className="text-6xl font-bold text-[#C9A962] mb-4">
                                {step.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-normal text-gray-300 leading-relaxed">
                                {step.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
