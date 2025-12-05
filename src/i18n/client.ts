import { supportedLanguages, defaultLanguage, type Language } from "./utils";

export function detectLanguageClient(): Language {
  // Check URL query param
  const urlParams = new URLSearchParams(window.location.search);
  const queryLang = urlParams.get("lang");
  if (queryLang && supportedLanguages.includes(queryLang as Language)) {
    // Save to localStorage
    localStorage.setItem("lang", queryLang);
    // Remove query param and reload
    urlParams.delete("lang");
    const newUrl = window.location.pathname + (urlParams.toString() ? `?${urlParams.toString()}` : '');
    window.history.replaceState({}, '', newUrl);
    return queryLang as Language;
  }
  
  // Check localStorage
  const storedLang = localStorage.getItem("lang");
  if (storedLang && supportedLanguages.includes(storedLang as Language)) {
    return storedLang as Language;
  }
  
  // Check browser language
  const browserLang = navigator.language.split("-")[0].toLowerCase();
  if (supportedLanguages.includes(browserLang as Language)) {
    return browserLang as Language;
  }
  
  return defaultLanguage;
}

export function setLanguage(lang: Language): void {
  localStorage.setItem("lang", lang);
  window.location.reload();
}

