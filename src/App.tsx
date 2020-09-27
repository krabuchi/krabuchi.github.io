import React from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import { Hero, TechStack, Projects, Contact, Navigation } from "./components";

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/tech-stack" component={TechStack} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}
