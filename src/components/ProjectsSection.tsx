import { useState } from "react";
import { X } from "lucide-react";

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
        images: ["/images/project2-1.jpg", "/images/project2-2.jpg"],
    },
    {
        id: 3,
        name: "Warszawa, Stefana Okrzei 10",
        description: "Kompleksowy remont mieszkania",
        cover: "https://gotowemieszkanie.pl/wp-content/uploads/2025/10/GM-Studio-Poznan-1-1000x667.jpg",
        images: ["/images/project3-1.jpg"],
    },
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const project = projects.find((p) => p.id === selectedProject);

    return (
        <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
                        PORTFOLIO
                    </span>
                    <h2 className="text-5xl font-bold text-white mb-4">Nasze realizacje</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Galeria ukończonych projektów - zobacz nasze portfolio
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <div
                            key={p.id}
                            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
                            onClick={() => setSelectedProject(p.id)}
                        >
                            <img
                                src={p.cover}
                                alt={p.name}
                                className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                            />
                            {/* Nakładka */}
                            <div className="absolute inset-0 bg-black/40 hover:bg-amber-500/30 transition-colors duration-300 flex items-end p-5">
                                <div className="w-full">
                                    <h3 className="font-poppins text-xl md:text-2xl font-bold text-white drop-shadow-lg transition-all duration-300">
                                        {p.name}
                                    </h3>
                                    <p className="font-poppins text-sm md:text-base text-white/80 drop-shadow-md">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal z mozaiką */}
                {project && (
                    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center overflow-y-auto p-6">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="self-end mb-4 text-white hover:text-gray-300"
                        >
                            <X className="h-10 w-10" />
                        </button>

                        <h3 className="text-4xl font-bold text-white mb-6 text-center">{project.name}</h3>
                        <p className="text-gray-300 mb-10 text-lg text-center">{project.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                            {project.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-700 animate-pulse"
                                >
                                    <img
                                        src={img}
                                        alt={`${project.name} - ${idx + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
                                        onLoad={(e) => e.currentTarget.parentElement?.classList.remove("animate-pulse")}
                                        onError={(e) => {
                                            e.currentTarget.src = "/images/placeholder.jpg";
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
