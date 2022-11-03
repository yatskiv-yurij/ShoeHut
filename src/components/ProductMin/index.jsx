import React from 'react';
import { Link } from 'react-router-dom';


import './product.scss';

export const ProductMin = ({size, counter}) => {
    return (
        <>
            <img src="http://localhost:4000/uploads/product1-1.jpg" alt="product" className="product__img"/>
            <div className="product__data">
                <Link className="product__name title2" to={'/shop/:id'}>Високі кросівки</Link>
                <p className="product__brand">Nike</p>
                {size && <p className="product__size">Розмір: 41</p>}
                {counter && <div className="count">
                    <button className="minus">
                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="14" y2="1" stroke="white" strokeWidth="2"/>
                        </svg>
                    </button>
                    <input type="text" disabled value={"1"} className="counter"/>
                    <button className="add">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white"/>
                        </svg>
                    </button>
                </div>}
                <p className="product__price"><span>1 399 </span> UAH</p>
            </div>
        </>
    );
}