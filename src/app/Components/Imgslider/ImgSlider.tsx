"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Navigation, Autoplay } from 'swiper/modules';

import styles from './ImgSlider.module.css';
import { SliderImage } from '@/app/Components/data'; 
interface ImageSliderProps {
  images: SliderImage[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.mySwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className={styles.sliderImage} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;