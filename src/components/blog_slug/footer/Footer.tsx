import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { ReactNode } from "react";

import CopyUrlButton from "./copy-url-button/CopyUrlButton";

import socials from "@/components/blog_slug/header/socials.json";

import styles from "./Footer.module.css";

const ICONS: {
  [key: string]: ReactNode;
} = {
  facebook: <CgFacebook />,
  x: <BsTwitterX />,
  linkedin: <FaLinkedinIn />,
  instagram: <BsInstagram />,
};

type FooterProps = {
  tags: string[];
  slug: string;
  title: string;
};

const Footer = ({ tags, slug, title }: FooterProps) => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_tags}>
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <div className={styles.footer_socialIcons}>
        <CopyUrlButton slug={slug} />
        {socials.reverse().map((social, index) => (
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
      </div>
    </section>
  );
};

export default Footer;
