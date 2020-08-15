import React from "react";
import styles from "./projects.module.css";

import pokedex from "../../images/pokedexapp.png";
import todolist from "../../images/todolistapp.png";
import weather from "../../images/weatherapp.png";

const projectList = [
  {
    image: pokedex,
    url: "https://cranky-ptolemy-0a55b4.netlify.app/",
    title: "Pokedex",
  },
  {
    image: todolist,
    url: "https://hardcore-pike-c8f69a.netlify.app/",
    title: "TodoList",
  },
  {
    image: weather,
    url: "https://cranky-dijkstra-4ae1e6.netlify.app/",
    title: "Weather App",
  },
];

export default function Projects() {
  return (
    <div className={styles.projects}>
      {projectList.map((el, i) => (
        <div className={styles.projectItem}>
          <a href={el.url} target="_blank">
            <img src={el.image} alt={el.title} />
          </a>
          <h3>{el.title}</h3>
        </div>
      ))}
    </div>
  );
}
