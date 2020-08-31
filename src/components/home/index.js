import React from "react";
import styles from "./home.module.css";
import coding from "../../images/coding-image.jpg";

export default function Home() {
  const [top, setTop] = React.useState("");

  React.useEffect(() => {
    document.title = "Shashank. U.";
  });

  const handleScroll = () => {
    let value = window.scrollY;
    let t = value * 0.9 + "px";
    setTop(t);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img src={coding} style={{ top: `${top}` }} alt="coding-backdrop" />
      </div>
      <h2 className={styles.bgText}>
        Hi, I'm <span className={styles.name}>Shashank</span>
        <br /> I'm a Full Stack Web Developer
      </h2>
    </section>
  );
}
