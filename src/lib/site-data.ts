export const hero = {
  tagline:
    "Designer who builds interfaces, websites, and visual systems from concept through development.",
  specialties: "Product Design • 3D Modeling • UX/UI • Visual Design • Development",
  bio: "I'm Daniel Gur, a product designer working across interfaces, websites, 3D, and code. I like to see what makes things tick. To understand how they function and how that shapes the design.",
};

export const toolCategories: { category: string; tools: { name: string; icon: string }[] }[] = [
  {
    category: "Design",
    tools: [
      { name: "Adobe Suite", icon: "adobe-suite" },
      { name: "Illustrator", icon: "illustrator" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "Lightroom", icon: "adobe-lightroom" },
      { name: "After Effects", icon: "after-effects" },
      { name: "Premiere", icon: "premiere" },
      { name: "Fresco", icon: "fresco" },
      { name: "Figma", icon: "figma" },
      { name: "Svgator", icon: "svgator" },
      { name: "Shapr3D", icon: "shapr3d" },
      { name: "Framer", icon: "framer" },
    ],
  },
  {
    category: "Dev tools",
    tools: [
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Vercel", icon: "vercel" },
      { name: "Unity", icon: "unity" },
      { name: "Resend", icon: "resend" },
      { name: "Topaz", icon: "topaz" },
      { name: "Astro", icon: "astro" },
      { name: "Sanity", icon: "sanity" },
      { name: "Claude", icon: "claude" },
      { name: "Gemini", icon: "google-gemini" },
      { name: "Codex", icon: "codex" },
      { name: "GSAP", icon: "gsap" },
      { name: "WebGL", icon: "webgl" },
    ],
  },
  {
    category: "Languages",
    tools: [
      { name: "JavaScript", icon: "javascript" },
      { name: "C#", icon: "csharp" },
      { name: "HTML5", icon: "html5" },
      { name: "Tailwind CSS", icon: "css" },
      { name: "React", icon: "react" },
      { name: "P5.js", icon: "p5.js" },
      { name: "WebGL", icon: "webgl" },
    ],
  },
];

export const experience: {
  company: string;
  title: string;
  date: string;
  description: string;
  logo: string;
}[] = [
  {
    company: "Plaid Again Design Agency",
    title: "Product Designer",
    date: "2025–2026",
    description:
      "I designed web, application, and print assets for clients while maintaining consistency with their existing design systems. I led the redesign of Tara Mind's corporate health app to align with WCAG 2.2 AA standards while refreshing the design language.",
    logo: "/images/about/logos/plaid-again-logo.webp",
  },
  {
    company: "Albacore Incorporated",
    title: "UX/UI Designer",
    date: "2025–2026",
    description:
      "I built out component systems and design elements for a full website rebrand. I developed marketing assets across channels, including a multipurpose deck.",
    logo: "/images/about/logos/albacore-logo.webp",
  },
  {
    company: "Poseidon Aerospace",
    title: "Product Designer / Web Developer",
    date: "2025",
    description:
      "I built out component systems and design elements for a website rebrand. I worked across all company touch points, crafting a user experience for their target audience and developing the website with a robust, scalable system designed to grow with the company.",
    logo: "/images/about/logos/poseidon-logo.webp",
  },
  {
    company: "SambaNova Systems",
    title: "Product Design Intern",
    date: "2024",
    description:
      "I designed UX/UI for SambaStudio and SambaCloud, including login visuals, internal AI system workflows, and iconography. I gained hands-on experience with enterprise AI tools on projects with lasting impact that continue to shape current products, applying research-driven iteration and design frameworks throughout the process.",
    logo: "/images/about/logos/sambanova-logo.webp",
  },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Mostly product design and website work — from early-stage startups needing a first site or design system, to teams that need a designer who can also build what they design.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Figma for design, Illustrator and Photoshop for brand work, and Next.js, Tailwind, and GSAP on the code side — see the full toolkit above for everything else I reach for.",
  },
  {
    question: "How do you collaborate?",
    answer:
      "Async-first with regular check-ins — I share work in progress early so there are no surprises at the end, and I'm comfortable working directly with engineering teams, not just handing off static mockups.",
  },
];

export const aboutHeadline =
  "Designer who builds interfaces, websites, and visual systems from concept through development.";

export const aboutSubhead = "Who am I?";

export const aboutIntroParagraphs = [
  "I'm a product designer working across interfaces, websites, 3D, and code. I like to see what makes things tick. To understand how they function and how that shapes the design. I'll happily pick up a new tool if it helps me understand what I'm making.",
  "My projects range from working closely with a defense-tech startup on a website launch to redesigning a corporate health app's interface with accessibility in mind. Along the way, I've placed second in a 24-hour design challenge and had my work featured in Framer's gallery of the best startup websites.",
  "I like turning a good idea into something people can actually use.",
  "Best,",
];

export const toolsIntro =
  "A snapshot of tools across product design, visual systems, websites, and development.";

export const socialLinks = [
  { label: "itch.io", url: "https://dangurra.itch.io/braze" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/daniel-gur-846499223/" },
  { label: "Instagram", url: "https://www.instagram.com/danlel_gur/" },
];
