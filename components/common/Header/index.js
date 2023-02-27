import React from "react";
import Link from "next/link";
// import { useRouter } from "next/navigation"; can't use useRouter in a server component

import styles from './styles.module.scss';


const headerMenuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Contact", link: "/contact" }
];

const HeaderComponent = () => {
  return (
    <header id="header" className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          {headerMenuItems.map((item, index) => {
            return (
              <li key={index} className={styles.menuItem}>
                <span className={styles.itemWrapper}>
                  <Link href={item.link}>
                    {item.name}
                  </Link>
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
