import { useState } from "react";
import { Play, Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const ConsultationSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
    const { t } = useTranslation();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
        // Here you would implement actual video play functionality
    };

    return (
        <section className="py-32 bg-[#F5F1E8] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Text content */}
                    <div>
                        <h2 className="text-[2.9rem] md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                            {t("consultation.title") || (
                                <>
                                    Spotkaj się<br />
                                    z Ekspertem Wnętrz
                                </>
                            )}
                        </h2>

                        <ul className="space-y-4 mb-10 text-lg text-gray-700">
                            <li>{t("consultation.point1") || "Odkryj pełną ofertę kompleksowego wykończenia."}</li>
                            <li>{t("consultation.point2") || "Zainspiruj się wachlarzem materiałów i gotowych rozwiązań."}</li>
                            <li>{t("consultation.point3") || "Poznaj wycenę i proponowany termin realizacji prac."}</li>
                            <li>{t("consultation.point4") || "Porozmawiaj z Ekspertem Wnętrz online lub w Showroomie."}</li>
                        </ul>

                        <button
                            onClick={onOpenModal}
                            className="bg-[#C9A962] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#B89952] transition-all inline-flex items-center gap-2"
                        >
                            {t("consultation.bookMeeting") || "Zarezerwuj spotkanie"}
                            <span className="text-xl">→</span>
                        </button>
                    </div>

                    {/* Right side - Video/Image */}
                    <div className="relative group">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                                alt="Interior Expert Consultation"
                                className="w-full h-full object-cover"
                            />

                            {/* Video overlay */}
                            {!isVideoPlaying && (
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <button
                                        onClick={handlePlayVideo}
                                        className="relative"
                                    >
                                        {/* Play button circle */}
                                        <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                            <Play className="w-12 h-12 text-white fill-white ml-2" />
                                        </div>
                                        {/* "WŁĄCZ WIDEO" text */}
                                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                            <span className="text-white text-sm font-bold tracking-widest">
                                                {t("consultation.playVideo") || "WŁĄCZ WIDEO"}
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            )}

                            {/* Sound icon in bottom right */}
                            <div className="absolute bottom-6 right-6">
                                <Volume2 className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationSection;
