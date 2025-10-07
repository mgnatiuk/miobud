import { X } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-lg w-full relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
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
    );
};

export default ContactModal;
