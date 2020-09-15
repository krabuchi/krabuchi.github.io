import React from "react";
import "./App.scss";

import { Hero, TechStack, Projects, Contact, Footer } from "./components";

export default function App() {
  return (
    <React.Fragment>
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
