import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
