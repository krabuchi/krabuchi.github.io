import React from "react";
import styles from "./home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faGitAlt,
  faJsSquare,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

let html5Icon = <FontAwesomeIcon icon={faHtml5} />;
let cssIcon = <FontAwesomeIcon icon={faCss3Alt} />;
let reactIcon = <FontAwesomeIcon icon={faReact} />;
let nodejsIcon = <FontAwesomeIcon icon={faNodeJs} />;
let gitIcon = <FontAwesomeIcon icon={faGitAlt} />;
let jsIcon = <FontAwesomeIcon icon={faJsSquare} />;
let mongodbIcon = <FontAwesomeIcon icon={faDatabase} />;

const tech = [
  { image: html5Icon, title: "HTML5" },
  { image: cssIcon, title: "CSS3" },
  { image: jsIcon, title: "Javascript" },
  { image: reactIcon, title: "ReactJS" },
  { image: nodejsIcon, title: "NodeJS" },
  { image: gitIcon, title: "Git" },
  { image: mongodbIcon, title: "MongoDB" },
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

      <h1 className={styles.titleTechStack}>Tech Stack</h1>
      <div className={styles.techStack}>
        {tech.map((el, i) => (
          <div key={i} className={styles.techItem}>
            <i>{el.image}</i>
            <span className={styles.titleName}>{el.title}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
