import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const ReviewsSection = () => {
    const { t } = useTranslation();

    const reviews = t("reviews.reviews", { returnObjects: true }) as Array<{ name: string; city: string; text: string }>;

    // Google colors for each letter
    const googleColors = ['#4285F4', '#EA4335', '#FBBC04', '#4285F4', '#34A853', '#EA4335'];

    const renderTitle = () => {
        const title = t("reviews.sectionTitle");
        const parts = title.split("Google");

        if (parts.length > 1) {
            return (
                <>
                    {parts[0]}
                    <span>
                        {['G', 'o', 'o', 'g', 'l', 'e'].map((letter, idx) => (
                            <span key={idx} style={{ color: googleColors[idx] }}>
                                {letter}
                            </span>
                        ))}
                    </span>
                    {parts[1]}
                </>
            );
        }
        return title;
    };

    return (
        <section id="reviews" className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
                        {renderTitle()}
                    </h2>
                    <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed">
                        {t("reviews.sectionSubtitle")}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {reviews.map((r, i) => (
                        <div key={i} className="group bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:bg-white/10 hover:border-[#C9A962]/30 transition-all duration-300">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="h-5 w-5 text-[#C9A962]" fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">{r.text}</p>
                            <div>
                                <h4 className="font-bold text-white text-lg">{r.name}</h4>
                                <p className="text-gray-400">{r.city}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <a
                        href="https://www.google.com/maps/place/AmiBud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#C9A962] text-black px-10 py-4 text-lg font-bold hover:bg-[#B89952] transition-all"
                    >
                        {t("reviews.moreReviews")}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
