import React from "react";
import "./App.css";

import Home from "./components/home";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Contact from "./components/contact";
import TechStack from "./components/teckStack";

export default function App() {
  return (
    <div className="app">
      <Home />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
