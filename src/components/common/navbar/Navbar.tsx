import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <Link href="/" target="_self" className={styles.nvabar_companyLogo}>
        <div className={styles.nvabar_companyLogo_logo}>
          <Image src="/images/logos/astroverse.webp" alt="O" fill />
        </div>
        <p>ASTROVERSE</p>
      </Link>
      <Link
        href="/auth/login"
        target="_self"
        className={styles.navbar_loginButton}
      >
        Login
      </Link>
    </section>
  );
};

export default Navbar;
