import { translations, type Language } from "./translations";

export type { Language };
export const supportedLanguages: Language[] = ["en", "pt", "fr"];
export const defaultLanguage: Language = "en";

export function detectLanguage(
  acceptLanguage?: string | null,
  queryLang?: string | null,
  cookieLang?: string | null
): Language {
  // Check query param first (highest priority - for immediate switching)
  if (queryLang && supportedLanguages.includes(queryLang as Language)) {
    return queryLang as Language;
  }
  
  // Then check cookie (persisted preference)
  if (cookieLang && supportedLanguages.includes(cookieLang as Language)) {
    return cookieLang as Language;
  }
  
  // Then check browser Accept-Language header
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(",")
      .map((lang) => {
        const [code, q = "q=1"] = lang.trim().split(";");
        const quality = parseFloat(q.replace("q=", ""));
        return { code: code.split("-")[0].toLowerCase(), quality };
      })
      .sort((a, b) => b.quality - a.quality);
    
    for (const { code } of languages) {
      if (supportedLanguages.includes(code as Language)) {
        return code as Language;
      }
    }
  }
  
  return defaultLanguage;
}

export function getTranslations(lang: Language) {
  return translations[lang];
}
