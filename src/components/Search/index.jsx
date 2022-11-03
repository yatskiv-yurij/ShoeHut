import React from "react";

import './search.scss';
import { Product } from "../Product";

export const Search = () => {
    return (
        <>
            <div className="account__edit-product">
                <div className="account__search">
                    <button className="account__search-btn"></button>
                    <input type="text" className="account__search-input" placeholder='Пошук'/>
                </div>


                {/* <p className="account__not-search">Знайдіть необхідний товар</p>*/ }
                
                    <div className="account__search-product">
                    <Product edit={true}/>
                    <Product edit={true}/>
                    <Product edit={true}/>
                    <Product edit={true}/>
                </div>
            </div>  
        </>
    );
}