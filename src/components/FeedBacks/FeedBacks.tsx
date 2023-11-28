"use client";

import Container from "../Container/Container";
import { useState } from "react";
import styles from "./FeedBacks.module.scss";
import Image from "next/image";
import Left from "@/public/left.svg";
import Right from "@/public/right.svg";

export const FeedBacks = () => {
  const [position, setPosition] = useState(1);

  return (
    <section id="feedbacks">
      <Container>
        <div className={styles.feedbacksContainer}>
          <div className={styles.sliderCover}>
            <button
              className={styles.leftBtn}
              onClick={() => {
                if (position > 1) {
                  setPosition(position - 1);
                }
              }}
            >
              <Image alt="arrow left" src={Left} />
            </button>

            <div className={styles.sliderContainer}>
              <div
                className={`${styles.slider}
                ${position === 1 && styles.firstPosition}
                ${position === 2 && styles.secondPosition}
                ${position === 3 && styles.thirdPosition}
                ${position === 4 && styles.forthPosition}
                ${position === 5 && styles.fifthPosition}
                `}
              >
                <div className={styles.galItem}>
                  <h3>Тетяна</h3>
                  <p>
                    Велике дякую водію евакуатора Вові! Оперативно приїхав,
                    професійно завантажив, доставив на СТО авто, з розумінням
                    своєї справи, я просто в захваті. Рекомендую всім і велике
                    дякую професіоналам своєї справи!
                  </p>
                </div>
                <div className={styles.galItem}>
                  <h3>Тетяна</h3>
                  <p>
                    Велике дякую водію евакуатора Вові! Оперативно приїхав,
                    професійно завантажив, доставив на СТО авто, з розумінням
                    своєї справи, я просто в захваті. Рекомендую всім і велике
                    дякую професіоналам своєї справи!
                  </p>
                </div>
                <div className={styles.galItem}>
                  <h3>Тетяна</h3>
                  <p>
                    Велике дякую водію евакуатора Вові! Оперативно приїхав,
                    професійно завантажив, доставив на СТО авто, з розумінням
                    своєї справи, я просто в захваті. Рекомендую всім і велике
                    дякую професіоналам своєї справи!
                  </p>
                </div>
                <div className={styles.galItem}>
                  <h3>Тетяна</h3>
                  <p>
                    Велике дякую водію евакуатора Вові! Оперативно приїхав,
                    професійно завантажив, доставив на СТО авто, з розумінням
                    своєї справи, я просто в захваті. Рекомендую всім і велике
                    дякую професіоналам своєї справи!
                  </p>
                </div>
                <div className={styles.galItem}>
                  <h3>Тетяна</h3>
                  <p>
                    Велике дякую водію евакуатора Вові! Оперативно приїхав,
                    професійно завантажив, доставив на СТО авто, з розумінням
                    своєї справи, я просто в захваті. Рекомендую всім і велике
                    дякую професіоналам своєї справи!
                  </p>
                </div>
              </div>
            </div>
            <button
              className={styles.rightBtn}
              onClick={() => {
                if (position < 5) {
                  setPosition(position + 1);
                }
              }}
            >
              <Image alt="arrow right" src={Right} />
            </button>
          </div>

          <ul className={styles.sliderNav}>
            <li>
              <button
                className={`${position === 1 && styles.activeBtn}`}
                onClick={() => {
                  setPosition(1);
                }}
              ></button>
            </li>
            <li>
              <button
                className={`${position === 2 && styles.activeBtn}`}
                onClick={() => {
                  setPosition(2);
                }}
              ></button>
            </li>
            <li>
              <button
                className={`${position === 3 && styles.activeBtn}`}
                onClick={() => {
                  setPosition(3);
                }}
              ></button>
            </li>
            <li>
              <button
                className={`${position === 4 && styles.activeBtn}`}
                onClick={() => {
                  setPosition(4);
                }}
              ></button>
            </li>
            <li>
              <button
                className={`${position === 5 && styles.activeBtn}`}
                onClick={() => {
                  setPosition(5);
                }}
              ></button>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
