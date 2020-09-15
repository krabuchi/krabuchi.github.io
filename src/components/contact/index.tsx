import React from "react";
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const codepen = <FontAwesomeIcon icon={faCodepen} />;
const github = <FontAwesomeIcon icon={faGithub} />;
const mail = <FontAwesomeIcon icon={faMailBulk} />;

export default function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact</h2>
      <div className="social-links">
        <h3>Say Hello</h3>
        <div className="icons-social">
          <span>
            <a
              href="https://github.com/krabuchi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>{codepen}</i>
            </a>
          </span>
          <span>
            <a
              href="https://codepen.io/krabuchi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>{github}</i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/shashank-uchil-23188947/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>{linkedin}</i>
            </a>
          </span>
        </div>
      </div>
      <div className="email-icon">
        <h3>For all business inquiries, please email me</h3>
        <a
          href="mailto:uchilshashank@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>{mail}</i>
        </a>
      </div>
    </section>
  );
}
