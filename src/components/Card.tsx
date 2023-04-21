import Datetime from "./Datetime";
import type { Frontmatter } from "@types";
import TimeReading from "./TimeReading";

export interface Props {
  href?: string;
  post: Frontmatter;
  secHeading?: boolean;
}

const styles = {
  cardContainer: "my-6",
  titleLink:
    "text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block",
  titleHeading:
    "mb-4 text-2xl font-bold tracking-tight  text-gray-800 dark:text-white",
  cardLink:
    "card rounded-md px-4 py-16 shadow-sm transition-transform duration-300 ease-in-out md:px-10",
};

export default function Card(
  { href, post, secHeading = true }: Props,
  index: number
) {
  return (
    <a itemProp="url" className={styles.cardLink} href={href}>
      <article itemScope itemType="http://schema.org/Article">
        <header>
          {secHeading ? (
            <h2 itemProp="headline" className={styles.titleHeading}>
              {post.title}
            </h2>
          ) : (
            <h3 itemProp="headline" className={styles.titleHeading}>
              {post.title}
            </h3>
          )}

          <span className="text-gray-600 dark:text-white">
            <Datetime datetime={post.datetime} minutesRead={post.minutesRead} />
          </span>
        </header>
        <p>{post.description}</p>
      </article>
    </a>
  );
}
