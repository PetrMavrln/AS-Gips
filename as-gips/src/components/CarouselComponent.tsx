import React from 'react';
import styles from '../scss/css-modules/CarouselComponent.module.css';

import img1 from '../assets/Examples/Examples1.jpg';
import img2 from '../assets/Examples/Examples2.jpg';
import img3 from '../assets/Examples/Examples3.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const CarouselComponent = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className={styles.mySwiper}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <img
          className={styles.exmplImg}
          src={img2}
          alt="Изображение интерьера №1"
          width="100%"
          height="100%"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          className={styles.exmplImg}
          src={img3}
          alt="Изображение интерьера №2"
          width="100%"
          height="100%"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          className={styles.exmplImg}
          src={img1}
          alt="Изображение интерьера №3"
          width="100%"
          height="100%"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselComponent;
