/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Box, Check, LineChart, Languages } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import SiteNavbar from "./components/SiteNavbar";

const wasteChartData = [
  { name: "Aug", current: 520, previous: 410 },
  { name: "Sep", current: 580, previous: 480 },
  { name: "Oct", current: 650, previous: 450 },
  { name: "Nov", current: 730, previous: 520 },
  { name: "Dec", current: 850, previous: 550 },
];

function Dashboard() {
  return (
    <div className="h-full bg-gray-50/50 flex flex-col overflow-y-auto md:overflow-hidden pt-16 md:pt-20">
      <main className="flex-1 px-4 md:px-8 pt-0 pb-4 md:px-12 md:pb-6 max-w-[1600px] w-full mx-auto flex flex-col shrink-0 md:min-h-0">
        <header className="mb-2 shrink-0 flex items-start justify-between">
          <div>
            <h1 className="text-2xl md:text-[26px] font-semibold text-[#11141B] tracking-tight mb-1">
              Dashboard
            </h1>
            <p className="text-[13px] md:text-[14px] text-[#11141B]/70 tracking-wide">
              Kali Guard{" "}
              <span className="font-medium text-[#11141B]">
                Track trap performance, community income, and flood reduction
              </span>{" "}
              in real time.
            </p>
          </div>
          <div className="bg-white backdrop-blur-xl border border-gray-200 px-3.5 py-2 rounded-full text-[14px] flex items-center gap-1.5 shadow-sm mt-1">
            <span className="text-[#475569] font-bold tracking-tight">
              Protected:
            </span>
            <span className="text-[#0e633a] font-bold tracking-tight">
              603 families
            </span>
          </div>
        </header>

        <div className="flex-none md:flex-1 grid grid-cols-1 md:grid-cols-3 auto-rows-min md:auto-rows-auto md:grid-rows-2 gap-4 md:gap-3 md:min-h-0 pb-6 md:pb-2">
          {/* Card 1: Overview */}
          <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-4 lg:p-5 shadow-sm flex flex-col min-h-[220px] md:h-full md:min-h-0 overflow-hidden">
            <div className="mb-2 lg:mb-3 shrink-0">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-[#64748B] uppercase">
                Overview
              </span>
            </div>

            <p className="text-[12px] lg:text-[13px] text-[#11141B]/80 leading-relaxed mb-3 shrink-0">
              Live operations and impact metrics for the bamboo-and-net litter
              trap on Kali Cabang Timur, Depok. Intercepting river waste to
              prevent flooding for 603 low-income families.
            </p>

            <div className="flex-1 min-h-[60px] bg-white/30 backdrop-blur-xl border border-white/50 shadow-inner rounded-xl flex items-center justify-center">
              <div className="flex items-center gap-2 text-[#64748B] font-medium text-[12px] lg:text-[13px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map"
                >
                  <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                  <path d="M15 5.764v15" />
                  <path d="M9 3.236v15" />
                </svg>
                Map Placeholder
              </div>
            </div>
          </div>

          {/* Card 2: Waste Captured */}
          <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-3 lg:p-4 shadow-sm flex flex-col min-h-[300px] md:h-full md:min-h-0 overflow-hidden">
            <div className="flex items-center justify-between mb-3 shrink-0">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/80 backdrop-blur-md bg-white/60 flex items-center justify-center shadow-sm">
                  <LineChart className="w-4 h-4 lg:w-5 lg:h-5 text-[#11141B]" />
                </div>
                <span className="text-[14px] lg:text-[16px] font-semibold text-[#11141B]">
                  Waste Captured (Kg)
                </span>
              </div>
              <div className="flex items-center bg-white backdrop-blur-md border border-gray-200 shadow-sm px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full text-[11px] lg:text-[12px] font-semibold text-[#11141B]">
                Trap 1
              </div>
            </div>

            <div className="flex-1 flex gap-2 lg:gap-3 min-h-0">
              {/* Chart Side */}
              <div className="flex-1 min-h-0 relative -ml-4 -mb-1">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={wasteChartData}
                    margin={{ top: 35, right: 10, left: 10, bottom: 0 }}
                  >
                    <defs>
                      <pattern
                        id="hatch"
                        patternUnits="userSpaceOnUse"
                        width="4"
                        height="4"
                      >
                        <path
                          d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                          style={{
                            stroke: "#0D9762",
                            strokeWidth: 1,
                            opacity: 0.3,
                          }}
                        />
                      </pattern>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={true}
                      horizontal={false}
                      stroke="#e8eaef"
                    />
                    <ReferenceLine
                      y={500}
                      stroke="#D08226"
                      strokeDasharray="4 4"
                      label={{
                        value: "500 kg",
                        fill: "#D08226",
                        fontSize: 10,
                        position: "insideBottomLeft",
                        offset: 5,
                      }}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: "#64748B" }}
                      dy={8}
                    />
                    <Area
                      type="linear"
                      dataKey="current"
                      stroke="#0D9762"
                      strokeWidth={2}
                      fill="url(#hatch)"
                      // @ts-ignore
                      dot={(props: any) => {
                        const { cx, cy, payload } = props;
                        if (payload.name === "Oct") {
                          return (
                            <g key="dot">
                              <line
                                x1={cx}
                                y1={0}
                                x2={cx}
                                y2={200}
                                stroke="#0D9762"
                                strokeWidth={1.5}
                              />
                              <rect
                                x={cx - 24}
                                y={cy - 28}
                                width={48}
                                height={20}
                                rx={4}
                                fill="#11141B"
                              />
                              <text
                                x={cx}
                                y={cy - 14}
                                textAnchor="middle"
                                fill="white"
                                fontSize={10}
                                fontWeight="bold"
                              >
                                650 kg
                              </text>
                              <circle
                                cx={cx}
                                cy={cy}
                                r={4}
                                fill="white"
                                stroke="#0D9762"
                                strokeWidth={2}
                              />
                            </g>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="linear"
                      dataKey="previous"
                      stroke="#64748B"
                      strokeWidth={1.5}
                      strokeDasharray="3 3"
                      fill="none"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Stats Side */}
              <div className="w-[120px] lg:w-[140px] flex flex-col gap-2 shrink-0">
                <div className="bg-[#E7F6EC]/60 backdrop-blur-xl border border-white/60 rounded-xl lg:rounded-2xl p-2.5 lg:p-3 flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-1.5 text-[#0D9762]">
                    <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full bg-[#0D9762] text-white flex items-center justify-center">
                      <Box className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                    </div>
                    <span className="text-[10px] lg:text-[11px] font-medium opacity-80">
                      Total Captured
                    </span>
                  </div>
                  <div className="mt-1.5">
                    <span className="text-[#0D9762] font-bold text-[15px] lg:text-[18px] tracking-tight">
                      3,330 kg
                    </span>
                  </div>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-xl lg:rounded-2xl p-2.5 lg:p-3 flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-1.5 text-[#64748B]">
                    <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full border-2 border-current flex items-center justify-center -ml-0.5">
                      <Box className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                    </div>
                    <span className="text-[10px] lg:text-[11px] font-medium">
                      Highest Month
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-[#11141B] font-bold text-[15px] lg:text-[18px] tracking-tight">
                      850 kg
                    </span>
                    <span className="text-[#11141B] text-[10px] lg:text-[11px] font-medium">
                      Dec
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Split */}
          <div className="flex flex-col gap-2 md:gap-3 min-h-0 h-full">
            {/* Top: Self-Sustaining Loop */}
            <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-3 lg:p-4 shadow-sm flex flex-col flex-1 min-h-0 overflow-hidden">
              <div className="flex items-center justify-between mb-1.5 shrink-0">
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] text-[#64748B] uppercase">
                  Self-Sustaining Loop
                </span>
                <span className="bg-[#E7F6EC] border border-[#0D9762]/30 text-[#0D9762] px-2 py-0.5 rounded-full flex items-center justify-center text-[9px] font-bold uppercase tracking-wider">
                  Active
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between relative pl-3 mt-1 min-h-0">
                <div className="absolute left-0 top-1 bottom-1 w-[2.5px] flex flex-col justify-between">
                  <div className="w-full h-[22%] bg-[#0D9762] rounded-full"></div>
                  <div className="w-full h-[22%] bg-[#0D9762] rounded-full"></div>
                  <div className="w-full h-[22%] bg-[#0D9762] rounded-full"></div>
                  <div className="w-full h-[22%] bg-[#0D9762] rounded-full"></div>
                </div>
                {[
                  { step: "01", label: "Intercept", value: "1,847 kg" },
                  { step: "02", label: "Sort", value: "1,243 kg" },
                  { step: "03", label: "Monetise", value: "Rp 4.85M" },
                  { step: "04", label: "Sustain", value: "3 months" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-[11px] lg:text-[12px] min-h-0"
                  >
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-[#64748B]/50 tracking-widest font-mono">
                        {item.step}
                      </span>
                      <span className="font-medium text-[#11141B]">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-semibold text-[#0D9762]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: Flood-Free Streak */}
            <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-3 lg:p-4 shadow-sm flex flex-col flex-1 min-h-0 overflow-hidden justify-between">
              <div className="flex flex-col shrink-0">
                <div className="mb-1.5">
                  <span className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] text-[#64748B] uppercase">
                    Flood-Free Streak
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[32px] lg:text-[38px] font-bold text-[#11141B] leading-none tracking-tight">
                    47
                  </span>
                  <span className="text-[11px] lg:text-[12px] text-[#64748B] leading-[1.15]">
                    days without
                    <br />
                    flood event
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between shrink-0 pb-0.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#EF4444]"></div>
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#EF4444]"></div>
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#EF4444]"></div>
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#EF4444]"></div>
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#0D9762]"></div>
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#0D9762]"></div>
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#0D9762]"></div>
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#0D9762]"></div>
                </div>
                <div className="flex items-center gap-3 text-[10px] lg:text-[11px] text-[#64748B]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#EF4444]"></div>
                    Flood
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#0D9762]"></div>
                    Safe
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Revenue & Scale */}
          <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-3 lg:p-4 shadow-sm flex flex-col min-h-[240px] md:h-full md:min-h-0 overflow-hidden">
            <div className="mb-2 lg:mb-3 shrink-0">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-[#64748B] uppercase">
                Revenue & Scale
              </span>
            </div>

            <div className="flex flex-col shrink-0 mb-3 lg:mb-4">
              <span className="text-[32px] lg:text-[40px] font-bold text-[#11141B] leading-none tracking-tight mb-1.5">
                Rp 4.85M
              </span>
              <span className="text-[11.5px] lg:text-[12.5px] text-[#11141B]/80 font-medium tracking-wide">
                +Rp 1.65M / mo • Repaid via recyclables
              </span>
            </div>

            <div className="flex flex-col flex-1 min-h-0">
              <div className="flex flex-col flex-1 justify-between pb-1 min-h-0">
                {[
                  {
                    title: "Depok flood points rem.",
                    sub: "After pilot",
                    value: "1/39",
                  },
                  {
                    title: "Sorter income",
                    sub: "Distributed to community",
                    value: "Rp 14.5M",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-1.5 lg:py-2 ${idx !== 0 ? "border-t border-[#e8eaef]" : ""}`}
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-[12px] lg:text-[13px] text-[#11141B]">
                        {item.title}
                      </span>
                      <span className="text-[10.5px] lg:text-[11.5px] text-[#64748B] leading-none">
                        {item.sub}
                      </span>
                    </div>
                    <span className="font-bold text-[12.5px] lg:text-[13.5px] text-[#11141B]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5: Environmental Impact */}
          <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-4 lg:p-5 shadow-sm flex flex-col min-h-[250px] md:h-full md:min-h-0 overflow-hidden">
            <div className="mb-2 lg:mb-4 shrink-0">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-[#64748B] uppercase">
                Environmental Impact
              </span>
            </div>

            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-2 lg:gap-y-3 min-h-0">
              <div className="flex flex-col justify-center min-h-0">
                <span className="text-[20px] lg:text-[26px] font-bold text-[#0D9762] mb-0.5 leading-tight tracking-tight shrink-0">
                  1,243 kg
                </span>
                <span className="text-[11px] lg:text-[12.5px] text-[#64748B] leading-snug lg:pr-2">
                  Plastic diverted before ocean
                </span>
              </div>
              <div className="flex flex-col justify-center min-h-0">
                <span className="text-[20px] lg:text-[26px] font-bold text-[#0D9762] mb-0.5 leading-tight tracking-tight shrink-0">
                  2,847 kg
                </span>
                <span className="text-[11px] lg:text-[12.5px] text-[#64748B] leading-snug lg:pr-2">
                  CO₂ offset via bamboo
                </span>
              </div>
              <div className="flex flex-col justify-center min-h-0">
                <Check className="w-6 h-6 lg:w-7 lg:h-7 text-[#0D9762] mb-1 stroke-[3] shrink-0" />
                <span className="text-[11px] lg:text-[12.5px] text-[#64748B] leading-snug lg:pr-2">
                  Stagnant water
                  <br />
                  accumulation off
                </span>
              </div>
              <div className="flex flex-col justify-center min-h-0">
                <span className="text-[20px] lg:text-[26px] font-bold text-[#0D9762] mb-0.5 leading-tight tracking-tight shrink-0">
                  0 kg
                </span>
                <span className="text-[11px] lg:text-[12.5px] text-[#64748B] leading-snug lg:pr-2">
                  Operational carbon emissions
                </span>
              </div>
            </div>
          </div>

          {/* Card 6: 6-Month Projections */}
          <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-3 lg:p-4 shadow-sm flex flex-col min-h-[280px] md:h-full md:min-h-0 overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-[#D08226] uppercase">
                6-Month Projections
              </span>
              <span className="bg-[#FFF5E8] border border-[#D08226]/30 text-[#D08226] px-2 py-0.5 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Targets
              </span>
            </div>

            <div className="flex flex-col flex-1 min-h-0">
              <div className="flex flex-col flex-1 justify-between pb-1.5 min-h-0">
                {[
                  { label: "Waste captured (M6)", value: "~500 kg/mo" },
                  { label: "Revenue target (M6)", value: "Rp 3–4.5M/mo" },
                  { label: "Expected break-even", value: "Month 2" },
                  { label: "Plastic diverted", value: "~3,000 kg" },
                  { label: "Sorter income", value: "Rp 18–27M" },
                  { label: "Flood target reduction", value: "4 → 0–1" },
                  { label: "Active Traps at M6", value: "3 pilots" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center text-[11.5px] lg:text-[12.5px] ${idx !== 0 ? "border-t border-[#e8eaef] pt-1 lg:pt-1.5" : ""}`}
                  >
                    <span className="font-medium text-[#11141B]">
                      {item.label}
                    </span>
                    <span className="font-bold text-[#D08226]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    // Add reveal class dynamically to children we want to animate
    document.querySelectorAll("section").forEach(section => {
      // Find all main block elements inside the section except the dashboard section
      if (section.id !== "dashboard") {
        const blocks = section.querySelectorAll("h2, p, blockquote, ul, .grid > div, .relative, .bg-\\[\\#EFECE6\\], .border-l-\\[3px\\], .bg-white");
        blocks.forEach(block => block.classList.add("reveal"));
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px" }
    );

    document.querySelectorAll("section, footer").forEach((section) => {
      const reveals = section.querySelectorAll(".reveal");
      reveals.forEach((el, index) => {
        (el as HTMLElement).style.transitionDelay = `${(index % 10) * 80}ms`;
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <SiteNavbar />

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative w-full max-w-6xl aspect-[21/9] bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <img src="/sbmc.png" alt="Social Business Model Canvas" className="absolute inset-0 w-full h-full object-contain" />
          </div>
        </div>
      )}

      {/* Hero section containing the Dashboard */}
      <section id="dashboard" className="w-full h-screen relative pt-0">
        <Dashboard />
      </section>

      {/* Main Website Content Starts Here */}
      <section id="problem" className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          {/* Section Label */}
          <div className="mb-12">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">
              The Problem
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col pt-2">
              <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B] mb-10">
                603 Families.<br />
                Not a Storm.<br />
                <span className="text-[#0D9762]">Trash.</span>
              </h2>

              <p className="text-[17px] leading-relaxed text-[#475569] mb-6">
                Kali Cabang Timur runs through Pancoran Mas, one of Depok's most flood-prone districts.
                It floods four times a year — not because of exceptional rainfall, but because uncollected
                solid waste blocks its drainage capacity.
              </p>
              
              <p className="text-[17px] leading-relaxed text-[#475569] mb-10">
                Depok generates 1,363 tonnes of waste daily. Less than one-third is formally collected.
                The rest washes into drainage channels with every shower.
              </p>

              <blockquote className="border-l-4 border-[#0D9762] pl-6 py-2 mb-12 relative group">
                <div className="relative mb-3">
                  <p className="text-[19px] md:text-[21px] font-medium italic text-[#11141B] leading-snug transition-opacity duration-300 group-hover:opacity-0">
                    "Rata-rata banjir terjadi akibat saluran yang tersumbat oleh sampah."
                  </p>
                  <p className="absolute top-0 left-0 w-full text-[19px] md:text-[21px] font-medium italic text-[#0D9762] leading-snug transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                    "Flooding occurs because drainage channels are blocked by waste."
                  </p>
                </div>
                <footer className="text-[14px] text-[#64748B] flex items-center flex-wrap gap-x-4 gap-y-2">
                  <span>— Citra Indah Yulianty, Head of DPUPR Depok, 4 March 2025</span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 group-hover:bg-[#E7F6EC] text-gray-500 group-hover:text-[#0D9762] rounded-md text-[11px] font-medium transition-colors cursor-pointer">
                    <Languages className="w-3.5 h-3.5" />
                    <span className="group-hover:hidden">Translate</span>
                    <span className="hidden group-hover:inline">Translated to English</span>
                  </div>
                </footer>
              </blockquote>

              {/* Stat grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-auto">
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-[#11141B] tracking-tight mb-1">1,363 t/day</span>
                  <span className="text-[14px] text-[#64748B] leading-snug">Depok daily waste (SIPSN 2024)</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-[#11141B] tracking-tight mb-1">&lt;⅓</span>
                  <span className="text-[14px] text-[#64748B] leading-snug">Formal collection rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-[#11141B] tracking-tight mb-1">112</span>
                  <span className="text-[14px] text-[#64748B] leading-snug">Illegal dump points (Bappenas 2024)</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-[#11141B] tracking-tight mb-1">Rp 2–3M</span>
                  <span className="text-[14px] text-[#64748B] leading-snug">Loss per household per flood</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:pt-6">
              <div className="aspect-[4/3] bg-[#EFECE6] rounded-2xl overflow-hidden relative reveal">
                <img src="/img1.png" alt="Waste in the kali" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] bg-[#EFECE6] rounded-2xl overflow-hidden relative reveal">
                <img src="/img2.png" alt="Flooding aftermath" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Causal Chain Diagram */}
          <div className="mb-24">
            <div className="overflow-x-auto pb-6 -mx-6 px-6 lg:mx-0 lg:px-0">
              <div className="min-w-[800px] flex items-center justify-between gap-4">
                {[
                  "Rain",
                  "Street waste mobilised",
                  "Drainage blocked",
                  "Flooding",
                  "603 families displaced"
                ].map((node, i, arr) => (
                  <div key={i} className="flex items-center gap-4 flex-1">
                    <div className="bg-white border border-gray-200 shadow-sm rounded-xl px-5 py-4 text-[13px] lg:text-[14px] font-semibold text-[#11141B] flex-1 text-center whitespace-nowrap">
                      {node}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="text-gray-300 shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-[13px] font-bold text-[#64748B] uppercase tracking-[0.1em] mt-2">
              Rain is the trigger. <span className="text-[#11141B]">Waste is the cause.</span>
            </p>
          </div>
        </div>

        {/* Climate Strip */}
        <div className="w-full bg-[#E7F6EC] py-16 md:py-20 border-y border-[#0D9762]/10">
          <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 md:mb-20">
              <div className="flex flex-col text-center">
                <span className="text-5xl md:text-6xl font-bold text-[#0D9762] tracking-tight mb-4">2.4×</span>
                <span className="text-[15px] text-[#0D9762]/80 font-medium">Extreme rainfall more likely vs 115 yrs ago<br className="hidden md:block"/> (Siswanto et al. 2015)</span>
              </div>
              <div className="flex flex-col text-center">
                <span className="text-5xl md:text-6xl font-bold text-[#0D9762] tracking-tight mb-4">1.6°C</span>
                <span className="text-[15px] text-[#0D9762]/80 font-medium">Jakarta temperature rise<br className="hidden md:block"/> since 1866</span>
              </div>
              <div className="flex flex-col text-center">
                <span className="text-5xl md:text-6xl font-bold text-[#0D9762] tracking-tight mb-4">377mm</span>
                <span className="text-[15px] text-[#0D9762]/80 font-medium">Largest single-day rainfall in<br className="hidden md:block"/> 135-year record — Jakarta, 1 Jan 2020<br className="hidden md:block"/>(Lubis et al. 2022)</span>
              </div>
            </div>
            <p className="text-center text-[24px] md:text-[28px] font-medium text-[#0D9762] leading-tight italic max-w-3xl mx-auto tracking-tight">
              "Climate change is not creating a new problem.<br className="hidden sm:block" /> It is accelerating an existing one."
            </p>
          </div>
        </div>
      </section>

      <section id="solution" className="py-24 md:py-32 border-b border-gray-200 bg-[#FAFAFA]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 mb-20 md:mb-24">
          {/* Section Label */}
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">
              The Solution
            </span>
          </div>

          <div className="max-w-[640px] mb-20">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B] mb-8">
              A Trap. A Loop.<br />
              <span className="text-[#0D9762]">A Community.</span>
            </h2>
            <p className="text-[18px] md:text-[19px] leading-relaxed text-[#475569]">
              Kali Guard is a bamboo-and-net structure installed across Kali Cabang Timur. 
              It intercepts floating waste before it reaches the downstream drainage junction. 
              Captured waste is sorted by paid community members. Recyclables are sold to 
              Depok's central waste bank. Revenue closes the loop — funding maintenance 
              and sorter pay without external grants.
            </p>
          </div>

          {/* 4-step grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-24 lg:mb-32">
            {[
              { num: "01", title: "Intercept", desc: "Bamboo frame and net spans the 4.8m channel. Captures floating waste 24/7. No power required. Works during monsoons and blackouts." },
              { num: "02", title: "Sort", desc: "Community sorters from Komunitas Ciliwung Depok separate recyclables at the adjacent station. Paid daily. No volunteer dependency." },
              { num: "03", title: "Monetise", desc: "Sorted recyclables sold to BSI Rumah Harum at Rp 6,000–9,000/kg. PET, HDPE, metals — all have published market rates." },
              { num: "04", title: "Sustain", desc: "Revenue covers maintenance and sorter pay. Net surplus from Month 2. No grants, no donations, no government budget required." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col relative group">
                <div className="absolute -top-10 -left-6 text-[100px] font-extrabold text-gray-200/40 -z-10 group-hover:text-gray-200/70 transition-colors duration-500 font-mono tracking-tighter leading-none pointer-events-none">
                  {step.num}
                </div>
                <div className="w-8 h-8 rounded-full bg-[#11141B] text-white flex items-center justify-center text-[13px] font-bold mb-6">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-[#11141B] mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#475569]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-[24px] md:text-[28px] font-medium text-[#11141B] leading-tight italic font-serif">
            "No electricity. No internet. No sensors.<br className="hidden sm:block" /> No server. No update required."
          </p>
        </div>

        {/* Full width photo */}
        <div className="w-full h-[50vh] md:h-[70vh] bg-[#EFECE6] relative mb-20 md:mb-24 reveal">
          <div className="photo-placeholder absolute inset-0 flex items-center justify-center text-[#64748B] text-[14px] font-mono border-y border-dashed border-gray-400 text-center px-4 bg-[#E5E1D8]">
            [PHOTO: SOL-01 — Kali Guard structure installed, wide shot, cinematic crop]
          </div>
        </div>

        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          {/* Two-column materials panel */}
          <div className="bg-[#EFECE6] rounded-3xl p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 border border-[#e5e1d8]">
            <div className="flex flex-col">
              <h3 className="text-[13px] font-bold tracking-[0.1em] text-[#64748B] uppercase mb-8 pb-4 border-b border-[#d8d3c7]">
                Structural Frame
              </h3>
              <ul className="space-y-5">
                {[
                  { label: "Species", value: "Dendrocalamus asper + Gigantochloa apus" },
                  { label: "Source", value: "Bogor, 30km from site" },
                  { label: "Tensile strength", value: "94–220 MPa" },
                  { label: "Sequesters", value: "27.79 Mg C/ha/yr" },
                  { label: "Service life", value: "5–7 yr treated, 10–15 yr anchors" },
                  { label: "End of life", value: "zero microplastics" }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-[#64748B] font-medium text-[14px] sm:w-[140px] shrink-0 leading-tight">{item.label}</span>
                    <span className="text-[#11141B] font-semibold text-[15px] leading-tight">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[13px] font-bold tracking-[0.1em] text-[#64748B] uppercase mb-8 pb-4 border-b border-[#d8d3c7]">
                Interception Mesh
              </h3>
              <ul className="space-y-5">
                {[
                  { label: "Material", value: "Polypropylene (PP)" },
                  { label: "Dimensions", value: "1.8m tall × 4.8m wide" },
                  { label: "Circular", value: "captured PP → propylene → new netting" },
                  { label: "Anti-theft", value: "zero scrap value" },
                  { label: "Anchoring", value: "buried anchors + MoUs + CCTV" }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-[#64748B] font-medium text-[14px] sm:w-[140px] shrink-0 leading-tight">{item.label}</span>
                    <span className="text-[#11141B] font-semibold text-[15px] leading-tight">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="model" className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          {/* Section Label */}
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">
              The Model
            </span>
          </div>

          <div className="mb-20 text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              Built to be self-sustaining.<br />
              <span className="text-[#0D9762]">Not grant-dependent.</span>
            </h2>
          </div>

          {/* PART A - SBMC Image */}
          <div className="mb-32">
            <div
              className="w-full cursor-pointer hover:opacity-90 transition-opacity reveal mb-6"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img src="/sbmc.png" alt="Social Business Model Canvas" className="w-full h-auto" />
            </div>
            <div className="text-center">
              <p className="text-[14px] text-[#64748B] mb-2 font-medium">
                Social Business Model Canvas — Kali Guard, Team Arkadia, 2026
              </p>
              <a
                href="/sbmc.png"
                download="SBMC_KaliGuard.png"
                className="text-[13px] font-bold text-[#0D9762] hover:text-[#0D9762]/80 transition-colors uppercase tracking-[0.05em] flex items-center justify-center gap-1 mx-auto group"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download SBMC
              </a>
            </div>
          </div>

          {/* PART B - Numbers grid */}
          <div className="mb-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {[
                { value: "$125", label: "Total pilot cost (materials)" },
                { value: "30 days", label: "Decision to first trap installed" },
                { value: "500 kg/mo", label: "Waste capture target Month 1" },
                { value: "Rp 3–4.5M", label: "Monthly revenue from recyclables" },
                { value: "Rp 500K", label: "Monthly operating cost" },
                { value: "Month 2", label: "Break-even point" }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300 transition-colors">
                  <span className="text-4xl lg:text-5xl font-bold text-[#11141B] tracking-tight mb-3">{stat.value}</span>
                  <span className="text-[15px] text-[#64748B] font-medium leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-[15px] text-[#64748B] italic max-w-[600px] mx-auto leading-relaxed">
              Revenue: 500 kg/month × Rp 6,000–9,000/kg (BSI Rumah Harum published rates, WWF Plastic Smart Cities 2023). Operating cost covers net replacement, inspection, and sorter compensation.
            </p>
          </div>

          {/* PART C - Budget table */}
          <div className="bg-[#EFECE6] rounded-3xl p-8 md:p-12 lg:p-16 border border-[#e5e1d8]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Left Column */}
              <div className="flex flex-col">
                <h3 className="text-[13px] font-bold tracking-[0.1em] text-[#64748B] uppercase mb-8 pb-4 border-b border-[#d8d3c7]">
                  CAPEX (Pilot Phase)
                </h3>
                <ul className="space-y-4 mb-6">
                  {[
                    { label: "Prototype (1–2 units)", value: "$700" },
                    { label: "Studies & standardisation", value: "$800" },
                    { label: "Administration & patent", value: "$500" },
                    { label: "3 Pilot installations", value: "$1,500" },
                    { label: "In-situ trials & testing", value: "$500" }
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between items-baseline gap-4">
                      <span className="text-[15px] font-medium text-[#475569] shrink-0">{item.label}</span>
                      <div className="border-b border-dotted border-gray-400 opacity-50 grow"></div>
                      <span className="text-[15px] font-semibold text-[#11141B] shrink-0 text-right">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-baseline pt-4 border-t border-[#11141B]">
                  <span className="text-[16px] font-bold text-[#11141B]">Total CAPEX</span>
                  <span className="text-[18px] font-extrabold text-[#11141B]">~$4,000</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col">
                <h3 className="text-[13px] font-bold tracking-[0.1em] text-[#64748B] uppercase mb-8 pb-4 border-b border-[#d8d3c7]">
                  OPEX (Per Month)
                </h3>
                <ul className="space-y-4 mb-6">
                  {[
                    { label: "Net replacement (amortised)", value: "Rp 150,000" },
                    { label: "Structural inspection", value: "Rp 100,000" },
                    { label: "Sorter compensation", value: "Rp 250,000" }
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between items-baseline gap-4">
                      <span className="text-[15px] font-medium text-[#475569] shrink-0">{item.label}</span>
                      <div className="border-b border-dotted border-gray-400 opacity-50 grow"></div>
                      <span className="text-[15px] font-semibold text-[#11141B] shrink-0 text-right">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#11141B] flex justify-between items-baseline mt-auto">
                  <span className="text-[16px] font-bold text-[#11141B]">Total OPEX</span>
                  <span className="text-[18px] font-extrabold text-[#11141B]">~Rp 500K<span className="text-[14px] font-bold text-[#64748B]">/mo</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 mb-20 md:mb-24">
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">
              Impact
            </span>
          </div>

          <div className="mb-20 text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              One trap.<br />
              <span className="text-[#0D9762]">Three kinds of change.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Economic",
                subtitle: "Income, not charity.",
                bullets: [
                  "Community sorters: Rp 3–4.5M/month revenue pool",
                  "603 households: Rp 8–12M/year in avoided losses",
                  "Bogor bamboo suppliers: recurring orders",
                  "Municipality: reduced emergency response cost",
                  "Children regain 2–3 school days per flood event"
                ]
              },
              {
                title: "Ecological",
                subtitle: "From river to ocean — stopped here.",
                bullets: [
                  "205–308 t/year plastic before Jakarta Bay",
                  "Zero operational carbon — no electricity",
                  "Net carbon negative vs steel alternatives",
                  "Zero microplastics from trap degradation",
                  "Riverbank erosion protection via bamboo roots"
                ]
              },
              {
                title: "Societal",
                subtitle: "Families who stay.",
                bullets: [
                  "No displacement → community fabric preserved",
                  "Warung owners keep inventory through flood season",
                  "Stagnant water eliminated → dengue risk reduced",
                  "Bottom-up governance, no ministerial referral",
                  "Replicable: Mumbai's 52 nallah outfalls, Depok's 38 remaining flood points"
                ]
              }
            ].map((panel, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow">
                <div className="bg-[#0D9762] px-8 py-6 text-white border-b border-[#0D9762]">
                  <h3 className="text-2xl font-bold tracking-tight mb-1">{panel.title}</h3>
                  <p className="text-[15px] font-medium text-white/80">{panel.subtitle}</p>
                </div>
                <div className="p-8 grow">
                  <ul className="space-y-4">
                    {panel.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4 text-[15px] text-[#475569] leading-relaxed">
                        <span className="text-[#0D9762] font-bold text-[18px] shrink-0 leading-none h-4 flex items-center mt-[2px]">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[50vh] md:h-[60vh] bg-[#EFECE6] relative mb-24 md:mb-0 reveal">
          <div className="photo-placeholder absolute inset-0 flex items-center justify-center text-[#64748B] text-[14px] font-mono border-y border-dashed border-gray-400 text-center px-4 bg-[#E5E1D8]">
            [PHOTO: IMP-01 — Community near Kali Cabang Timur]
          </div>
        </div>
      </section>

      <section id="science" className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          {/* Section Label */}
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">
              The Science
            </span>
          </div>

          <div className="mb-20 text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              Every number<br />
              <span className="text-[#0D9762]">has a source.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            {/* SUBSECTION 1 — Climate Evidence */}
            <div>
              <p className="text-[20px] font-medium italic text-[#11141B] mb-10 pb-4 border-b border-gray-200">
                "Kali Guard is sized for the climate of 2035, not 2005."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { source: "SISWANTO ET AL., 2015 · BAMS", text: "Extreme rainfall events in Jakarta are 2.4× more likely today than 115 years ago." },
                  { source: "SISWANTO ET AL., 2022 · IJC", text: "Jakarta surface temperature rose 1.6°C since 1866 — 1.4× faster than the global average." },
                  { source: "LUBIS ET AL., 2022 · GRL", text: "1 January 2020: 377mm in 24 hours — largest in 135-year record; triggered Jabodetabek disaster." },
                  { source: "KURNIADI ET AL., 2024 · CMIP6", text: "Wet-season extreme rainfall indices increase significantly through 2050 across Java." },
                  { source: "IPCC AR6, CHAPTER 10 · HIGH CONFIDENCE", text: "Monsoon precipitation will increase across Southeast Asia." }
                ].map((cite, i) => (
                  <div key={i} className="bg-[#EFECE6] border-l-[3px] border-[#0D9762] p-6 rounded-r-xl">
                    <div className="text-[11px] font-bold tracking-[0.1em] text-[#0D9762] uppercase mb-3">
                      {cite.source}
                    </div>
                    <p className="text-[15px] font-medium text-[#11141B] leading-relaxed">
                      {cite.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SUBSECTION 2 — Bamboo Engineering */}
            <div>
              <p className="text-[20px] font-medium italic text-[#11141B] mb-10 pb-4 border-b border-gray-200">
                "Why bamboo outperforms steel for this specific application."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { val: "94–220 MPa", label: "Tensile strength, comparable to steel" },
                  { val: "~0 t CO₂/t", label: "Embodied carbon vs 1.85 for steel" },
                  { val: "27.79 Mg C", label: "Sequestered per hectare per year" },
                  { val: "5–7 years", label: "Service life (boron-treated frame)" },
                  { val: "0 IDR", label: "Scrap value. Cannot be stolen." },
                  { val: "Zero", label: "Microplastics at end of life" },
                ].map((spec, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-bold text-[#11141B] tracking-tight mb-2">{spec.val}</span>
                    <span className="text-[15px] text-[#64748B] leading-snug">{spec.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SUBSECTION 3 — Proven Methodology */}
            <div>
               <p className="text-[20px] font-medium italic text-[#11141B] mb-10 pb-4 border-b border-gray-200">
                "Two precedents operating at scale in the same geography."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-gray-300 transition-colors">
                  <h4 className="text-xl font-bold text-[#11141B] mb-6">Sungai Watch · Indonesia</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                       <span className="text-[#0D9762] mt-1"><Check className="w-5 h-5" /></span>
                       <span className="text-[15px] text-[#475569] font-medium">3M+ kg intercepted</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="text-[#0D9762] mt-1"><Check className="w-5 h-5" /></span>
                       <span className="text-[15px] text-[#475569] font-medium">350+ bamboo barriers installed</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="text-[#0D9762] mt-1"><Check className="w-5 h-5" /></span>
                       <span className="text-[15px] text-[#475569] font-medium">Same hydraulic approach, different scale.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-gray-300 transition-colors">
                  <h4 className="text-xl font-bold text-[#11141B] mb-6">Plastic Fischer · India + Indonesia</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                       <span className="text-[#0D9762] mt-1"><Check className="w-5 h-5" /></span>
                       <span className="text-[15px] text-[#475569] font-medium">1.9M+ kg intercepted, 2024 Impact Report</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="text-[#0D9762] mt-1"><Check className="w-5 h-5" /></span>
                       <span className="text-[15px] text-[#475569] font-medium">Community-operated revenue model via recyclables.</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="text-[#0D9762] mt-1"><Check className="w-5 h-5" /></span>
                       <span className="text-[15px] text-[#475569] font-medium">Not NGO-dependent.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 mb-20 md:mb-24">
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">
              Team Arkadia
            </span>
          </div>

          <div className="mb-20 text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              We didn't research<br />
              <span className="text-[#0D9762]">a problem. We lived one.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/arnav.png",
                quote: "The strongest solutions to climate adaptation are often the ones that don't look like technology at all."
              },
              {
                img: "/adiro.png",
                quote: "I grew up beside Kali Cabang Timur. I watched the same homes flood every year — not from storms, but from trash. This project isn't research. It's home."
              },
              {
                img: "/anushree.png",
                quote: "Kali Guard works because it respects the community's existing knowledge — it doesn't replace it with something imported."
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <img src={member.img} alt="" className="w-full h-auto rounded-2xl" />
                </div>
                <blockquote className="border-t border-gray-100 pt-6 mt-auto">
                   <p className="text-[15px] font-medium italic text-[#475569] leading-relaxed">"{member.quote}"</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section id="roadmap" className="py-24 md:py-32 bg-white">
        <div className="max-w-[800px] w-full mx-auto px-6 md:px-12">
          {/* Section Label */}
          <div className="mb-12 text-center md:text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">
              Roadmap
            </span>
          </div>

          <div className="mb-24 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              From one trap<br />
              <span className="text-[#0D9762]">to a city-wide network.</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-[#E7F6EC] ml-3 md:ml-6 pl-8 md:pl-12 space-y-16">
            {[
              {
                time: "Month 1 · 30 Days",
                title: "First trap installed",
                body: "Prototype deployed at Kali Cabang Timur, Jalan Dewi Sartika. Community sorters onboarded. First BSI Rumah Harum recyclable handoff."
              },
              {
                time: "Month 2",
                title: "Self-sustaining",
                body: "Revenue covers full operating cost of Rp 500K/mo. No external funding required from this point."
              },
              {
                time: "Month 6",
                title: "Validated",
                body: "500+ kg/month captured. Flood documentation published. Sorter income on record. Pilots 2 and 3 deployed."
              },
              {
                time: "Year 1",
                title: "Blueprint published",
                body: "DPUPR Depok replication discussion initiated across 38 remaining flood points."
              },
              {
                time: "Year 3–5",
                title: "City-wide network",
                body: "15 rivers, 38 flood points across Depok. Municipal service contract. International pilot: Mumbai's 52 nallah outfalls."
              }
            ].map((node, i) => (
              <div key={i} className="relative group">
                {/* Timeline dot */}
                <div className="absolute w-6 h-6 bg-white border-[4px] border-[#0D9762] rounded-full -left-[45px] md:-left-[61px] top-1 group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#64748B] tracking-[0.1em] uppercase mb-2">
                    {node.time}
                  </span>
                  <h3 className="text-2xl font-bold text-[#11141B] mb-3">
                    {node.title}
                  </h3>
                  <p className="text-[16px] text-[#475569] leading-relaxed max-w-[500px]">
                    {node.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2D5016] text-white pt-16 pb-6">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col reveal text-center md:text-left">
              <h2 className="text-3xl font-serif font-bold mb-2">KALI GUARD</h2>
              <p className="text-white/60 text-[14px]">Bamboo · Community · Clean Rivers · Resilient Depok</p>
            </div>
            <div className="flex items-center md:justify-center reveal">
              <p className="text-[18px] sm:text-[20px] font-serif italic text-white leading-relaxed text-center text-white/90">
                "Cleaner Rivers.<br />
                Resilient Communities.<br />
                Sustainable Future."
              </p>
            </div>
            <div className="flex flex-col md:items-end text-center md:text-right reveal">
              <h3 className="font-bold mb-3 text-[16px] tracking-tight">Team Arkadia</h3>
              <ul className="text-white/80 space-y-1 mb-6 text-[14px]">
                <li>Arnav Ambre</li>
                <li>Adiro Gahana</li>
                <li>Anushree Kulkarni</li>
              </ul>
              <div className="text-[13px] text-white/50 space-y-1">
                <p>NYU Tandon School of Engineering</p>
                <p>EGIS Team Up for Climate 2026</p>
                <p>Phase 2 Finalist · June 11 Jury Presentation</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/40 reveal">
            <div className="text-center md:text-left">6°22'42"S 106°49'18"E · Kali Cabang Timur, Pancoran Mas, Depok</div>
            <div className="text-center md:text-right">"Built to last. Funded by what it collects."</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
