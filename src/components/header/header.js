import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/group1.png";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>
          <Link to="/">
            <span className={styles.name}>{"<Su />"}</span>
          </Link>
        </h1>
      </div>
      <div className={styles.navDiv}>
        <nav className={styles.navigation}>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/about">ABOUT</Link>
        </nav>
      </div>
    </header>
  );
}
