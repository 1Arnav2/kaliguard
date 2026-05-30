import { Shield } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  "Dashboard",
  "Problem",
  "Solution",
  "Impact",
  "Science",
  "Roadmap",
  "Team",
];

export function Navbar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <nav className="w-full bg-transparent py-2 md:py-3 z-50">
      <div className="max-w-[1600px] w-full mx-auto px-8 md:px-12 flex items-center relative min-h-[40px]">
        {/* Aligned Left Logo */}
        <div className="flex items-center gap-3 relative z-10 w-48">
          <div className="flex bg-[#0D9762] text-white p-2.5 rounded-xl shadow-sm">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-xl font-semibold text-[#11141B] tracking-tight">
            KaliGuard
          </span>
        </div>

        {/* Centered Pills */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-0.5 lg:gap-1.5 whitespace-nowrap">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item;
            const displayText = item;

            return (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`px-4 lg:px-5 py-2.5 rounded-full text-[14px] lg:text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#11141B] text-white shadow-md transform scale-[1.02]"
                    : "text-[#11141B]/70 hover:text-[#11141B] hover:bg-white/40"
                }`}
              >
                {displayText}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
