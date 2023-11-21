"use client";

import styles from "./ButtonsBlock.module.scss";
import { FC, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import Image from "next/image";
import Tel from "@/public/tel.svg";
import Link from "next/link";
import { ConsultationBtn } from "./Buttons/ConsultationBtn";
import { OrderBtn } from "./Buttons/OrderBtn";

export const ButtonsBlock: FC<{
  setIsOrderModalOpen: Function;
  setIsConsultationModalOpen: Function;
}> = ({ setIsOrderModalOpen, setIsConsultationModalOpen }) => {
  const logY = debounce(() => {
    if (window.scrollY > 500) {
      setIsHidden(false);
    }

    if (window.scrollY === 0) {
      setIsHidden(true);
    }
  }, 200);

  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", logY);
  }, [logY]);

  return (
    <div
      className={`${styles.telContainer} ${!isHidden && styles.showButtons}`}
    >
      <div className={styles.svgContainer}>
        <Image
          priority
          src={Tel}
          alt="Phone button icon"
          width={18}
          height={18}
        ></Image>
      </div>
      <Link className={styles.telLink} href="tel:+380993290551">
        +380993290551
      </Link>
      <div className={styles.btnContainer}>
        <ConsultationBtn
          setIsConsultationModalOpen={setIsConsultationModalOpen}
        />
        <OrderBtn setIsOrderModalOpen={setIsOrderModalOpen} />
      </div>
    </div>
  );
};
