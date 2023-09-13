import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './product.scss';

export const ProductMin = ({data, number, size, counter, price, setPrice, products, setProducts}) => {
    const [count, setCount] = useState(1);
    const minusCount = () => {
        if(count > 1){
            setPrice(price - parseInt(data.discount ? data.new_price : data.price)); 
            setCount(count-1);

        }   
    }

    const addCount = () => {
            setPrice(price + parseInt(data.discount ? data.new_price : data.price)); 
            setCount(count+1);
            const index = products.findIndex((product) => product.product === data._id);
            products[index].count = count+1;
            setProducts([...products])
    }
    return (
        
        <>
            {data && <>
                <img src={`http://localhost:4000${data.images[0]}`} alt="product" className="product__img product__img-small"/>
                <div className="product__info">
                    <Link className="product__name title2" to={`/shop/${data._id}`}>{data.title}</Link>
                    <p className="product__brand">{data.brand}</p>
                    {size && <p className="product__size">Розмір: {size}</p>}
                    {number && <p className="product__count">Кількість: {number}</p>}
                    {counter && <div className="count">
                        <button className="minus" onClick={minusCount}>
                            <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="1" x2="14" y2="1" stroke="white" strokeWidth="2"/>
                            </svg>
                        </button>
                        <input type="text" disabled value={count} className="counter"/>
                        <button className="add" onClick={addCount}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white"/>
                            </svg>
                        </button>
                    </div>}
                    <p className="product__price"><span>{data.discount ? data.new_price : data.price}</span> UAH</p>
                </div> 
            </>}
        </>
        
    )
}