export interface ResumeSection {
  dates: string;
  title: string;
  company: Company;
  bullets: (JSX.Element | string)[];
  id: string;
}

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
      "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      "Bullet number one that has information in it that is interesting",
    ],
  },
  {
    id: "pm",
    title: "Frontend Engineer",
    company: { name: "Penn Mutual", url: "https://www.pennmutual.com" },
    dates: "2019-2020",
    bullets: [
      "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      "Bullet number one that has information in it that is interesting",
    ],
  },
  {
    id: "mr",
    title: "Frontend Engineer",
    company: { name: "Mondo Robot", url: "https://mondorobot.com" },
    dates: "2018-2019",
    bullets: [
      "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      "Bullet number one that has information in it that is interesting",
    ],
  },
  {
    id: "mm",
    title: "Fullstack Engineer",
    company: { name: "Made Movement", url: null },
    dates: "2017-2018",
    bullets: [
      "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      "Bullet number one that has information in it that is interesting. This one is super long and hopefully wraps to the second line.",
      "Bullet number one that has information in it that is interesting",
    ],
  },
] satisfies ResumeSection[];
export default data;
