import Image from "next/image";
import Link from "next/link";

import dateToMDY from "@/modules/date-converters/dateToMDY";

import styles from "./FooterNav.module.css";

type FooterNavProps = {
  prevBlog?: {
    thumbnail: string;
    title: string;
    date: string;
    slug: string;
  };
  nextBlog?: {
    thumbnail: string;
    title: string;
    date: string;
    slug: string;
  };
};

const FooterNav = ({ prevBlog, nextBlog }: FooterNavProps) => {
  return (
    <section className={styles.footerNav}>
      {prevBlog ? (
        <Link
          href={`${prevBlog.slug}`}
          target="_self"
          className={styles.footerNav_sub}
        >
          <p className={styles.footerNav_sub_heading}>Previous Post:</p>
          <div className={styles.footerNav_sub_blog}>
            <div className={styles.footerNav_sub_blog_thumbnail}>
              <Image src={prevBlog.thumbnail} alt="Thumb" fill />
            </div>
            <div className={styles.footerNav_sub_blog_info}>
              <p className={styles.footerNav_sub_blog_info_date}>
                {dateToMDY(new Date(prevBlog.date))}
              </p>
              <p className={styles.footerNav_sub_blog_info_title}>
                {prevBlog.title}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div className={styles.footerNav_sub}> </div>
      )}
      {nextBlog ? (
        <Link
          href={`${nextBlog.slug}`}
          target="_self"
          className={styles.footerNav_sub}
        >
          <p className={styles.footerNav_sub_heading}>Next Post:</p>
          <div className={styles.footerNav_sub_blog}>
            <div className={styles.footerNav_sub_blog_thumbnail}>
              <Image src={nextBlog.thumbnail} alt="Thumb" fill />
            </div>
            <div className={styles.footerNav_sub_blog_info}>
              <p className={styles.footerNav_sub_blog_info_date}>
                {dateToMDY(new Date(nextBlog.date))}
              </p>
              <p className={styles.footerNav_sub_blog_info_title}>
                {nextBlog.title}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div className={styles.footerNav_sub}> </div>
      )}
    </section>
  );
};

export default FooterNav;
