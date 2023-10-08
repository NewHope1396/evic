import styles from "./Home.module.scss"
import Form from "../Form/Form"


export default function Home() {
    return (<section>
        <h1 className={styles.title}>Welcome to future Evic Project</h1>
        <Form></Form>
        </section>
    )
  }
  