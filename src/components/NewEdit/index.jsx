import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import './new-edit.scss';
import DraftEditor  from  '../DraftEditor/DraftEditor.js';
export const NewEdit = ({edit}) => {

    const [countImage, setCountImage] = useState(0);
    const Image = event => {
        setCountImage(event.target.files.length);
    }

    return (
        <>
            <h3 className="account__title title2">{ !edit ? "Новий товар" : "Редагувати товар"}</h3>
            <hr />
            <div className="account__new-edit-product">
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="productName" required/>
                        <label htmlFor="productName">Назва товару</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productBrand" required/>
                        <label htmlFor="productBrand">Бренд</label>
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="productArticle" required/>
                        <label htmlFor="productArticle">Артикуль</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productMaterial" required/>
                        <label htmlFor="productMaterial">Матеріал</label>
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="productSubstrate" required/>
                        <label htmlFor="productSubstrate">Матеріал підкладки</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productSole" required/>
                        <label htmlFor="productSole">Матеріал підошви</label>
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <select className="account__input" id="productSeason" required>
                            <option value="summer">Літо</option>
                            <option value="winter">Зима</option>
                            <option value="spring">Весна - осінь</option>
                        </select>
                        <label htmlFor="productSeason">Сезон</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productCountry" required/>
                        <label htmlFor="productCountry">Країна виробник</label>
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="productType" required/>
                        <label htmlFor="productType">Тип</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productColor" required/>
                        <label htmlFor="productColor">Колір</label>
                    </div>
                </div>

                <div className="account__item">
                    <DraftEditor/>
                </div>

                
            {edit===true && <div className="account__slider-photo">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={5}
                        navigation
                    >
                        <SwiperSlide>
                            <img className="account__product-img" src="http://localhost:4000/uploads/product1-1.jpg" alt="" />
                            <button className="account__product-img-delete">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_122_267)">
                                <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_122_267">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <img className="account__product-img" src="http://localhost:4000/uploads/product1-2.jpg" alt="" />
                            <button className="account__product-img-delete">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_122_267)">
                                <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_122_267">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <img className="account__product-img" src="http://localhost:4000/uploads/product1-1.jpg" alt="" />
                            <button className="account__product-img-delete">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_122_267)">
                                <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_122_267">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <img className="account__product-img" src="http://localhost:4000/uploads/product1-2.jpg" alt="" />
                            <button className="account__product-img-delete">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_122_267)">
                                <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_122_267">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <img className="account__product-img" src="http://localhost:4000/uploads/product1-1.jpg" alt="" />
                            <button className="account__product-img-delete">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_122_267)">
                                <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_122_267">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <img className="account__product-img" src="http://localhost:4000/uploads/product1-2.jpg" alt="" />
                            <button className="account__product-img-delete">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_122_267)">
                                <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_122_267">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <img className="account__product-img" src="http://localhost:4000/uploads/product1-1.jpg" alt="" />
                            <button className="account__product-img-delete">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_122_267)">
                                <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_122_267">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                        </SwiperSlide> 
                    </Swiper>
                </div>}
                

                <div className="account__item account__item-image">
                    <input className="account__image" type="file" name="images" id="productImage" multiple onChange={Image}/>
                    <label htmlFor="productImage" className="account__label-file">Фотографії товару</label>
                    <p className="account__count-image">Кількість фото: {countImage}</p>
                </div>

                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="productSize" required/>
                        <label htmlFor="productSize">Розміри</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productPrice" required/>
                        <label htmlFor="productPrice">Ціна</label>
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <select className="account__input" id="productSale" required>
                            <option value="yes">Так</option>
                            <option value="no">Ні</option>
                        </select>
                        <label htmlFor="productSale">Знижка</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productNewPrice" required/>
                        <label htmlFor="productNewPrice">Нова ціна</label>
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <select className="account__input" id="productPopular" required>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                        <label htmlFor="productSale">Популярність</label>
                    </div>
                </div>

                {edit===true ?
                    <div className="account__item account__item-flex">
                        <button className="account__product-save">Зберегти</button> 
                        <button className="account__product-delete">Видалити</button> 
                    </div> 
                    :
                    <button className="account__product-create">Створити</button>    
                }
            </div>
        </>
    );
}