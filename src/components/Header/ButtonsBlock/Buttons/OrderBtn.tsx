import { FC } from "react";
import styles from "./Btns.module.scss";

export const OrderBtn: FC<{
  setIsModalOpen: Function;
}> = ({ setIsModalOpen }) => {
  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button onClick={handleClick} className={styles.orderBtn}>
        Замовити евакуатор
      </button>
    </>
  );
};
