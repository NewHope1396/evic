import Link from "next/link"
import styles from "./Header.module.scss"

export default function Header () {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.navLink} href = "/">Home</Link>
                <Link className={styles.navLink} href = "/about">About</Link>
            </nav>
        </header>
    )
}