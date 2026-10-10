// ─────────────────────────────────────────────────────────────
// YOUR AREAS OF WORK — edit everything about your areas and
// projects here. The home page, the "Areas of Work" page and each
// area's own page all read from this file.
//
// Tips:
// - Wrap text in double quotes "..." (safe for apostrophes like I'm).
// - Every project needs a comma after its closing }.
// - "links", "badge", "skills" and "img" are optional. Delete the line if unused.
// - "skills" is a list: ["PCR", "Gel electrophoresis"]. It shows under the
//   project with the heading set by that area's "skillsLabel".
// - "links" is a list of buttons shown under the project:
//     links: [
//       { label: "Paper", url: "https://doi.org/..." },
//       { label: "Poster (PDF)", url: "/files/poster.pdf" },
//     ],
//   For your own PDFs, upload them to public/files/ and use "/files/name.pdf".
// - Images go in the /public folder, e.g. img: "/lab.jpg"
//
// DESCRIPTIONS WITH BULLET POINTS
// Wrap the description in backticks ` ` instead of quotes. Each new line is a
// new paragraph, and lines starting with "- " become bullet points:
//     desc: `First paragraph about the project.
//     - First bullet point
//     - Second bullet point
//     A closing paragraph.`,
// ─────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  period?: string;   // e.g. "Jan 2026 – Present"
  role?: string;     // e.g. "Undergraduate Researcher, XYZ Lab"
  desc: string;
  links?: { label: string; url: string }[]; // paper, poster, GitHub repo, essay PDF...
  badge?: string;    // small label, e.g. "ONGOING" or "PUBLISHED"
  skills?: string[]; // techniques / tech stack, e.g. ["PCR", "Molecular cloning"]
};

export type Area = {
  slug: string;      // used in the web address: /areas/<slug>
  title: string;
  summary: string;   // short line shown on the home page card
  intro: string;     // longer paragraph at the top of the area page
  img?: string;
  icon?: string;     // card icon: "flask", "code", "book" or "spark"
  skillsLabel?: string; // heading for each project's skills, e.g. "Techniques"
  projects: Project[];
};

export const AREAS: Area[] = [
  {
    slug: "lab-work",
    title: "Experimental Work",
    icon: "flask",
    summary: "Experimental research in the life sciences.",
    skillsLabel: "Techniques",
    intro: "While experimental biology is not my primary field of expertise, I have a significant amount of hands-on research, particularly in the field of synthetic biology.",
    projects: [
      {
        title: "Project title",
        period: "2026 – Present",
        role: "Undergraduate Researcher, Lab name",
        desc: "One or two sentences on the research question, what you did and what you found.",
        badge: "ONGOING",
        skills: ["Technique 1", "Technique 2"],
      },
      {
        title: "Molecular Cloning of LDHA and Expression of H6-MmLDHA Protein",
        period: "2025",
        role: "Undergraduate Student Researcher, Department of Microbiology, Yong Loo Lin School of Medicine",
        desc: `I used mouse RNA to carry out molecular cloning of the LDHA gene, followed by expression of the LDHA protein.
- Isolated mouse RNA, converted it into cDNA and amplified the LDHA gene
- Cut the gene with restriction enzymes, ligated it into a pET11-H6a plasmid vector and transformed it into competent DH5α cells for screening
- Transformed the H6-MmLDHA construct into BL21(DE3) pLysS E. coli cells for expression, then extracted and purified the protein
At every step, checks were made to ensure the gene was free of mutations and that the right protein was being expressed and extracted.`,
        skills: ["Molecular Cloning", "RT-PCR", "RE Digest and Ligation", "DNA Sequencing", "SDS-PAGE", "Protein Assay"]
      },
      {
        title: "Building a Biosensor to Detect Changes in Metabolite in the Environment",
        period: "2024",
        role: "Undergraduate Student Researcher, Special Programme in Science",
        desc: "I used BioBrick parts and molecular biology techniques to successfully create a genetic circuit that was inserted into E. coli cells to act as a device for us to detect changes in arabinose in the environment.",
        skills: ["BioBrick assembly", "PCR", "Gel electrophoresis", "Molecular cloning"],
      },
    ],
  },
  {
    slug: "computational",
    title: "Computational Projects",
    icon: "code",
    summary: "Building models and analysing biological data with code.",
    skillsLabel: "Tech stack",
    intro: "Write a short paragraph about your computational research: the kinds of models you build, the tools and languages you use and the problems you apply them to.",
    projects: [
      {
        title: "Project title",
        period: "2026",
        desc: "One or two sentences on the model or analysis you built and what it showed.",
        links: [
          { label: "GitHub", url: "https://github.com/hayleylim05" },
        ],
        skills: ["Python", "NumPy", "pandas"],
      },
      {
        title: "Investigation of Different Fragmentation Methods for Drug Database Preparation",
        period: "June 2022-June 2023",
        role: "Student Researcher, Bioinformatics Institute @ ASTAR",
        desc: "description",
        links: [
          {label: "GitHub", url:"https://github.com/hayleylim05"},{label: "Paper", url:"https://link.springer.com/chapter/10.1007/978-981-99-8369-8_32?"},
        ],
        skills: ["Python"],
      },
    ],
  },
  {
    slug: "philosophy",
    title: "Philosophy",
    icon: "book",
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
