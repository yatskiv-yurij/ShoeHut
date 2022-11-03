import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Controller } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/controller';
import 'swiper/css/navigation';
import './cart.scss'

import { Nav, Footer, ProductSlider} from '../../components/';

export const ProductCart = () => {

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [review, setReview] = useState(false);
    return (
        <>
            <Nav />

            <header className="cart">
                <div className="container">
                    <div className="cart__wrapper">
                        <div className="cart__photos">
                            <div className="cart__vertical-photos">
                                <Swiper
                                    slidesPerView={4}
                                    navigation={false}
                                    direction='vertical'
                                    modules={[Controller]}
                                    onSwiper={setFirstSwiper}
                                    controller={{ control: secondSwiper }}
                                >
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-1.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-2.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-1.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-2.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-1.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-2.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                </Swiper>
                            </div>
                            <div className="cart__main-photo">
                            <Swiper
                                    modules={[Navigation, EffectFade, Controller]} 
                                    effect="fade"
                                    slidesPerView={1}
                                    navigation
                                    onSwiper={setSecondSwiper}
                                    controller={{ control: firstSwiper }}
                                >
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-1.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-2.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-1.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-2.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-1.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <img src="http://localhost:4000/uploads/product1-2.jpg" alt="Товар" className="cart__img" />
                                    </SwiperSlide> 
                                </Swiper>
                            </div>
                        </div>

                        <div className="cart__data">
                            <h3 className="cart__title title2">Високі кросівки</h3>
                            <p className="cart__brand">Nike</p>
                            <div className='cart__prices'>
                                <p className="cart__new-price title2"><span>1 399</span> UAH</p>
                                <p className="cart__old-price"><span>1 399</span> UAH</p>
                            </div>
                            <p className="cart__text">Розміри:</p>
                            <div className="cart__sizes">
                                <input className='cart__radio' type="radio" name="size" id="size41"/>
                                <label className="cart__size" htmlFor="size41">41</label>
                                <input className='cart__radio' type="radio" name="size" id="size42"/>
                                <label className="cart__size" htmlFor="size42">42</label>
                                <input className='cart__radio' type="radio" name="size" id="size43"/>
                                <label className="cart__size" htmlFor="size43">43</label>
                                <input className='cart__radio' type="radio" name="size" id="size44"/>
                                <label className="cart__size" htmlFor="size44">44</label>
                                <input className='cart__radio' type="radio" name="size" id="size45"/>
                                <label className="cart__size" htmlFor="size45">45</label>
                                <input className='cart__radio' type="radio" name="size" id="size46"/>
                                <label className="cart__size" htmlFor="size46">46</label>
                            </div>
                            <button className="cart__basket">додати до корзини</button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="description">
                <div className="container">
                    <h3 className="description__title title2">Опис</h3>
                    <div className="description__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt blanditiis doloremque illum sit dolore facere, temporibus perferendis! Totam modi maxime consequatur iusto aut. Tempore eaque similique reiciendis dicta atque! Tempore.
                        Omnis voluptatum, est quam necessitatibus ab nam? Excepturi inventore vel, illo aspernatur vitae laboriosam itaque. Dignissimos, maxime debitis sed sapiente illo nesciunt alias obcaecati numquam labore odio non distinctio assumenda?
                        Ipsam, ducimus cumque quaerat pariatur quidem quo itaque odio voluptas nulla optio saepe! Vel optio, ex aliquam sequi cumque cum fugit eum tempore error a dolor neque beatae consectetur quos.
                        Odio et totam dolorum nostrum mollitia ea atque fugiat nulla. Facere itaque quidem debitis dicta, aliquam tempora fugit temporibus iusto esse amet ipsam asperiores id tempore molestiae eligendi ab reiciendis.
                        Modi autem excepturi odit distinctio odio beatae quia architecto debitis vel rem unde alias quasi eveniet animi corporis quae ex, ipsam nihil perspiciatis dolores aliquam? Praesentium itaque ducimus sequi accusamus!
                    </div>
                </div>
            </div>

            <div className="detail">
                <div className="container">
                    <h3 className="detail__title title2">Деталі</h3>
                    <div className="detail__wrapper">
                        <div className="detail__item">
                            <p className="detail__name">Артикул:</p>
                            <p className="detail__text">CI365</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Матеріал підошви:</p>
                            <p className="detail__text">гума</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Верх:</p>
                            <p className="detail__text">шкіра</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Сезон:</p>
                            <p className="detail__text">весна-літо</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Матеріал підкладки:</p>
                            <p className="detail__text">текстиль</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Країна:</p>
                            <p className="detail__text">Камбоджа</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="review">
                <div className="container">
                    <div className="review__wrapper">
                        <h3 className="review__title title2">Відгуки</h3>
                        <label className="review__new-open" onClick={() => setReview(true)}>Додати відгук</label>
                    </div>

                    {review && <div className="review__new">
                        <div className="rating">
                            <input type="radio" name="rating" id="rating5" className="rating__radio" value="5"/>
                            <label htmlFor="rating5" className="rating__star">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#ffffff"/>
                                </svg>
                            </label>
                            <input type="radio" name="rating" id="rating4" className="rating__radio" value="4"/>
                            <label htmlFor="rating4" className="rating__star">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#ffffff"/>
                                </svg>
                            </label>
                            <input type="radio" name="rating" id="rating3" className="rating__radio" value="3"/>
                            <label htmlFor="rating3" className="rating__star">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#ffffff"/>
                                </svg>
                            </label>
                            <input type="radio" name="rating" id="rating2" className="rating__radio" value="2"/>
                            <label htmlFor="rating2" className="rating__star">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#ffffff"/>
                                </svg>
                            </label>
                            <input type="radio" name="rating" id="rating1" className="rating__radio" value="1"/>
                            <label htmlFor="rating1" className="rating__star">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#ffffff"/>
                                </svg>
                            </label>
                        </div>
                        <textarea className="review__content" name="review" id="reviewContent"  rows="10" placeholder='Введіть відгук'></textarea>
                        <button className="review__save" onClick={() => setReview(false)}>Опублікувати</button>
                    </div>}
                    
                    <div className="review__item">
                        <p className="review__user-name">Ігор</p>
                        <div className="review__stars">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#FFFD54"/>
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#FFFD54"/>
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#FFFD54"/>
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#FFFD54"/>
                            </svg>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6498 6.04L11.8098 5.62L9.91983 1.17C9.57983 0.36 8.41983 0.36 8.07983 1.17L6.18983 5.63L1.35983 6.04C0.479829 6.11 0.119828 7.21 0.789828 7.79L4.45983 10.97L3.35983 15.69C3.15983 16.55 4.08983 17.23 4.84983 16.77L8.99983 14.27L13.1498 16.78C13.9098 17.24 14.8398 16.56 14.6398 15.7L13.5398 10.97L17.2098 7.79C17.8798 7.21 17.5298 6.11 16.6498 6.04ZM8.99983 12.4L5.23983 14.67L6.23983 10.39L2.91983 7.51L7.29983 7.13L8.99983 3.1L10.7098 7.14L15.0898 7.52L11.7698 10.4L12.7698 14.68L8.99983 12.4Z" fill="white"/>
                            </svg>
                        </div>
                        <p className="review__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ea nemo ex sed amet nisi omnis, eveniet quaerat? Earum corrupti magnam odit natus! Quisquam, voluptate beatae delectus iusto ducimus aliquid.</p>
                        <p className="review__date">03.10.2022</p>
                    </div>

                    <div className="review__item">
                        <p className="review__user-name">Ігор</p>
                        <div className="review__stars">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#FFFD54"/>
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#FFFD54"/>
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#FFFD54"/>
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#FFFD54"/>
                            </svg>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6498 6.04L11.8098 5.62L9.91983 1.17C9.57983 0.36 8.41983 0.36 8.07983 1.17L6.18983 5.63L1.35983 6.04C0.479829 6.11 0.119828 7.21 0.789828 7.79L4.45983 10.97L3.35983 15.69C3.15983 16.55 4.08983 17.23 4.84983 16.77L8.99983 14.27L13.1498 16.78C13.9098 17.24 14.8398 16.56 14.6398 15.7L13.5398 10.97L17.2098 7.79C17.8798 7.21 17.5298 6.11 16.6498 6.04ZM8.99983 12.4L5.23983 14.67L6.23983 10.39L2.91983 7.51L7.29983 7.13L8.99983 3.1L10.7098 7.14L15.0898 7.52L11.7698 10.4L12.7698 14.68L8.99983 12.4Z" fill="white"/>
                            </svg>
                        </div>
                        <p className="review__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ea nemo ex sed amet nisi omnis, eveniet quaerat? Earum corrupti magnam odit natus! Quisquam, voluptate beatae delectus iusto ducimus aliquid.</p>
                        <p className="review__date">03.10.2022</p>
                    </div>

                    <button className="review__more">більше відгуків</button>
                </div>
            </div>

            <div className="recommend">
                <div className="container">
                    <h3 className="recommend__title title2">Рекомендуємо</h3>
                    <div className="sale__wrapper">
                        <ProductSlider />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}