import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar} from 'swiper';

import { Product } from '../Product';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import './sale.scss';

export const Sale = () => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <Product />
            </SwiperSlide> 
            <SwiperSlide>
                <Product />
            </SwiperSlide> 
            <SwiperSlide>
                <Product />
            </SwiperSlide> 
            <SwiperSlide>
                <Product />
            </SwiperSlide> 
            <SwiperSlide>
                <Product />
            </SwiperSlide> 
        </Swiper>
    );
};