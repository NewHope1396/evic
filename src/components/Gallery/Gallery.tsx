"use client";

import styles from "./Gallery.module.scss";
import Container from "../Container/Container";
import { useState } from "react";

export const Gallery = () => {
  const [position, setPosition] = useState(1);

  return (
    <section className={styles.gallerySection}>
      <Container>
        <div className={styles.galleryContainer}>
          <h2 className={styles.title}>Галерея робіт</h2>

          <div className={styles.galCont}>
            <button
              className={styles.leftBtn}
              onClick={() => {
                if (position > 1) {
                  setPosition(position - 1);
                }
              }}
            >
              Влево
            </button>
            <div
              className={`${styles.slider}
          ${position === 1 && styles.firstPosition}
          ${position === 2 && styles.secondPosition}
          ${position === 3 && styles.thirdPosition}`}
            >
              <div
                className={styles.galItem}
                style={{ backgroundColor: "red" }}
              >
                <p>Здрасьте</p>
              </div>
              <div className={styles.galItem}>
                <p>Здрасьте</p>
              </div>
              <div
                className={styles.galItem}
                style={{ backgroundColor: "green" }}
              >
                <p>Здрасьте</p>
              </div>
            </div>
            <button
              className={styles.rightBtn}
              onClick={() => {
                if (position < 3) {
                  setPosition(position + 1);
                }
              }}
            >
              Вправо
            </button>
          </div>
          <ul className={styles.sliderNav}>
            <li>
              <button
                className={`${position === 1 && styles.activeBtn}`}
                onClick={() => {
                  setPosition(1);
                }}
              >
                1
              </button>
            </li>
            <li>
              <button
                className={`${position === 2 && styles.activeBtn}`}
                onClick={() => {
                  setPosition(2);
                }}
              >
                2
              </button>
            </li>
            <li>
              <button
                className={`${position === 3 && styles.activeBtn}`}
                onClick={() => {
                  setPosition(3);
                }}
              >
                3
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
