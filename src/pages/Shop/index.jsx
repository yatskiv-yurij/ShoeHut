import React, { useState} from 'react';


import './shop.scss';
import header_img from '../../image/header-shop.png';
import { Nav, Footer, Pagination} from '../../components/';


const products = () => {
    const rows = [];
    for (let i = 0; i < 381; i++) {
        
        rows.push(i);
    }
    return rows;
}

export const Shop = () => {
    const [goods, setGoods] = useState(products());


    return (
        <>
            <Nav />
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__content">
                            <h1 className="header__title title">Сучасне взуття від топових брендів</h1>
                            <p className="header__text">Купляй брендове взуття нової колекції саме в нашому магазині</p>
                        </div>
                        <img src={header_img} alt="header" className="header__img"/>
                    </div>
                </div>
            </header>
            <div className="goods">
                <div className="container">
                    <div className="filter">
                        <div className="filter__top">
                            <select name="sort" className="filter__sort" defaultValue={'default'}>
                                <option value="default" disable="false" hidden>Сортувати за</option>
                                <option value="popular">Спочатку популярні</option>
                                <option value="unpopular">Спочатку не популярні</option>
                                <option value="rich">Спочатку дорогі</option>
                                <option value="poor">Спочатку дешеві</option>
                            </select>
                            <select name="size" className="filter__size" defaultValue={'default'}>
                                <option value="default" disable="false" hidden>Розмір</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                            </select>
                            <select name="type" className='filter__type' defaultValue={'default'}>
                                <option value="default" disable="false" hidden>Тип</option>
                                <option value="cross">Кросівки</option>
                                <option value="sneakers">Кеди</option>
                                <option value="ankle">Ботильйони</option>
                            </select>
                            <select name="season" className="filter__season" defaultValue={'default'}>
                                <option value="default" disable="false"  hidden>Сезон</option>
                                <option value="summer">Літо</option>
                                <option value="winter">Зима</option>
                                <option value="spring">Весна-осінь</option>
                            </select>
                            <select name="color" className="filter__color" defaultValue={'default'}>
                                <option value="default" disable="false"  hidden>Колір</option>
                                <option value="black">Чорний</option>
                                <option value="white">Білий</option>
                                <option value="brown">Коричневий</option>
                            </select>
                        </div>
                        <div className="filter__bottom">
                            <button className="filter__apply">Застосувати</button>
                            <div className="filter__search">
                                <button className="filter__search-btn"></button>
                                <input type="text" className="filter__search-input" placeholder='Пошук'/>
                                
                            </div>
                            
                        </div>
                    </div>
                    {
                        <Pagination items={goods} />  
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}