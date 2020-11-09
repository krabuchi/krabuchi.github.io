import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Navigation = () => (
  <nav>
    <Link to="/" className="logo">Shashank U.</Link>
    <Link to="/projects" className="project">Projects</Link>
  </nav>
);

export default Navigation;
