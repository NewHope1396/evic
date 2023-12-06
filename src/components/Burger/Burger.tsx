import { FC } from "react";
import styles from "./Burger.module.scss";
import Image from "next/image";
import Close from "@/public/x.svg";
import { BurgerNavigation } from "./BurgerNavigation/BurgerNavigation";
import { unlockScroll } from "@/helpers/blockScroll";

export const Burger: FC<{ setIsBurgerOpen: Function }> = ({
  setIsBurgerOpen,
}) => {
  return (
    <div className={styles.burger}>
      <button
        onClick={() => {
          setIsBurgerOpen(false);
          unlockScroll();
        }}
        className={styles.closeBtn}
      >
        <Image alt="close icon" src={Close} />
      </button>

      <BurgerNavigation setIsBurgerOpen={setIsBurgerOpen} />
    </div>
  );
};
