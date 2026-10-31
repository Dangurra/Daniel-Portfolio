export type ProjectType = "standard" | "game" | "locked";

export type GallerySection = {
  title: string;
  images: { laptop: string; mobile: string; alt: string }[];
};

export type BodySection = {
  title: string;
  paragraphs: string[];
};

export type Tool = { name: string; icon: string };

export type Project = {
  slug: string;
  title: string;
  /** Overrides `company` as the H1 on the project page itself, when Figma's page title differs from the plain company name. */
  pageHeading?: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  banner: string;
  access: "public" | "private";
  type: ProjectType;
  lander: { laptop: string; mobile: string };
  sections: BodySection[];
  tools: Tool[];
  skills: string;
  timeline: string;
  role: string;
  collaborators?: string;
  liveUrl?: string;
  visitLabel: string;
  gallery: GallerySection[];
};

const img = (path: string) => `/images/projects/${path}`;

const T = {
  figma: { name: "Figma", icon: "figma" },
  illustrator: { name: "Illustrator", icon: "illustrator" },
  photoshop: { name: "Photoshop", icon: "photoshop" },
  afterEffects: { name: "After Effects", icon: "after-effects" },
  premiere: { name: "Premiere", icon: "premiere" },
  fresco: { name: "Fresco", icon: "fresco" },
  adobeSuite: { name: "Adobe Suite", icon: "adobe-suite" },
  framer: { name: "Framer", icon: "framer" },
  svgator: { name: "Svgator", icon: "svgator" },
  cloudflare: { name: "Cloudflare", icon: "cloudflare" },
  resend: { name: "Resend", icon: "resend" },
  claude: { name: "Claude", icon: "claude" },
  topaz: { name: "Topaz", icon: "topaz" },
  react: { name: "React", icon: "react" },
  javascript: { name: "JavaScript", icon: "javascript" },
  vercel: { name: "Vercel", icon: "vercel" },
  astro: { name: "Astro", icon: "astro" },
  sanity: { name: "Sanity", icon: "sanity" },
  csharp: { name: "C#", icon: "csharp" },
  html5: { name: "HTML5", icon: "html5" },
  gsap: { name: "GSAP", icon: "gsap" },
  css: { name: "CSS", icon: "css" },
  tailwind: { name: "Tailwind CSS", icon: "css" },
  p5js: { name: "P5.js", icon: "p5.js" },
  webgl: { name: "WebGL", icon: "webgl" },
  unity: { name: "Unity", icon: "unity" },
} satisfies Record<string, Tool>;

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
    sections: [
      {
        title: "My time at SambaNova Systems.",
        paragraphs: [
          "During my 13-week internship at SambaNova Systems, I worked across two of the company's enterprise AI products: SambaStudio and SambaCloud. I joined at an interesting point for the company. SambaNova was shifting from primarily enterprise AI infrastructure toward putting its custom hardware directly in the hands of developers, with inference speed becoming a major part of its product story.",
          "For SambaStudio, I redesigned the login experience. The existing page broke in dark mode, relied on outdated iconography, and featured artwork that had little connection to the product. I explored several visual directions and took them through four rounds of design reviews, but while the concepts worked, none of them felt completely right to me. I wanted to try one more illustration-based approach before settling on a direction.",
          "At the time, SambaNova was heavily emphasizing the inference performance of its custom hardware. That pushed me toward using server racks as the central visual metaphor. The concept was not meant to represent the product literally. Users were not connecting directly to a rack of SambaNova servers. Instead, I wanted it to feel as though SambaNova's computing power was sitting right beside their machines, giving them immediate access to that performance. After more than **56 iterations**, the server-rack direction was approved for production.",
          "For SambaCloud, I was designing for a product that was still taking shape. The platform publicly launched near the end of my internship in September 2024, giving developers direct access to SambaNova's infrastructure and models such as Llama 3.1 405B. That created a different design challenge from SambaStudio. A highly technical infrastructure product now had to make sense to developers who might never think about the hardware underneath it.",
          "I designed the SambaCloud landing page and key pages within the web app, starting by mapping five core personas, from students experimenting with AI to enterprise teams building production applications. I shaped the experience around what those users needed to understand quickly: why the platform was fast, what they could build with it, which starter kits matched their use cases, and how to get started. I took the work from early wireframes through to the final UI and also created a custom icon set for the product.",
          "Across both projects, I was designing around the same broader challenge: making advanced AI infrastructure feel understandable, polished, and approachable. Several of the pieces I contributed are still in production today, even as SambaNova's broader design language has continued to evolve.",
        ],
      },
    ],
    tools: [T.figma, T.afterEffects, T.illustrator, T.photoshop],
    skills:
      "UI/UX design, illustration, iconography, animation, Art direction, product design, visual design",
    timeline: "June - September 2024 · 13 weeks",
    role: "Product Designer (Internship)",
    liveUrl: "https://sambanova.ai",
    visitLabel: "Visit site",
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
    sections: [
      {
        title: "My time with Poseidon Aerospace.",
        paragraphs: [
          "Founded in 2024, Poseidon is developing purpose-built unmanned cargo aircraft for both commercial and defense logistics. In November 2025, the company was preparing to publicly announce an **$11 million seed round** alongside its Egret and Heron aircraft announcement. The problem was that its existing website still felt like an early-stage startup template. It did not communicate the scale of what Poseidon was building or the credibility the company needed as more customers, investors, recruits, and press were about to see it.",
          "Working with Joel Rowley, I had four weeks to take the site from early concepts to a live product. Before designing, I met with people across the company to understand what each part of the site actually needed to accomplish. Commercial customers needed to understand the economics of autonomous air freight. Defense users cared about operating in remote and contested environments. Recruits needed to see a serious aerospace company worth joining. Investors and press needed to quickly understand the aircraft, the business, and why Poseidon existed. That research became the foundation for the site's information architecture, with dedicated **Aircraft, Commercial, Defense, Careers, News, and Contact** experiences instead of trying to explain the entire company on one marketing page. The structure is still visible in the live site today.",
          "One of the biggest design challenges was that Poseidon was selling the same underlying idea to very different audiences. On the commercial side, the story centered on moving more cargo with lower operating costs, less fuel, and greater aircraft utilization. On the defense side, the same aircraft became a logistics platform for moving cargo without depending on conventional infrastructure.",
          "I also wanted the website to show the aircraft rather than bury visitors in aerospace copy. Large renders, motion, specifications, comparison points, and interactive sections became the primary way of communicating what made the aircraft different. I designed the experience in Figma, then built it in Framer, using custom React and JavaScript where the project needed more than the platform could provide. Behind the visible pages, I built the systems needed to keep the site useful after launch: separate inquiry routing for defense and commercial leads, a CMS-powered newsroom, an API-synced job board, and Cloudflare-hosted video so the site could use large aircraft footage without sacrificing performance.",
          "The deadline was fixed around Poseidon's funding announcement, so there was very little separation between design and development. I was moving back and forth between page structure, visual design, responsive behavior, content changes, animation, and production issues throughout the four-week build. The site went live alongside Poseidon's $11 million funding announcement on November 5, 2025.",
        ],
      },
      {
        title: "Analytic Report",
        paragraphs: [
          "In the first ten days after launch, the site reached **9.3K unique visitors and 21K pageviews**. Careers alone received more than **5,000 views**, and the new inquiry system routed **22 real customer inquiries to the appropriate teams**. The site was later featured by **Framer, including in its startup website collection**. More importantly, it became something Poseidon could continue building on rather than a one-time launch site. Much of the structure and design remains in production today, and the live website still credits dgur and rowleyvzn for its design and build.",
        ],
      },
    ],
    tools: [
      T.adobeSuite,
      T.illustrator,
      T.photoshop,
      T.afterEffects,
      T.premiere,
      T.figma,
      T.framer,
      T.svgator,
      T.cloudflare,
      T.resend,
      T.claude,
      T.topaz,
      T.react,
      T.javascript,
    ],
    skills:
      "Web design, UX research, information architecture, design system, web development, CMS, animation",
    timeline: "October - November 2025 · 4 weeks",
    role: "Contractor - Web Developer/Product Designer",
    collaborators: "Joel Rowley - Creative Director",
    liveUrl: "https://poseidonaerospace.com",
    visitLabel: "Visit live site",
    gallery: [
      {
        title: "Website Design",
        images: [1, 2, 3, 4, 5].map((n) => ({
          laptop: img(`poseidon/laptop/poseidon_web_${n}-laptop.webp`),
          mobile: img(`poseidon/mobile/poseidon_web_${n}-mobile.webp`),
          alt: `Poseidon website screen ${n}`,
        })),
      },
      {
        title: "Poseidon Aerospace Icons",
        images: [
          {
            laptop: img("poseidon/laptop/poseidon_icons-laptop.webp"),
            mobile: img("poseidon/mobile/poseidon_icons-mobile.webp"),
            alt: "Poseidon icon set",
          },
        ],
      },
      {
        title: "Recognition: Framer's Best Websites",
        images: [
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
    sections: [
      {
        title: "My time with Tex Software.",
        paragraphs: [
          "**Tex Software** builds market-intelligence tools for the heavy-equipment industry. Its primary platform, **Tex Intel**, helps dealers, brokers, lenders, rental companies, and service businesses understand who owns what, locate buyers, find off-market equipment, track fleet changes, and explore regional markets through ownership data.",
          "I worked with **Joel Rowley** on the Tex website over approximately six weeks. The project began as a rapid update to Tex's existing Astro site, focused on cleaning up its design language, improving readability, and creating greater consistency across the experience. As we learned more about the product and its audiences, the scope grew into a complete ground-up redesign.",
          "For the full redesign, Joel led the creative direction and developed the brand system, including the identity, typography, logo treatments, and broader visual language. I led the **UI design and design production**, translating that direction into the pages, components, responsive layouts, and mobile interactions that made up the website. We explored more than **30 homepage concepts**, using the homepage as a testing ground for how Tex could balance modern software, American heavy industry, and the practical culture of the people using its product.",
          "The final direction combined bold typography, industrial photography, and technical grid patterns to position Tex as a modern software company that still felt connected to the heavy-equipment industry. I translated that direction into a reusable website system covering typography, spacing, navigation, content sections, feature cards, forms, calls to action, and audience-page layouts. That system became increasingly important as the project expanded from a website refresh into more than **20 desktop pages** with supporting responsive designs.",
          "One of the main challenges was explaining what **Tex Intel actually did**. It was not enough to describe it as a database or sales tool. The website needed to show how equipment intelligence could fit into someone's daily work. For the Tex Intel product page, I recreated key parts of the platform and designed demonstrations for five specific use cases, along with its market-mapping tools and Scout, an integrated AI assistant that works with Tex's equipment and ownership data.",
          "Tex Intel serves six distinct audiences: dealers, rental companies, brokers, lenders, parts distributors, and mechanics. The homepage introduced the broader value of the platform, then guided visitors toward a page tailored to their role. Shared components kept these experiences consistent, while the messaging, imagery, benefits, and use cases changed to reflect each audience's priorities.",
          "Regardless of the path someone took through the website, the user flow supported the same business goal: build enough understanding and trust for visitors to book a demo or contact the Tex team. Calls to action were placed throughout the experience so the next step was always clear.",
          "Once the direction was close to established, we brought in a developer to turn the Figma system into the live website. I worked between Joel, the client, and our developer to prepare layouts, communicate responsive behavior, provide assets, review builds, and resolve inconsistencies between the designs and implementation. As the CONEXPO deadline approached and the workload expanded, we added more people to the project, including a separate designer who took ownership of Tex's event brochure.",
        ],
      },
      {
        title: "Final Result",
        paragraphs: [
          "The final result was a **coordinated team effort** across creative direction, UI design, content, development, and print. In six weeks, we took Tex from a limited website to a complete marketing system capable of explaining a complex product, speaking to multiple heavy-equipment audiences, supporting recruitment and customer stories, and representing the company at CONEXPO-CON/AGG in Las Vegas.",
        ],
      },
    ],
    tools: [
      T.adobeSuite,
      T.illustrator,
      T.photoshop,
      T.afterEffects,
      T.premiere,
      T.figma,
      T.framer,
      T.svgator,
      T.topaz,
      T.resend,
      T.vercel,
      T.astro,
      T.sanity,
      T.claude,
      T.react,
      T.javascript,
      T.csharp,
      T.html5,
      T.gsap,
      T.css,
    ],
    skills:
      "Web design, UX research, information architecture, design system, web development, CMS, animation, responsive design, component system, product visualization, content strategy, design handoff, production support",
    timeline: "January - February 2025 · 6 weeks",
    role: "Contractor - Web Developer/Product Designer",
    collaborators: "Joel Rowley - Creative Director",
    liveUrl: "https://texsoftware.com",
    visitLabel: "Visit live site",
    gallery: [
      {
        title: "Website Design",
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
        title: "Tex: Personas",
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
    sections: [
      {
        title: "My time with Albacore Incorporated.",
        paragraphs: [
          "**Albacore** builds mass-producible drone submarines for autonomous undersea operations. Its primary vehicle, **Ghostfin**, supports defense, surveillance, logistics, and ocean-survey missions across long distances. The website needed to explain an unfamiliar product, demonstrate its operational value, and establish Albacore as a credible company within a rapidly developing area of defense technology.",
          "I led the project independently while also working on the Tex Software redesign. The original brief was to create a single page containing everything from company positioning and product specifications to Ghostfin's technology and mission applications. My role expanded across **visual direction, UI design, design systems, interaction design, asset production, and development support**, while coordinating directly with the client and its internal developer.",
          "Albacore had a limited digital identity and very little finished marketing material, so I began with research, moodboarding, content architecture, and concept screens. I selected **Teko Variable** and **DM Sans** as the primary typefaces and created a focused palette of near-black, deep navy, steel blue, vivid light blue, and white. From there, I built a reusable system for typography, spacing, navigation, technical specifications, mission sections, and calls to action.",
          "The visual direction needed to feel technical and defense-oriented without resembling a conventional military contractor. Large typography, underwater environments, technical data, product imagery, and controlled motion positioned Ghostfin as both a physical vehicle and an advanced autonomous system. Because Albacore had limited photography and video, I also coordinated new asset production, gathered material from the client, and brought **Felix from 1P3D** into the project to create additional product renders.",
          "The most difficult part was that design, copywriting, asset production, and development were all moving simultaneously. I frequently designed ahead of finalized copy, using temporary content to establish hierarchy and keep production moving. At the same time, frequent reviews continued to change the direction and structure of the page. I worked closely with Albacore's internal developer to keep the evolving designs aligned with implementation and to separate foundational system changes from smaller content revisions.",
          "The **final launch push** required several of the most ambitious interactions to move from concept to production in approximately **five days**. I created image sequences using **GSAP**, pinned sections, animated lighting, and interactive product demonstrations. I produced the product video of Ghostfin by texturing, animating, and directing its camera movement in p5.js before compositing the output in Premiere Pro. I also **adapted a WebGL globe** with a custom texture and height map, turning Ghostfin's ocean-scale range into an interactive visual rather than another technical statistic.",
          "Behind the visible site, I built a **Sanity-powered news system** that allowed Albacore to publish announcements or link to external coverage without developer support. After launch, I continued working with the team through additional iterations, bug fixes, asset compression, and performance optimization. The number of layered interactions made the site technically demanding, and returning to it over several months taught me how quickly visual ambition can create technical debt when scope, content, and development are all changing together.",
        ],
      },
      {
        title: "Post Launch",
        paragraphs: [
          "This was one of the **most demanding client projects** I had led independently. It required me to manage a changing scope, external creatives, client expectations, technical limitations, and another major website project at the same time. It strengthened my ability to explain tradeoffs, document design reasoning, protect consistency, and continue moving a project forward under pressure.",
          "I later supported Albacore with investor presentations, one-pagers, advertisements, logos, stickers, and illustrations. I also returned to the website to create dedicated **defense and commercial sections** showing Ghostfin across different mission scenarios. The result was more than a single landing page. It became a flexible digital system that Albacore could continue expanding as its product, missions, and company evolved.",
        ],
      },
    ],
    tools: [
      T.adobeSuite,
      T.illustrator,
      T.photoshop,
      T.afterEffects,
      T.fresco,
      T.premiere,
      T.figma,
      T.svgator,
      T.cloudflare,
      T.vercel,
      T.resend,
      T.topaz,
      T.claude,
      T.react,
      T.csharp,
      T.javascript,
      T.html5,
      T.tailwind,
      T.p5js,
      T.webgl,
    ],
    skills:
      "Web design, UX research, information architecture, design system, web development, CMS, animation, responsive design, component system, product visualization, content strategy, design handoff, production support",
    timeline: "February - August 2026 · 7 months",
    role: "Contractor - Web Developer/Product Designer",
    collaborators: "Felix 1P3D - 3D Artist",
    liveUrl: "https://albacore.com",
    visitLabel: "Visit live site",
    gallery: [
      {
        title: "Website Design",
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
        title: "Albacore Marketing",
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
    pageHeading: "Braze - Unity Game",
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
    sections: [
      {
        title: "My time working on Braze.",
        paragraphs: [
          "Braze is a **short 2D platformer** about the emotional cycle of **creative block**. Across four levels, the game explores anxiety, burnout, perfectionism, and imposter syndrome. Instead of explaining those feelings through exposition, we used atmosphere, movement, obstacles, and color to make each stage feel different to play.",
          "I created Braze with **Jake Crock** over four weeks as our final school project. Jake led the illustration, character design, animation, level art, and broader visual direction. I led the game development and Unity implementation, while contributing to the game design, UX, research, storyboarding, and art direction. It was my first time building a complete game, so I had to learn Unity and C# while simultaneously designing, testing, and shipping the experience.",
          "The development process involved constant back-and-forth between learning and implementation. I would research how a system worked, build an initial version, run into a new problem, and return to the documentation or code to understand what had gone wrong. Early roadblocks could take hours to solve, but each one helped me understand Unity more deeply. As the project progressed, I became faster at diagnosing problems, writing scripts, connecting systems, and translating our ideas into working gameplay.",
          "Each level represented a different stage of creative block and used its own palette, scenery, pacing, and obstacles. The environments gradually developed from muted and desaturated spaces into more colorful and expressive worlds, creating a visual progression alongside the player. Jake developed the artwork and animation for the character and environments, while I translated those assets into playable levels and determined how movement, collision, triggers, and pacing would support each stage.",
          "Building the game meant learning the full structure of 2D development in Unity. I created the player-movement system, implemented sprinting, jumping, falling, wall sliding, and wall jumping, and added coyote time, a short grace period that allows players to jump just after leaving a platform. I also worked with tilemaps, Unity layers, custom hitboxes, checkpoints, dialogue triggers, scene transitions, particle effects, animation states, parallax backgrounds, and death-and-restart behavior. These systems needed to work together across four visually and mechanically distinct levels.",
          "Movement became one of the most important parts of the experience. Small timing changes could determine whether the game felt responsive or frustrating, especially during wall jumps and more precise platforming sections. We repeatedly adjusted acceleration, jump timing, collision boundaries, and animation transitions so the controls remained challenging without working against the player.",
          "The most unexpected response came when a player began **speedrunning** the game. He created a dedicated Speedrun.com page, submitted recorded attempts, and competed across full-game and individual-level categories. Seeing people replay our student project was such a delight to see.",
        ],
      },
      {
        title: "Final Result",
        paragraphs: [
          "Braze took me from **learning the Unity** interface to shipping and supporting a **complete playable game in four weeks**. The project taught me that game feel is created through dozens of small, interconnected decisions, from the length of a jump window to the placement of a trigger or the shape of a hitbox. **It also gave me experience working across design and development**, translating an emotional concept into a system someone could actively explore.",
        ],
      },
    ],
    tools: [T.adobeSuite, T.illustrator, T.photoshop, T.afterEffects, T.fresco, T.figma, T.unity, T.csharp],
    skills: "Game development, game design, UX design, storyboarding, research, art direction",
    timeline: "February - March 2025 · 4 weeks",
    role: "Contractor - Developer/Game Designer",
    collaborators: "Jake Crock - Illustrator/Designer",
    liveUrl: "https://dangurra.itch.io/braze",
    visitLabel: "Visit itch.io site",
    gallery: [
      {
        title: "Level Design",
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
    sections: [
      {
        title: "",
        paragraphs: [
          "Work for Plaid Again Design Agency's clients is under NDA, including Tara Mind and ConnexPay. This case study stays private while those contracts are active.",
        ],
      },
    ],
    tools: [T.figma, T.illustrator],
    skills: "",
    timeline: "",
    role: "",
    visitLabel: "",
    gallery: [],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(slug: string) {
  return projects.filter((p) => p.slug !== slug);
}

// Matches the Figma "Selected work" order, which differs from the
// definition order above.
const HOME_ORDER = [
  "plaid-again",
  "poseidon",
  "tex-software",
  "albacore",
  "samba-nova",
  "braze",
];

export function getHomeOrderedProjects() {
  return HOME_ORDER.map((slug) => getProject(slug)).filter(
    (p): p is Project => p !== undefined
  );
}

export function getAdjacentProjects(slug: string) {
  const ordered = getHomeOrderedProjects();
  const index = ordered.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  const previous = ordered[(index - 1 + ordered.length) % ordered.length];
  const next = ordered[(index + 1) % ordered.length];
  return { previous, next };
}
