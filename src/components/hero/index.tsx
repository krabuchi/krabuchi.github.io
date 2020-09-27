import React, { useEffect } from "react";
import "./style.scss";

export default function Hero() {
  useEffect(() => {
    document.title = `Shashank U.`;
  });

  return (
    <section className="banner">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="text">
        <h2>Hello, I'm Shashank.</h2>
        <h3>I'm a Full Stack Web Developer.</h3>
      </div>
    </section>
  );
}
