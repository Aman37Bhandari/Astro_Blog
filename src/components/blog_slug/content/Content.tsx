import HTMLReactParser from "html-react-parser/lib/index";

import dateToMDY from "@/modules/date-converters/dateToMDY";
import transformImgToNextImage from "@/modules/transformImgToNextImage";

import styles from "./Content.module.css";

type ContentProps = {
  content: string;
  lastUpdated: string | null;
};

const Content = ({ content, lastUpdated }: ContentProps) => {
  return (
    <>
      <section className={styles.content}>
        {HTMLReactParser(content, {
          replace: (domNode: any) => transformImgToNextImage(domNode),
        })}
      </section>
      {lastUpdated && (
        <p className={styles.lastUpdated}>
          Last Updated - {dateToMDY(new Date(lastUpdated))}
        </p>
      )}
    </>
  );
};

export default Content;
