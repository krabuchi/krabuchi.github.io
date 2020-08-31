import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./contact.module.css";

const github = <FontAwesomeIcon icon={faGithub} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const codepen = <FontAwesomeIcon icon={faCodepen} />;

export default function Contact() {
  React.useEffect(() => {
    document.title = "Contact me | Shashank. U.";
  });
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <span>
        Say Hello! Best way to reach me.
        <span role="img" aria-label="wavehand">
          👋
        </span>{" "}
      </span>
      <div className={styles.iconsContainer}>
        <a
          href={"https://www.linkedin.com/in/shashank-uchil-23188947/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>{linkedin}</i>
        </a>
        <a
          href={"https://www.github.com/krabuchi"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>{github}</i>
        </a>
        <a
          href={"https://codepen.io/krabuchi"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>{codepen}</i>
        </a>
      </div>
      <div className={styles.emailbar}>
        <span>
          For all business inquiries, please email me
          <span role="img" aria-label="handshake">
            🤝
          </span>{" "}
        </span>
        <a
          href="mailto:uchilshashank@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email me{" "}
          <span role="img" aria-label="email">
            📧
          </span>
        </a>
      </div>
    </div>
  );
}
