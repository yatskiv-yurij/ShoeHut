import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import './search.scss';
import { Product } from "../Product";

export const Search = () => {
    const searchRef = useRef(null);
    const [searchProduct, setSearchProduct] = useState(null);
    const { posts } = useSelector(state => state.post);
    const onChangeSearch = (event) => {
        if(event.target.value.length > 5){
            const searchResult = posts.data.filter(post => {
                if(post.title.toLowerCase().includes(event.target.value.toLowerCase()) || post.article.toLowerCase().includes(event.target.value.toLowerCase())){
                    return post;
                }
            });
            setSearchProduct(searchResult);
        }

        
    }
    return (
        <>
            <div className="account__edit-product">
                <div className="account__search">
                    <button onClick={() => searchRef.current.click()} className="account__search-btn" onChange></button>
                    <input type="text" ref={ searchRef } onChange={onChangeSearch} onClick={onChangeSearch} className="account__search-input" placeholder='Пошук'/>
                </div>


                {!searchProduct && <p className="account__not-search">Знайдіть необхідний товар</p> }

                {searchProduct && <div className="account__search-product">
                    {searchProduct.map((post) => (
                        <Product key={post._id} edit={true} data={post}/>
                    ))  }
                </div>}
            </div>  
        </>
    );
}