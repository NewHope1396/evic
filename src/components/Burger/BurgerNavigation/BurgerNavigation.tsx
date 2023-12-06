"use client";

import { unlockScroll } from "@/helpers/blockScroll";
import { FC } from "react";
import { Link } from "react-scroll";
import styles from "./BurgerNavigation.module.scss";

export const BurgerNavigation: FC<{ setIsBurgerOpen: Function }> = ({
  setIsBurgerOpen,
}) => {
  return (
    <nav className={styles.burgerNav}>
      <Link
        onClick={() => {
          setIsBurgerOpen(false);
          unlockScroll();
        }}
        className={styles.logo}
        to="hero"
      >
        EVIC
      </Link>

      <ul>
        <li>
          <Link
            onClick={() => {
              setIsBurgerOpen(false);
              unlockScroll();
            }}
            id="navLink"
            to="prices"
            spy={true}
            offset={-100}
          >
            Послуги та ціни
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsBurgerOpen(false);
              unlockScroll();
            }}
            id="navLink"
            to="about"
            spy={true}
            offset={-100}
          >
            Про нас
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsBurgerOpen(false);
              unlockScroll();
            }}
            id="navLink"
            to="stages"
            spy={true}
            offset={-100}
          >
            Етапи роботи
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsBurgerOpen(false);
              unlockScroll();
            }}
            id="navLink"
            to="gallery"
            spy={true}
            offset={-100}
          >
            Галерея
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsBurgerOpen(false);
              unlockScroll();
            }}
            id="navLink"
            to="feedbacks"
            spy={true}
            offset={-100}
          >
            Відгуки
          </Link>
        </li>
      </ul>
    </nav>
  );
};
