import React, { useEffect } from "react";
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const media = [
  {
    icon: <FontAwesomeIcon icon={faCodepen} />,
    ref: "https://codepen.io/krabuchi",
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    ref: "https://github.com/krabuchi",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    ref: "https://www.linkedin.com/in/shashank-uchil-23188947/",
  },
  {
    icon: <FontAwesomeIcon icon={faMailBulk} />,
    ref: "mailto:uchilshashank@gmail.com",
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = `Contact me`;
  });

  const children = media.map((el, id) => (
    <span key={id}>
      <a href={el.ref} target="_blank" rel="noopener noreferrer">
        <i>{el.icon}</i>
      </a>
    </span>
  ));

  return (
    <section className="contact-page">
      <h2>Contact</h2>
      <div className="icons-social">{children}</div>
    </section>
  );
}
