import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { AppConfig } from "~/config";

export async function GET() {
  const blog = await getCollection("posts");
  return rss({
    // 输出的 xml 中的`<title>`字段
    title: AppConfig.title,
    // 输出的 xml 中的`<description>`字段
    description: AppConfig.description,
    // 从端点上下文获取项目“site”
    // https://docs.astro.build/zh-cn/reference/api-reference/#contextsite
    site: AppConfig.homeUrl,
    // 输出的 xml 中的`<item>`数组
    // 有关使用内容集合和 glob 导入的示例，请参阅“生成`items`”部分
    items: blog.map((item) => {
      return {
        title: item.data.title,
        description: item.data.description,
        link: `${AppConfig.homeUrl}/posts/${item.slug}`,
        pubDate: item.data.pubDate,
      };
    }),
  });
}
