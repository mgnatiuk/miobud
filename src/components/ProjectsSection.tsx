import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

    const nextImage = useCallback(() => {
        if (project) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    }, [project]);

    const prevImage = useCallback(() => {
        if (project) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    }, [project]);

    const closeGallery = useCallback(() => {
        setSelectedProject(null);
    }, []);

    const openGallery = (projectId: number) => {
        setSelectedProject(projectId);
        setCurrentImageIndex(0);
    };

    // Keyboard navigation
    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeGallery();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, closeGallery, prevImage, nextImage]);

    return (
        <section id="projects" className="py-32 bg-black relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
                        {t("projects.sectionTitle")}
                    </h2>
                    <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed">
                        {t("projects.sectionSubtitle")}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <div
                            key={p.id}
                            className="group relative cursor-pointer overflow-hidden transition-all duration-300"
                            onClick={() => openGallery(p.id)}
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={p.cover}
                                    alt={p.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                        {p.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-300">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal z galerią */}
                {project && (
                    <div
                        className="fixed inset-0 z-50 bg-black flex flex-col"
                        onClick={closeGallery}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-800">
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-white">{project.name}</h3>
                                <p className="text-sm md:text-base text-gray-400 mt-1">{project.description}</p>
                            </div>
                            <button
                                onClick={closeGallery}
                                className="ml-4 text-gray-400 hover:text-white transition-colors p-2"
                                aria-label="Close gallery"
                            >
                                <X className="h-6 w-6 md:h-8 md:w-8" />
                            </button>
                        </div>

                        {/* Main image area */}
                        <div
                            className="flex-1 relative flex items-center justify-center p-4 md:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={project.images[currentImageIndex]}
                                alt={`${project.name} - ${currentImageIndex + 1}`}
                                className="max-h-full max-w-full object-contain"
                            />

                            {/* Navigation arrows */}
                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#C9A962] text-white p-2 md:p-3 transition-all"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#C9A962] text-white p-2 md:p-3 transition-all"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                                    </button>
                                </>
                            )}

                            {/* Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm">
                                {currentImageIndex + 1} / {project.images.length}
                            </div>
                        </div>

                        {/* Thumbnails footer */}
                        {project.images.length > 1 && (
                            <div className="border-t border-gray-800 p-4 md:p-6">
                                <div className="flex gap-3 md:gap-4 justify-start md:justify-center overflow-x-auto pb-2">
                                    {project.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-all ${
                                                idx === currentImageIndex
                                                    ? "ring-2 md:ring-4 ring-[#C9A962] opacity-100"
                                                    : "ring-1 md:ring-2 ring-gray-700 opacity-50 hover:opacity-100"
                                            }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
