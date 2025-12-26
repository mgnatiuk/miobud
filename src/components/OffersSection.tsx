import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const OffersSection = () => {
    const { t } = useTranslation();

    const packages = [
        {
            name: "Smart Life",
            price: "od 1200 zł/m²",
            image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
            features: [
                "Malowanie ścian i sufitów",
                "Panele podłogowe",
                "Instalacje elektryczne podstawowe",
                "Instalacje hydrauliczne podstawowe",
                "Płytki w łazience i kuchni",
                "Drzwi wewnętrzne",
            ]
        },
        {
            name: "Modern Life",
            price: "od 1800 zł/m²",
            featured: true,
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
            features: [
                "Wszystko z pakietu Smart Life",
                "Szpachlowanie gruntowe ścian",
                "Wykończenie podłóg drewniane",
                "Oświetlenie LED",
                "Zabudowa szaf wnękowych",
                "Inteligentny system sterowania",
            ]
        },
        {
            name: "Premium Life",
            price: "od 2500 zł/m²",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            features: [
                "Wszystko z pakietu Modern Life",
                "Materiały premium",
                "Indywidualny projekt wnętrz",
                "Klimatyzacja",
                "System audio",
                "Całkowita obsługa inwestycji",
            ]
        }
    ];

    return (
        <section id="offers" className="py-32 bg-[#F5F1E8] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-[2.9rem] md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
                        {t("offers.sectionTitle") || "Nasza Oferta"}
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
                        {t("offers.sectionSubtitle") || "Wybierz pakiet wykończeniowy dopasowany do Twoich potrzeb i budżetu"}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, i) => (
                        <div
                            key={i}
                            className={`group relative bg-white/50 backdrop-blur-sm border transition-all duration-300 overflow-hidden ${
                                pkg.featured
                                    ? "border-[#C9A962] bg-white"
                                    : "border-gray-200/50 hover:bg-white hover:border-[#C9A962]/30"
                            }`}
                        >
                            {pkg.featured && (
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#C9A962] text-black px-6 py-1 text-sm font-bold z-10">
                                    NAJPOPULARNIEJSZY
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>

                            <div className="p-10">
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                        {pkg.name}
                                    </h3>
                                    <p className="text-xl text-gray-600">
                                        {pkg.price}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 text-lg font-bold transition-all ${
                                    pkg.featured
                                        ? "bg-[#C9A962] text-black hover:bg-[#B89952]"
                                        : "bg-gray-900 text-white hover:bg-[#C9A962] hover:text-black"
                                }`}>
                                    {t("offers.selectPackage") || "Wybierz pakiet"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersSection;
