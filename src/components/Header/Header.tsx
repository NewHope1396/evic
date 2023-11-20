import styles from "./Header.module.scss";
import Nav from "./Navigation/Navigation";
import { Logo } from "../Logo/Logo";
import { ButtonsBlock } from "./ButtonsBlock/ButtonsBlock";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.upperHeader}>
        <Logo option={styles.logo} />
        <ButtonsBlock />
      </div>
      <Nav></Nav>
    </header>
  );
}
