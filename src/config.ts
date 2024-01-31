import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://eduardolira.dev.br",
  author: "Eduardo Lira",
  desc: "Eduardo Lira - Blog de Programação e Tecnologia",
  title: "Eduardo Lira",
  ogImage: "bg-cover.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "pt",
  langTag: ["pt-BR"],
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
    href: "https://github.com/eduardolirainfo",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
