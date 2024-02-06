import { type StaticImageData } from "next/image";
import CoachellaImage from "~/app/coachella.jpg";

export type Experience = {
  nextHref: string | null;
  prevHref: string | null;
  order: number;
  title: string;
  dateRange: string;
  skills: string[];
  imageSrc: StaticImageData;
};

const coachella: Experience = {
  nextHref: "/work/free-agency",
  prevHref: null,
  order: 1,
  title: "Coachella",
  dateRange: "2018-2019",
  skills: ["Vue", "Nuxt", "Sass", "WordPress", "AWS"],
  imageSrc: CoachellaImage,
};

const freeAgency: Experience = {
  nextHref: "/work/matt-albrecht",
  prevHref: "/work/coachella",
  order: 2,
  title: "Free Agency",
  dateRange: "2020-2023",
  skills: ["TypeScript", "Python", "GraphQL", "React", "NextJS", "TailwindCSS"],
  imageSrc: CoachellaImage,
};

const mattAlbrecht: Experience = {
  nextHref: "/work/specialized",
  prevHref: "/work/free-agency",
  order: 3,
  title: "Personal Website",
  dateRange: "2023-",
  skills: [
    "TypeScript",
    "React",
    "NextJS",
    "OpenAI",
    "TailwindCSS",
    "shadcn/ui",
  ],
  imageSrc: CoachellaImage,
};

const specialized: Experience = {
  nextHref: "/work/procore",
  prevHref: "/work/matt-albrecht",
  order: 4,
  title: "Specialized Bikes",
  dateRange: "2018",
  skills: ["React", "Redux", "Sass", "i18n", "a11y"],
  imageSrc: CoachellaImage,
};

const procore: Experience = {
  nextHref: "/work/diageo",
  prevHref: "/work/specialized",
  order: 5,
  title: "Procore",
  dateRange: "2023",
  skills: [
    "TypeScript",
    "React",
    "NextJS",
    "Chakra UI",
    "Storybook",
    "Turborepo",
  ],
  imageSrc: CoachellaImage,
};

const diageo: Experience = {
  nextHref: "/work/penn-mutual",
  prevHref: "/work/procore",
  order: 6,
  title: "Diageo",
  dateRange: "2017-2018",
  skills: ["React", "NodeJS", "Express", "Mongo", "Heroku"],
  imageSrc: CoachellaImage,
};

const pennMutual: Experience = {
  nextHref: null,
  prevHref: "/work/diageo",
  order: 7,
  title: "Penn Mutual",
  dateRange: "2019-2020",
  skills: ["React", "NextJS", "Sass", "NPM", "AWS"],
  imageSrc: CoachellaImage,
};

const data: Record<string, Experience> = {
  coachella,
  "free-agency": freeAgency,
  "matt-albrecht": mattAlbrecht,
  specialized,
  procore,
  diageo,
  "penn-mutual": pennMutual,
};

export default data;
