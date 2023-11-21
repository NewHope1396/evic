import { FC } from "react";
import Form from "../Form/Form";
import styles from "./Modal.module.scss";
import { IMakeData } from "@/interfaces/make.interface";

export const Modal: FC<IMakeData> = ({ makes }) => {
  return (
    <div className={styles.overlay}>
      <div>
        <Form makes={makes} />
      </div>
    </div>
  );
};
