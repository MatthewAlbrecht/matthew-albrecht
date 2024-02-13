export const categories = [
  { id: "showAll", label: "Show All" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "React", label: "React" },
  { id: "Team Lead", label: "Team Lead" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export interface ResumeSection {
  dates: string;
  title: string;
  company: Company;
  bullets: Bullet[];
  id: string;
}

export type Bullet = {
  keywords: CategoryId[];
  text: string | JSX.Element;
};

type Company = {
  name: string;
  url: string | null;
};

const data = [
  {
    id: "fa",
    title: "Sr. Software Engineer",
    company: { name: "Free Agency", url: "https://freeagency.com" },
    dates: "2020-2023",
    bullets: [
      {
        keywords: ["React", "Frontend"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
      {
        keywords: ["Team Lead", "Backend"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
      {
        keywords: ["Frontend", "Team Lead"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
    ],
  },
  {
    id: "pm",
    title: "Frontend Engineer",
    company: { name: "Penn Mutual", url: "https://www.pennmutual.com" },
    dates: "2019-2020",
    bullets: [
      {
        keywords: ["Frontend"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
      {
        keywords: ["Team Lead", "Backend"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
      {
        keywords: ["Frontend", "Team Lead"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
    ],
  },
  {
    id: "mr",
    title: "Frontend Engineer",
    company: { name: "Mondo Robot", url: "https://mondorobot.com" },
    dates: "2018-2019",
    bullets: [
      {
        keywords: ["React", "Frontend"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
      {
        keywords: ["Team Lead", "Backend"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
      {
        keywords: ["Frontend", "Team Lead"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
    ],
  },
  {
    id: "mm",
    title: "Fullstack Engineer",
    company: { name: "Made Movement", url: null },
    dates: "2017-2018",
    bullets: [
      {
        keywords: ["React", "Frontend"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
      {
        keywords: ["Team Lead", "Backend"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
      {
        keywords: ["Frontend", "Team Lead"],
        text: "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      },
    ],
  },
] satisfies ResumeSection[];

export type Skill = {
  name: string;
  keywords: CategoryId[];
};

export const skills: Skill[] = [
  { name: "TypeScript", keywords: ["Frontend", "Backend"] },
  { name: "JavaScript", keywords: ["Frontend", "Backend"] },
  { name: "Python", keywords: ["Backend"] },
  { name: "HTML", keywords: ["Frontend"] },
  { name: "CSS", keywords: ["Frontend"] },
  { name: "React", keywords: ["Backend", "Frontend", "React"] },
  { name: "NextJS", keywords: ["Backend", "Frontend", "React"] },
  { name: "GraphQL", keywords: ["Backend", "Frontend"] },
  { name: "Apollo", keywords: ["Frontend", "React"] },
  { name: "NodeJS", keywords: ["Backend"] },
  { name: "Vue", keywords: ["Frontend"] },
  { name: "Nuxt", keywords: ["Frontend", "Backend"] },
  { name: "Astro", keywords: ["Frontend"] },
  { name: "Chrome Manifest v3", keywords: ["Frontend"] },
  { name: "tRPC", keywords: ["Backend", "Frontend"] },
  { name: "Prisma", keywords: ["Backend"] },
  { name: "PostgreSQL", keywords: ["Backend"] },
  { name: "Redis", keywords: ["Backend"] },
  { name: "MongoDB", keywords: ["Backend"] },
  { name: "SQL", keywords: ["Backend"] },
  { name: "PlanetScale", keywords: ["Backend"] },
  { name: "React Testing Library", keywords: ["Frontend", "React"] },
  { name: "Jest", keywords: ["Frontend", "React"] },
  { name: "TailwindCSS", keywords: ["Frontend"] },
  { name: "CSS-in-JS", keywords: ["Frontend", "React"] },
  { name: "Vercel", keywords: ["Backend", "Frontend", "React"] },
  { name: "Netlify", keywords: ["Frontend", "Backend", "React"] },
  { name: "Ariadne", keywords: ["Backend"] },
  { name: "Flask", keywords: ["Backend"] },
  { name: "Starlette", keywords: ["Backend"] },
  { name: "pytest", keywords: ["Backend"] },
];

export default data;
