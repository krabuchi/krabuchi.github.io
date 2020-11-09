import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Hero() {
  useEffect(() => {
    document.title = `Shashank U.`;
  });

  return (
      
      <div className="text">
        <h2>Hi, I am Shashank & I am a <span className="dev-name">Web Developer</span>.</h2>
        <p>When I am not working or gaming, I design and develop website.
        I am based in Mumbai and work as a Data Analyst.</p>
        <p>I am really passionate about side projects and helping improve craft and process.
<br />Check out my work <Link to="/projects" className="hero-project-link">here</Link> and come talk with me on Twitter.</p>
      </div>
  );
}
