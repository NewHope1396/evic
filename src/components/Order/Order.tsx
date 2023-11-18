import { FC } from "react";
import styles from "./Order.module.scss";
import { IMakeData } from "@/interfaces/make.interface";
import Form from "../Form/Form";

const Order: FC<IMakeData> = ({ makes }) => {
  return (
    <section className={styles.order}>
      <div className={styles.formContainer}>
        <h2>Онлайн-замовлення евакуатора</h2>
        <p>Заповніть форму для більш швидкої комунікації з диспетчером.</p>
        <Form makes={makes} />
      </div>
    </section>
  );
};

export default Order;
