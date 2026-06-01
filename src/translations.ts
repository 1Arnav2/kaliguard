export type Lang = 'en' | 'fr';

export interface Translations {
  nav: {
    dashboard: string; problem: string; solution: string; model: string;
    impact: string; science: string; team: string; roadmap: string;
  };
  dash: {
    title: string; subtitle_track: string; subtitle_realtime: string;
    protected: string;
    card1_label: string; card1_body: string; map_placeholder: string;
    card2_label: string; trap1: string; total_captured: string;
    highest_month: string; dec: string;
    loop_label: string; loop_active: string;
    loop_step1: string; loop_step2: string; loop_step3: string; loop_step4: string;
    flood_streak: string; days_without: string; flood_event: string;
    legend_flood: string; legend_safe: string;
    card4_label: string; card4_sub: string;
    flood_points_title: string; flood_points_sub: string;
    sorter_income_title: string; sorter_income_sub: string;
    env_label: string;
    plastic_label: string; co2_label: string;
    stagnant_line1: string; stagnant_line2: string;
    carbon_label: string;
    proj_label: string; proj_targets: string;
    proj_waste: string; proj_revenue: string; proj_breakeven: string;
    proj_plastic: string; proj_sorter: string; proj_flood: string; proj_traps: string;
  };
  problem: {
    label: string; h2_line1: string; h2_line2: string; h2_line3: string;
    p1: string; p2: string;
    quote_translate: string; quote_translated: string; quote_translated_text: string;
    stat1_label: string; stat2_label: string; stat3_label: string; stat4_label: string;
    chain1: string; chain2: string; chain3: string; chain4: string; chain5: string;
    chain_trigger: string; chain_cause: string;
    climate1: string; climate2: string; climate3: string; climate_quote: string;
  };
  solution: {
    label: string; h2_line1: string; h2_line2: string; intro: string;
    step1_title: string; step1_desc: string;
    step2_title: string; step2_desc: string;
    step3_title: string; step3_desc: string;
    step4_title: string; step4_desc: string;
    closing_quote: string;
    frame_label: string; frame_species: string; frame_source: string;
    frame_tensile: string; frame_sequesters: string; frame_life: string; frame_eol: string;
    mesh_label: string; mesh_material: string; mesh_dimensions: string;
    mesh_circular: string; mesh_antitheft: string; mesh_anchoring: string;
  };
  model: {
    label: string; h2_line1: string; h2_line2: string;
    sbmc_caption: string; download: string;
    stat1_label: string; stat2_label: string; stat3_label: string;
    stat4_label: string; stat5_label: string; stat6_label: string;
    revenue_note: string;
    capex_label: string; capex1: string; capex2: string; capex3: string; capex4: string; capex5: string; capex_total: string;
    opex_label: string; opex1: string; opex2: string; opex3: string; opex_total: string; opex_per_month: string;
  };
  impact: {
    label: string; h2_line1: string; h2_line2: string;
    eco_title: string; eco_sub: string; eco_bullets: string[];
    ecol_title: string; ecol_sub: string; ecol_bullets: string[];
    soc_title: string; soc_sub: string; soc_bullets: string[];
    img_caption: string;
  };
  science: {
    label: string; h2_line1: string; h2_line2: string;
    climate_quote: string;
    cite1: string; cite2: string; cite3: string; cite4: string; cite5: string;
    bamboo_quote: string;
    bamboo1: string; bamboo2: string; bamboo3: string; bamboo4: string; bamboo5: string; bamboo6: string;
    precedent_quote: string;
    sungai_b1: string; sungai_b2: string; sungai_b3: string;
    fischer_b1: string; fischer_b2: string; fischer_b3: string;
  };
  team: {
    label: string; h2_line1: string; h2_line2: string;
    quote1: string; quote2: string; quote3: string;
  };
  roadmap: {
    label: string; h2_line1: string; h2_line2: string;
    node1_time: string; node1_title: string; node1_body: string;
    node2_time: string; node2_title: string; node2_body: string;
    node3_time: string; node3_title: string; node3_body: string;
    node4_time: string; node4_title: string; node4_body: string;
    node5_time: string; node5_title: string; node5_body: string;
  };
  footer: {
    tagline: string;
    quote_line1: string; quote_line2: string; quote_line3: string;
    finalist: string; built: string;
  };
}

