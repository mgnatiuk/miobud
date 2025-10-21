import { Hammer } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Hammer className="h-5 w-5 text-amber-600" />
                    <span
                        className="text-lg text-white"
                        style={{
                            fontFamily: '"Gabarito", sans-serif',
                            fontWeight: 700,
                        }}
                    >
                        MIOBUD
                    </span>

                </div>
                <p className="text-sm text-center">© 2025 MIOBUD Wszystkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
};

export default Footer;
