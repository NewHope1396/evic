import { FC } from "react";
import styles from "./Buttons.module.scss";

export const OrderButton: FC<{ option: string }> = ({ option }) => {
  return (
    <button className={`${styles.orderBtn} ${option}`}>
      Замовити евакуатор
    </button>
  );
};
