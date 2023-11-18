import Image from "next/image";
import styles from "./Advantages.module.scss";
import Star from "@/public/Star.svg";
import Certificate from "@/public/Certificate.svg";
import Cheque from "@/public/Cheque.svg";
import { ST } from "next/dist/shared/lib/utils";

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <ul>
        <li>
          <div className={styles.imgContainer}>
            <Image alt="advantage-icon" src={Star}></Image>
          </div>
          <h3>5-річний досвід роботи</h3>
          <p>
            Ми працюємо з 2017 року. За цей час ми успішно виконали більше ніж
            3000 евакуацій.
          </p>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <Image alt="advantage-icon" src={Certificate}></Image>
          </div>
          <h3>Кваліфікована команда</h3>
          <p>
            Наші працівники мають усі відповідні документи, які підтверджують їх
            кваліфікацію в роботі.
          </p>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <Image alt="advantage-icon" src={""}></Image>
          </div>
          <h3>Працюємо цілодобово</h3>
          <p>
            Ми працюємо без вихідних та святкових днів, адже допомога нашим
            клієнтам може знадобитися в будь-яку хвилину.
          </p>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <Image alt="advantage-icon" src={Cheque}></Image>
          </div>
          <h3>Зручний розрахунок</h3>
          <p>
            Евакуація без передоплати. Можливість безготівкової оплати. Надаємо
            чеки для страхової компанії.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
