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
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            breakpoints={{
                676: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            }}
        >

            {data && data.map((post, index) => (
                <SwiperSlide key={index}>
                    <Product edit={false} data={post}/>
                </SwiperSlide> 
            ))}
        </Swiper>
    );
};