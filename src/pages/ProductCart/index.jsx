import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Controller } from 'swiper';
import { useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import InnerHTML from 'dangerously-set-html-content';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import moment from 'moment'


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/controller';
import 'swiper/css/navigation';
import './cart.scss'

import { Nav, Footer, ProductSlider, Spiner} from '../../components/';
import { selectIsAuth } from "../../redux/slices/auth";

export const ProductCart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    const navigate= useNavigate();
    const { id } = useParams();
    const { posts } = useSelector(state => state.post);
    const { auth } = useSelector(state => state.auth);
    const isAuth = useSelector(selectIsAuth);
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [review, setReview] = useState(false);
    const [productData, setProductData] = useState(null);
    const [comments, setComments] = useState(null);
    const [countComments, setCountComments] = useState(3);
    const [error, setError] = useState("");
    const [size, setSize] = useState(null); 
    
    const {
        register, 
        handleSubmit, 
        formState: {errors},
        reset
    } = useForm ({
        mode: 'onChange'
    })
    

    useEffect(() =>{
        if(id){
            axios.get(`/posts/${id}`).then(({data}) => {
                setProductData(data);
            });

            axios.get(`/comment/${id}`).then(({data}) => {
                setComments(data.comments);
            });

        }
     }, []);


     const reviewSave = async (values) => {
        //console.log(values);
        await axios.post(`/comment/${id}`, values).then(() => {
            values["user"]={
                lastname: auth.data.lastname,
                name: auth.data.name,
            };
            setComments([...comments, values]);
            setReview(false);
            reset();
        }).catch(() => {
            setError("Введіть більше інформації");
        });
     }

     const openNewReview = () => {
        if(isAuth){
            setReview(true);
            reset();
        }else{
            navigate("/auth");
        }
        
    }

    const converDate = (timestamp) => {
        const date = new Date(timestamp);
        return moment(date).format("DD.MM.YYYY");
    }

    const addToCart = () => {

        if(size && size !== 'error') {
            const data = {
                product: id,
                size,
                price: productData.discount ? productData.new_price : productData.price,
                count: 1,
            }

            if(window.localStorage.getItem('basket')){
                const basket = JSON.parse(window.localStorage.getItem('basket'));
                const isproduct = basket.findIndex((product) => product.product===id);
                if(isproduct >= 0){
                    basket[isproduct] = data
                }else{
                    basket.push(data);
                }
                 
                window.localStorage.setItem('basket', JSON.stringify(basket));
            }
            else{
                window.localStorage.setItem('basket', JSON.stringify([data]));
            }
        }else{
            setSize('error');
        }
        
        
    }


    return (
        <>
            <Nav />

            { productData && <><header className="cart">
                <div className="container">
                    <div className="cart__wrapper">
                        <div className="cart__photos">
                            <div className="cart__vertical-photos">
                                <Swiper
                                    slidesPerView={2}
                                    navigation={false}
                                    direction='vertical'
                                    modules={[Controller]}
                                    onSwiper={setFirstSwiper}
                                    controller={{ control: secondSwiper }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 3,
                                        },
                                        991: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                    {
                                        productData.images.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img src={`http://localhost:4000${image}`} alt="Товар" className="cart__img" />
                                            </SwiperSlide> 
                                        ))
                                    }
                                    
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
                                    {
                                        productData.images.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img src={`http://localhost:4000${image}`} alt="Товар" className="cart__img" />
                                            </SwiperSlide> 
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>

                        <div className="cart__data">
                            <h3 className="cart__title title2">{productData.title}</h3>
                            <p className="cart__brand">{productData.brand}</p>
                            <div className='cart__prices'>
                                <p className="cart__new-price title2"><span>{productData.discount ? productData.new_price : productData.price}</span> UAH</p>
                                { productData.discount && <p className="cart__old-price"><span>{productData.price}</span> UAH</p> }
                            </div>
                            <p className="cart__text">Розміри:</p>
                            <div className="cart__sizes">
                            {
                                productData.sizes.map((size, index) => (
                                    <div key={index}>
                                        <input className='cart__radio' type="radio" name="size" value={size} id={`size${size}`} onClick={(event) => setSize(event.target.value)}/>
                                        <label className="cart__size" htmlFor={`size${size}`}>{size}</label>
                                    </div>
                                    
                                ))
                            }
                                
                                
                            </div>
                            { size === 'error' && <p className="error">Виберіть розмір</p> }
                            <button className="cart__basket" onClick={addToCart}>додати до корзини</button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="description">
                <div className="container">
                    <h3 className="description__title title2">Опис</h3>
                    <div className="description__text">
                    {<InnerHTML html={productData.description} />}
                        
                    </div>
                </div>
            </div>

            <div className="detail">
                <div className="container">
                    <h3 className="detail__title title2">Деталі</h3>
                    <div className="detail__wrapper">
                        <div className="detail__item">
                            <p className="detail__name">Артикул:</p>
                            <p className="detail__text">{productData.article}</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Матеріал підошви:</p>
                            <p className="detail__text">{productData.material_sole}</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Верх:</p>
                            <p className="detail__text">{productData.material_top}</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Сезон:</p>
                            <p className="detail__text">{productData.season==="summer" ? "Літо" : productData.season==="winter" ? 'Зима' : 'Весна-осінь'}</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Матеріал підкладки:</p>
                            <p className="detail__text">{productData.material_substrate}</p>
                        </div>
                        <div className="detail__item">
                            <p className="detail__name">Країна:</p>
                            <p className="detail__text">{productData.country}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="review">
                <div className="container">
                    <div className="review__wrapper">
                        <h3 className="review__title title2">Відгуки</h3>
                        <label className="review__new-open" onClick={openNewReview}>Додати відгук</label>
                    </div>

                    {review && <form className="review__new" onSubmit={handleSubmit(reviewSave)}>
                        { error && <p className="error review__error">{error}</p> }
                        <div className="rating">

                            {[5,4,3,2,1].map((item, index) => (
                                < >
                                    <input type="radio" id={`rating${item}`} className="rating__radio" value={item} {...register('count_star', {required: 'Вкажіть оцінку'})}/>
                                    <label htmlFor={`rating${item}`} className="rating__star">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#ffffff"/>
                                        </svg>
                                    </label>
                                </>
                            ))
                                 
                            }
                            
                        </div>
                        <p className="error"><ErrorMessage errors={errors} name="rating" /></p> 
                        <textarea className="review__content"  id="reviewContent"  rows="10" placeholder='Введіть відгук' {...register('data', {required: 'Надайте відгук'})}></textarea>
                        <p className="error"><ErrorMessage errors={errors} name="review"/></p> 
                        <button type="submit" className="review__save">Опублікувати</button>
                        <button type="button" className="review__close" onClick={() => setReview(false)}>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M52.1999 1.84001C50.6399 0.280006 48.1199 0.280006 46.5599 1.84001L26.9999 21.36L7.43988 1.8C5.87988 0.240005 3.35988 0.240005 1.79988 1.8C0.239883 3.36 0.239883 5.88001 1.79988 7.44001L21.3599 27L1.79988 46.56C0.239883 48.12 0.239883 50.64 1.79988 52.2C3.35988 53.76 5.87988 53.76 7.43988 52.2L26.9999 32.64L46.5599 52.2C48.1199 53.76 50.6399 53.76 52.1999 52.2C53.7599 50.64 53.7599 48.12 52.1999 46.56L32.6399 27L52.1999 7.44001C53.7199 5.92001 53.7199 3.36001 52.1999 1.84001V1.84001Z" fill="black"/>
                            </svg>
                        </button>
                    </form>}
                    
                   {comments && 
                        <>

                        {
                            comments.slice(0, countComments).map((comment) => (
                                <div className="review__item">
                                    <p className="review__user-name">{comment.user.lastname + " " + comment.user.name }</p>
                                    <div className="review__stars">

                                        {
                                            new Array(parseInt(comment.count_star)).fill(undefined).map((_, index) => (
                                                <svg key={index} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.43 6.00001L8.95996 1.16001C8.66996 0.21001 7.32996 0.21001 7.04996 1.16001L5.56996 6.00001H1.11996C0.149959 6.00001 -0.250041 7.25001 0.539959 7.81001L4.17996 10.41L2.74996 15.02C2.45996 15.95 3.53996 16.7 4.30996 16.11L7.99996 13.31L11.69 16.12C12.46 16.71 13.54 15.96 13.25 15.03L11.82 10.42L15.46 7.82001C16.25 7.25001 15.85 6.01001 14.88 6.01001H10.43V6.00001Z" fill="#FFFD54"/>
                                                </svg>
                                            ))
                                        }
                                        {
                                            new Array(5 - comment.count_star).fill(undefined).map((_, index) => (
                                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.6498 6.04L11.8098 5.62L9.91983 1.17C9.57983 0.36 8.41983 0.36 8.07983 1.17L6.18983 5.63L1.35983 6.04C0.479829 6.11 0.119828 7.21 0.789828 7.79L4.45983 10.97L3.35983 15.69C3.15983 16.55 4.08983 17.23 4.84983 16.77L8.99983 14.27L13.1498 16.78C13.9098 17.24 14.8398 16.56 14.6398 15.7L13.5398 10.97L17.2098 7.79C17.8798 7.21 17.5298 6.11 16.6498 6.04ZM8.99983 12.4L5.23983 14.67L6.23983 10.39L2.91983 7.51L7.29983 7.13L8.99983 3.1L10.7098 7.14L15.0898 7.52L11.7698 10.4L12.7698 14.68L8.99983 12.4Z" fill="white"/>
                                                </svg>
                                            ))
                                        }
                                        
                                    </div>
                                    <p className="review__text">{comment.data}</p>
                                    <p className="review__date">{ converDate(comment.createdAt)}</p>
                                </div>
                            ))
                        }
                            {comments.length > countComments && <button className="review__more" onClick={() => setCountComments(countComments+3)}>більше відгуків</button>}
                        </>
                    }
                </div>
            </div>

           {posts.data &&  <div className="recommend">
                <div className="container">
                    <h3 className="recommend__title title2">Рекомендуємо</h3>
                    <div className="sale__wrapper">

                        {
                            <ProductSlider data={
                                posts.data.filter((post) => {
                                    if(post.season===productData.season){
                                        return post
                                    }
                                }).sort((post, nextpost) => nextpost.popular - post.popular).slice(0,10)
                            }/>
                            
                        }
                        
                    </div>
                </div>
            </div>}
            </>
            }

            { !productData && <Spiner />}

            <Footer />
        </>
    );
}