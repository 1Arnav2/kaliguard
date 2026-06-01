import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "./translations";

interface LangCtx {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "fr", toggleLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("kg-lang");
    return stored === "en" ? "en" : "fr";
  });

  useEffect(() => {
    localStorage.setItem("kg-lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
