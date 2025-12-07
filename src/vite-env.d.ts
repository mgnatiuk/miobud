/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TELEGRAM_BOT_TOKEN: string;
    readonly VITE_TELEGRAM_CHAT_ID_ADMIN: string;
    readonly VITE_TELEGRAM_CHAT_ID_DENIS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
