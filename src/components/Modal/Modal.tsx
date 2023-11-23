import { FC } from "react";
import Form from "../Forms/OrderForm/Form";
import styles from "./Modal.module.scss";
import { IMakeData } from "@/interfaces/make.interface";
import { ConsultationForm } from "../Forms/ConsultationForm/ConsultationForm";
import { unlockScroll } from "@/helpers/blockScroll";

export const Modal: FC<{
  makes: IMakeData;
  option: string;
  setModalOpen: Function;
}> = ({ makes, option, setModalOpen }) => {
  return (
    <div className={styles.overlay}>
      <div>
        {option === "order" && (
          <Form setModalOpen={setModalOpen} makes={makes} />
        )}
        {option === "consultation" && (
          <ConsultationForm setModalOpen={setModalOpen} />
        )}
      </div>
    </div>
  );
};
