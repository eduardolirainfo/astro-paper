import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}
const styles = {
  cardContainer: "my-6",
  titleLink:
    "text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block",
  titleHeading:
    "mb-4 text-2xl font-bold tracking-tight  text-gray-800 dark:text-white",
  cardLink:
    "card rounded-md px-4 py-12 shadow-sm transition-transform duration-300 ease-in-out md:px-10",
};

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;
  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };
  return (
    <a itemProp="url" className={styles.cardLink} href={href}>
      <article itemScope itemType="http://schema.org/Article">
        <header>
          {secHeading ? (
            <h2 {...headerProps} className={styles.titleHeading}>
              {title}
            </h2>
          ) : (
            <h3 {...headerProps} className={styles.titleHeading}>
              {title}
            </h3>
          )}

          <span className="text-gray-600 dark:text-white">
            <Datetime datetime={pubDatetime} />
          </span>
        </header>
        <p>{description}</p>
      </article>
    </a>
  );
}
