import React from "react";
import styles from "./home.module.css";

import ReactSvg from "../../images/react.svg";
import NodeSvg from "../../images/nodejs.svg";
import MongoSvg from "../../images/mongodb.svg";
import GitSvg from "../../images/git.svg";
import Express from "../../images/expressjs.png";

const tech = [
  { image: ReactSvg, title: "ReactJS" },
  { image: NodeSvg, title: "NodeJS" },
  { image: MongoSvg, title: "MongoDB" },
  { image: Express, title: "Express" },
  { image: GitSvg, title: "Git" },
];

export default function Home() {
  return (
    <main>
      <div className={styles.bgImage}></div>
      <div className={styles.bgText}>
        <h2>
          Hi, I am Shashank.
          <br /> I am a Frontend WebDev.
        </h2>
      </div>
      <div className={styles.techStack}>
        {tech.map((el) => (
          <div className={styles.techItem}>
            <img src={el.image} width="200" heigth="100" alt={el.title} />
            <h3>{el.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
