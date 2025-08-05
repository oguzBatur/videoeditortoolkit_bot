import { messages } from "../locales.ts";

export function getText(language_code: string | undefined, key: string): string {
    const lang = language_code?.startsWith("tr") ? "tr" : "en";
    return messages[lang][key as keyof typeof messages["en"]] ?? key;
}