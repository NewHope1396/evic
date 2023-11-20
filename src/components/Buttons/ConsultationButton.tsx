import { FC } from "react";
import styles from "./Buttons.module.scss";

export const ConsultationButton: FC<{ option: string }> = ({ option }) => {
  return (
    <button className={`${styles.consultationBtn} ${option}`}>
      Консультація
    </button>
  );
};
