import { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const { t } = useTranslation();
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            const success = true;

            if (success) {
                setSubmitStatus('success');
                setTimeout(() => {
                    setSubmitStatus('idle');
                    onClose();
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-lg w-full relative mx-5 md:mx-0 animate-fadeInScale">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <X className="h-6 w-6" />
                </button>

                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("contact.title")}</h3>

                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <div>
                            <p className="text-green-800 font-semibold">{t("contact.successTitle")}</p>
                            <p className="text-green-700 text-sm">{t("contact.successMessage")}</p>
                        </div>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                        <div>
                            <p className="text-red-800 font-semibold">{t("contact.errorTitle")}</p>
                            <p className="text-red-700 text-sm">{t("contact.errorMessage")}</p>
                        </div>
                    </div>
                )}

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder={t("contact.fullName")}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all"
                        required
                        disabled={isSubmitting}
                    />
                    <input
                        type="email"
                        placeholder={t("contact.email")}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all"
                        required
                        disabled={isSubmitting}
                    />
                    <input
                        type="tel"
                        placeholder={t("contact.phone")}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all"
                        required
                        disabled={isSubmitting}
                    />
                    <textarea
                        placeholder={t("contact.message")}
                        rows={4}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white resize-none outline-none transition-all"
                        required
                        disabled={isSubmitting}
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? t("contact.sending") : t("contact.submit")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
