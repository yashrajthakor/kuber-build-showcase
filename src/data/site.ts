import kuberLogoImg from "@/assets/k1.png";
import hero from "@/assets/hero-construction.jpg";
import watersump from "@/assets/proj-watersump.jpg";
import watersump2 from "@/assets/proj-watersump2.jpg";
import watersump3 from "@/assets/proj-watersump3.jpg";
import rcc from "@/assets/proj-rcc.jpg";
import boundary from "@/assets/proj-boundary.jpg";
import pipeline from "@/assets/proj-pipeline.jpg";
import building from "@/assets/proj-building.jpg";
import shuttering from "@/assets/proj-shuttering.jpg";
import gutter from "@/assets/proj-gutter.jpg";
import rubble from "@/assets/proj-rubble.jpg";
import pvc from "@/assets/proj-pvc.jpg";
import color from "@/assets/proj-color.jpg";

export const kuberLogo = kuberLogoImg;

export const company = {
  name: "Kuber Enterprise",
  tagline: "Building Infrastructure with Quality & Trust",
  phone: "+91 96871 23941",
  phoneDigits: "919687123941",
  email: "info@kuber-enterprise.in",
  whatsappMessage:
    "Hello Kuber Enterprise, I would like to discuss a construction project.",
  logo: kuberLogo,
  heroImage: hero,
  description:
    "Kuber Enterprise specializes in civil construction, underground water infrastructure, RCC works, industrial construction, pipeline projects, shuttering, boundary walls, rubble soling, and allied civil engineering projects.",
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide name
};

export const services: Service[] = [
  { slug: "underground-water-sump", title: "Underground Water Sump Construction", description: "Large-scale underground RCC water sumps for municipal and government water supply projects.", icon: "Droplets" },
  { slug: "rcc-works", title: "RCC Construction Works", description: "High-quality reinforced cement concrete works for foundations, columns, beams and slabs.", icon: "Building" },
  { slug: "building-construction", title: "Building Construction", description: "Turnkey commercial and industrial building construction with structural integrity.", icon: "Building2" },
  { slug: "boundary-wall", title: "Boundary Wall Construction", description: "Strong, durable boundary walls for industries, factories and institutional sites.", icon: "Fence" },
  { slug: "di-pipeline", title: "DI Pipeline Laying", description: "Ductile Iron pipeline laying, alignment, jointing and commissioning for water systems.", icon: "GitBranch" },
  { slug: "pvc-pipeline", title: "PVC Pipeline Jointing", description: "Precision PVC pipeline jointing for distribution and irrigation networks.", icon: "Workflow" },
  { slug: "shuttering", title: "Shuttering Works", description: "Engineered shuttering and formwork for slabs, walls and circular structures.", icon: "LayoutGrid" },
  { slug: "rcc-gutter", title: "RCC Gutter Line Works", description: "Cast-in-place RCC gutters and drainage lines for roads and industrial sites.", icon: "Waves" },
  { slug: "rubble-soling", title: "Rubble Soling Works", description: "Foundation-grade rubble soling for site preparation and load-bearing surfaces.", icon: "Mountain" },
  { slug: "water-infrastructure", title: "Water Infrastructure Projects", description: "End-to-end water infrastructure execution for GWSSB and municipal projects.", icon: "Pipette" },
];

