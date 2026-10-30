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
    title: "Product & Web Designer",
    date: "2025–2026",
    description:
      "Design work for clients across medical technology and financial services, including Tara Mind and ConnexPay.",
    logo: "/images/about/logos/plaid-again-logo.webp",
  },
  {
    company: "Albacore Inc.",
    title: "Brand & Web Designer",
    date: "2026",
    description:
      "Full rebrand and website design system for a YC-backed defense startup building autonomous submarines.",
    logo: "/images/about/logos/albacore-logo.webp",
  },
  {
    company: "Poseidon Aerospace",
    title: "Web Designer & Developer",
    date: "2025",
    description:
      "Designed and built the marketing site for an aerospace company building unmanned aircraft.",
    logo: "/images/about/logos/poseidon-logo.webp",
  },
  {
    company: "SambaNova Systems",
    title: "Design Intern",
    date: "2024",
    description:
      "Product design across SambaCloud and SambaStudio, plus brand assets for enterprise AI platforms.",
    logo: "/images/about/logos/sambanova-logo.webp",
  },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "What kind of projects are you looking for?",
    answer:
      "Mostly product design and website work — from early-stage startups needing a first site or design system, to teams that need a designer who can also build what they design.",
  },
  {
    question: "Do you take on freelance or contract work?",
    answer:
      "Yes. I'm available for freelance and contract engagements alongside full-time roles — reach out with scope and timeline and I'll let you know if it's a fit.",
  },
  {
    question: "What's your process like?",
    answer:
      "I start by understanding how the underlying product or system actually works, then design and build in parallel so the interface stays grounded in what's technically real — not just what looks good in a mockup.",
  },
];

export const aboutIntro =
  "I'm a product designer and developer who likes understanding how things work before designing how they look. Most of my projects start with a technical question — how does this hardware function, how does this data pipeline move — and the design follows from there. I've worked across aerospace, enterprise AI, defense, and software, usually owning a project from first sketch through shipped code.";

export const socialLinks = [
  { label: "itch.io", url: "https://dangurra.itch.io/braze" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/daniel-gur-846499223/" },
  { label: "Instagram", url: "https://www.instagram.com/danlel_gur/" },
];
