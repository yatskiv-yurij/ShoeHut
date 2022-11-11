import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper';
import axios from "../../axios";

import 'swiper/css';
import 'swiper/css/navigation';

import './new-edit.scss';
import DraftEditor  from  '../DraftEditor/DraftEditor.js';
import { fetchNewPost } from "../../redux/slices/post";

export const NewEdit = ({edit}) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataEditor, setDataEditor] = useState('');
    const [countImage, setCountImage] = useState(0);
    const [productData, setProductData] = useState(null);
    const [productImages, setProductImages] = useState([]);
    const Image = async (event) => {
        setCountImage(event.target.files.length);
    }
   
    const {
        register, 
        handleSubmit, 
        formState: {errors},
        reset
    } = useForm ({
        mode: 'onChange'
    });

   useEffect(() =>{
       if(id){
            axios.get(`/posts/${id}`).then(({data}) => {
                setProductData(data);
                setProductImages(data.images);
                setDataEditor(data.description);
                reset(productData);
            });
        }
    }, []);
    
    

    const onSubmit = async (values) =>{
        try {
            const formData = new FormData();
            for(let i=0; i<countImage; i++){
                formData.append('images', values.images[i]);
            }
            const { data } = await axios.post('/upload', formData);
            const sizes = values.sizes.split(",");
            values = {
                ...values,
                sizes,
                description: dataEditor,
                images: data
            }
        } catch (err) {
           console.warn(err); 
        }
        await dispatch(fetchNewPost(values));
    }

    const onSave = async (values) => {
        try {
            
            const formData = new FormData();
            for(let i=0; i<countImage; i++){
                formData.append('images', values.images[i]);
            }
            const { data } = await axios.post('/upload', formData);
            const sizes = values.sizes.split(",");
            values = {
                ...values,
                sizes,
                description: dataEditor,
                images: data ? [...productImages, ...data] : [...productImages]
            }

            await axios.patch(`/posts/${id}`, values).then(() => {
                navigate('/account/search');
            });
        } catch (err) {
            console.warn(err); 
        }
    }

    const deleteImage = (path, index) => {
        console.log(path);
        axios.delete('/upload', {
            params: {
                images: path,
            }});
        productImages.splice(index, 1);
        setProductImages([...productImages]);
    } 

    const deleteProduct = (id) => {
       axios.delete(`/posts/${id}`).then(({data}) => {
        if(data.success){
            deleteImage(productImages, 0);
            navigate('/account/search');
        }
       });
    }
        
    return (
        <>
            <h3 className="account__title title2">{ !edit ? "Новий товар" : "Редагувати товар"}</h3>
            <hr />
            <form className="account__new-edit-product" onSubmit={ edit ? handleSubmit(onSave): handleSubmit(onSubmit)}>
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" name="title" id="productName"  {...register('title',{required: 'Вкажіть назву товару'})} placeholder=" " defaultValue={productData ? productData.title : ""}/>
                        <label htmlFor="productName">Назва товару</label>
                        <p className="error"><ErrorMessage errors={errors} name="title" /></p> 
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productBrand"  {...register('brand', {required: 'Вкажіть бренд товару'})} placeholder=" " defaultValue={productData ? productData.brand : ""}/>
                        <label htmlFor="productBrand">Бренд</label>
                        <p className="error"><ErrorMessage errors={errors} name="brand" /></p> 
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="productArticle"  {...register('article', {required: 'Вкажіть артикль'})} placeholder=" " defaultValue={productData ? productData.article : ""}/>
                        <label htmlFor="productArticle">Артикуль</label>
                        <p className="error"><ErrorMessage errors={errors} name="article" /></p> 
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productMaterial"  {...register('material_top', {required: 'Вкажіть матеріал товару'})} placeholder=" " defaultValue={productData ? productData.material_top : ""}/>
                        <label htmlFor="productMaterial">Матеріал</label>
                        <p className="error"><ErrorMessage errors={errors} name="material_top" /></p> 
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="productSubstrate" {...register('material_substrate', {required: 'Вкажіть матеріал підкладки'})} placeholder=" " defaultValue={productData ? productData.material_substrate : ""}/>
                        <label htmlFor="productSubstrate">Матеріал підкладки</label>
                        <p className="error"><ErrorMessage errors={errors} name="material_substrate" /></p> 
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productSole" {...register('material_sole', {required: 'Вкажіть матеріал підошви'})} placeholder=" " defaultValue={productData ? productData.material_sole : ""}/>
                        <label htmlFor="productSole">Матеріал підошви</label>
                        <p className="error"><ErrorMessage errors={errors} name="material_sole" /></p> 
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <select className="account__input" id="productSeason" defaultValue={"summer"} {...register('season')}>
                            <option value="summer" selected={productData && productData.season === "summer"}>Літо</option>
                            <option value="winter" selected={productData && productData.season === "winter"}>Зима</option>
                            <option value="spring" selected={productData && productData.season === "spring"}>Весна - осінь</option>
                        </select>
                        <label htmlFor="productSeason">Сезон</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productCountry" {...register('country', {required: 'Вкажіть країну виробника'})} placeholder=" " defaultValue={productData ? productData.country : ""}/>
                        <label htmlFor="productCountry">Країна виробник</label>
                        <p className="error"><ErrorMessage errors={errors} name="country" /></p> 
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="productType" {...register('type', {required: 'Вкажіть тип товару'})} placeholder=" " defaultValue={productData ? productData.type : ""}/>
                        <label htmlFor="productType">Тип</label>
                        <p className="error"><ErrorMessage errors={errors} name="type" /></p> 
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productColor" {...register('color', {required: 'Вкажіть колір товару'})} placeholder=" " defaultValue={productData ? productData.color : ""}/>
                        <label htmlFor="productColor">Колір</label>
                        <p className="error"><ErrorMessage errors={errors} name="color" /></p> 
                    </div>
                </div>
                <div className="account__item">
                   { productData &&  <DraftEditor setDataEditor={setDataEditor} dataEditor={productData.description} /> }
                   { !productData && <DraftEditor setDataEditor={setDataEditor} />}
                </div>

                
            {edit===true && <div className="account__slider-photo">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                    >

                        { productImages && productImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img className="account__product-img" src={`http://localhost:4000` + image} alt="" />
                                <button type="button" className="account__product-img-delete" onClick={() => deleteImage([image],index)}>
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
                        ))
                        
                        }
                        
                        
                    </Swiper>
                </div>}
                

                <div className="account__item account__item-image">
                    <input className="account__image" type="file" name="images" id="productImage" multiple onChange={Image} {...register('images',  {required: !edit ? "Додайте фото" : false, onChange: (e) => {Image(e)}})}/>
                    <label htmlFor="productImage" className="account__label-file">Фотографії товару</label>
                    <p className="account__count-image">Кількість фото: {countImage}</p>
                     
                </div>
                <p className="error"><ErrorMessage errors={errors} name="images" /></p>

                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="productSize" {...register('sizes', {required: 'Вкажіть розміри'})} placeholder=" " defaultValue={productData ? productData.sizes.join(",") : ""}/>
                        <label htmlFor="productSize">Розміри</label>
                        <p className="error"><ErrorMessage errors={errors} name="sizes" /></p> 
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productPrice" {...register('price', {required: 'Вкажіть ціну товару'})} placeholder=" " defaultValue={productData ? productData.price : ""}/>
                        <label htmlFor="productPrice">Ціна</label>
                        <p className="error"><ErrorMessage errors={errors} name="price" /></p> 
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <select className="account__input" id="productDiscount" {...register('discount')} defaultValue={"false"}>
                            <option value="false" selected={productData && productData.discount===false}>Ні</option>
                            <option value="true" selected={productData && productData.discount===true}>Так</option>
                        </select>
                        <label htmlFor="productDiscount">Знижка</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="productNewPrice"  {...register('new_price')} placeholder=" " defaultValue={productData ? productData.new_price : ""}/>
                        <label htmlFor="productNewPrice">Нова ціна</label>
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <select className="account__input" id="productPopular" {...register('popular')} defaultValue={"5"} >
                            <option value="5" selected={productData && productData.popular === 5}>5</option>
                            <option value="4" selected={productData && productData.popular === 4}>4</option>
                            <option value="3" selected={productData && productData.popular === 4}>3</option>
                            <option value="2" selected={productData && productData.popular === 2}>2</option>
                            <option value="1" selected={productData && productData.popular === 1}>1</option>
                        </select>
                        <label htmlFor="productSale">Популярність</label>
                    </div>
                </div>

                {edit===true ?
                    <div className="account__item account__item-flex">
                        <button type="submit" className="account__product-save">Зберегти</button> 
                        <button type="button" onClick={()=> deleteProduct(id)} className="account__product-delete">Видалити</button> 
                    </div> 
                    :
                    <button type="submit" className="account__product-create">Створити</button>    
                }
            </form>
        </>
    );
}