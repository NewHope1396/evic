import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.scss";
import Map from "@/public/Map.png";
import Telegram from "@/public/Telegram.svg";
import Instagram from "@/public/instagram.svg";
import Container from "../Container/Container";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <div className={styles.about}>
          <div>
            <Image alt="map image" src={Map} />
          </div>
          <div className={styles.textContainer}>
            <h3>Про нас</h3>
            <p className={styles.firstPart}>
              Команда Evik.vin працює в галузі евакуації автомобілів вже 5 рік
              та здобула довіру тисяч клієнтів по всій Україні та за межами
              країни. Ми спеціалізуємося на наданні швидкої та професійної
              допомоги в ситуаціях, коли ви опинилися на дорозі у скрутний час.
            </p>
            <p className={styles.secondPart}>
              Наша команда налічує понад 1000 висококваліфікованих спеціалістів,
              розкиданих по всій Україні, готових прийти на допомогу в будь-який
              момент. Ми розуміємо важливість вашого транспорту та готові
              забезпечити його безпечну евакуацію до необхідного пункту
              призначення.
            </p>
            <div className={styles.achievements}>
              <div>
                <h4>250 міст</h4>
                <p>
                  Велика мережа евакуаторів охоплює всю країну, гарантуючи вам
                  подачу евакуатора за 30 хвилин.
                </p>
              </div>
              <div>
                <h4> &gt;3000 евакуацій</h4>
                <p>
                  За ці роки ми успішно евакуювали 3000 автомобілів, надаючи
                  надійну підтримку.
                </p>
              </div>
            </div>
            <div className={styles.feedback}>
              <p>Залишайтеся на зв’язку</p>
              <Link href={""}>
                <Image alt="telegram icon" src={Telegram}></Image>
              </Link>
              <Link href={""}>
                <Image alt="instagram icon" src={Instagram}></Image>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
