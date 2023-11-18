import Link from "next/link";
import styles from "./Navigation.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
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
          <Link href={"#feedback"}>Відгуки</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
