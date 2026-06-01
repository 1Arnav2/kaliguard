import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";

const NAV_IDS = ["dashboard", "problem", "solution", "model", "impact", "science", "team", "roadmap"] as const;
type NavId = typeof NAV_IDS[number];

function LangToggle() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="flex items-center gap-0.5 px-3 py-1.5 rounded-full border border-[#2D5016]/30 bg-white/80 backdrop-blur-sm text-[12px] tracking-tight shrink-0 hover:border-[#2D5016]/60 transition-colors"
    >
      <span className={lang === "en" ? "font-bold text-[#2D5016]" : "font-medium text-[#64748B]"}>English</span>
      <span className="text-[#64748B]/40 mx-0.5">|</span>
      <span className={lang === "fr" ? "font-bold text-[#2D5016]" : "font-medium text-[#64748B]"}>Français</span>
    </button>
  );
}

export default function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -79% 0px" }
    );

    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 60, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-gray-200 py-3 shadow-sm"
          : "bg-transparent border-gray-200 py-4 md:py-6"
      }`}
    >
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("top")}
          className="flex items-center shrink-0 relative z-10"
        >
          <img src="/logo.png" alt="Kali Guard" className="h-8 w-auto max-w-[120px] object-contain" />
        </button>

        {/* Center nav links — desktop only */}
        <div
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 p-1 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-white/50 border-gray-200/50"
              : "bg-white/40 border-gray-200/60 backdrop-blur-md shadow-sm"
          }`}
        >
          {NAV_IDS.map((id) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`${lang === "fr" ? "px-2 lg:px-2.5 py-1.5 text-[11px]" : "px-3.5 lg:px-4 py-1.5 text-[13px]"} rounded-full font-medium transition-all duration-300 border ${
                  isActive
                    ? isScrolled
                      ? "bg-white text-gray-900 shadow-sm border-gray-200/50"
                      : "bg-white/90 text-[#11141B] shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-white/60"
                    : isScrolled
                    ? "border-transparent text-gray-500 hover:text-gray-900 hover:bg-white/50"
                    : "border-transparent text-[#11141B]/70 hover:text-[#11141B] hover:bg-white/40"
                }`}
              >
                {t.nav[id as NavId]}
              </button>
            );
          })}
        </div>

        {/* Right side: language toggle + mobile hamburger */}
        <div className="flex items-center gap-2 shrink-0 relative z-10">
          <LangToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? "text-gray-900" : "text-[#11141B]"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg py-4 flex flex-col px-6 gap-2 h-auto max-h-[calc(100vh-80px)] overflow-y-auto">
          {NAV_IDS.map((id) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-3 text-left rounded-xl text-[16px] font-medium transition-colors ${
                  isActive
                    ? "bg-[#0D9762]/10 text-[#0D9762]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {t.nav[id as NavId]}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
