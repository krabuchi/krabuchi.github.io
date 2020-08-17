import React from "react";
import styles from "./projects.module.css";

const projectList = [
  {
    url: "https://cranky-ptolemy-0a55b4.netlify.app/",
    title: "Pokedex",
  },

  {
    url: "https://wl4rz.csb.app/",
    title: "TodoNow",
  },

  {
    url: "https://codepen.io/krabuchi/full/vYLJPRJ",
    title: "Freaking Math",
  },
  {
    url: "https://cranky-dijkstra-4ae1e6.netlify.app/",
    title: "Weather App",
  },
  {
    url: "https://modest-hugle-55ba66.netlify.app/",
    title: "The MovieDB",
  },
  {
    url: "https://codepen.io/krabuchi/full/abdGQeK",
    title: "Pomodoro Clock",
  },
  {
    url: "https://codepen.io/krabuchi/full/QWNbpLm",
    title: "Tic Tac Toe",
  },
  {
    url: "https://codepen.io/krabuchi/full/KKVZEmX",
    title: "Calculator",
  },
  {
    url: "https://hardcore-pike-c8f69a.netlify.app/",
    title: "TodoList",
  },
];

export default function Projects() {
  React.useEffect(() => {
    document.title = "Projects | Shashank. U.";
  });
  return (
    <div>
      <h1 className={styles.titleProject}>Projects</h1>
      <div className={styles.projects}>
        {projectList.map((el, i) => (
          <a key={i} href={el.url} target="_blank" rel="noopener noreferrer">
            <div className={styles.projectItem}>
              <h3>{el.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
