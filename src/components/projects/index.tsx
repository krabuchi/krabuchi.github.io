import React from "react";
import "./style.scss";

import {
  hifiproduct,
  math,
  movieportal,
  pokedex,
  weather,
  noteit,
} from "../../images";

const projects = [
  {
    name: "Note It!",
    ref: "https://test-frontend-random.web.app",
    image: noteit,
  },
  {
    name: "Moodify",
    ref: "https://hifiproduct.herokuapp.com/",
    image: hifiproduct,
  },
  {
    name: "Movie Portal",
    ref: "https://modest-hugle-55ba66.netlify.app/",
    image: movieportal,
  },
  {
    name: "Weather",
    ref: "https://cranky-dijkstra-4ae1e6.netlify.app/",
    image: weather,
  },
  {
    name: "Pokedex",
    ref: "https://cranky-ptolemy-0a55b4.netlify.app/",
    image: pokedex,
  },
  {
    name: "Freaking Math",
    ref: "https://codepen.io/krabuchi/full/vYLJPRJ",
    image: math,
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul className="projects-items">
        {projects.map((p, i) => (
          <li className="p-item" key={i}>
            <a href={p.ref}>
              <img src={p.image} alt={`${p.name}-backdrop`} />
              <span>{p.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
