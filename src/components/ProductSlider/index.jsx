import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar} from 'swiper';

import { Product } from '../Product';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


export const ProductSlider = ({data}) => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            scrollbar={{ draggable: true }}
        >

            {data && data.map((post, index) => (
                <SwiperSlide key={index}>
                    <Product edit={false} data={post}/>
                </SwiperSlide> 
            ))}
        </Swiper>
    );
};