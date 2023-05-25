import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper';
import testisatu from '../assets/images/testi-satu.png';
import testidua from '../assets/images/testi-dua.png';
import testitiga from '../assets/images/testi-tiga.png';
import testiempat from '../assets/images/testi-empat.png';

// import required modules


export default function Carousel() {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      centeredSlides
      loop
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="swiper-container"
    >
      <SwiperSlide>
        <img src={testisatu} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testidua} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testitiga} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={testiempat} alt="" />
      </SwiperSlide>

    </Swiper>
  );
}

