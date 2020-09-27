import React, { useEffect } from "react";
import "./style.scss";

//import font-awesome icons and react component for fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faSass,
  faJsSquare,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

//data to render iconst and name
const tech = [
  {
    name: "HTML",
    icon: <FontAwesomeIcon icon={faHtml5} />,
  },
  {
    name: "Sass/CSS",
    icon: <FontAwesomeIcon icon={faSass} />,
  },
  {
    name: "Javascript",
    icon: <FontAwesomeIcon icon={faJsSquare} />,
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} />,
  },
  {
    name: "NodeJS",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
  },
  {
    name: "Mongo/MySql",
    icon: <FontAwesomeIcon icon={faDatabase} />,
  },
];

export default function TechStack() {
  useEffect(() => {
    document.title = `My tech stack`;
  });
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
