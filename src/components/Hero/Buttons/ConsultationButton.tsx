"use client";

import { Modal } from "@/components/Modal/Modal";
import styles from "./Buttons.module.scss";
import { FC, useState } from "react";
import { IMakeData } from "@/interfaces/make.interface";
import { blockScroll } from "@/helpers/blockScroll";

export const ConsultationButton: FC<IMakeData> = (makes) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    blockScroll();
  };

  return (
    <>
      <button onClick={handleClick} className={styles.consultationBtn}>
        Консультація
      </button>
      {isOpen && (
        <Modal makes={makes} option="consultation" setModalOpen={setIsOpen} />
      )}
    </>
  );
};
