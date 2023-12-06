"use client";

import styles from "./Navigation.module.scss";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link id="navLink" to="prices" spy={true} offset={-300}>
            Послуги та ціни
          </Link>
        </li>
        <li>
          <Link id="navLink" to="about" spy={true} offset={-300}>
            Про нас
          </Link>
        </li>
        <li>
          <Link id="navLink" to="stages" spy={true} offset={-300}>
            Етапи роботи
          </Link>
        </li>
        <li>
          <Link id="navLink" to="feedbacks" spy={true} offset={-500}>
            Відгуки
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
