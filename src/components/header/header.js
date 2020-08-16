import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>
          <Link to="/">
            <span className={styles.name}>{"<Su>"}</span>
          </Link>
        </h1>
      </div>
      <div className={styles.navDiv}>
        <nav className={styles.navigation}>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
