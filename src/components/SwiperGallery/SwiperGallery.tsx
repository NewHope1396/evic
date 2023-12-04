"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";
import styles from "./SwiperGallery.module.scss";
import galleryPhotos from "@/public/GalleryPhotos/galleryPhotos";
import Image from "next/image";
import Link from "next/link";
import Insta from "@/public/instagram.svg";

export const SwiperGallery = () => {
  return (
    <section className={styles.swiperSection}>
      <Container>
        <div className={styles.swiperContainer}>
          <h2>Галерея робіт</h2>
          <Swiper
            className={styles.desktopSwiper}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
          >
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <SwiperSlide>
              <div className={styles.swiperItem}>
                <ul>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo1}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo2}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo3}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo4}
                    />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperItem}>
                <ul>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo5}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo6}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo7}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo8}
                    />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperItem}>
                <ul>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo1}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo3}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo5}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo7}
                    />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            className={styles.tabletSwiper}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <SwiperSlide>
              <div className={styles.swiperItem}>
                <ul>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo1}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo2}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo3}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo4}
                    />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperItem}>
                <ul>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo5}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo6}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo7}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo8}
                    />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperItem}>
                <ul>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo1}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo3}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo5}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo7}
                    />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            className={styles.mobileSwiper}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <SwiperSlide>
              <div className={styles.swiperItem}>
                <ul>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo1}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo2}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo3}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo4}
                    />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperItem}>
                <ul>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo5}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo6}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo7}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo8}
                    />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperItem}>
                <ul>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo1}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo3}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo5}
                    />
                  </li>
                  <li>
                    <Image
                      alt="evic work example photo"
                      src={galleryPhotos.Photo7}
                    />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className={styles.morePhotos}>
            <p>Більше фото:</p>
            <Link href={""} className={styles.imgContainer}>
              <Image alt="instagram icon" src={Insta} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