export type Project = {
  id: number;
  slug: string;
  title: string;
  client?: string;
  category: string;
  status: string;
  area?: string;
  description: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: 1, slug: "gwssb-23ll-underground-sump",
    title: "23.10 LL Underground Water Sump",
    client: "GWSSB", category: "Water Infrastructure", status: "Completed",
    description: "Construction of a 23.10 lakh-litre underground RCC water sump executed for the Gujarat Water Supply & Sewerage Board (GWSSB). Includes excavation, rebar fabrication, RCC casting and waterproofing.",
    cover: watersump, images: [watersump],
  },
  {
    id: 2, slug: "gwssb-50ll-underground-sump",
    title: "50.00 LL Underground Water Sump",
    client: "GWSSB", category: "Water Infrastructure", status: "Completed",
    description: "Large-capacity 50 lakh-litre underground sump construction for GWSSB with complete RCC works, shuttering, finishing and commissioning.",
    cover: watersump2, images: [watersump2],
  },
  {
    id: 3, slug: "kuber-texo-boundary-wall",
    title: "Boundary Wall Construction",
    client: "Kuber Texo", category: "Industrial Construction", status: "Completed",
    description: "Industrial boundary wall execution for Kuber Texo with brick masonry, RCC columns and structural reinforcement along the factory perimeter.",
    cover: boundary, images: [boundary],
  },
  {
    id: 4, slug: "gwssb-23ll-slab-shuttering",
    title: "23.10 LL Sump Slab Shuttering Work",
    client: "GWSSB", category: "Shuttering Works", status: "Completed",
    description: "Heavy slab shuttering and formwork execution on the 23.10 LL underground water sump including circular shuttering, propping and curing.",
    cover: shuttering, images: [shuttering],
  },
  {
    id: 5, slug: "kabir-texo-building",
    title: "Industrial Building Construction — 22,000 Sq Ft",
    client: "Kabir Texo Company", category: "Building Construction", status: "Completed",
    area: "22,000 Sq Ft",
    description: "Turnkey 22,000 sq. ft. industrial building construction including RCC structure, masonry, roofing, plastering and finishing works.",
    cover: building, images: [building],
  },
  {
    id: 6, slug: "pvc-pipeline-jointing",
    title: "PVC Pipeline Jointing Work",
    category: "Pipeline Infrastructure", status: "Completed",
    description: "PVC pipeline jointing and laying for distribution networks with solvent welding, alignment and pressure testing.",
    cover: pvc, images: [pvc],
  },
  {
    id: 7, slug: "gwssb-sump-color-work",
    title: "Underground Water Sump Colour Work",
    client: "GWSSB", category: "Finishing Works", status: "Completed",
    description: "Protective coating and colour finishing of completed GWSSB underground water sumps with waterproof epoxy.",
    cover: color, images: [color],
  },
  {
    id: 8, slug: "rcc-gutter-line",
    title: "RCC Gutter Line Work",
    category: "Civil Infrastructure", status: "Completed",
    description: "Cast-in-place RCC gutter line execution for stormwater drainage along industrial roads.",
    cover: gutter, images: [gutter],
  },
  {
    id: 9, slug: "gwssb-19ll-underground-sump",
    title: "19 LL Underground Water Sump",
    client: "GWSSB", category: "Water Infrastructure", status: "Completed",
    description: "19 lakh-litre underground RCC water sump constructed for GWSSB including excavation, rebar, RCC and finishing.",
    cover: watersump3, images: [watersump3],
  },
  {
    id: 10, slug: "kabir-texo-rubble-soling",
    title: "Rubble Soling Work",
    client: "Kabir Texo", category: "Industrial Site Development", status: "Completed",
    description: "Industrial site rubble soling for Kabir Texo as foundation base preparation for the factory floor.",
    cover: rubble, images: [rubble],
  },
  {
    id: 11, slug: "di-pipeline-laying",
    title: "DI Pipeline Laying Work",
    category: "Pipeline Infrastructure", status: "Completed",
    description: "Ductile Iron (DI) pipeline laying, alignment, jointing, testing and commissioning work for water infrastructure projects.",
    cover: pipeline, images: [pipeline],
  },
];

export const projectCategories = [
  "All",
  "Water Infrastructure",
  "RCC Works",
  "Building Construction",
  "Industrial Projects",
  "Pipeline Works",
  "Shuttering Works",
];

export function filterByCategory(cat: string): Project[] {
  if (cat === "All") return projects;
  const map: Record<string, string[]> = {
    "RCC Works": ["RCC Works", "Civil Infrastructure", "Finishing Works"],
    "Industrial Projects": ["Industrial Construction", "Industrial Site Development"],
    "Pipeline Works": ["Pipeline Infrastructure"],
    "Shuttering Works": ["Shuttering Works"],
    "Building Construction": ["Building Construction"],
    "Water Infrastructure": ["Water Infrastructure"],
  };
  const allowed = map[cat] ?? [cat];
  return projects.filter((p) => allowed.includes(p.category));
}

export const whyChooseUs = [
  { title: "Quality Workmanship", desc: "Strict quality control on every pour, joint and finish.", icon: "Award" },
  { title: "Experienced Team", desc: "Skilled civil engineers and site supervisors on the ground.", icon: "Users" },
  { title: "Timely Delivery", desc: "Disciplined project planning and milestone-driven execution.", icon: "Clock" },
  { title: "Safety Standards", desc: "Strict adherence to civil construction safety protocols.", icon: "ShieldCheck" },
  { title: "Competitive Pricing", desc: "Transparent estimates and value engineering.", icon: "BadgeIndianRupee" },
  { title: "Client Satisfaction", desc: "Long-term partnerships with GWSSB, industries & private clients.", icon: "Heart" },
];

export const stats = [
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 7, suffix: "+", label: "Infrastructure Projects" },
  { value: 5, suffix: "+", label: "Government Works" },
  { value: 3, suffix: "+", label: "Industrial Projects" },
];
