/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Box, Check, LineChart, Languages, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import SiteNavbar from "./components/SiteNavbar";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const wasteChartData = [
  { name: "Aug", current: 520, previous: 410 },
  { name: "Sep", current: 580, previous: 480 },
  { name: "Oct", current: 650, previous: 450 },
  { name: "Nov", current: 730, previous: 520 },
  { name: "Dec", current: 850, previous: 550 },
];


function Dashboard() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const d = t.dash;

  const loopSteps = [
    { step: "01", label: d.loop_step1, value: "1,847 kg" },
    { step: "02", label: d.loop_step2, value: "1,243 kg" },
    { step: "03", label: d.loop_step3, value: "Rp 4.85M" },
    { step: "04", label: d.loop_step4, value: "3 months" },
  ];

  const projItems = [
    { label: d.proj_waste,     value: "~500 kg/mo" },
    { label: d.proj_revenue,   value: "Rp 3–4.5M/mo" },
    { label: d.proj_breakeven, value: "Month 2" },
    { label: d.proj_plastic,   value: "~3,000 kg" },
    { label: d.proj_sorter,    value: "Rp 18–27M" },
    { label: d.proj_flood,     value: "4 → 0–1" },
    { label: d.proj_traps,     value: "3 pilots" },
  ];

  return (
    <div className="h-full bg-gray-50/50 flex flex-col overflow-y-auto md:overflow-hidden pt-16 md:pt-20">
      <main className="flex-1 px-4 md:px-8 pt-0 pb-4 md:px-12 md:pb-6 max-w-[1600px] w-full mx-auto flex flex-col shrink-0 md:min-h-0">
        <header className="mb-2 shrink-0 flex items-start justify-between">
          <div>
            <h1 className="text-2xl md:text-[26px] font-semibold text-[#11141B] tracking-tight mb-1">
              {d.title}
            </h1>
            <p className="text-[13px] md:text-[14px] text-[#11141B]/70 tracking-wide">
              Kali Guard{" "}
              <span className="font-medium text-[#11141B]">{d.subtitle_track}</span>{" "}
              {d.subtitle_realtime}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="bg-white backdrop-blur-xl border border-gray-200 px-3.5 py-2 rounded-full text-[14px] flex items-center gap-1.5 shadow-sm">
              <span className="text-[#475569] font-bold tracking-tight">{d.protected}</span>
              <span className="text-[#0e633a] font-bold tracking-tight">603 families</span>
            </div>
          </div>
        </header>

        <div className="flex-none md:flex-1 grid grid-cols-1 md:grid-cols-3 auto-rows-min md:auto-rows-auto md:grid-rows-2 gap-4 md:gap-3 md:min-h-0 pb-6 md:pb-2">
          {/* Card 1: Overview */}
          <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-4 lg:p-5 shadow-sm flex flex-col min-h-[220px] md:h-full md:min-h-0 overflow-hidden">
            <div className="mb-2 lg:mb-3 shrink-0">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-[#64748B] uppercase">
                {d.card1_label}
              </span>
            </div>
            <p className="text-[12px] lg:text-[13px] text-[#11141B]/80 leading-relaxed mb-3 shrink-0">
              {d.card1_body}
            </p>
            <div className="flex-1 min-h-[60px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d106.81802997116428!3d-6.411317412245444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '180px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Site Location Map"
              />
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
                  {d.card2_label}
                </span>
              </div>
              <div className="flex items-center bg-white backdrop-blur-md border border-gray-200 shadow-sm px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full text-[11px] lg:text-[12px] font-semibold text-[#11141B]">
                {d.trap1}
              </div>
            </div>

            <div className="flex-1 flex gap-2 lg:gap-3 min-h-0">
              <div className="flex-1 min-h-0 relative -ml-4 -mb-1">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={wasteChartData} margin={{ top: 35, right: 10, left: 10, bottom: 0 }}>
                    <defs>
                      <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4">
                        <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" style={{ stroke: "#0D9762", strokeWidth: 1, opacity: 0.3 }} />
                      </pattern>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={false} stroke="#e8eaef" />
                    <ReferenceLine y={500} stroke="#D08226" strokeDasharray="4 4" label={{ value: "500 kg", fill: "#D08226", fontSize: 10, position: "insideBottomLeft", offset: 5 }} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#64748B" }} dy={8} />
                    <Area type="linear" dataKey="current" stroke="#0D9762" strokeWidth={2} fill="url(#hatch)"
                      // @ts-ignore
                      dot={(props: any) => {
                        const { cx, cy, payload } = props;
                        if (payload.name === "Oct") {
                          return (
                            <g key="dot">
                              <line x1={cx} y1={0} x2={cx} y2={200} stroke="#0D9762" strokeWidth={1.5} />
                              <rect x={cx - 24} y={cy - 28} width={48} height={20} rx={4} fill="#11141B" />
                              <text x={cx} y={cy - 14} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">650 kg</text>
                              <circle cx={cx} cy={cy} r={4} fill="white" stroke="#0D9762" strokeWidth={2} />
                            </g>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area type="linear" dataKey="previous" stroke="#64748B" strokeWidth={1.5} strokeDasharray="3 3" fill="none" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="w-[120px] lg:w-[140px] flex flex-col gap-2 shrink-0">
                <div className="bg-[#E7F6EC]/60 backdrop-blur-xl border border-white/60 rounded-xl lg:rounded-2xl p-2.5 lg:p-3 flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-1.5 text-[#0D9762]">
                    <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full bg-[#0D9762] text-white flex items-center justify-center">
                      <Box className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                    </div>
                    <span className="text-[10px] lg:text-[11px] font-medium opacity-80">{d.total_captured}</span>
                  </div>
                  <div className="mt-1.5">
                    <span className="text-[#0D9762] font-bold text-[15px] lg:text-[18px] tracking-tight">3,330 kg</span>
                  </div>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-xl lg:rounded-2xl p-2.5 lg:p-3 flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-1.5 text-[#64748B]">
                    <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full border-2 border-current flex items-center justify-center -ml-0.5">
                      <Box className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                    </div>
                    <span className="text-[10px] lg:text-[11px] font-medium">{d.highest_month}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-[#11141B] font-bold text-[15px] lg:text-[18px] tracking-tight">850 kg</span>
                    <span className="text-[#11141B] text-[10px] lg:text-[11px] font-medium">{d.dec}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Split — Self-Sustaining Loop + Flood-Free Streak */}
          <div className="flex flex-col gap-2 md:gap-3 min-h-0 h-full">
            <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-3 lg:p-4 shadow-sm flex flex-col flex-1 min-h-0 overflow-hidden">
              <div className="flex items-center justify-between mb-1.5 shrink-0">
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] text-[#64748B] uppercase">{d.loop_label}</span>
                <span className="bg-[#E7F6EC] border border-[#0D9762]/30 text-[#0D9762] px-2 py-0.5 rounded-full flex items-center justify-center text-[9px] font-bold uppercase tracking-wider">{d.loop_active}</span>
              </div>
              <div className="flex-1 flex flex-col justify-between relative pl-3 mt-1 min-h-0">
                <div className="absolute left-0 top-1 bottom-1 w-[2.5px] flex flex-col justify-between">
                  <div className="w-full h-[22%] bg-[#0D9762] rounded-full"></div>
                  <div className="w-full h-[22%] bg-[#0D9762] rounded-full"></div>
                  <div className="w-full h-[22%] bg-[#0D9762] rounded-full"></div>
                  <div className="w-full h-[22%] bg-[#0D9762] rounded-full"></div>
                </div>
                {loopSteps.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-[11px] lg:text-[12px] min-h-0">
                    <div className="flex gap-2 items-center">
                      <span className="font-medium text-[#64748B]/50 tracking-widest font-mono">{item.step}</span>
                      <span className="font-medium text-[#11141B]">{item.label}</span>
                    </div>
                    <span className="font-semibold text-[#0D9762]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-3 lg:p-4 shadow-sm flex flex-col flex-1 min-h-0 overflow-hidden justify-between">
              <div className="flex flex-col shrink-0">
                <div className="mb-1.5">
                  <span className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] text-[#64748B] uppercase">{d.flood_streak}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[32px] lg:text-[38px] font-bold text-[#11141B] leading-none tracking-tight">47</span>
                  <span className="text-[11px] lg:text-[12px] text-[#64748B] leading-[1.15]">
                    {d.days_without}<br />{d.flood_event}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between shrink-0 pb-0.5">
                <div className="flex items-center gap-2">
                  {[...Array(4)].map((_, i) => <div key={i} className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#EF4444]"></div>)}
                  {[...Array(4)].map((_, i) => <div key={i} className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#0D9762]"></div>)}
                </div>
                <div className="flex items-center gap-3 text-[10px] lg:text-[11px] text-[#64748B]">
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#EF4444]"></div>{d.legend_flood}</div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#0D9762]"></div>{d.legend_safe}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Revenue & Scale */}
          <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-3 lg:p-4 shadow-sm flex flex-col min-h-[240px] md:h-full md:min-h-0 overflow-hidden">
            <div className="mb-2 lg:mb-3 shrink-0">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-[#64748B] uppercase">{d.card4_label}</span>
            </div>
            <div className="flex flex-col shrink-0 mb-3 lg:mb-4">
              <span className="text-[32px] lg:text-[40px] font-bold text-[#11141B] leading-none tracking-tight mb-1.5">Rp 4.85M</span>
              <span className="text-[11.5px] lg:text-[12.5px] text-[#11141B]/80 font-medium tracking-wide">{d.card4_sub}</span>
            </div>
            <div className="flex flex-col flex-1 min-h-0">
              <div className="flex flex-col flex-1 justify-between pb-1 min-h-0">
                {[
                  { title: d.flood_points_title, sub: d.flood_points_sub, value: "1/39" },
                  { title: d.sorter_income_title, sub: d.sorter_income_sub, value: "Rp 14.5M" },
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center py-1.5 lg:py-2 ${idx !== 0 ? "border-t border-[#e8eaef]" : ""}`}>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-[12px] lg:text-[13px] text-[#11141B]">{item.title}</span>
                      <span className="text-[10.5px] lg:text-[11.5px] text-[#64748B] leading-none">{item.sub}</span>
                    </div>
                    <span className="font-bold text-[12.5px] lg:text-[13.5px] text-[#11141B]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5: Environmental Impact */}
          <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-4 lg:p-5 shadow-sm flex flex-col min-h-[250px] md:h-full md:min-h-0 overflow-hidden">
            <div className="mb-2 lg:mb-4 shrink-0">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-[#64748B] uppercase">{d.env_label}</span>
            </div>
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-2 lg:gap-y-3 min-h-0">
              <div className="flex flex-col justify-center min-h-0">
                <span className="text-[20px] lg:text-[26px] font-bold text-[#0D9762] mb-0.5 leading-tight tracking-tight shrink-0">1,243 kg</span>
                <span className="text-[11px] lg:text-[12.5px] text-[#64748B] leading-snug lg:pr-2">{d.plastic_label}</span>
              </div>
              <div className="flex flex-col justify-center min-h-0">
                <span className="text-[20px] lg:text-[26px] font-bold text-[#0D9762] mb-0.5 leading-tight tracking-tight shrink-0">2,847 kg</span>
                <span className="text-[11px] lg:text-[12.5px] text-[#64748B] leading-snug lg:pr-2">{d.co2_label}</span>
              </div>
              <div className="flex flex-col justify-center min-h-0">
                <Check className="w-6 h-6 lg:w-7 lg:h-7 text-[#0D9762] mb-1 stroke-[3] shrink-0" />
                <span className="text-[11px] lg:text-[12.5px] text-[#64748B] leading-snug lg:pr-2">
                  {d.stagnant_line1}<br />{d.stagnant_line2}
                </span>
              </div>
              <div className="flex flex-col justify-center min-h-0">
                <span className="text-[20px] lg:text-[26px] font-bold text-[#0D9762] mb-0.5 leading-tight tracking-tight shrink-0">0 kg</span>
                <span className="text-[11px] lg:text-[12.5px] text-[#64748B] leading-snug lg:pr-2">{d.carbon_label}</span>
              </div>
            </div>
          </div>

          {/* Card 6: 6-Month Projections */}
          <div className="bg-white border border-gray-200 rounded-[1.6rem] lg:rounded-[1.8rem] p-3 lg:p-4 shadow-sm flex flex-col min-h-[280px] md:h-full md:min-h-0 overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-[#D08226] uppercase">{d.proj_label}</span>
              <span className="bg-[#FFF5E8] border border-[#D08226]/30 text-[#D08226] px-2 py-0.5 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-wider shadow-sm">{d.proj_targets}</span>
            </div>
            <div className="flex flex-col flex-1 min-h-0">
              <div className="flex flex-col flex-1 justify-between pb-1.5 min-h-0">
                {projItems.map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center text-[11.5px] lg:text-[12.5px] ${idx !== 0 ? "border-t border-[#e8eaef] pt-1 lg:pt-1.5" : ""}`}>
                    <span className="font-medium text-[#11141B]">{item.label}</span>
                    <span className="font-bold text-[#D08226]">{item.value}</span>
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
  const [isTranslated, setIsTranslated] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const timeDisplayRef = useRef<HTMLSpanElement>(null);

  const { lang } = useLanguage();
  const t = translations[lang];

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); setIsVideoPlaying(true); }
    else { video.pause(); setIsVideoPlaying(false); }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const val = parseFloat(e.target.value);
    const video = videoRef.current;
    if (!video) return;
    video.volume = val;
    setVolume(val);
    if (val === 0) { video.muted = true; setIsMuted(true); }
    else if (isMuted) { video.muted = false; setIsMuted(false); }
  };

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const time = ratio * videoDuration;
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      if (progressFillRef.current && videoDuration) progressFillRef.current.style.width = `${ratio * 100}%`;
      if (timeDisplayRef.current) timeDisplayRef.current.textContent = `${formatTime(time)} / ${formatTime(videoDuration)}`;
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement) videoContainerRef.current?.requestFullscreen();
    else document.exitFullscreen();
  };

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  useEffect(() => {
    document.querySelectorAll("section").forEach((section) => {
      if (section.id !== "dashboard") {
        const blocks = section.querySelectorAll("h2, p, blockquote, ul, .grid > div, .relative, .bg-\\[\\#EFECE6\\], .border-l-\\[3px\\], .bg-white");
        blocks.forEach((block) => block.classList.add("reveal"));
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
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

  // Solution steps
  const solutionSteps = [
    { num: "01", title: t.solution.step1_title, desc: t.solution.step1_desc },
    { num: "02", title: t.solution.step2_title, desc: t.solution.step2_desc },
    { num: "03", title: t.solution.step3_title, desc: t.solution.step3_desc },
    { num: "04", title: t.solution.step4_title, desc: t.solution.step4_desc },
  ];

  // Structural Frame specs
  const frameSpecs = [
    { label: t.solution.frame_species, value: "Dendrocalamus asper + Gigantochloa apus" },
    { label: t.solution.frame_source,  value: "Bogor, 30km from site" },
    { label: t.solution.frame_tensile, value: "94–220 MPa" },
    { label: t.solution.frame_sequesters, value: "27.79 Mg C/ha/yr" },
    { label: t.solution.frame_life,    value: "5–7 yr treated, 10–15 yr anchors" },
    { label: t.solution.frame_eol,     value: "zero microplastics" },
  ];

  // Interception Mesh specs
  const meshSpecs = [
    { label: t.solution.mesh_material,   value: "Polypropylene (PP)" },
    { label: t.solution.mesh_dimensions, value: "1.8m tall × 4.8m wide" },
    { label: t.solution.mesh_circular,   value: "captured PP → propylene → new netting" },
    { label: t.solution.mesh_antitheft,  value: "zero scrap value" },
    { label: t.solution.mesh_anchoring,  value: "buried anchors + MoUs + CCTV" },
  ];

  // Model stats
  const modelStats = [
    { value: "$125",       label: t.model.stat1_label },
    { value: "30 days",    label: t.model.stat2_label },
    { value: "500 kg/mo",  label: t.model.stat3_label },
    { value: "Rp 3–4.5M", label: t.model.stat4_label },
    { value: "Rp 500K",   label: t.model.stat5_label },
    { value: "Month 2",   label: t.model.stat6_label },
  ];

  // CAPEX items
  const capexItems = [
    { label: t.model.capex1, value: "$700" },
    { label: t.model.capex2, value: "$800" },
    { label: t.model.capex3, value: "$500" },
    { label: t.model.capex4, value: "$1,500" },
    { label: t.model.capex5, value: "$500" },
  ];

  // OPEX items
  const opexItems = [
    { label: t.model.opex1, value: "Rp 150,000" },
    { label: t.model.opex2, value: "Rp 100,000" },
    { label: t.model.opex3, value: "Rp 250,000" },
  ];

  // Impact panels
  const impactPanels = [
    { title: t.impact.eco_title,  subtitle: t.impact.eco_sub,  bullets: t.impact.eco_bullets },
    { title: t.impact.ecol_title, subtitle: t.impact.ecol_sub, bullets: t.impact.ecol_bullets },
    { title: t.impact.soc_title,  subtitle: t.impact.soc_sub,  bullets: t.impact.soc_bullets },
  ];

  // Science citations
  const citations = [
    { source: "SISWANTO ET AL., 2015 · BAMS", text: t.science.cite1 },
    { source: "SISWANTO ET AL., 2022 · IJC",  text: t.science.cite2 },
    { source: "LUBIS ET AL., 2022 · GRL",     text: t.science.cite3 },
    { source: "KURNIADI ET AL., 2024 · CMIP6", text: t.science.cite4 },
    { source: "IPCC AR6, CHAPTER 10 · HIGH CONFIDENCE", text: t.science.cite5 },
  ];

  // Bamboo specs
  const bambooSpecs = [
    { val: "94–220 MPa",  label: t.science.bamboo1 },
    { val: "~0 t CO₂/t", label: t.science.bamboo2 },
    { val: "27.79 Mg C", label: t.science.bamboo3 },
    { val: "5–7 years",  label: t.science.bamboo4 },
    { val: "0 IDR",      label: t.science.bamboo5 },
    { val: "Zero",       label: t.science.bamboo6 },
  ];

  // Team members
  const teamMembers = [
    { img: "/arnav.png",   quote: t.team.quote1 },
    { img: "/adiro.png",   quote: t.team.quote2 },
    { img: "/anushree.png", quote: t.team.quote3 },
  ];

  // Roadmap nodes
  const roadmapNodes = [
    { time: t.roadmap.node1_time, title: t.roadmap.node1_title, body: t.roadmap.node1_body },
    { time: t.roadmap.node2_time, title: t.roadmap.node2_title, body: t.roadmap.node2_body },
    { time: t.roadmap.node3_time, title: t.roadmap.node3_title, body: t.roadmap.node3_body },
    { time: t.roadmap.node4_time, title: t.roadmap.node4_title, body: t.roadmap.node4_body },
    { time: t.roadmap.node5_time, title: t.roadmap.node5_title, body: t.roadmap.node5_body },
  ];

  // Causal chain nodes
  const chainNodes = [
    t.problem.chain1, t.problem.chain2, t.problem.chain3,
    t.problem.chain4, t.problem.chain5,
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <SiteNavbar />

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative w-full max-w-6xl aspect-[21/9] bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img src="/sbmc.png" alt="Social Business Model Canvas" className="absolute inset-0 w-full h-full object-contain" />
          </div>
        </div>
      )}

      {/* Hero / Dashboard */}
      <section id="dashboard" className="w-full h-screen relative pt-0">
        <Dashboard />
      </section>

      {/* ── PROBLEM ── */}
      <section id="problem" className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">{t.problem.label}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
            <div className="lg:col-span-7 flex flex-col pt-2">
              <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B] mb-10">
                {t.problem.h2_line1}<br />
                {t.problem.h2_line2}<br />
                <span className="text-[#0D9762]">{t.problem.h2_line3}</span>
              </h2>

              <p className="text-[17px] leading-relaxed text-[#475569] mb-6">{t.problem.p1}</p>
              <p className="text-[17px] leading-relaxed text-[#475569] mb-10">{t.problem.p2}</p>

              <blockquote className="border-l-4 border-[#0D9762] pl-6 py-2 mb-12 relative">
                <div className="relative mb-3" style={{ minHeight: "3.5rem" }}>
                  <p className={`text-[19px] md:text-[21px] font-medium italic text-[#11141B] leading-snug transition-opacity duration-300 ${isTranslated ? "opacity-0" : "opacity-100"}`}>
                    "Rata-rata banjir terjadi akibat saluran yang tersumbat oleh sampah."
                  </p>
                  <p className={`absolute top-0 left-0 w-full text-[19px] md:text-[21px] font-medium italic text-[#0D9762] leading-snug transition-opacity duration-300 pointer-events-none ${isTranslated ? "opacity-100" : "opacity-0"}`}>
                    {t.problem.quote_translated_text}
                  </p>
                </div>
                <footer className="text-[14px] text-[#64748B] flex items-center flex-wrap gap-x-4 gap-y-2">
                  <span>— Citra Indah Yulianty, Head of DPUPR Depok, 4 March 2025</span>
                  <button
                    onClick={() => setIsTranslated(!isTranslated)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${isTranslated ? "bg-[#E7F6EC] text-[#0D9762]" : "bg-gray-100 text-gray-500 hover:bg-[#E7F6EC] hover:text-[#0D9762]"}`}
                  >
                    <Languages className="w-3.5 h-3.5" />
                    <span>{isTranslated ? t.problem.quote_translated : t.problem.quote_translate}</span>
                  </button>
                </footer>
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-auto">
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-[#11141B] tracking-tight mb-1">1,363 t/day</span>
                  <span className="text-[14px] text-[#64748B] leading-snug">{t.problem.stat1_label}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-[#11141B] tracking-tight mb-1">&lt;⅓</span>
                  <span className="text-[14px] text-[#64748B] leading-snug">{t.problem.stat2_label}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-[#11141B] tracking-tight mb-1">112</span>
                  <span className="text-[14px] text-[#64748B] leading-snug">{t.problem.stat3_label}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-[#11141B] tracking-tight mb-1">Rp 2–3M</span>
                  <span className="text-[14px] text-[#64748B] leading-snug">{t.problem.stat4_label}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 lg:pt-6">
              <div className="aspect-[4/3] bg-[#EFECE6] rounded-2xl overflow-hidden relative reveal">
                <img src="/img1.png" alt="Waste in the kali" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] bg-[#EFECE6] rounded-2xl overflow-hidden relative reveal">
                <img src="/img2.png" alt="Flooding aftermath" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Causal chain */}
          <div className="mb-24">
            <div className="overflow-x-auto pb-6 -mx-6 px-6 lg:mx-0 lg:px-0">
              <div className="min-w-[800px] flex items-center justify-between gap-4">
                {chainNodes.map((node, i, arr) => (
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
              {t.problem.chain_trigger} <span className="text-[#11141B]">{t.problem.chain_cause}</span>
            </p>
          </div>
        </div>

        {/* Climate Strip */}
        <div className="w-full bg-[#E7F6EC] py-16 md:py-20 border-y border-[#0D9762]/10">
          <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 md:mb-20">
              <div className="flex flex-col text-center">
                <span className="text-5xl md:text-6xl font-bold text-[#0D9762] tracking-tight mb-4">2.4×</span>
                <span className="text-[15px] text-[#0D9762]/80 font-medium">{t.problem.climate1}</span>
              </div>
              <div className="flex flex-col text-center">
                <span className="text-5xl md:text-6xl font-bold text-[#0D9762] tracking-tight mb-4">1.6°C</span>
                <span className="text-[15px] text-[#0D9762]/80 font-medium">{t.problem.climate2}</span>
              </div>
              <div className="flex flex-col text-center">
                <span className="text-5xl md:text-6xl font-bold text-[#0D9762] tracking-tight mb-4">377mm</span>
                <span className="text-[15px] text-[#0D9762]/80 font-medium">{t.problem.climate3}</span>
              </div>
            </div>
            <p className="text-center text-[24px] md:text-[28px] font-medium text-[#0D9762] leading-tight italic max-w-3xl mx-auto tracking-tight">
              {t.problem.climate_quote}
            </p>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution" className="py-24 md:py-32 border-b border-gray-200 bg-[#FAFAFA]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 mb-20 md:mb-24">
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">{t.solution.label}</span>
          </div>

          <div className="max-w-[640px] mb-20">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B] mb-8">
              {t.solution.h2_line1}<br />
              <span className="text-[#0D9762]">{t.solution.h2_line2}</span>
            </h2>
            <p className="text-[18px] md:text-[19px] leading-relaxed text-[#475569]">{t.solution.intro}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-24 lg:mb-32">
            {solutionSteps.map((step, i) => (
              <div key={i} className="flex flex-col relative group">
                <div className="absolute -top-10 -left-6 text-[100px] font-extrabold text-gray-200/40 -z-10 group-hover:text-gray-200/70 transition-colors duration-500 font-mono tracking-tighter leading-none pointer-events-none">
                  {step.num}
                </div>
                <div className="w-8 h-8 rounded-full bg-[#11141B] text-white flex items-center justify-center text-[13px] font-bold mb-6">{i + 1}</div>
                <h3 className="text-xl font-bold text-[#11141B] mb-3 tracking-tight">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#475569]">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[24px] md:text-[28px] font-medium text-[#11141B] leading-tight italic font-serif">
            {t.solution.closing_quote}
          </p>
        </div>

        {/* Video */}
        <div className="w-full mb-20 md:mb-24 reveal">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div ref={videoContainerRef} className="video-container relative bg-black rounded-2xl overflow-hidden group/video cursor-pointer" onClick={toggleVideo}>
              <video
                ref={videoRef}
                src="/clip.mov"
                className="w-full h-auto block"
                loop
                playsInline
                onTimeUpdate={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  const { currentTime, duration } = video;
                  if (progressFillRef.current && duration) progressFillRef.current.style.width = `${(currentTime / duration) * 100}%`;
                  if (timeDisplayRef.current) timeDisplayRef.current.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
                }}
                onLoadedMetadata={() => videoRef.current && setVideoDuration(videoRef.current.duration)}
              />
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black/55 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                    <Play className="w-7 h-7 md:w-9 md:h-9 text-white fill-white translate-x-0.5" />
                  </div>
                </div>
              )}
              <div className={`absolute bottom-0 left-0 right-0 px-4 pt-8 pb-3 bg-gradient-to-t from-black/75 to-transparent transition-opacity duration-300 ${isVideoPlaying ? "opacity-0 group-hover/video:opacity-100" : "opacity-100"}`}>
                <div className="relative h-[3px] bg-white/30 rounded-full mb-3 cursor-pointer group/seek" onClick={handleSeek}>
                  <div ref={progressFillRef} className="h-full bg-white rounded-full relative" style={{ width: "0%" }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover/seek:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                  <button onClick={toggleVideo} className="text-white hover:text-white/80 transition-colors flex items-center">
                    {isVideoPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white translate-x-px" />}
                  </button>
                  <span ref={timeDisplayRef} className="text-white/90 text-[11px] font-mono tracking-wide tabular-nums">0:00 / 0:00</span>
                  <div className="ml-auto flex items-center gap-2">
                    <button onClick={toggleMute} className="text-white hover:text-white/80 transition-colors flex items-center">
                      {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input type="range" min="0" max="1" step="0.05" value={isMuted ? 0 : volume} onChange={handleVolumeChange} onClick={(e) => e.stopPropagation()} className="w-16 md:w-20 h-[3px] accent-white cursor-pointer" />
                    <button onClick={toggleFullscreen} className="text-white hover:text-white/80 transition-colors flex items-center ml-1">
                      {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          <div className="bg-[#EFECE6] rounded-3xl p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 border border-[#e5e1d8]">
            <div className="flex flex-col">
              <h3 className="text-[13px] font-bold tracking-[0.1em] text-[#64748B] uppercase mb-8 pb-4 border-b border-[#d8d3c7]">{t.solution.frame_label}</h3>
              <ul className="space-y-5">
                {frameSpecs.map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-[#64748B] font-medium text-[14px] sm:w-[140px] shrink-0 leading-tight">{item.label}</span>
                    <span className="text-[#11141B] font-semibold text-[15px] leading-tight">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[13px] font-bold tracking-[0.1em] text-[#64748B] uppercase mb-8 pb-4 border-b border-[#d8d3c7]">{t.solution.mesh_label}</h3>
              <ul className="space-y-5">
                {meshSpecs.map((item, i) => (
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

      {/* ── MODEL ── */}
      <section id="model" className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">{t.model.label}</span>
          </div>
          <div className="mb-20 text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              {t.model.h2_line1}<br />
              <span className="text-[#0D9762]">{t.model.h2_line2}</span>
            </h2>
          </div>

          {/* SBMC */}
          <div className="mb-32">
            <div className="w-full cursor-pointer hover:opacity-90 transition-opacity reveal mb-6" onClick={() => setIsLightboxOpen(true)}>
              <img src="/sbmc.png" alt="Social Business Model Canvas" className="w-full h-auto" />
            </div>
            <div className="text-center">
              <p className="text-[14px] text-[#64748B] mb-2 font-medium">{t.model.sbmc_caption}</p>
              <a href="/sbmc.png" download="SBMC_KaliGuard.png" className="text-[13px] font-bold text-[#0D9762] hover:text-[#0D9762]/80 transition-colors uppercase tracking-[0.05em] flex items-center justify-center gap-1 mx-auto group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                {t.model.download}
              </a>
            </div>
          </div>

          {/* Numbers grid */}
          <div className="mb-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {modelStats.map((stat, i) => (
                <div key={i} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300 transition-colors">
                  <span className="text-4xl lg:text-5xl font-bold text-[#11141B] tracking-tight mb-3">{stat.value}</span>
                  <span className="text-[15px] text-[#64748B] font-medium leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-[15px] text-[#64748B] italic max-w-[600px] mx-auto leading-relaxed">{t.model.revenue_note}</p>
          </div>

          {/* Budget table */}
          <div className="bg-[#EFECE6] rounded-3xl p-8 md:p-12 lg:p-16 border border-[#e5e1d8]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <div className="flex flex-col">
                <h3 className="text-[13px] font-bold tracking-[0.1em] text-[#64748B] uppercase mb-8 pb-4 border-b border-[#d8d3c7]">{t.model.capex_label}</h3>
                <ul className="space-y-4 mb-6">
                  {capexItems.map((item, i) => (
                    <li key={i} className="flex justify-between items-baseline gap-4">
                      <span className="text-[15px] font-medium text-[#475569] shrink-0">{item.label}</span>
                      <div className="border-b border-dotted border-gray-400 opacity-50 grow"></div>
                      <span className="text-[15px] font-semibold text-[#11141B] shrink-0 text-right">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-baseline pt-4 border-t border-[#11141B]">
                  <span className="text-[16px] font-bold text-[#11141B]">{t.model.capex_total}</span>
                  <span className="text-[18px] font-extrabold text-[#11141B]">~$4,000</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[13px] font-bold tracking-[0.1em] text-[#64748B] uppercase mb-8 pb-4 border-b border-[#d8d3c7]">{t.model.opex_label}</h3>
                <ul className="space-y-4 mb-6">
                  {opexItems.map((item, i) => (
                    <li key={i} className="flex justify-between items-baseline gap-4">
                      <span className="text-[15px] font-medium text-[#475569] shrink-0">{item.label}</span>
                      <div className="border-b border-dotted border-gray-400 opacity-50 grow"></div>
                      <span className="text-[15px] font-semibold text-[#11141B] shrink-0 text-right">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#11141B] flex justify-between items-baseline mt-auto">
                  <span className="text-[16px] font-bold text-[#11141B]">{t.model.opex_total}</span>
                  <span className="text-[18px] font-extrabold text-[#11141B]">~Rp 500K<span className="text-[14px] font-bold text-[#64748B]">{t.model.opex_per_month}</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section id="impact" className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 mb-20 md:mb-24">
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">{t.impact.label}</span>
          </div>
          <div className="mb-20 text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              {t.impact.h2_line1}<br />
              <span className="text-[#0D9762]">{t.impact.h2_line2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {impactPanels.map((panel, idx) => (
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

        <div className="w-full mb-24 md:mb-0">
          <div className="w-full h-[50vh] md:h-[60vh] bg-[#EFECE6] relative reveal flex overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <img src="/comm1.JPG.jpeg" alt="Community near Kali Cabang Timur" className="w-full h-full object-cover" />
            </div>
            <div className="w-px bg-white/30 shrink-0"></div>
            <div className="flex-1 overflow-hidden">
              <img src="/comm2.JPG.jpeg" alt="Community near Kali Cabang Timur" className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="text-center text-[13px] text-[#64748B] font-medium mt-4 px-6 tracking-wide">{t.impact.img_caption}</p>
        </div>
      </section>

      {/* ── SCIENCE ── */}
      <section id="science" className="py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">{t.science.label}</span>
          </div>
          <div className="mb-20 text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              {t.science.h2_line1}<br />
              <span className="text-[#0D9762]">{t.science.h2_line2}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            {/* Climate Evidence */}
            <div>
              <p className="text-[20px] font-medium italic text-[#11141B] mb-10 pb-4 border-b border-gray-200">{t.science.climate_quote}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {citations.map((cite, i) => (
                  <div key={i} className="bg-[#EFECE6] border-l-[3px] border-[#0D9762] p-6 rounded-r-xl">
                    <div className="text-[11px] font-bold tracking-[0.1em] text-[#0D9762] uppercase mb-3">{cite.source}</div>
                    <p className="text-[15px] font-medium text-[#11141B] leading-relaxed">{cite.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bamboo Engineering */}
            <div>
              <p className="text-[20px] font-medium italic text-[#11141B] mb-10 pb-4 border-b border-gray-200">{t.science.bamboo_quote}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {bambooSpecs.map((spec, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-bold text-[#11141B] tracking-tight mb-2">{spec.val}</span>
                    <span className="text-[15px] text-[#64748B] leading-snug">{spec.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proven Methodology */}
            <div>
              <p className="text-[20px] font-medium italic text-[#11141B] mb-10 pb-4 border-b border-gray-200">{t.science.precedent_quote}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-gray-300 transition-colors">
                  <h4 className="text-xl font-bold text-[#11141B] mb-6">Sungai Watch · Indonesia</h4>
                  <ul className="space-y-3">
                    {[t.science.sungai_b1, t.science.sungai_b2, t.science.sungai_b3].map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#0D9762] mt-1"><Check className="w-5 h-5" /></span>
                        <span className="text-[15px] text-[#475569] font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-gray-300 transition-colors">
                  <h4 className="text-xl font-bold text-[#11141B] mb-6">Plastic Fischer · India + Indonesia</h4>
                  <ul className="space-y-3">
                    {[t.science.fischer_b1, t.science.fischer_b2, t.science.fischer_b3].map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#0D9762] mt-1"><Check className="w-5 h-5" /></span>
                        <span className="text-[15px] text-[#475569] font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-24 md:py-32 border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 mb-20 md:mb-24">
          <div className="mb-12 text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">{t.team.label}</span>
          </div>
          <div className="mb-20 text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              {t.team.h2_line1}<br />
              <span className="text-[#0D9762]">{t.team.h2_line2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
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

      {/* ── ROADMAP ── */}
      <section id="roadmap" className="py-24 md:py-32 bg-white">
        <div className="max-w-[800px] w-full mx-auto px-6 md:px-12">
          <div className="mb-12 text-center md:text-left">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#64748B] uppercase">{t.roadmap.label}</span>
          </div>
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#11141B]">
              {t.roadmap.h2_line1}<br />
              <span className="text-[#0D9762]">{t.roadmap.h2_line2}</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-[#E7F6EC] ml-3 md:ml-6 pl-8 md:pl-12 space-y-16">
            {roadmapNodes.map((node, i) => (
              <div key={i} className="relative group">
                <div className="absolute w-6 h-6 bg-white border-[4px] border-[#0D9762] rounded-full -left-[45px] md:-left-[61px] top-1 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#64748B] tracking-[0.1em] uppercase mb-2">{node.time}</span>
                  <h3 className="text-2xl font-bold text-[#11141B] mb-3">{node.title}</h3>
                  <p className="text-[16px] text-[#475569] leading-relaxed max-w-[500px]">{node.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2D5016] text-white pt-16 pb-6">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col reveal text-center md:text-left">
              <img src="/footerlogo.png" alt="Kali Guard" className="h-10 w-auto mb-2 mx-auto md:mx-0 object-contain" />
              <p className="text-white/60 text-[14px]">{t.footer.tagline}</p>
            </div>
            <div className="flex items-center md:justify-center reveal">
              <p className="text-[18px] sm:text-[20px] font-serif italic text-white leading-relaxed text-center text-white/90">
                {t.footer.quote_line1}<br />
                {t.footer.quote_line2}<br />
                {t.footer.quote_line3}
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
                <p>{t.footer.finalist}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/40 reveal">
            <div className="text-center md:text-left">6°22'42"S 106°49'18"E · Kali Cabang Timur, Pancoran Mas, Depok</div>
            <div className="text-center md:text-right">{t.footer.built}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
