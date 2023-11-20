import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import Tel from "@/public/tel.svg";
import Nav from "./Navigation/Navigation";
import { Logo } from "../Logo/Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.upperHeader}>
        <Logo option={styles.logo} />
        <div className={styles.telContainer}>
          <div className={styles.svgContainer}>
            <Image
              priority
              src={Tel}
              alt="Phone button icon"
              width={18}
              height={18}
            ></Image>
          </div>
          <Link className={styles.telLink} href="tel:+380993290551">
            +380993290551
          </Link>
        </div>
      </div>
      <Nav></Nav>
    </header>
  );
}
