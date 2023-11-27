import styles from "./Footer.module.scss";
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
          <div>
            <Logo option={styles.logo} />
            <nav>
              <ul>
                <li>
                  <Link href={"#prices"}>Послуги та ціни</Link>
                </li>
                <li>
                  <Link href={"#about"}>Про нас</Link>
                </li>
                <li>
                  <Link href={"#stages"}>Етапи роботи</Link>
                </li>
                <li>
                  <Link href={"#gallery"}>Галерея</Link>
                </li>
                <li>
                  <Link href={"#feedback"}>Відгуки</Link>
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
          <p>Evic.vin @ 2023. All rights reserved.</p>
          <p className={styles.copy}>&copy;Created by NewHope1396</p>
        </div>
      </Container>
    </footer>
  );
}
