// utils/api/rss.ts
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import slugify from "@utils/slugify";
import { SITE } from "@config";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    stylesheet: "/rss/styles.xsl",
    items: sortedPosts.map(({ data }) => ({
      link: `blog/${slugify(data)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDatetime).toUTCString(),
    })),
    customData: "<language>pt-br</language>",
  });
}
