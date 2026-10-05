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
    title: "Lab Work",
    summary: "Experimental research in the life sciences.",
    intro: "Write a short paragraph about your wet-lab experience: the labs you have worked in, the questions you studied and the techniques you used.",
    projects: [
      {
        title: "Project title",
        period: "2026 – Present",
        role: "Undergraduate Researcher, Lab name",
        desc: "One or two sentences on the research question, what you did and what you found.",
        badge: "ONGOING",
      },
      {
        title: "Another project",
        period: "2025",
        desc: "One or two sentences on this project.",
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
