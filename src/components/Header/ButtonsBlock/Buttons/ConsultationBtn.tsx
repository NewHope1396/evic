import { FC } from "react";
import styles from "./Btns.module.scss";
import { blockScroll } from "@/helpers/blockScroll";

export const ConsultationBtn: FC<{
  setIsConsultationModalOpen: Function;
}> = ({ setIsConsultationModalOpen }) => {
  const handleClick = () => {
    setIsConsultationModalOpen(true);
    blockScroll();
  };

  return (
    <button onClick={handleClick} className={styles.consultationBtn}>
      Консультація
    </button>
  );
};
