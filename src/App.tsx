import React from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import { Hero, Projects, Navigation, Contact } from "./components";

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Contact />
    </div>
  );
}
