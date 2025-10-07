import { useState } from "react";
import { Home, X } from "lucide-react";

interface Project {
    id: number;
    name: string;
    description: string;
    images: string[];
}

const projects: Project[] = [
    { id: 1, name: "Projekt 1", description: "Kompleksowy remont mieszkania", images: ["https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"] },
    { id: 2, name: "Projekt 2", description: "Kompleksowy remont mieszkania", images: ["/images/project2-1.jpg", "/images/project2-2.jpg"] },
    { id: 3, name: "Projekt 3", description: "Kompleksowy remont mieszkania", images: ["/images/project3-1.jpg"] },
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [currentImage, setCurrentImage] = useState(0);

    const openProject = (id: number) => {
        setSelectedProject(id);
        setCurrentImage(0);
    };

    const project = projects.find(p => p.id === selectedProject);

    return (
        <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">PORTFOLIO</span>
                    <h2 className="text-5xl font-bold text-white mb-4">Nasze realizacje</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Galeria ukończonych projektów - zobacz nasze portfolio</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <div key={p.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer" onClick={() => openProject(p.id)}>
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                <Home className="h-24 w-24 text-gray-600 opacity-50" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-600/90 via-amber-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white text-xl font-bold mb-2">{p.name}</h3>
                                    <p className="text-white/90 text-sm mb-4">{p.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {project && (
                    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
                        <div className="relative w-full max-w-6xl flex flex-col items-center">
                            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-white hover:text-gray-300 z-50">
                                <X className="h-10 w-10" />
                            </button>

                            <h3 className="text-4xl font-bold text-white mb-8 text-center">{project.name}</h3>

                            <div className="relative w-full flex items-center justify-center">
                                <button onClick={() => setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))} className="absolute left-0 z-50 text-white p-3 hover:bg-black/30 rounded-full transition-colors">
                                    &#10094;
                                </button>
                                <img src={project.images[currentImage]} alt={project.name} className="rounded-2xl shadow-2xl w-full max-h-[80vh] object-cover" />
                                <button onClick={() => setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))} className="absolute right-0 z-50 text-white p-3 hover:bg-black/30 rounded-full transition-colors">
                                    &#10095;
                                </button>
                            </div>

                            <p className="text-white mt-4">{currentImage + 1} / {project.images.length}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
