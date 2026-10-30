/* ============================================================
   VELSHA AIRSPACE — all editable content lives here.
   ============================================================ */

export const SITE = {
  name: "VELSHA AIRSPACE",
  tagline: "Learn Aviation. Engineer the Future.",
  domain: "https://www.velshaaerospace.com",
  email: "info@velshaaerospace.com", // TODO: confirm with client
  youtube: "https://www.youtube.com/@velshaairspace", // TODO: real channel URL
  founderName: "Founder Name", // TODO: real name
  // Empty href = icon/link is hidden automatically
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@velshaairspace" },
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "X", href: "" },
  ],
};

export const IMG = {
  hero: "/images/hero.jpg",
  academy: "/images/academy.jpg",
  aircraft: "/images/aircraft.jpg",
  founder: "/images/founder.jpg",
  header: "/images/page-header.jpg",
};

// Background image with a gradient fallback (shows if the image is missing)
export const bgImage = (
  src,
  fallback = "linear-gradient(135deg,#0a1d3f 0%,#1b4fd6 60%,#8ec5ff 100%)"
) => ({ backgroundImage: `url(${src}), ${fallback}` });

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/academy", label: "Academy" },
  { to: "/aircraft-rd", label: "Aircraft R&D" },
  { to: "/engineering-lab", label: "Engineering Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const TOP_LINKS = [
  { label: "Sustainability", to: "/aircraft-rd" },
  { label: "YouTube", href: SITE.youtube },
  { label: "Partnerships", to: "/contact" },
  { label: "Contact", to: "/contact" },
];

export const SEARCH_INDEX = [
  { title: "Home", to: "/", keywords: "velsha airspace sustainable flight vision" },
  { title: "VELSHA Academy", to: "/academy", keywords: "courses education learn youtube from zero to aircraft guides" },
  { title: "Aircraft R&D", to: "/aircraft-rd", keywords: "roadmap prototype sustainable aircraft research manufacturing" },
  { title: "Engineering Lab", to: "/engineering-lab", keywords: "calculator wing loading lift drag thrust battery" },
  { title: "About", to: "/about", keywords: "founder story mission" },
  { title: "Contact", to: "/contact", keywords: "collaboration email partnership universities" },
];

export const DIVISIONS = [
  {
    key: "academy",
    title: "VELSHA Academy",
    text: "Learn the science and engineering behind flight.",
    cta: "Explore Courses",
    to: "/academy",
    image: IMG.academy,
  },
  {
    key: "aircraft",
    title: "VELSHA Aircraft",
    text: "From engineering concepts to the future of sustainable aviation.",
    cta: "Explore Our Vision",
    to: "/aircraft-rd",
    image: IMG.aircraft,
  },
];

// youtubeId: paste the video ID (the part after ?v= in the YouTube URL)
export const TOPICS = [
  {
    key: "aerodynamics",
    title: "Aerodynamics",
    text: "How wings generate lift, why drag exists, and how airflow shapes aircraft design.",
    youtubeId: "",
  },
  {
    key: "structures",
    title: "Aircraft Structures",
    text: "The materials, loads and structural layouts that keep an airframe strong and light.",
    youtubeId: "",
  },
  {
    key: "propulsion",
    title: "Propulsion",
    text: "From jet engines to electric and hybrid concepts — how aircraft produce thrust.",
    youtubeId: "",
  },
  {
    key: "mechanics",
    title: "Flight Mechanics",
    text: "Stability, control and performance — how an aircraft behaves in the air.",
    youtubeId: "",
  },
  {
    key: "sustainable",
    title: "Sustainable Aviation",
    text: "The technologies and ideas pointing toward lower-emission flight.",
    youtubeId: "",
  },
];

// status: "completed" | "in-progress" | "planned"
export const STAGES = [
  {
    n: 1,
    title: "Engineering education and research",
    text: "Building aerospace knowledge through educational content, study and applied engineering research.",
    status: "in-progress",
    image: "/images/roadmap-1.jpg",
  },
  {
    n: 2,
    title: "Small-scale aircraft models and prototypes",
    text: "Designing, building and testing scale models to validate engineering ideas.",
    status: "planned",
    image: "/images/roadmap-2.jpg",
  },
  {
    n: 3,
    title: "Sustainable aircraft concept development",
    text: "Developing concepts for efficient, lower-emission aircraft configurations.",
    status: "planned",
    image: "/images/roadmap-3.jpg",
  },
  {
    n: 4,
    title: "Engineering partnerships and future manufacturing",
    text: "Working with partners and institutions toward production-ready aircraft technology.",
    status: "planned",
    image: "/images/roadmap-4.jpg",
  },
];

export const STATUS_LABEL = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
};

// Add progress updates here when available: { date: "Nov 2026", title: "…", text: "…" }
export const UPDATES = [];

export const PRODUCTS = [
  {
    key: "guides",
    title: "Aerospace Engineering Digital Guides",
    text: "Clear, structured guides that explain core aerospace engineering topics.",
    price: "Coming soon",
    image: "/images/product-guides.jpg",
  },
  {
    key: "course",
    title: "From Zero to Aircraft — Online Course",
    text: "A step-by-step course that takes you from the fundamentals to aircraft design thinking.",
    price: "Coming soon",
    image: "/images/product-course.jpg",
  },
  {
    key: "tools",
    title: "Interactive Engineering Tools",
    text: "Calculators and simulators that make engineering concepts hands-on.",
    price: "Coming soon",
    image: "/images/product-tools.jpg",
  },
];