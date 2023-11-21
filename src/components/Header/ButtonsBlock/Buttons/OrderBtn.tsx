import { FC } from "react";
import styles from "./Btns.module.scss";

export const OrderBtn: FC<{
  setIsOrderModalOpen: Function;
}> = ({ setIsOrderModalOpen }) => {
  const handleClick = () => {
    setIsOrderModalOpen(true);
  };

  return (
    <>
      <button onClick={handleClick} className={styles.orderBtn}>
        Замовити евакуатор
      </button>
    </>
  );
};
