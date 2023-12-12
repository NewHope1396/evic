"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";
import styles from "./SwiperFeedbacks.module.scss";

export const SwiperFeedbacks = () => {
  return (
    <section id="feedbacks">
      <Container>
        <div className={styles.swiperContainer}>
          <h2 className={styles.title}>Відгуки клієнтів</h2>

          <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiperFeedbacks-button-next",
              prevEl: ".swiperFeedbacks-button-prev",
            }}
          >
            <div className="swiperFeedbacks-button-next"></div>
            <div className="swiperFeedbacks-button-prev"></div>
            <SwiperSlide className={styles.swiperItem}>
              <h3 className={styles.name}>Тетяна</h3>
              <p className={styles.text}>
                Велике дякую водію евакуатора Вові! Оперативно приїхав,
                професійно завантажив, доставив на СТО авто, з розумінням своєї
                справи, я просто в захваті. Рекомендую всім і велике дякую
                професіоналам своєї справи!
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <h3 className={styles.name}>Тетяна</h3>
              <p className={styles.text}>
                Велике дякую водію евакуатора Вові! Оперативно приїхав,
                професійно завантажив, доставив на СТО авто, з розумінням своєї
                справи, я просто в захваті. Рекомендую всім і велике дякую
                професіоналам своєї справи!
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <h3 className={styles.name}>Тетяна</h3>
              <p className={styles.text}>
                Велике дякую водію евакуатора Вові! Оперативно приїхав,
                професійно завантажив, доставив на СТО авто, з розумінням своєї
                справи, я просто в захваті. Рекомендую всім і велике дякую
                професіоналам своєї справи!
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <h3 className={styles.name}>Тетяна</h3>
              <p className={styles.text}>
                Велике дякую водію евакуатора Вові! Оперативно приїхав,
                професійно завантажив, доставив на СТО авто, з розумінням своєї
                справи, я просто в захваті. Рекомендую всім і велике дякую
                професіоналам своєї справи!
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <h3 className={styles.name}>Тетяна</h3>
              <p className={styles.text}>
                Велике дякую водію евакуатора Вові! Оперативно приїхав,
                професійно завантажив, доставив на СТО авто, з розумінням своєї
                справи, я просто в захваті. Рекомендую всім і велике дякую
                професіоналам своєї справи!
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
