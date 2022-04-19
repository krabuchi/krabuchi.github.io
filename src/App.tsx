import React from "react";
import "./App.scss";


import { Hero, Projects, Tools, About, Contact } from "./components";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
}
