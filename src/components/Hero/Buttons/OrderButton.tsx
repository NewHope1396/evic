"use client";

import { FC } from "react";
import styles from "./Buttons.module.scss";
import { useState } from "react";
import Form from "../../Form/Form";
import { IMakeData } from "@/interfaces/make.interface";

export const OrderButton: FC<{ makes: IMakeData }> = ({ makes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleClick} className={styles.orderBtn}>
        Замовити евакуатор
      </button>
      {isOpen && (
        <div className={styles.modal}>
          <Form makes={makes.makes} />
        </div>
      )}
    </>
  );
};
