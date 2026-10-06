// ─────────────────────────────────────────────────────────────
// YOUR AREAS OF WORK — edit everything about your areas and
// projects here. The home page, the "Areas of Work" page and each
// area's own page all read from this file.
//
// Tips:
// - Wrap text in double quotes "..." (safe for apostrophes like I'm).
// - Every project needs a comma after its closing }.
// - "link", "badge" and "img" are optional. Delete the line if unused.
// - Images go in the /public folder, e.g. img: "/lab.jpg"
// ─────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  period?: string;   // e.g. "Jan 2026 – Present"
  role?: string;     // e.g. "Undergraduate Researcher, XYZ Lab"
  desc: string;
  link?: string;     // paper, poster, GitHub repo, essay PDF...
  badge?: string;    // small label, e.g. "ONGOING" or "PUBLISHED"
};

export type Area = {
  slug: string;      // used in the web address: /areas/<slug>
  title: string;
  summary: string;   // short line shown on the home page card
  intro: string;     // longer paragraph at the top of the area page
  img?: string;
  projects: Project[];
};

export const AREAS: Area[] = [
  {
    slug: "lab-work",
    title: "Experimental Work",
    summary: "Experimental research in the life sciences.",
    intro: "While experimental biology is not my primary field of expertist, I have a significant amount of hands-on research, particularly in the field of synthetic biology.",
    projects: [
      {
        title: "Project title",
        period: "2026 – Present",
        role: "Undergraduate Researcher, Lab name",
        desc: "One or two sentences on the research question, what you did and what you found.",
        badge: "ONGOING",
      },
      {
        title: "Building a Biosensor to Detect Changes in Metabolite in the Environment",
        period: "2024",
        desc: "I used BioBrick parts and molecular biology techniques to successfully create a genetic circuit that was inserted into E. coli cells to act as a device for us to detect changes in arabinose in the environment. Techniques used: PCR, gel electrophoresis, molecular cloning.",
      },
    ],
  },
  {
    slug: "computational",
    title: "Computational Projects",
    summary: "Building models and analysing biological data with code.",
    intro: "Write a short paragraph about your computational research: the kinds of models you build, the tools and languages you use and the problems you apply them to.",
    projects: [
      {
        title: "Project title",
        period: "2026",
        desc: "One or two sentences on the model or analysis you built and what it showed.",
        link: "https://github.com/hayleylim05",
      },
    ],
  },
  {
    slug: "philosophy",
    title: "Philosophy",
    summary: "Metaphysics, logic and philosophical argument.",
    intro: "Write a short paragraph about your philosophical interests: the questions in metaphysics you care about and how you approach them.",
    projects: [
      {
        title: "Essay title",
        period: "2026",
        desc: "One or two sentences summarising the argument of the essay.",
      },
    ],
  },
];
