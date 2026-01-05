"use client";

import { Circle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import type { BlogsList } from "@/types/types";

import dateToMDY from "@/modules/date-converters/dateToMDY";

import globalConfig from "@/config/globalConfig";

import styles from "./TopStories.module.css";
import "swiper/css";

type TopStoriesProps = {
  blogsList: BlogsList;
};

const TopStories = ({ blogsList }: TopStoriesProps) => {
  const topStories = [...blogsList, ...blogsList, ...blogsList];

  return (
    <section className={styles.topStories}>
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className={styles.topStories_swiper}
        wrapperClass={styles.topStories_swiper_wrapper}
      >
        {topStories.map((item, index) => (
          <SwiperSlide key={index} className={styles.topStories_swiper_slide}>
            <Link
              href={`/${item.title.toLowerCase().replaceAll(" ", "-")}`}
              target="_self"
              className={styles.topStories_swiper_slide_content}
            >
              <div className={styles.topStories_swiper_slide_content_thumbnail}>
                <Image
                  src={`${globalConfig.apiUrl}/images/blogs/thumbnails/${item.thumbnail_id}.webp`}
                  alt={`top-stories-${index}`}
                  fill
                />
              </div>
              <div className={styles.topStories_swiper_slide_content_info}>
                <p className={styles.topStories_swiper_slide_content_info_date}>
                  {dateToMDY(new Date(item.created_at))}
                </p>
                <p
                  className={styles.topStories_swiper_slide_content_info_title}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.topStories_titleContainer}>
        <div className={styles.topStories_titleContainer_title}>
          <Circle />
          <p>Top Stories</p>
        </div>
      </div>
    </section>
  );
};

export default TopStories;
