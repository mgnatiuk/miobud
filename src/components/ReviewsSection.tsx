import { Star } from "lucide-react";

const reviews = [
    { name: "Anna K.", city: "Warszawa", text: "Świetna firma – pełen profesjonalizm, terminowość i super kontakt. Polecam każdemu!" },
    { name: "Michał W.", city: "Kraków", text: "Remont mieszkania wykonany perfekcyjnie, wszystko zgodnie z planem." },
    { name: "Karolina P.", city: "Gdańsk", text: "Profesjonalna obsługa, szybki kontakt i świetne doradztwo na każdym etapie." },
];

const ReviewsSection = () => {
    return (
        <section id="reviews" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">OPINIE KLIENTÓW</span>
                <h2 className="text-5xl font-bold text-gray-900 mb-4">Opinie z Google</h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Zaufali nam klienci – zobacz, co mówią o naszej pracy!</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-all">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="h-5 w-5 text-amber-500" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-4">{r.text}</p>
                            <h4 className="font-semibold text-gray-900">{r.name}</h4>
                            <p className="text-sm text-gray-500">{r.city}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="https://www.google.com/maps/place/AmiBud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
                    >
                        Zobacz więcej opinii
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
