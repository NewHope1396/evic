"use client";

import { FC } from "react";
import styles from "./Buttons.module.scss";
import { useState } from "react";
import { IMakeData } from "@/interfaces/make.interface";
import { Modal } from "@/components/Modal/Modal";
import { blockScroll } from "@/helpers/blockScroll";

export const OrderButton: FC<IMakeData> = (makes) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    blockScroll();
  };

  return (
    <>
      <button onClick={handleClick} className={styles.orderBtn}>
        Замовити евакуатор
      </button>
      {isOpen && (
        <Modal makes={makes} option="order" setModalOpen={setIsOpen} />
      )}
    </>
  );
};
