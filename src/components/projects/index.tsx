import React, { useEffect } from "react";
import "./style.scss";



const projects = [
  {
    name: "Note It!",
    ref: "https://test-frontend-random.web.app",

  },
  {
    name: "Moodify",
    ref: "https://hifiproduct.herokuapp.com/",
  },
  {
    name: "Movie Portal",
    ref: "https://modest-hugle-55ba66.netlify.app/",

  },
  {
    name: "Weather",
    ref: "https://cranky-dijkstra-4ae1e6.netlify.app/",

  },
  {
    name: "Pokedex",
    ref: "https://cranky-ptolemy-0a55b4.netlify.app/",

  },
  {
    name: "Freaking Math",
    ref: "https://codepen.io/krabuchi/full/vYLJPRJ",
  
  },
];

export default function Projects() {
  useEffect(() => {
    document.title = `Projects`;
  });

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul className="projects-items">
        {projects.map((p, i) => (
          <li className="p-item" key={i}>
            <a href={p.ref}>
              
              <span>{p.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
