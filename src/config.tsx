import type { Blog, SocialLink } from "./types/config";

export const AppConfig: Blog = {
  title: "Ethan Young",
  siteUrl: "https://www.ethyoung.me/",
  description: "I am a software engineer and a writer.",
};

export const socialLinks: SocialLink[] = [
  {
    icon: "ri:github-line",
    name: "github",
    url: "https://github.com/charlesMYoung",
  },
  {
    icon: "ri:rss-line",
    name: "RSS",
    url: `/rss.xml`,
  },
];
