"use client";

import styles from "./Gallery.module.scss";
import Container from "../Container/Container";
import { useState } from "react";
import Image from "next/image";
import Left from "@/public/left.svg";
import Right from "@/public/right.svg";

export const Gallery = () => {
  const [position, setPosition] = useState(1);

  return (
    <section className={styles.gallerySection}>
      <Container>
        <div className={styles.galleryContainer}>
          <h2 className={styles.title}>Галерея робіт</h2>

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
                ${position === 3 && styles.thirdPosition}`}
              >
                <div className={styles.galItem}>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className={styles.galItem}>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className={styles.galItem}>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
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
