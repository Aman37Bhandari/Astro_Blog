"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import globalConfig from "@/config/globalConfig";

import styles from "./ImagesSlider.module.css";
import "swiper/css";
import "swiper/css/navigation";

type ImagesSliderProps = {
  blogId: string;
  images: string[];
};

const ImagesSlider = ({ blogId, images }: ImagesSliderProps) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <Swiper
      modules={[Autoplay, A11y, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      speed={1000}
      onBeforeInit={(swiper) => {
        // @ts-ignore
        swiper.params.navigation.prevEl = prevRef.current;
        // @ts-ignore
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      className={styles.imagesSlider}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.imagesSlider_slide}>
          <Image
            src={`${globalConfig.apiUrl}/images/blogs/slider-images/${blogId}/${image}.webp`}
            alt={`slide-${index}`}
            fill
          />
        </SwiperSlide>
      ))}
      <div
        ref={prevRef}
        className={`${styles.imagesSlider_button} ${styles.imagesSlider_button_left}`}
      >
        <ChevronLeft />
      </div>
      <div
        ref={nextRef}
        className={`${styles.imagesSlider_button} ${styles.imagesSlider_button_right}`}
      >
        <ChevronRight />
      </div>
    </Swiper>
  );
};

export default ImagesSlider;
