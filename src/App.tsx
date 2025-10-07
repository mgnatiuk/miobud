import { useEffect, useState } from 'react';
import { X, Hammer, Home, Wrench, CheckCircle, Star } from 'lucide-react';
import Navbar from "./components/Navbar";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImage(0); // zaczynamy od pierwszego obrazka
  };

  const projects = [
    { id: 1, name: "Projekt 1", description: "Kompleksowy remont mieszkania", images: ["https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg", "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"] },
    { id: 2, name: "Projekt 2", description: "Kompleksowy remont mieszkania", images: ["/images/project2-1.jpg", "/images/project2-2.jpg"] },
    { id: 3, name: "Projekt 3", description: "Kompleksowy remont mieszkania", images: ["/images/project3-1.jpg"] },
    // reszta projektów...
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar scrollToSection={scrollToSection} setIsModalOpen={setIsModalOpen} />

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Tło z efektem parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg')",
            transform: `translateY(${offsetY * 0.5}px)`, // efekt parallax (0.5 = prędkość)
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Zawartość */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 rounded-full text-sm font-semibold border border-amber-400/30">
                  Zaufało nam ponad 500 klientów
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Profesjonalne remonty i wykończenia
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed drop-shadow-lg max-w-2xl">
                Tworzymy przestrzenie, w których chcesz żyć. Doświadczenie, jakość i terminowość - to nasza gwarancja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Bezpłatna wycena
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  Zobacz realizacje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">CO OFERUJEMY</span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Nasze usługi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Kompleksowe rozwiązania remontowe dostosowane do Twoich potrzeb</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Remonty mieszkań</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kompleksowe remonty mieszkań - od wyburzenia po wykończenie. Projektujemy i realizujemy zmiany aranżacyjne.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wykończenia wnętrz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Malowanie, układanie płytek, montaż podłóg, sufity podwieszane - każdy detal dopracowany perfekcyjnie.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Hammer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Prace murarskie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ściany działowe, tynkowanie, wyburzenia, przeróbki konstrukcyjne - solidne fundamenty każdego remontu.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Łazienki i kuchnie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specjalizujemy się w kompleksowych remontach łazienek i kuchni - instalacje, armatura, meble.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Remonty biur</h3>
                <p className="text-gray-600 leading-relaxed">
                  Adaptacja przestrzeni biurowych - open space, sale konferencyjne, strefy wypoczynku.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instalacje</h3>
                <p className="text-gray-600 leading-relaxed">
                  Montaż i modernizacja instalacji elektrycznych, hydraulicznych, grzewczych i wentylacyjnych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">PORTFOLIO</span>
            <h2 className="text-5xl font-bold text-white mb-4">Nasze realizacje</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Galeria ukończonych projektów - zobacz nasze portfolio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Home className="h-24 w-24 text-gray-600 opacity-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/90 via-amber-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-white/90 text-sm mb-4">{project.description}</p>
                    <button key={project.id} onClick={() => openProject(project.id)} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium border border-white/30 hover:bg-white/30 transition-all">
                      Zobacz więcej
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal galeria pełnoekranowa z karuzelą */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl flex flex-col items-center">

              {/* Przycisk zamknięcia */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white hover:text-gray-300 z-50"
              >
                <X className="h-10 w-10" />
              </button>

              {/* Tytuł projektu */}
              <h3 className="text-4xl font-bold text-white mb-8 text-center">
                {projects.find(p => p.id === selectedProject)?.name}
              </h3>

              {/* Karuzela */}
              <div className="relative w-full flex items-center justify-center">
                {/* Strzałka w lewo */}
                <button
                  onClick={() => setCurrentImage((prev) => (prev === 0 ? projects.find(p => p.id === selectedProject)!.images.length - 1 : prev - 1))}
                  className="absolute left-0 z-50 text-white p-3 hover:bg-black/30 rounded-full transition-colors"
                >
                  &#10094;
                </button>

                {/* Obrazek */}
                <img
                  src={projects.find(p => p.id === selectedProject)?.images[currentImage]}
                  alt={`Projekt ${selectedProject} - ${currentImage + 1}`}
                  className="rounded-2xl shadow-2xl w-full max-h-[80vh] object-cover"
                />

                {/* Strzałka w prawo */}
                <button
                  onClick={() => setCurrentImage((prev) => (prev === projects.find(p => p.id === selectedProject)!.images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-0 z-50 text-white p-3 hover:bg-black/30 rounded-full transition-colors"
                >
                  &#10095;
                </button>
              </div>

              {/* Licznik obrazków */}
              <p className="text-white mt-4">
                {currentImage + 1} / {projects.find(p => p.id === selectedProject)?.images.length}
              </p>
            </div>
          </div>
        )}



      </section>


      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">NASZE WARTOŚCI</span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Dlaczego my?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Co wyróżnia nas na tle konkurencji</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">15 lat doświadczenia</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Setki zrealizowanych projektów i zadowolonych klientów. Nasza wiedza to gwarancja najwyższej jakości.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">Terminowość</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Szanujemy Twój czas. Ustalamy realistyczne terminy i konsekwentnie je dotrzymujemy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">Gwarancja jakości</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Udzielamy gwarancji na wszystkie wykonane prace. Twoje zadowolenie to nasz priorytet.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">Konkurencyjne ceny</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Oferujemy najlepszy stosunek jakości do ceny. Przejrzyste kosztorysy bez ukrytych opłat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">Profesjonalny zespół</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nasi specjaliści to mistrzowie swojego fachu - wykwalifikowani, doświadczeni i zaangażowani.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">Kompleksowa obsługa</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Od projektu po sprzątanie po remoncie - wszystko w jednym miejscu. Pełna obsługa na każdym etapie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opinie Google Maps */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">OPINIE KLIENTÓW</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Opinie z Google</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Zaufali nam klienci – zobacz, co mówią o naszej pracy!</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-all">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  „Świetna firma – pełen profesjonalizm, terminowość i super kontakt. Polecam każdemu!”
                </p>
                <h4 className="font-semibold text-gray-900">Anna K.</h4>
                <p className="text-sm text-gray-500">Warszawa</p>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hammer className="h-5 w-5 text-amber-600" />
            <span className="text-lg font-bold text-white">AmiBud</span>
          </div>
          <p className="text-sm text-center">© 2024 AmiBud. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>

      {/* --- MODAL KONTAKTU --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-lg w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skontaktuj się z nami</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Imię i nazwisko" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white" />
              <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white" />
              <input type="tel" placeholder="Telefon" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white" />
              <textarea placeholder="Wiadomość" rows={4} className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white resize-none"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
