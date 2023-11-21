import { FC } from "react";
import styles from "./Btns.module.scss";

export const ConsultationBtn: FC<{
  setIsConsultationModalOpen: Function;
}> = ({ setIsConsultationModalOpen }) => {
  const handleClick = () => {
    setIsConsultationModalOpen(true);
  };

  return (
    <button onClick={handleClick} className={styles.consultationBtn}>
      Консультація
    </button>
  );
};
