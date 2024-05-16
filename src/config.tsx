import type { Blog, SocialLink } from "./types/config";

export const AppConfig: Blog = {
  title: "Ethan Young",
  siteUrl: "https://density-debris-chi.vercel.app/",
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
    url: `${import.meta.env.BASE_URL}/rss.xml`,
  },
];
