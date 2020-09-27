import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTools,
  faPhoneAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const routes = [
  {
    to: "/",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    to: "/tech-stack",
    icon: <FontAwesomeIcon icon={faTools} />,
  },
  {
    to: "/projects",
    icon: <FontAwesomeIcon icon={faCode} />,
  },
  {
    to: "/contact",
    icon: <FontAwesomeIcon icon={faPhoneAlt} />,
  },
];

const Navigation = () => (
  <nav>
    <ul>
      {routes.map((route, idx) => (
        <li key={idx}>
          <Link to={route.to}>
            <i>{route.icon}</i>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
