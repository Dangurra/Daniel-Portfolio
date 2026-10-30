export type ProjectType = "standard" | "game" | "locked";

export type GallerySection = {
  title: string;
  images: { laptop: string; mobile: string; alt: string }[];
};

export type Project = {
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  banner: string;
  access: "public" | "private";
  type: ProjectType;
  lander: { laptop: string; mobile: string };
  body: string;
  tools: string[];
  liveUrl?: string;
  gallery: GallerySection[];
};

const img = (path: string) => `/images/projects/${path}`;

export const projects: Project[] = [
  {
    slug: "samba-nova",
    title: "Product design for enterprise AI platforms",
    company: "SambaNova Systems",
    period: "Internship · 2024",
    description:
      "Product designs for full-stack platforms with custom hardware and software for enterprise-grade AI.",
    tags: ["Web design", "Development", "Design systems"],
    banner: img("samba-nova/banner.webp"),
    access: "public",
    type: "standard",
    lander: {
      laptop: img("samba-nova/laptop/samba_lander-laptop.webp"),
      mobile: img("samba-nova/mobile/samba_lander-mobile.webp"),
    },
    body: "As an in-house design intern at SambaNova Systems, I worked across SambaCloud and SambaStudio — the company's platforms for deploying and fine-tuning large language models on custom AI hardware. I designed interfaces that make complex infrastructure legible to enterprise customers, and contributed brand assets including iconography and wallpapers used across the product suite.",
    tools: ["Figma", "Illustrator", "Photoshop"],
    liveUrl: "https://sambanova.ai",
    gallery: [
      {
        title: "SambaCloud",
        images: [1, 2, 3].map((n) => ({
          laptop: img(`samba-nova/laptop/sambacloud_${n}-laptop.webp`),
          mobile: img(`samba-nova/mobile/sambacloud_${n}-mobile.webp`),
          alt: `SambaCloud screen ${n}`,
        })),
      },
      {
        title: "SambaStudio",
        images: [1, 2].map((n) => ({
          laptop: img(`samba-nova/laptop/sambastudio_${n}-laptop.webp`),
          mobile: img(`samba-nova/mobile/sambastudio_${n}-mobile.webp`),
          alt: `SambaStudio screen ${n}`,
        })),
      },
      {
        title: "Brand & icons",
        images: [
          {
            laptop: img("samba-nova/laptop/samba_icons-laptop.webp"),
            mobile: img("samba-nova/mobile/samba_icons-mobile.webp"),
            alt: "SambaNova icon set",
          },
          {
            laptop: img("samba-nova/laptop/samba_dark_wallpaper-laptop.webp"),
            mobile: img("samba-nova/mobile/samba_dark_wallpaper-mobile.webp"),
            alt: "SambaNova dark wallpaper",
          },
          {
            laptop: img("samba-nova/laptop/samba_light_wallpaper-laptop.webp"),
            mobile: img("samba-nova/mobile/samba_light_wallpaper-mobile.webp"),
            alt: "SambaNova light wallpaper",
          },
        ],
      },
    ],
  },
  {
    slug: "poseidon",
    title: "Website design & development for aerospace",
    company: "Poseidon Aerospace",
    period: "2025",
    description:
      "Website design and development for an aerospace company building unmanned aircraft for commercial and defense logistics.",
    tags: ["Web design", "Development", "Design systems"],
    banner: img("poseidon/banner.webp"),
    access: "public",
    type: "standard",
    lander: {
      laptop: img("poseidon/laptop/poseidon_lander-laptop.webp"),
      mobile: img("poseidon/mobile/poseidon_lander-mobile.webp"),
    },
    body: "Poseidon Aerospace builds unmanned aircraft for commercial and defense logistics. I designed and built their marketing website from the ground up — translating deep technical aircraft specifications into a site that reads as credible to both defense procurement officers and commercial logistics partners, with a custom icon set and a full design system to keep future pages consistent.",
    tools: ["Figma", "Framer", "Illustrator"],
    liveUrl: "https://poseidonaerospace.com",
    gallery: [
      {
        title: "Website",
        images: [1, 2, 3, 4, 5].map((n) => ({
          laptop: img(`poseidon/laptop/poseidon_web_${n}-laptop.webp`),
          mobile: img(`poseidon/mobile/poseidon_web_${n}-mobile.webp`),
          alt: `Poseidon website screen ${n}`,
        })),
      },
      {
        title: "Brand & icons",
        images: [
          {
            laptop: img("poseidon/laptop/poseidon_icons-laptop.webp"),
            mobile: img("poseidon/mobile/poseidon_icons-mobile.webp"),
            alt: "Poseidon icon set",
          },
          {
            laptop: img("poseidon/laptop/poseidon_framer-laptop.webp"),
            mobile: img("poseidon/mobile/poseidon_framer-mobile.webp"),
            alt: "Poseidon site in Framer",
          },
        ],
      },
    ],
  },
  {
    slug: "tex-software",
    title: "Website for a market-intelligence software company",
    company: "Tex Software",
    period: "2026",
    description:
      "Website design and development for a software company building market-intelligence tools for the heavy-equipment industry.",
    tags: ["Web design", "Development"],
    banner: img("tex-software/banner.webp"),
    access: "public",
    type: "standard",
    lander: {
      laptop: img("tex-software/laptop/tex_lander-laptop.webp"),
      mobile: img("tex-software/mobile/tex_lander-mobile.webp"),
    },
    body: "Tex Software builds market-intelligence tools that help heavy-equipment dealers price and move inventory with confidence. I designed and built their site, including a persona-driven narrative that walks buyers through how the product fits their workflow, and a dedicated section unpacking Tex Intel — their core data product.",
    tools: ["Figma", "React", "Tailwind CSS"],
    liveUrl: "https://texsoftware.com",
    gallery: [
      {
        title: "Website",
        images: [1, 2].map((n) => ({
          laptop: img(`tex-software/laptop/tex_web_${n}-laptop.webp`),
          mobile: img(`tex-software/mobile/tex_web_${n}-mobile.webp`),
          alt: `Tex Software website screen ${n}`,
        })),
      },
      {
        title: "Tex Intel",
        images: [1, 2, 3].map((n) => ({
          laptop: img(`tex-software/laptop/tex_intel_${n}-laptop.webp`),
          mobile: img(`tex-software/mobile/tex_intel_${n}-mobile.webp`),
          alt: `Tex Intel screen ${n}`,
        })),
      },
      {
        title: "Persona",
        images: [
          {
            laptop: img("tex-software/laptop/tex_persona-laptop.webp"),
            mobile: img("tex-software/mobile/tex_persona-mobile.webp"),
            alt: "Tex Software buyer persona",
          },
        ],
      },
    ],
  },
  {
    slug: "albacore",
    title: "Full website rebrand & design system",
    company: "Albacore Inc.",
    period: "2026",
    description:
      "Website design and development for a YC-backed defense startup building long-range autonomous submarines.",
    tags: ["Web design", "UX/UI", "Design systems", "Marketing"],
    banner: img("albacore/banner.webp"),
    access: "public",
    type: "standard",
    lander: {
      laptop: img("albacore/laptop/albacore_lander-laptop.webp"),
      mobile: img("albacore/mobile/albacore_lander-mobile.webp"),
    },
    body: "Albacore is a YC-backed defense startup building long-range autonomous submarines. I led a full rebrand and website design system — covering the marketing site, an investor deck, event posters, and stickers — giving a deep-tech hardware company a visual identity that reads as serious and credible across every surface investors and partners see.",
    tools: ["Figma", "Illustrator", "Photoshop"],
    liveUrl: "https://albacore.com",
    gallery: [
      {
        title: "Website",
        images: [
          {
            laptop: img("albacore/laptop/albacore_web_1-laptop.webp"),
            mobile: img("albacore/mobile/albacore_web_1-mobile.webp"),
            alt: "Albacore website screen 1",
          },
          {
            laptop: img("albacore/laptop/albacore_web_2-laptop.webp"),
            mobile: img("albacore/mobile/albacore_web_2-mobile.webp"),
            alt: "Albacore website screen 2",
          },
          {
            laptop: img("albacore/laptop/albacore_webi_3-laptop.webp"),
            mobile: img("albacore/mobile/albacore_web_3-mobile.webp"),
            alt: "Albacore website screen 3",
          },
        ],
      },
      {
        title: "Brand collateral",
        images: [
          {
            laptop: img("albacore/laptop/albacore_stickers-laptop.webp"),
            mobile: img("albacore/mobile/albacore_stickers-mobile.webp"),
            alt: "Albacore stickers",
          },
          {
            laptop: img("albacore/laptop/albacore_posters-laptop.webp"),
            mobile: img("albacore/mobile/albacore_posters-mobile.webp"),
            alt: "Albacore event posters",
          },
          {
            laptop: img("albacore/laptop/albacore_deck-laptop.webp"),
            mobile: img("albacore/mobile/albacore_deck-mobile.webp"),
            alt: "Albacore investor deck",
          },
        ],
      },
    ],
  },
  {
    slug: "braze",
    title: "A 2D platformer about creative block",
    company: "Braze",
    period: "Personal project",
    description: "A 2D platformer about creative block, built in Unity",
    tags: ["Game design", "Unity", "Development"],
    banner: img("braze/banner.webp"),
    access: "public",
    type: "game",
    lander: {
      laptop: img("braze/laptop/braze_lander-laptop.webp"),
      mobile: img("braze/mobile/braze_lander-mobile.webp"),
    },
    body: "Braze is a 2D platformer I built solo in Unity for Ludum Dare 57, where each stage represents a different creative obstacle — anxiety, burnout, perfectionism, and imposter syndrome. I designed and built every environment, the controls, and the game feel, and shipped it to itch.io.",
    tools: ["Unity", "C#", "Illustrator", "Photoshop"],
    liveUrl: "https://dangurra.itch.io/braze",
    gallery: [
      {
        title: "Environments",
        images: [
          { key: "dusty_field", alt: "The Dusty Field stage" },
          { key: "dank_cave", alt: "The Dank Cave stage" },
          { key: "floating_meadows", alt: "The Floating Meadows stage" },
          { key: "the_tower", alt: "The Tower stage" },
        ].map(({ key, alt }) => ({
          laptop: img(`braze/laptop/braze_${key}-laptop.webp`),
          mobile: img(`braze/mobile/braze_${key}-mobile.webp`),
          alt,
        })),
      },
      {
        title: "Controls",
        images: [
          {
            laptop: img("braze/laptop/braze_controls-laptop.webp"),
            mobile: img("braze/laptop/braze_controls-laptop.webp"),
            alt: "Braze controls reference",
          },
        ],
      },
    ],
  },
  {
    slug: "plaid-again",
    title: "Product & web design at a creative agency",
    company: "Plaid Again Design Agency",
    period: "2025–2026",
    description:
      "Design Studio working with clients across the medical technology and financial services industries.",
    tags: ["Product design", "Accessibility"],
    banner: img("plaid-again/banner.webp"),
    access: "private",
    type: "locked",
    lander: {
      laptop: img("plaid-again/laptop/plaid_again_login-laptop.webp"),
      mobile: img("plaid-again/mobile/plaid_again_login-mobile.webp"),
    },
    body: "Work for Plaid Again Design Agency's clients is under NDA, including Tara Mind and ConnexPay. This case study stays private while those contracts are active.",
    tools: ["Figma", "Illustrator"],
    gallery: [],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(slug: string) {
  return projects.filter((p) => p.slug !== slug);
}
