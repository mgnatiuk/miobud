import { useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Project {
    id: number;
    name: string;
    description: string;
    cover: string;
    images: string[];
}

const projects: Project[] = [
    {
        id: 1,
        name: "Warszawa, Grochowska 54",
        description: "Kompleksowy remont mieszkania",
        cover: "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-4-1000x667.jpg",
        images: [
            "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-4-1000x667.jpg",
            "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-10-1000x667.jpg",
            "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-11-1000x667.jpg",
            "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-1-1000x667.jpg",
        ],
    },
    {
        id: 2,
        name: "Warszawa, Grzybowska 85",
        description: "Kompleksowy remont mieszkania",
        cover: "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-10-1000x667.jpg",
        images: [
            "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-10-1000x667.jpg",
            "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-11-1000x667.jpg",
        ],
    },
    {
        id: 3,
        name: "Warszawa, Stefana Okrzei 10",
        description: "Kompleksowy remont mieszkania",
        cover: "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-1-1000x667.jpg",
        images: [
            "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-1-1000x667.jpg",
        ],
    },
];

const ProjectsSection = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const project = projects.find((p) => p.id === selectedProject);

    const nextImage = () => {
        if (project) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = () => {
        if (project) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    const openGallery = (projectId: number) => {
        setSelectedProject(projectId);
        setCurrentImageIndex(0);
    };

    return (
        <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
                        {t("projects.badge")}
                    </span>
                    <h2 className="text-5xl font-bold text-white mb-4">{t("projects.sectionTitle")}</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t("projects.sectionSubtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <div
                            key={p.id}
                            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
                            onClick={() => openGallery(p.id)}
                        >
                            <img
                                src={p.cover}
                                alt={p.name}
                                className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 hover:bg-amber-500/30 transition-colors duration-300 flex items-end p-5">
                                <div className="w-full">
                                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg transition-all duration-300">
                                        {p.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-white/80 drop-shadow-md">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal z galerią */}
                {project && (
                    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
                        >
                            <X className="h-10 w-10" />
                        </button>

                        <div className="w-full max-w-6xl">
                            <div className="text-center mb-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.name}</h3>
                                <p className="text-gray-300 text-lg">{project.description}</p>
                            </div>

                            {/* Główny obraz */}
                            <div className="relative bg-black rounded-2xl overflow-hidden mb-6">
                                <img
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.name} - ${currentImageIndex + 1}`}
                                    className="w-full h-[50vh] object-contain"
                                />
                                {/* Strzałki nawigacji */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber-500/80 text-white p-3 rounded-full transition-all"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber-500/80 text-white p-3 rounded-full transition-all"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                {/* Licznik zdjęć */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                                    {currentImageIndex + 1} / {project.images.length}
                                </div>
                            </div>

                            {/* Miniatury */}
                            {project.images.length > 1 && (
                                <div className="flex gap-3 justify-center overflow-x-auto pb-2 mt-10">
                                    {project.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all mt-10 ${idx === currentImageIndex
                                                ? "ring-4 ring-amber-500 scale-110"
                                                : "ring-2 ring-gray-600 hover:ring-amber-400 opacity-60 hover:opacity-100"
                                                }`}
                                        >
                                            <img src={img} alt={`${t("projects.thumbnail")} ${idx + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
