import styles from "./Hero.module.scss";
import { OrderButton } from "../Buttons/OrderButton";
import { ConsultationButton } from "../Buttons/ConsultationButton";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>Надійна евакуація авто по всій Україні</h1>
        <p>
          Наша команда готова надати вам найкращу евакуаційну допомогу у
          будь-який момент доби. Наші професіонали забезпечать надійний перевіз
          автомобіля будь-якої грузопідйомності по всій Україні.
        </p>
        <div className={styles.btnContainer}>
          <OrderButton />
          <ConsultationButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
