import type React from "react";

export type Blog = {
  // 博客标题
  title: string;
  // 主页地址
  homeUrl: string;
  description?: string;
};

export type SocialLink = {
  icon: string;
  name: string;
  url: string;
};
