import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

export function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <nav >
            <Link href="/" target="_self" className={styles.navbar_logo}>
            <Image
                src="/Images/image.png"
                alt="AstroStops"
                fill
                />
            </Link>
        </nav>
                <div className={styles.navbar_items}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <Link href="/parallax">Login</Link>
                </div>
        </div>
        </>
    );
}
