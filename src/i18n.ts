import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pl from "./locales/pl.json";
import en from "./locales/en.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pl: { translation: pl }, // <-- opakowujemy w "translation"
            en: { translation: en }, // <-- opakowujemy w "translation"
        },
        fallbackLng: "pl",
        interpolation: { escapeValue: false },
        debug: true, // pokaże w konsoli, który język jest używany
    });

export default i18n;
