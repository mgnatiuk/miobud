import { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID_ADMIN = import.meta.env.VITE_TELEGRAM_CHAT_ID_ADMIN;
const TELEGRAM_CHAT_ID_DENIS = import.meta.env.VITE_TELEGRAM_CHAT_ID_DENIS;

const sendTelegramMessage = async (message: string): Promise<boolean> => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID_ADMIN || !TELEGRAM_CHAT_ID_DENIS) {
        console.error('Telegram credentials not configured');
        return false;
    }

    try {
        const chatIds = [TELEGRAM_CHAT_ID_ADMIN, TELEGRAM_CHAT_ID_DENIS];
        const promises = chatIds.map(chatId =>
            fetch(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'HTML',
                    }),
                }
            )
        );

        const responses = await Promise.all(promises);
        const results = await Promise.all(responses.map(r => r.json()));

        return results.every(data => data.ok);
    } catch (error) {
        console.error('Failed to send Telegram message:', error);
        return false;
    }
};

const SPECIALIZATIONS = [
    "plumber",
    "electrician",
    "gasFitter",
    "heatingInstaller",
    "hvac",
    "mason",
    "plasterer",
    "drywallInstaller",
    "screedLayer",
    "painter",
    "tiler",
    "floorLayer",
    "floorInstaller",
    "finisher",
    "carpenter",
    "roofer",
    "windowDoorInstaller",
    "stonemason",
    "glazier",
    "furnitureInstaller",
    "smartHomeSpecialist",
    "blindsInstaller",
    "constructionManager",
    "constructionHelper",
    "cleaningCrew",
    "handyman"
] as const;

interface JobProps {
    isOpen: boolean;
    onClose: () => void;
}

const Job = ({ isOpen, onClose }: JobProps) => {
    const { t } = useTranslation();
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        specialization: '',
        phone: '',
        email: '',
        message: ''
    });

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.phone.trim()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const specializationText = formData.specialization
                ? t(`job.specializations.${formData.specialization}`)
                : 'Nie wybrano';

            const message = `
<b>🔧 Nowe zgłoszenie o pracę</b>

<b>Imię i nazwisko:</b> ${formData.fullName || 'Nie podano'}
<b>Specjalizacja:</b> ${specializationText}
<b>Telefon:</b> ${formData.phone}
<b>Email:</b> ${formData.email || 'Nie podano'}
<b>Wiadomość:</b> ${formData.message || 'Brak'}
            `.trim();

            const success = await sendTelegramMessage(message);

            if (success) {
                setSubmitStatus('success');
                setFormData({
                    fullName: '',
                    specialization: '',
                    phone: '',
                    email: '',
                    message: ''
                });
                setTimeout(() => {
                    setSubmitStatus('idle');
                    onClose();
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-lg w-full relative mx-5 md:mx-0 animate-fadeInScale max-h-[90vh] overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <X className="h-6 w-6" />
                </button>

                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("job.title")}</h3>

                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <div>
                            <p className="text-green-800 font-semibold">{t("job.successTitle")}</p>
                            <p className="text-green-700 text-sm">{t("job.successMessage")}</p>
                        </div>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                        <div>
                            <p className="text-red-800 font-semibold">{t("job.errorTitle")}</p>
                            <p className="text-red-700 text-sm">{t("job.errorMessage")}</p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={t("job.fullName")}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all"
                        disabled={isSubmitting}
                    />
                    <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all"
                        disabled={isSubmitting}
                    >
                        <option value="">{t("job.selectSpecialization")}</option>
                        {SPECIALIZATIONS.map((spec) => (
                            <option key={spec} value={spec}>
                                {t(`job.specializations.${spec}`)}
                            </option>
                        ))}
                    </select>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t("job.phone")}
                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all"
                            required
                            disabled={isSubmitting}
                        />
                        <p className="text-xs text-gray-500 mt-1 ml-1">{t("job.phoneRequired")}</p>
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("job.email")}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all"
                        disabled={isSubmitting}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("job.message")}
                        rows={4}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:bg-white resize-none outline-none transition-all"
                        disabled={isSubmitting}
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? t("job.sending") : t("job.submit")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Job;
