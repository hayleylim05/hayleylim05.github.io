// ─────────────────────────────────────────────────────────────
// YOUR CV — edit everything on the CV page here.
// Same rules as areas.ts: text in double quotes "..." (or backticks),
// a comma after every closing } or ], and "points" is a list of bullets.
// ─────────────────────────────────────────────────────────────

export type CVEntry = {
  title: string;      // degree or job title
  org: string;        // institution / organisation
  period: string;
  subtitle?: string;  // e.g. project title
  points?: string[];  // bullet points
};

export const PROFILE =
  "Life Sciences undergraduate at the National University of Singapore with a minor in Philosophy, working across computational research, experimental biology and metaphysics.";

export const EDUCATION: CVEntry[] = [
  {
    title: "B.Sc. (Hons.) in Life Sciences, Minor in Philosophy",
    org: "National University of Singapore",
    period: "Aug 2024 – May 2028",
    points: [
      "Additional Academic Programme: Special Programme in Science, NUS College",
      "NUS Global Merit Scholar",
    ],
  },
  {
    title: "Singapore-Cambridge GCE A-Levels (Integrated Programme)",
    org: "National Junior College",
    period: "Jan 2018 – Dec 2023",
    points: [
      "H2 Biology, H2 Chemistry, H2 Economics, H2 Mathematics, H3 A*STAR-NUS-NJC Science Research",
      "Grades: AAAA, Distinction",
    ],
  },
];

export const EXPERIENCE: CVEntry[] = [
  {
    title: "Junior Research Mentor",
    org: "NUS Special Programme in Science",
    period: "Jun 2026 – Present",
    points: [
      "Computational modelling and fieldwork mentor for SP3275 Science for a Sustainable Earth",
    ],
  },
  {
    title: "Quantum Cryptography Student Researcher",
    org: "NUS Department of Physics",
    period: "Jan 2026 – Jun 2026",
    subtitle: "Numerical Analysis of Keyrate for Entanglement-based BB84 Protocol",
    points: [
      "Created a computational tool to determine the achievable keyrate of the EB-BB84 protocol using the entropy accumulation theorem",
      "Determined the achievable keyrate via general and convex optimisation, and analysed it to ensure its security",
    ],
  },
  {
    title: "Intern",
    org: "Church of Singapore",
    period: "May 2026 – Aug 2026",
    points: [
      "Built a website for the Music Ministry using Python, HTML and CSS",
      "Drafted policies on financial resources available to co-workers",
      "Automated processes to increase efficiency, and supported administrative duties",
    ],
  },
  {
    title: "Biology Educator",
    org: "Ministry of Education / National Junior College",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Taught Biology to two Secondary 3 and two Secondary 4 classes",
      "Supported administrative matters for the department and school",
    ],
  },
  {
    title: "Bioinformatics Student Researcher",
    org: "Bioinformatics Institute, A*STAR",
    period: "Jun 2022 – Jun 2023",
    subtitle: "Investigation of Different Fragmentation Methods for Drug Database Preparation",
    points: [
      "Produced and analysed drug fragments made using different fragmentation methods under Dr Zhenyu Meng; the work was published by Springer",
      "Defended my thesis at NUS and was awarded the highest grade for H3 A*STAR-NUS-NJC Science Research",
    ],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["Python"] },
  { group: "Numerical computing", items: ["NumPy"] },
  { group: "Data analysis & visualisation", items: ["pandas", "Matplotlib", "Seaborn", "SciPy"] },
  { group: "Machine learning", items: ["scikit-learn"] },
  { group: "Web development", items: ["Flask", "HTML", "CSS"] },
  { group: "Typesetting", items: ["LaTeX"] },
];

export const ACTIVITIES: { group: string; points: string[] }[] = [
  {
    group: "Music",
    points: [
      "ABRSM: Classical Piano, Classical Guitar",
      "Trinity Rock & Pop: Drums, Electric Guitar",
    ],
  },
  {
    group: "Sports",
    points: [
      "NUS Varsity Athlete (Triathlon)",
      "Holder of the NJC school record for Girls' 80m Hurdles",
      "National Top 5 Female Sprint Hurdler, 2019 – 2023",
    ],
  },
];
