import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "model", label: "Model" },
  { id: "impact", label: "Impact" },
  { id: "science", label: "Science" },
  { id: "team", label: "Team" },
  { id: "roadmap", label: "Roadmap" },
];

export default function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -79% 0px", // Trigger when section is in top part of viewport
      }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // offset for fixed nav
        behavior: "smooth"
      });
    } else if (id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
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
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between relative">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("top")}
          className="flex items-center shrink-0 relative z-10"
        >
          <img src="/logo.png" alt="Kali Guard" className="h-8 w-auto max-w-[120px] object-contain" />
        </button>

        {/* Links */}
        <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 p-1 rounded-full border transition-all duration-300 ${
          isScrolled ? 'bg-white/50 border-gray-200/50' : 'bg-white/40 border-gray-200/60 backdrop-blur-md shadow-sm'
        }`}>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3.5 lg:px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 border ${
                  isActive
                    ? isScrolled 
                      ? "bg-white text-gray-900 shadow-sm border-gray-200/50" 
                      : "bg-white/90 text-[#11141B] shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-white/60"
                    : isScrolled
                      ? "border-transparent text-gray-500 hover:text-gray-900 hover:bg-white/50"
                      : "border-transparent text-[#11141B]/70 hover:text-[#11141B] hover:bg-white/40"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${isScrolled ? 'text-gray-900' : 'text-[#11141B]'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg py-4 flex flex-col px-6 gap-2 h-auto max-h-[calc(100vh-80px)] overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-3 text-left rounded-xl text-[16px] font-medium transition-colors ${
                  isActive ? "bg-[#0D9762]/10 text-[#0D9762]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
