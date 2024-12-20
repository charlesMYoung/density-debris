// 从 `astro:content` 导入辅助工具
import { z, defineCollection } from "astro:content";
// 为每一个集合定义一个 `type` 和 `schema`
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean().optional().default(false),
    title: z.string(),
    pubDate: z.date(),
    // 为 `category` 字段添加一个枚举
    category: z.enum(["tech", "reflection", "note", "log"]),
    description: z.string().optional().default(""),
    isComment: z.boolean().optional().default(false),
  }),
});
// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
  posts: postsCollection,
};
