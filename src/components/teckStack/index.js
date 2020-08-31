import React from "react";

import styles from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faGitAlt,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

let html5Icon = <FontAwesomeIcon icon={faHtml5} />;
let cssIcon = <FontAwesomeIcon icon={faCss3Alt} />;
let reactIcon = <FontAwesomeIcon icon={faReact} />;
let nodejsIcon = <FontAwesomeIcon icon={faNodeJs} />;
let gitIcon = <FontAwesomeIcon icon={faGitAlt} />;
let jsIcon = <FontAwesomeIcon icon={faJsSquare} />;
let mongodbIcon = <FontAwesomeIcon icon={faDatabase} />;
let sassIcon = <FontAwesomeIcon icon={faSass} />;

const tech = [
  { image: html5Icon, title: "HTML5" },
  { image: cssIcon, title: "CSS3" },
  { image: jsIcon, title: "Javascript" },
  { image: reactIcon, title: "ReactJS" },
  { image: sassIcon, title: "Sass" },
  { image: nodejsIcon, title: "NodeJS" },
  { image: gitIcon, title: "Git" },
  { image: mongodbIcon, title: "MongoDB" },
];

export default function TechStack() {
  return (
    <div className={styles.techStack}>
      <h1 className={styles.titleTechStack}>Tech Stack</h1>
      <ul className={styles.techStackList}>
        {tech.map((el, i) => (
          <li key={i} className={styles.techItem}>
            <i>{el.image}</i>
            <span className={styles.titleName}>{el.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
