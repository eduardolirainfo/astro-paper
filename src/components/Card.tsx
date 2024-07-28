import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

const styles = {
  cardContainer:
    "gap-1 p-6 rounded-lg flex flex-col bg-opacity-40 transition ease-in-out hover:shadow-xl hover:scale-[102%]",
  titleLink:
    "text-xl font-bold underline-offset-4  focus-visible:no-underline focus-visible:underline-offset-0  ",
  titleHeading: "card-title text-xl font-bold",
  cardLink: "card bg-base-100  mx-6 my-2 ",
  cardDescription: "card-description py-1 text-1xl",
};

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };
  return (
    <li className={styles.cardContainer}>
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
            <span>
              <Datetime pubDatetime={pubDatetime} />
            </span>
          </header>
          <p className={styles.cardDescription}>{description}</p>
        </article>
      </a>
    </li>
  );
}
