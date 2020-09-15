import React, { useEffect, useState } from "react";
import "./style.scss";

export default function Hero() {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolled = window.pageYOffset;
      let rate = scrolled * 0.7;
      console.log(rate);
      setParallax(rate);
    });
  });

  return (
    <section className="banner">
      <div
        className="lines"
        style={{ transform: `translate3d(0px, ${parallax}px, 0px)` }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="text">
        <h1>Hello, Comps!</h1>
        <h2>Hi, I'm Shashank.</h2>
        <h3>I'm a Full Stack Web Developer</h3>
      </div>
    </section>
  );
}
