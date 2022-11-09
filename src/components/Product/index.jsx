import React from 'react';
import { Link } from 'react-router-dom';

import './product.scss';

export const Product = ({edit, data}) => {

    const link = !edit ? '/shop/:id' : `/account/edit-product/${data._id}`;
    return (   
        <div className="product" >
            <img src={"http://localhost:4000" + data.images[0]} alt="Товар" className="product__img"  
                onMouseOver={e => (e.currentTarget.src = "http://localhost:4000" + data.images[1])} 
                onMouseOut={e => (e.currentTarget.src = "http://localhost:4000" + data.images[0])}
            />
            <Link className="product__data" to={link}>
                <p className="product__name">{data.title}</p>
                <p className="product__brand">{data.brand}</p>
                <div className="product__prices">
                    <p className="product__new-price"><span>{data.discount ? data.new_price : data.price}</span>UAH</p>
                    {data.discount && <p className="product__old-price"><span>{data.price}</span>UAH</p>}
                </div>
            </Link>
             {!edit && <svg className='heart empty-heart' width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.125 0C15.95 0 13.8625 1.0125 12.5 2.6125C11.1375 1.0125 9.05 0 6.875 0C3.025 0 0 3.025 0 6.875C0 11.6 4.25 15.45 10.6875 21.3L12.5 22.9375L14.3125 21.2875C20.75 15.45 25 11.6 25 6.875C25 3.025 21.975 0 18.125 0ZM12.625 19.4375L12.5 19.5625L12.375 19.4375C6.425 14.05 2.5 10.4875 2.5 6.875C2.5 4.375 4.375 2.5 6.875 2.5C8.8 2.5 10.675 3.7375 11.3375 5.45H13.675C14.325 3.7375 16.2 2.5 18.125 2.5C20.625 2.5 22.5 4.375 22.5 6.875C22.5 10.4875 18.575 14.05 12.625 19.4375Z" fill="black"/>
            </svg> 
            /* <svg className='heart red-heart' width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3607 20.548L11.3592 20.5467C8.12037 17.6097 5.51322 15.2432 3.70374 13.0309C1.90574 10.8327 1 8.90902 1 6.875C1 3.57728 3.57728 1 6.875 1C8.74721 1 10.5597 1.87644 11.7386 3.26084L12.5 4.1549L13.2614 3.26084C14.4403 1.87644 16.2528 1 18.125 1C21.4227 1 24 3.57728 24 6.875C24 8.90903 23.0943 10.8328 21.296 13.0328C19.4865 15.2466 16.8796 17.6159 13.6411 20.5589C13.6407 20.5593 13.6403 20.5596 13.64 20.5599L12.5026 21.5875L11.3607 20.548Z" fill="#EB3223" stroke="black" strokeWidth="2"/>
            </svg> */}
            
        </div>
    );
};