import { FC } from "react";
import Form from "../Forms/OrderForm/Form";
import styles from "./Modal.module.scss";
import { IMakeData } from "@/interfaces/make.interface";
import { ConsultationForm } from "../Forms/ConsultationForm/ConsultationForm";

export const Modal: FC<{ makes: IMakeData; option: string }> = ({
  makes,
  option,
}) => {
  return (
    <div className={styles.overlay}>
      <div>
        {option === "order" && <Form makes={makes.makes} />}
        {option === "consultation" && <ConsultationForm />}
      </div>
    </div>
  );
};
