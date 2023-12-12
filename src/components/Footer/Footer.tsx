"use client";

import styles from "./Footer.module.scss";
import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Telegram from "@/public/Telegram.svg";
import Instagram from "@/public/instagram.svg";
import { Logo } from "../Logo/Logo";
import Container from "../Container/Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.navWrapper}>
            <div className={styles.logoBlock}>
              <Logo option={styles.logo} />
              <div className={styles.mobileSocials}>
                <Link href={""}>
                  <Image alt="telegram icon" src={Telegram}></Image>
                </Link>
                <Link href={""}>
                  <Image alt="instagram icon" src={Instagram}></Image>
                </Link>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <ReactScrollLink to="prices" spy={true} offset={-300}>
                    Послуги та ціни
                  </ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink to="about" spy={true} offset={-300}>
                    Про нас
                  </ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink to="stages" spy={true} offset={-300}>
                    Етапи роботи
                  </ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink to="gallery" spy={true} offset={-300}>
                    Галерея
                  </ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink to="feedbacks" spy={true} offset={-500}>
                    Відгуки
                  </ReactScrollLink>
                </li>
              </ul>
            </nav>
            <div className={styles.socials}>
              <Link href={""}>
                <Image alt="telegram icon" src={Telegram}></Image>
              </Link>
              <Link href={""}>
                <Image alt="instagram icon" src={Instagram}></Image>
              </Link>
            </div>
          </div>
          <p className={styles.lowerText}>
            Evic.vin @ 2023. All rights reserved.
          </p>
          <p className={styles.copy}>&copy;Created by NewHope1396</p>
        </div>
      </Container>
    </footer>
  );
}
