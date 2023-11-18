import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>Надійна евакуація авто по всій Україні</h1>
        <p>
          Наша команда готова надати вам найкращу евакуаційну допомогу у
          будь-який момент доби. Наші професіонали забезпечать надійний перевіз
          автомобіля будь-якої грузопідйомності по всій Україні.
        </p>
        <button className={styles.orderButton}>Замовити евакуатор</button>
        <button className={styles.consultation}>Консультація</button>
      </div>
    </section>
  );
};

export default Hero;
