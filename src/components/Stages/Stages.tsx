import Container from "../Container/Container";
import styles from "./Stages.module.scss";

const Stages = () => {
  return (
    <section id="stages">
      <Container>
        <div className={styles.stagesContainer}>
          <h2>Етапи роботи</h2>
          <ul>
            <li>
              <div>1</div>
              <p>
                Заповнюєте форму на сайті, або телефонуєте за вказаним на сайті
                номером.
              </p>
            </li>
            <li>
              <div>2</div>
              <p>
                Отримуєте дзвінок від диспетчера, уточнюєте ваше місце
                знаходження та пункт призначення та отримуєте розраховану ціну
                за послуги.
              </p>
            </li>
            <li>
              <div>3</div>
              <p>
                Ми надсилаємо документи вашого водія, після чого евакуатор
                виїжджає до вас.
              </p>
            </li>
            <li>
              <div>4</div>
              <p>
                Безпечне транспортування вашого авто до місця призначення та
                оплата за надані послуги.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Stages;
