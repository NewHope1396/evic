"use client";

import styles from "./Header.module.scss";
import Nav from "./Navigation/Navigation";
import { Logo } from "../Logo/Logo";
import { ButtonsBlock } from "./ButtonsBlock/ButtonsBlock";
import { FC } from "react";
import { IMakeData } from "@/interfaces/make.interface";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export const Header: FC<IMakeData> = (makes) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.upperHeader}>
          <Logo option={styles.logo} />
          <ButtonsBlock setIsOrderModalOpen={setIsOrderModalOpen} />
        </div>
        <Nav></Nav>
      </header>
      {isOrderModalOpen && <Modal makes={makes} option={"order"} />}
    </>
  );
};
