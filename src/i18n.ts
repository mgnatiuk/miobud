import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pl from "./locales/pl.json";
import en from "./locales/en.json";
import ua from "./locales/ua.json";
import ru from "./locales/ru.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pl: { translation: pl },
            en: { translation: en },
            ua: { translation: ua },
            ru: { translation: ru },
        },
        fallbackLng: "pl",
        interpolation: { escapeValue: false },
        debug: false
    });

export default i18n;
