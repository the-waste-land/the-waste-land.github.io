import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://the-waste-land.github.io/", // replace this with your deployed domain
  author: "Lee",
  profile: "https://the-waste-land.github.io/about/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "The Waste Land",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 30 * 60 * 1000, // 30 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/the-waste-land",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  // {
  //   name: "Facebook",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Facebook`,
  //   active: true,
  // },
  // {
  //   name: "X",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on X`,
  //   active: false,
  // },
];
