import React from "react";
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faNodeJs,
  faSass,
  faJsSquare,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const database = <FontAwesomeIcon icon={faDatabase} />;
const react = <FontAwesomeIcon icon={faReact} />;
const javascript = <FontAwesomeIcon icon={faJsSquare} />;
const html = <FontAwesomeIcon icon={faHtml5} />;
const sass = <FontAwesomeIcon icon={faSass} />;
const node = <FontAwesomeIcon icon={faNodeJs} />;

const tech = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "Sass/CSS",
    icon: sass,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "NodeJS",
    icon: node,
  },
  {
    name: "Mongo/MySql",
    icon: database,
  },
];

export default function TechStack() {
  return (
    <section className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="stack-icon-title">
        {tech.map((item, i) => (
          <article key={i}>
            <i>{item.icon}</i>
            <span>{item.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