const en: Translations = {
  nav: {
    dashboard: "Dashboard", problem: "Problem", solution: "Solution", model: "Model",
    impact: "Impact", science: "Science", team: "Team", roadmap: "Roadmap",
  },
  dash: {
    title: "Dashboard",
    subtitle_track: "Pre-launch simulation — data reflects projected performance of 3 deployed traps. Live tracking begins at installation.",
    subtitle_realtime: "",
    protected: "Protected:",
    card1_label: "Overview",
    card1_body: "Live operations and impact metrics for the bamboo-and-net litter trap on Kali Cabang Timur, Depok. Intercepting river waste to prevent flooding for 603 low-income families.",
    map_placeholder: "Map Placeholder",
    card2_label: "Waste Captured (Kg)",
    trap1: "Trap 1",
    total_captured: "Total Captured",
    highest_month: "Highest Month",
    dec: "Dec",
    loop_label: "Self-Sustaining Loop",
    loop_active: "Active",
    loop_step1: "Intercept", loop_step2: "Sort", loop_step3: "Monetise", loop_step4: "Sustain",
    flood_streak: "Flood-Free Streak",
    days_without: "days without",
    flood_event: "flood event",
    legend_flood: "Flood", legend_safe: "Safe",
    card4_label: "Revenue & Scale",
    card4_sub: "+Rp 1.65M / mo \u2022 Repaid via recyclables",
    flood_points_title: "Depok flood points rem.",
    flood_points_sub: "After pilot",
    sorter_income_title: "Sorter income",
    sorter_income_sub: "Distributed to community",
    env_label: "Environmental Impact",
    plastic_label: "Plastic diverted before ocean",
    co2_label: "CO\u2082 offset via bamboo",
    stagnant_line1: "Stagnant water",
    stagnant_line2: "accumulation off",
    carbon_label: "Operational carbon emissions",
    proj_label: "6-Month Projections",
    proj_targets: "Targets",
    proj_waste: "Waste captured (M6)",
    proj_revenue: "Revenue target (M6)",
    proj_breakeven: "Expected break-even",
    proj_plastic: "Plastic diverted",
    proj_sorter: "Sorter income",
    proj_flood: "Flood target reduction",
    proj_traps: "Active Traps at M6",
  },
  problem: {
    label: "The Problem",
    h2_line1: "603 Families.",
    h2_line2: "Not a Storm.",
    h2_line3: "Trash.",
    p1: "Kali Cabang Timur runs through Pancoran Mas, one of Depok\u2019s most flood-prone districts. It floods four times a year \u2014 not because of exceptional rainfall, but because uncollected solid waste blocks its drainage capacity.",
    p2: "Depok generates 1,363 tonnes of waste daily. Less than one-third is formally collected. The rest washes into drainage channels with every shower.",
    quote_translate: "Translate",
    quote_translated: "Translated to English",
    quote_translated_text: "\u201cFlooding occurs because drainage channels are blocked by waste.\u201d",
    stat1_label: "Depok daily waste (SIPSN 2024)",
    stat2_label: "Formal collection rate",
    stat3_label: "Illegal dump points (Bappenas 2024)",
    stat4_label: "Loss per household per flood",
    chain1: "Rain", chain2: "Street waste mobilised", chain3: "Drainage blocked",
    chain4: "Flooding", chain5: "603 families displaced",
    chain_trigger: "Rain is the trigger.",
    chain_cause: "Waste is the cause.",
    climate1: "Extreme rainfall more likely vs 115 yrs ago\u00a0(Siswanto et al.\u00a02015)",
    climate2: "Jakarta temperature rise\u00a0since 1866",
    climate3: "Largest single-day rainfall in\u00a0135-year record \u2014 Jakarta, 1\u00a0Jan\u00a02020\u00a0(Lubis et al.\u00a02022)",
    climate_quote: "\u201cClimate change is not creating a new problem.\u00a0It is accelerating an existing one.\u201d",
  },
  solution: {
    label: "The Solution",
    h2_line1: "A Trap. A Loop.",
    h2_line2: "A Community.",
    intro: "Kali Guard is a bamboo-and-net structure installed across Kali Cabang Timur. It intercepts floating waste before it reaches the downstream drainage junction. Captured waste is sorted by paid community members. Recyclables are sold to Depok\u2019s central waste bank. Revenue closes the loop \u2014 funding maintenance and sorter pay without external grants.",
    step1_title: "Intercept",
    step1_desc: "Bamboo frame and net spans the 4.8m channel. Captures floating waste 24/7. No power required. Works during monsoons and blackouts.",
    step2_title: "Sort",
    step2_desc: "Community sorters from Komunitas Ciliwung Depok separate recyclables at the adjacent station. Paid daily. No volunteer dependency.",
    step3_title: "Monetise",
    step3_desc: "Sorted recyclables sold to BSI Rumah Harum at Rp\u00a06,000\u20139,000/kg. PET, HDPE, metals \u2014 all have published market rates.",
    step4_title: "Sustain",
    step4_desc: "Revenue covers maintenance and sorter pay. Net surplus from Month 2. No grants, no donations, no government budget required.",
    closing_quote: "\u201cNo electricity. No internet. No sensors.\u00a0No server. No update required.\u201d",
    frame_label: "Structural Frame",
    frame_species: "Species", frame_source: "Source", frame_tensile: "Tensile strength",
    frame_sequesters: "Sequesters", frame_life: "Service life", frame_eol: "End of life",
    mesh_label: "Interception Mesh",
    mesh_material: "Material", mesh_dimensions: "Dimensions", mesh_circular: "Circular",
    mesh_antitheft: "Anti-theft", mesh_anchoring: "Anchoring",
  },
  model: {
    label: "The Model",
    h2_line1: "Built to be self-sustaining.",
    h2_line2: "Not grant-dependent.",
    sbmc_caption: "Social Business Model Canvas \u2014 Kali Guard, Team Arkadia, 2026",
    download: "Download SBMC",
    stat1_label: "Total pilot cost (materials)",
    stat2_label: "Decision to first trap installed",
    stat3_label: "Waste capture target Month 1",
    stat4_label: "Monthly revenue from recyclables",
    stat5_label: "Monthly operating cost",
    stat6_label: "Break-even point",
    revenue_note: "Revenue: 500\u00a0kg/month \u00d7 Rp\u00a06,000\u20139,000/kg (BSI Rumah Harum published rates, WWF Plastic Smart Cities 2023). Operating cost covers net replacement, inspection, and sorter compensation.",
    capex_label: "CAPEX (Pilot Phase)",
    capex1: "Prototype (1\u20132 units)", capex2: "Studies & standardisation",
    capex3: "Administration & patent", capex4: "3 Pilot installations",
    capex5: "In-situ trials & testing", capex_total: "Total CAPEX",
    opex_label: "OPEX (Per Month)",
    opex1: "Net replacement (amortised)", opex2: "Structural inspection",
    opex3: "Sorter compensation", opex_total: "Total OPEX", opex_per_month: "/mo",
  },
  impact: {
    label: "Impact",
    h2_line1: "One trap.",
    h2_line2: "Three kinds of change.",
    eco_title: "Economic", eco_sub: "Income, not charity.",
    eco_bullets: [
      "Community sorters: Rp\u00a03\u20134.5M/month revenue pool",
      "603 households: Rp\u00a08\u201312M/year in avoided losses",
      "Bogor bamboo suppliers: recurring orders",
      "Municipality: reduced emergency response cost",
      "Children regain 2\u20133 school days per flood event",
    ],
    ecol_title: "Ecological", ecol_sub: "From river to ocean \u2014 stopped here.",
    ecol_bullets: [
      "205\u2013308\u00a0t/year plastic before Jakarta Bay",
      "Zero operational carbon \u2014 no electricity",
      "Net carbon negative vs steel alternatives",
      "Zero microplastics from trap degradation",
      "Riverbank erosion protection via bamboo roots",
    ],
    soc_title: "Societal", soc_sub: "Families who stay.",
    soc_bullets: [
      "No displacement \u2192 community fabric preserved",
      "Warung owners keep inventory through flood season",
      "Stagnant water eliminated \u2192 dengue risk reduced",
      "Bottom-up governance, no ministerial referral",
      "Replicable: Mumbai\u2019s 52 nallah outfalls, Depok\u2019s 38 remaining flood points",
    ],
    img_caption: "Pancoran Mas, Depok, Indonesia \u2014 the community Kali Guard was built for.",
  },
  science: {
    label: "The Science",
    h2_line1: "Every number",
    h2_line2: "has a source.",
    climate_quote: "\u201cKali Guard is sized for the climate of 2035, not 2005.\u201d",
    cite1: "Extreme rainfall events in Jakarta are 2.4\u00d7 more likely today than 115 years ago.",
    cite2: "Jakarta surface temperature rose 1.6\u00b0C since 1866 \u2014 1.4\u00d7 faster than the global average.",
    cite3: "1 January 2020: 377mm in 24 hours \u2014 largest in 135-year record; triggered Jabodetabek disaster.",
    cite4: "Wet-season extreme rainfall indices increase significantly through 2050 across Java.",
    cite5: "Monsoon precipitation will increase across Southeast Asia.",
    bamboo_quote: "\u201cWhy bamboo outperforms steel for this specific application.\u201d",
    bamboo1: "Tensile strength, comparable to steel",
    bamboo2: "Embodied carbon vs 1.85 for steel",
    bamboo3: "Sequestered per hectare per year",
    bamboo4: "Service life (boron-treated frame)",
    bamboo5: "Scrap value. Cannot be stolen.",
    bamboo6: "Microplastics at end of life",
    precedent_quote: "\u201cTwo precedents operating at scale in the same geography.\u201d",
    sungai_b1: "3M+ kg intercepted",
    sungai_b2: "350+ bamboo barriers installed",
    sungai_b3: "Same hydraulic approach, different scale.",
    fischer_b1: "1.9M+ kg intercepted, 2024 Impact Report",
    fischer_b2: "Community-operated revenue model via recyclables.",
    fischer_b3: "Not NGO-dependent.",
  },
  team: {
    label: "Team Arkadia",
    h2_line1: "We didn\u2019t research",
    h2_line2: "a problem. We lived one.",
    quote1: "The strongest solutions to climate adaptation are often the ones that don\u2019t look like technology at all.",
    quote2: "I grew up beside Kali Cabang Timur. I watched the same homes flood every year \u2014 not from storms, but from trash. This project isn\u2019t research. It\u2019s home.",
    quote3: "Kali Guard works because it respects the community\u2019s existing knowledge \u2014 it doesn\u2019t replace it with something imported.",
  },
  roadmap: {
    label: "Roadmap",
    h2_line1: "From one trap",
    h2_line2: "to a city-wide network.",
    node1_time: "Month 1 \u00b7 30 Days",
    node1_title: "First trap installed",
    node1_body: "Prototype deployed at Kali Cabang Timur, Jalan Dewi Sartika. Community sorters onboarded. First BSI Rumah Harum recyclable handoff.",
    node2_time: "Month 2",
    node2_title: "Self-sustaining",
    node2_body: "Revenue covers full operating cost of Rp\u00a0500K/mo. No external funding required from this point.",
    node3_time: "Month 6",
    node3_title: "Validated",
    node3_body: "500+ kg/month captured. Flood documentation published. Sorter income on record. Pilots 2 and 3 deployed.",
    node4_time: "Year 1",
    node4_title: "Blueprint published",
    node4_body: "DPUPR Depok replication discussion initiated across 38 remaining flood points.",
    node5_time: "Year 3\u20135",
    node5_title: "City-wide network",
    node5_body: "15 rivers, 38 flood points across Depok. Municipal service contract. International pilot: Mumbai\u2019s 52 nallah outfalls.",
  },
  footer: {
    tagline: "Bamboo \u00b7 Community \u00b7 Clean Rivers \u00b7 Resilient Depok",
    quote_line1: "\u201cCleaner Rivers.",
    quote_line2: "Resilient Communities.",
    quote_line3: "Sustainable Future.\u201d",
    finalist: "Phase 2 Finalist \u00b7 June 11 Jury Presentation",
    built: "\u201cBuilt to last. Funded by what it collects.\u201d",
  },
};

