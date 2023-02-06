"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Nav() {
  const NavList = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "board",
      href: "/board",
    },
    {
      name: "about",
      href: "/about",
    },
  ];
  return (
    <nav className={styles.wrap}>
      {NavList.map((el, idx) => (
        <Link
          href={el.href}
          key={`${el.name}-${idx}`}
          className={styles.navItem}
        >
          {el.name}
        </Link>
      ))}
    </nav>
  );
}
