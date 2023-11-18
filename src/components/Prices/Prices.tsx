import Image from "next/image";
import styles from "./Prices.module.scss";
import Moto from "@/public/Motorcycle.svg";
import Car from "@/public/Car.svg";
import SUV from "@/public/SUV.svg";
import Lorry from "@/public/Lorry.svg";
import Tractor from "@/public/Tractor.svg";

const Prices = () => {
  return (
    <section id="prices" className={styles.pricesSection}>
      <h2>Послуги та ціни</h2>

      <ul>
        <li>
          <div>
            <Image alt="motorcycle image" src={Moto} />
          </div>
          <p className={styles.type}>Мотоцикли та мопеди</p>
          <p className={styles.price}>Від 400 грн.</p>
        </li>
        <li>
          <div>
            <Image alt="car image" src={Car} />
          </div>
          <p className={styles.type}>Легкові машини</p>
          <p className={styles.price}>Від 500 грн.</p>
        </li>
        <li>
          <div>
            <Image alt="SUV image" src={SUV} />
          </div>
          <p className={styles.type}>Джипи та мінівени</p>
          <p className={styles.price}>Від 600 грн.</p>
        </li>
        <li>
          <div>
            <Image alt="lorry image" src={Lorry} />
          </div>
          <p className={styles.type}>Легкогрузовий транспорт</p>
          <p className={styles.price}>Від 650 грн.</p>
        </li>
        <li>
          <div>
            <Image alt="tractor image" src={Tractor} />
          </div>
          <p className={styles.type}>Легка спец.техника</p>
          <p className={styles.price}>Від 800 грн.</p>
        </li>
      </ul>
    </section>
  );
};

export default Prices;
