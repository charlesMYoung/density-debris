import { Icon } from "@iconify/react";
import type { Blog, SocialLink } from "./types/config";

export const AppConfig: Blog = {
  title: "Ethan Young",
  homeUrl: "http://127.0.0.1",
  description: "I am a software engineer and a writer.",
};

export const socialLinks: SocialLink[] = [
  {
    icon: <Icon icon="ri:github-line" />,
    name: "GitHub",
    url: "https://github.com/charlesMYoung",
  },
];
