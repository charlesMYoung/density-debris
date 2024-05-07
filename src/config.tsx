import type { Blog, SocialLink } from "./types/config";

export const AppConfig: Blog = {
  title: "Ethan Young",
  homeUrl: "https://charlesMYoung.github.io",
  description: "I am a software engineer and a writer.",
};

export const socialLinks: SocialLink[] = [
  {
    icon: "ri:github-line",
    name: "GitHub",
    url: "https://github.com/charlesMYoung",
  },
  {
    icon: "ri:rss-line",
    name: "RSS",
    url: "/rss.xml",
  },
];
