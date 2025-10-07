import { CheckCircle } from "lucide-react";

const whyUsData = [
    { title: "15 lat doświadczenia", description: "Setki zrealizowanych projektów i zadowolonych klientów. Nasza wiedza to gwarancja najwyższej jakości." },
    { title: "Terminowość", description: "Szanujemy Twój czas. Ustalamy realistyczne terminy i konsekwentnie je dotrzymujemy." },
    { title: "Gwarancja jakości", description: "Udzielamy gwarancji na wszystkie wykonane prace. Twoje zadowolenie to nasz priorytet." },
    { title: "Konkurencyjne ceny", description: "Oferujemy najlepszy stosunek jakości do ceny. Przejrzyste kosztorysy bez ukrytych opłat." },
    { title: "Profesjonalny zespół", description: "Nasi specjaliści to mistrzowie swojego fachu - wykwalifikowani, doświadczeni i zaangażowani." },
    { title: "Kompleksowa obsługa", description: "Od projektu po sprzątanie po remoncie - wszystko w jednym miejscu. Pełna obsługa na każdym etapie." },
];

const WhyUsSection = () => {
    return (
        <section id="why-us" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">NASZE WARTOŚCI</span>
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">Dlaczego my?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Co wyróżnia nas na tle konkurencji</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {whyUsData.map((item, i) => (
                        <div key={i} className="flex items-start space-x-4 group">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle className="h-7 w-7 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
