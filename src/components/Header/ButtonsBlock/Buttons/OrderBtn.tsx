import { FC } from "react";
import styles from "./Btns.module.scss";
import { blockScroll } from "@/helpers/blockScroll";

export const OrderBtn: FC<{
  setIsOrderModalOpen: Function;
}> = ({ setIsOrderModalOpen }) => {
  const handleClick = () => {
    setIsOrderModalOpen(true);
    blockScroll();
  };

  return (
    <>
      <button onClick={handleClick} className={styles.orderBtn}>
        Замовити евакуатор
      </button>
    </>
  );
};
