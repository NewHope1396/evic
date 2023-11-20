"use client";

import styles from "./Navigation.module.scss";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link id="navLink" to="prices" spy={true} offset={-150}>
            Послуги та ціни
          </Link>
        </li>
        <li>
          <Link id="navLink" to="about" spy={true} offset={-150}>
            Про нас
          </Link>
        </li>
        <li>
          <Link id="navLink" to="stages" spy={true} offset={-150}>
            Етапи роботи
          </Link>
        </li>
        <li>
          <Link id="navLink" to="feedback" spy={true} offset={-150}>
            Відгуки
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
