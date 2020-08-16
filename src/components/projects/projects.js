import React from "react";
import styles from "./projects.module.css";

import pokedex from "../../images/pokedexapp.png";
import todolist from "../../images/todolistapp.png";
import weather from "../../images/weatherapp.png";
import moviedb from "../../images/moviedb.png";

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
  {
    image: moviedb,
    url: "https://modest-hugle-55ba66.netlify.app/",
    title: "The MovieDB",
  },
];

export default function Projects() {
  React.useEffect(() => {
    document.title = "Projects | Shashank. U.";
  });
  return (
    <div className={styles.projects}>
      {projectList.map((el, i) => (
        <div className={styles.projectItem} key={i}>
          <a href={el.url} target="_blank" rel="noopener noreferrer">
            <img src={el.image} alt={el.title} />
          </a>
          <h3>{el.title}</h3>
        </div>
      ))}
    </div>
  );
}
