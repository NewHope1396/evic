import Link from "next/link";
import styles from "./Navigation.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={""}>Послуги та ціни</Link>
        </li>
        <li>
          <Link href={""}>Про нас</Link>
        </li>
        <li>
          <Link href={""}>Етапи роботи</Link>
        </li>
        <li>
          <Link href={""}>Відгуки</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
