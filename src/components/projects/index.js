import React from "react";
import styles from "./projects.module.css";

const projectList = [
  {
    url: "https://cranky-ptolemy-0a55b4.netlify.app/",
    title: "Pokedex",
    tools: "Chart.js, React, react-router",
  },
  {
    url: "https://test-frontend-random.web.app",
    title: "NoteIt",
    tools: "React, Firebase, Context API, react-router",
  },
  {
    url: "https://modest-hugle-55ba66.netlify.app/",
    title: "The MovieDB",
    tools: "React, Node.js, Express.js, react-router",
  },
  {
    url: "https://wl4rz.csb.app/",
    title: "TodoNow",
    tools: "React, Local Storage",
  },
  {
    url: "https://codepen.io/krabuchi/full/vYLJPRJ",
    title: "Freaking Math",
    tools: "Javascript, Game",
  },
  {
    url: "https://cranky-dijkstra-4ae1e6.netlify.app/",
    title: "Weather App",
    tools: "React, Node.js, Express.js",
  },
  {
    url: "https://codepen.io/krabuchi/full/abdGQeK",
    title: "Pomodoro Clock",
    tools: "Javascript",
  },
  {
    url: "https://codepen.io/krabuchi/full/QWNbpLm",
    title: "Tic Tac Toe",
    tools: "Javascript, Game",
  },
  {
    url: "https://codepen.io/krabuchi/full/KKVZEmX",
    title: "Calculator",
    tools: "Javascript",
  },
  {
    url: "https://hardcore-pike-c8f69a.netlify.app/",
    title: "TodoList",
    tools: "React, Local Storage",
  },
];

export default function Projects() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    document.title = "Projects | Shashank. U.";
  });

  const show = () => setVisible(true);

  const notShow = () => setVisible(false);

  return (
    <div className={styles.projectPage}>
      <h1 className={styles.titleProject}>Projects</h1>
      <div className={styles.projects}>
        {projectList.map((el, i) => (
          <a key={i} href={el.url} target="_blank" rel="noopener noreferrer">
            <div
              onMouseEnter={show}
              onMouseLeave={notShow}
              className={styles.projectItem}
            >
              <h3>{el.title}</h3>
              {el.tools && (
                <small className={visible ? styles.tools : styles.toolsNot}>
                  {el.tools}
                </small>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
