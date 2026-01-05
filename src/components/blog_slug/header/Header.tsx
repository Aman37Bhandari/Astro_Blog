import { Calendar, LucideMessageSquare, Eye } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { ReactNode } from "react";

import dateToMDY from "@/modules/date-converters/dateToMDY";

import CopyUrlButton from "./copy-url-button/CopyUrlButton";
import UpcomingEvents from "./upcoming-events/UpcomingEvents";
import LogVisitor from "./log-visitor/LogVisitor";

import socials from "./socials.json";

import styles from "./Header.module.css";

const ICONS: {
  [key: string]: ReactNode;
} = {
  facebook: <CgFacebook />,
  x: <BsTwitterX />,
  linkedin: <FaLinkedinIn />,
  instagram: <BsInstagram />,
};

type HeaderProps = {
  title: string;
  author: {
    name: string;
    id: string;
  };
  date: string;
  comments: number;
  visitors: number;
  category: string;
  slug: string;
};

const Header = ({
  title,
  author,
  date,
  comments,
  visitors,
  category,
  slug,
}: HeaderProps) => {
  return (
    <section className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.header_info}>
        <div className={styles.header_info_sub}>
          <div className={styles.header_info_sub_item}>
            <div>{author.name[0]}</div>
            <p>{author.name}</p>
          </div>
          <div className={styles.header_info_sub_item}>
            <Calendar />
            <p>{dateToMDY(new Date(date))}</p>
          </div>
          <div className={styles.header_info_sub_item}>
            <LucideMessageSquare />
            <p>{comments}</p>
          </div>
          <div className={styles.header_info_sub_item}>
            <Eye />
            <p>{visitors}</p>
          </div>
        </div>
        <div className={styles.header_info_sub}>
          <div className={styles.header_info_sub_extras}>
            <p className={styles.header_info_sub_extras_category}>{category}</p>
            <div className={styles.header_info_sub_extras_socialIcons}>
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href
                    .replaceAll(
                      "{{url}}",
                      encodeURIComponent(`https://blogs.astroverse.in/${slug}`)
                    )
                    .replaceAll("{{title}}", encodeURIComponent(title))}
                  target="_blank"
                  title={social.title}
                >
                  {ICONS[social.icon]}
                </Link>
              ))}
              <CopyUrlButton slug={slug} />
            </div>
          </div>
        </div>
      </div>
      <UpcomingEvents />
      <LogVisitor slug={slug} />
    </section>
  );
};

export default Header;
