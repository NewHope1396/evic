import styles from "./Hero.module.scss";
import { OrderButton } from "./Buttons/OrderButton";
import { ConsultationButton } from "./Buttons/ConsultationButton";
import { IMakeData } from "@/interfaces/make.interface";
import { FC } from "react";
import Container from "../Container/Container";

const Hero: FC<IMakeData> = ({ makes }) => {
  return (
    <section id="hero" className={styles.hero}>
      <Container>
        <div className={styles.textContainer}>
          <h1>Надійна евакуація авто по всій Україні</h1>
          <p className={styles.heroText}>
            Наша команда готова надати вам найкращу евакуаційну допомогу у
            будь-який момент доби. Наші професіонали забезпечать надійний
            перевіз автомобіля будь-якої грузопідйомності по всій Україні.
          </p>
          <div className={styles.btnContainer}>
            <OrderButton makes={makes} />
            <ConsultationButton makes={makes} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