const fr: Translations = {
  nav: {
    dashboard: "Tableau de bord", problem: "Probl\u00e8me", solution: "Solution",
    model: "Mod\u00e8le", impact: "Impact", science: "Science",
    team: "\u00c9quipe", roadmap: "Feuille de route",
  },
  dash: {
    title: "Tableau de bord",
    subtitle_track: "Simulation pr\u00e9-lancement \u2014 les donn\u00e9es refl\u00e8tent les performances projet\u00e9es de 3 pi\u00e8ges d\u00e9ploy\u00e9s. Le suivi en direct commence \u00e0 l\u2019installation.",
    subtitle_realtime: "",
    protected: "Prot\u00e9g\u00e9es\u00a0:",
    card1_label: "Aper\u00e7u",
    card1_body: "Op\u00e9rations en direct et indicateurs d\u2019impact pour le pi\u00e8ge \u00e0 d\u00e9chets en bambou et filet sur Kali Cabang Timur, Depok. Interception des d\u00e9chets fluviaux pour pr\u00e9venir les inondations pour 603 familles \u00e0 faibles revenus.",
    map_placeholder: "Carte (placeholder)",
    card2_label: "D\u00e9chets intercept\u00e9s (Kg)",
    trap1: "Pi\u00e8ge 1",
    total_captured: "Total intercept\u00e9",
    highest_month: "Mois record",
    dec: "D\u00e9c",
    loop_label: "Boucle autonome",
    loop_active: "Actif",
    loop_step1: "Intercepter", loop_step2: "Trier", loop_step3: "Mon\u00e9tiser", loop_step4: "Maintenir",
    flood_streak: "S\u00e9rie sans inondation",
    days_without: "jours sans",
    flood_event: "inondation",
    legend_flood: "Inondation", legend_safe: "S\u00fbr",
    card4_label: "Revenus et expansion",
    card4_sub: "+Rp\u00a01,65M / mois \u2022 Rembours\u00e9 via recyclables",
    flood_points_title: "Points d\u2019inondation restants",
    flood_points_sub: "Apr\u00e8s le pilote",
    sorter_income_title: "Revenus des trieurs",
    sorter_income_sub: "Distribu\u00e9s \u00e0 la communaut\u00e9",
    env_label: "Impact environnemental",
    plastic_label: "Plastique d\u00e9tourn\u00e9 avant l\u2019oc\u00e9an",
    co2_label: "CO\u2082 compens\u00e9 via bambou",
    stagnant_line1: "Accumulation d\u2019eau stagnante",
    stagnant_line2: "supprim\u00e9e",
    carbon_label: "\u00c9missions carbone op\u00e9rationnelles",
    proj_label: "Projections 6 mois",
    proj_targets: "Objectifs",
    proj_waste: "D\u00e9chets intercept\u00e9s (M6)",
    proj_revenue: "Objectif revenus (M6)",
    proj_breakeven: "Seuil de rentabilit\u00e9 estim\u00e9",
    proj_plastic: "Plastique d\u00e9tourn\u00e9",
    proj_sorter: "Revenus des trieurs",
    proj_flood: "R\u00e9duction cible inondations",
    proj_traps: "Pi\u00e8ges actifs \u00e0 M6",
  },
  problem: {
    label: "Le Probl\u00e8me",
    h2_line1: "603 familles.",
    h2_line2: "Pas une temp\u00eate.",
    h2_line3: "Des d\u00e9chets.",
    p1: "Kali Cabang Timur traverse Pancoran Mas, l\u2019un des quartiers les plus inondables de Depok. Il inonde quatre fois par an \u2014 non pas \u00e0 cause de pr\u00e9cipitations exceptionnelles, mais parce que les d\u00e9chets solides non collect\u00e9s bloquent sa capacit\u00e9 de drainage.",
    p2: "Depok g\u00e9n\u00e8re 1\u00a0363 tonnes de d\u00e9chets par jour. Moins d\u2019un tiers est collect\u00e9 formellement. Le reste se d\u00e9verse dans les canaux de drainage \u00e0 chaque averse.",
    quote_translate: "Traduire",
    quote_translated: "Traduit en fran\u00e7ais",
    quote_translated_text: "\u201cLes inondations se produisent parce que les canaux de drainage sont bloqu\u00e9s par des d\u00e9chets.\u201d",
    stat1_label: "D\u00e9chets quotidiens Depok (SIPSN 2024)",
    stat2_label: "Taux de collecte formel",
    stat3_label: "Points de d\u00e9charge ill\u00e9gale (Bappenas 2024)",
    stat4_label: "Perte par foyer par inondation",
    chain1: "Pluie", chain2: "D\u00e9chets de rue mobilis\u00e9s", chain3: "Drainage bloqu\u00e9",
    chain4: "Inondation", chain5: "603 familles d\u00e9plac\u00e9es",
    chain_trigger: "La pluie est le d\u00e9clencheur.",
    chain_cause: "Les d\u00e9chets sont la cause.",
    climate1: "Pr\u00e9cipitations extrêmes plus probables vs.\u00a0il y a 115 ans\u00a0(Siswanto et al.\u00a02015)",
    climate2: "Hausse de temp\u00e9rature \u00e0 Jakarta\u00a0depuis 1866",
    climate3: "Plus forte pluviom\u00e9trie journali\u00e8re en\u00a0135 ans d\u2019enregistrement \u2014 Jakarta, 1\u00a0jan.\u00a02020\u00a0(Lubis et al.\u00a02022)",
    climate_quote: "\u201cLe changement climatique ne cr\u00e9e pas un nouveau probl\u00e8me.\u00a0Il acc\u00e9l\u00e8re un probl\u00e8me existant.\u201d",
  },
  solution: {
    label: "La Solution",
    h2_line1: "Un pi\u00e8ge. Une boucle.",
    h2_line2: "Une communaut\u00e9.",
    intro: "Kali Guard est une structure en bambou et filet install\u00e9e \u00e0 travers Kali Cabang Timur. Elle intercepte les d\u00e9chets flottants avant qu\u2019ils n\u2019atteignent la jonction de drainage en aval. Les d\u00e9chets captur\u00e9s sont tri\u00e9s par des membres r\u00e9mun\u00e9r\u00e9s de la communaut\u00e9. Les recyclables sont vendus \u00e0 la banque de d\u00e9chets centrale de Depok. Les revenus bouclent la boucle \u2014 finançant la maintenance et la r\u00e9mun\u00e9ration des trieurs sans subventions ext\u00e9rieures.",
    step1_title: "Intercepter",
    step1_desc: "Le cadre en bambou et le filet couvrent le canal de 4,8\u00a0m. Capture les d\u00e9chets flottants 24h/24 et 7j/7. Aucune alimentation \u00e9lectrique requise. Fonctionne pendant les moussons et les coupures de courant.",
    step2_title: "Trier",
    step2_desc: "Les trieurs communautaires de Komunitas Ciliwung Depok s\u00e9parent les recyclables \u00e0 la station adjacente. Pay\u00e9s quotidiennement. Aucune d\u00e9pendance aux b\u00e9n\u00e9voles.",
    step3_title: "Mon\u00e9tiser",
    step3_desc: "Recyclables tri\u00e9s vendus \u00e0 BSI Rumah Harum \u00e0 Rp\u00a06\u00a0000\u20139\u00a0000/kg. PET, HDPE, m\u00e9taux \u2014 tous ont des tarifs publi\u00e9s.",
    step4_title: "Maintenir",
    step4_desc: "Les revenus couvrent la maintenance et la r\u00e9mun\u00e9ration des trieurs. Exc\u00e9dent net d\u00e8s le Mois 2. Aucune subvention, aucun don, aucun budget gouvernemental requis.",
    closing_quote: "\u201cPas d\u2019\u00e9lectricit\u00e9. Pas d\u2019internet. Pas de capteurs.\u00a0Pas de serveur. Aucune mise \u00e0 jour requise.\u201d",
    frame_label: "Armature structurelle",
    frame_species: "Esp\u00e8ce", frame_source: "Source", frame_tensile: "R\u00e9sistance \u00e0 la traction",
    frame_sequesters: "S\u00e9questre", frame_life: "Dur\u00e9e de vie", frame_eol: "Fin de vie",
    mesh_label: "Filet d\u2019interception",
    mesh_material: "Mat\u00e9riau", mesh_dimensions: "Dimensions", mesh_circular: "Circulaire",
    mesh_antitheft: "Anti-vol", mesh_anchoring: "Ancrage",
  },
  model: {
    label: "Le Mod\u00e8le",
    h2_line1: "Con\u00e7u pour \u00eatre autonome.",
    h2_line2: "Pas d\u00e9pendant des subventions.",
    sbmc_caption: "Mod\u00e8le \u00e9conomique social \u2014 Kali Guard, Team Arkadia, 2026",
    download: "T\u00e9l\u00e9charger le SBMC",
    stat1_label: "Co\u00fbt total du pilote (mat\u00e9riaux)",
    stat2_label: "De la d\u00e9cision \u00e0 l\u2019installation du premier pi\u00e8ge",
    stat3_label: "Objectif de capture de d\u00e9chets Mois 1",
    stat4_label: "Revenus mensuels issus des recyclables",
    stat5_label: "Co\u00fbt op\u00e9rationnel mensuel",
    stat6_label: "Seuil de rentabilit\u00e9",
    revenue_note: "Revenus\u00a0: 500\u00a0kg/mois \u00d7 Rp\u00a06\u00a0000\u20139\u00a0000/kg (tarifs publi\u00e9s BSI Rumah Harum, WWF Plastic Smart Cities 2023). Les co\u00fbts op\u00e9rationnels couvrent le remplacement du filet, l\u2019inspection et la compensation des trieurs.",
    capex_label: "CAPEX (Phase pilote)",
    capex1: "Prototype (1\u20132 unit\u00e9s)", capex2: "\u00c9tudes et standardisation",
    capex3: "Administration et brevet", capex4: "3 Installations pilotes",
    capex5: "Essais et tests in situ", capex_total: "Total CAPEX",
    opex_label: "OPEX (Par mois)",
    opex1: "Remplacement du filet (amorti)", opex2: "Inspection structurelle",
    opex3: "Compensation des trieurs", opex_total: "Total OPEX", opex_per_month: "/mois",
  },
  impact: {
    label: "Impact",
    h2_line1: "Un pi\u00e8ge.",
    h2_line2: "Trois types de changement.",
    eco_title: "\u00c9conomique", eco_sub: "Des revenus, pas de charit\u00e9.",
    eco_bullets: [
      "Trieurs communautaires\u00a0: pool de revenus de Rp\u00a03\u20134,5M/mois",
      "603 m\u00e9nages\u00a0: Rp\u00a08\u201312M/an en pertes \u00e9vit\u00e9es",
      "Fournisseurs de bambou de Bogor\u00a0: commandes r\u00e9currentes",
      "Municipalit\u00e9\u00a0: r\u00e9duction des co\u00fbts d\u2019intervention d\u2019urgence",
      "Les enfants regagnent 2\u20133 jours d\u2019\u00e9cole par \u00e9v\u00e9nement d\u2019inondation",
    ],
    ecol_title: "\u00c9cologique", ecol_sub: "De la rivi\u00e8re \u00e0 l\u2019oc\u00e9an \u2014 arr\u00eat\u00e9 ici.",
    ecol_bullets: [
      "205\u2013308\u00a0t/an de plastique avant la Baie de Jakarta",
      "Z\u00e9ro carbone op\u00e9rationnel \u2014 pas d\u2019\u00e9lectricit\u00e9",
      "Bilan carbone n\u00e9gatif vs alternatives en acier",
      "Z\u00e9ro microplastiques li\u00e9s \u00e0 la d\u00e9gradation du pi\u00e8ge",
      "Protection contre l\u2019\u00e9rosion des berges via les racines de bambou",
    ],
    soc_title: "Soci\u00e9tal", soc_sub: "Les familles qui restent.",
    soc_bullets: [
      "Pas de d\u00e9placement \u2192 tissu communautaire pr\u00e9serv\u00e9",
      "Les propri\u00e9taires de warung conservent leurs stocks pendant la saison des inondations",
      "Eau stagnante \u00e9limin\u00e9e \u2192 risque de dengue r\u00e9duit",
      "Gouvernance ascendante, sans r\u00e9f\u00e9rence minist\u00e9rielle",
      "Reproductible\u00a0: 52 d\u00e9versoirs de Mumbai, 38 points d\u2019inondation restants de Depok",
    ],
    img_caption: "Pancoran Mas, Depok, Indon\u00e9sie \u2014 la communaut\u00e9 pour laquelle Kali Guard a \u00e9t\u00e9 con\u00e7u.",
  },
  science: {
    label: "La Science",
    h2_line1: "Chaque chiffre",
    h2_line2: "a une source.",
    climate_quote: "\u201cKali Guard est dimensionn\u00e9 pour le climat de 2035, pas de 2005.\u201d",
    cite1: "Les \u00e9v\u00e9nements de pr\u00e9cipitations extr\u00eames \u00e0 Jakarta sont 2,4\u00d7 plus probables aujourd\u2019hui qu\u2019il y a 115 ans.",
    cite2: "La temp\u00e9rature de surface de Jakarta a augment\u00e9 de 1,6\u00b0C depuis 1866 \u2014 1,4\u00d7 plus vite que la moyenne mondiale.",
    cite3: "1 janvier 2020\u00a0: 377\u00a0mm en 24 heures \u2014 le plus \u00e9lev\u00e9 en 135 ans d\u2019enregistrement\u00a0; a d\u00e9clench\u00e9 la catastrophe de Jabodetabek.",
    cite4: "Les indices de pr\u00e9cipitations extr\u00eames en saison des pluies augmentent significativement jusqu\u2019en 2050 sur Java.",
    cite5: "Les pr\u00e9cipitations de mousson augmenteront en Asie du Sud-Est.",
    bamboo_quote: "\u201cPourquoi le bambou surpasse l\u2019acier pour cette application sp\u00e9cifique.\u201d",
    bamboo1: "R\u00e9sistance \u00e0 la traction, comparable \u00e0 l\u2019acier",
    bamboo2: "Carbone incorpor\u00e9 vs 1,85 pour l\u2019acier",
    bamboo3: "S\u00e9questr\u00e9 par hectare et par an",
    bamboo4: "Dur\u00e9e de vie (cadre trait\u00e9 au bore)",
    bamboo5: "Valeur de r\u00e9cup\u00e9ration. Impossible \u00e0 voler.",
    bamboo6: "Microplastiques en fin de vie",
    precedent_quote: "\u201cDeux pr\u00e9c\u00e9dents op\u00e9rant \u00e0 grande \u00e9chelle dans la m\u00eame g\u00e9ographie.\u201d",
    sungai_b1: "Plus de 3\u00a0M\u00a0kg intercept\u00e9s",
    sungai_b2: "Plus de 350 barri\u00e8res en bambou install\u00e9es",
    sungai_b3: "M\u00eame approche hydraulique, \u00e9chelle diff\u00e9rente.",
    fischer_b1: "Plus de 1,9\u00a0M\u00a0kg intercept\u00e9s, Rapport d\u2019impact 2024",
    fischer_b2: "Mod\u00e8le de revenus op\u00e9r\u00e9 par la communaut\u00e9 via les recyclables.",
    fischer_b3: "Non d\u00e9pendant des ONG.",
  },
  team: {
    label: "Team Arkadia",
    h2_line1: "Nous n\u2019avons pas \u00e9tudi\u00e9",
    h2_line2: "un probl\u00e8me. Nous l\u2019avons v\u00e9cu.",
    quote1: "Les solutions les plus solides \u00e0 l\u2019adaptation climatique sont souvent celles qui ne ressemblent pas du tout \u00e0 de la technologie.",
    quote2: "J\u2019ai grandi \u00e0 c\u00f4t\u00e9 de Kali Cabang Timur. J\u2019ai regard\u00e9 les m\u00eames maisons inonder chaque ann\u00e9e \u2014 pas \u00e0 cause des temp\u00eates, mais \u00e0 cause des d\u00e9chets. Ce projet n\u2019est pas de la recherche. C\u2019est chez moi.",
    quote3: "Kali Guard fonctionne parce qu\u2019il respecte les connaissances existantes de la communaut\u00e9 \u2014 il ne les remplace pas par quelque chose d\u2019import\u00e9.",
  },
  roadmap: {
    label: "Feuille de route",
    h2_line1: "D\u2019un pi\u00e8ge",
    h2_line2: "\u00e0 un r\u00e9seau \u00e0 l\u2019\u00e9chelle de la ville.",
    node1_time: "Mois 1 \u00b7 30 Jours",
    node1_title: "Premier pi\u00e8ge install\u00e9",
    node1_body: "Prototype d\u00e9ploy\u00e9 \u00e0 Kali Cabang Timur, Jalan Dewi Sartika. Trieurs communautaires int\u00e9gr\u00e9s. Premier transfert de recyclables BSI Rumah Harum.",
    node2_time: "Mois 2",
    node2_title: "Autonome",
    node2_body: "Les revenus couvrent l\u2019int\u00e9gralit\u00e9 des co\u00fbts op\u00e9rationnels de Rp\u00a0500K/mois. Aucun financement ext\u00e9rieur requis \u00e0 partir de ce point.",
    node3_time: "Mois 6",
    node3_title: "Valid\u00e9",
    node3_body: "Plus de 500\u00a0kg/mois captur\u00e9s. Documentation sur les inondations publi\u00e9e. Revenus des trieurs enregistr\u00e9s. Pilotes 2 et 3 d\u00e9ploy\u00e9s.",
    node4_time: "Ann\u00e9e 1",
    node4_title: "Plan directeur publi\u00e9",
    node4_body: "Discussion de r\u00e9plication DPUPR Depok initi\u00e9e sur les 38 points d\u2019inondation restants.",
    node5_time: "Ann\u00e9es 3\u20135",
    node5_title: "R\u00e9seau \u00e0 l\u2019\u00e9chelle de la ville",
    node5_body: "15 rivi\u00e8res, 38 points d\u2019inondation \u00e0 travers Depok. Contrat de service municipal. Pilote international\u00a0: 52 d\u00e9versoirs de Mumbai.",
  },
  footer: {
    tagline: "Bambou \u00b7 Communaut\u00e9 \u00b7 Rivi\u00e8res propres \u00b7 Depok r\u00e9siliente",
    quote_line1: "\u201cRivi\u00e8res plus propres.",
    quote_line2: "Communaut\u00e9s r\u00e9silientes.",
    quote_line3: "Avenir durable.\u201d",
    finalist: "Finaliste Phase 2 \u00b7 Pr\u00e9sentation jury 11 juin",
    built: "\u201cCon\u00e7u pour durer. Financ\u00e9 par ce qu\u2019il collecte.\u201d",
  },
};

export const translations: Record<Lang, Translations> = { en, fr };
