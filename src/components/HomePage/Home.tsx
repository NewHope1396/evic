import styles from "./Home.module.scss";
import Form from "./Form/Form";
import { FC } from "react";
import { IMakeData } from "@/interfaces/make.interface";

const Home: FC<IMakeData> = ({ makes }) => {
  return (
    <section>
      <h1 className={styles.title}>Welcome to future Evic Project</h1>
      <Form makes={makes}></Form>
    </section>
  );
};

export default Home;
