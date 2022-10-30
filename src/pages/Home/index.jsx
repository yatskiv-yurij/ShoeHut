import React from 'react';
import { Link } from 'react-router-dom';



import './home.scss';
import header_img from '../../image/header-main.png';
import { Nav, Footer, Product, Sale} from '../../components/';
export const Home = () => {
    return (
        <>
            <Nav />
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__content">
                            <h1 className="header__title title">Життя краще в комфортному взутті</h1>
                            <p className="header__text">Купляй брендове взуття нової колекці саме в нашому магазині</p>
                            <Link className="header__shop" to={'/shop'}>ЗА ПОКУПКАМИ</Link>
                        </div>
                        <img src={header_img} alt="header" className="header__img"/>
                    </div>
                </div>
            </header>
            <div className="popular">
                <div className="container">
                    <h3 className="popular__title title2">Популярні</h3>
                    <div className="popular__products"> 
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>  
                </div>
            </div>
            <div className="sale">
                <div className="container">
                    <h3 className="sale__title title2">Розпродаж</h3>
                    <div className="sale__wrapper">
                        <Sale />
                    </div>
                </div>
            </div>
            <div className="location">
                <div className="container">
                    <h3 className="location__title title2">Розташування</h3>
                    <div className="location__wrapper">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe className="gmap_iframe" title='location' 
                                width="100%" frameBorder="0" scrolling="no" 
                                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Uzhgorod&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                </iframe>
                            </div>
                        </div>
                        <div className="location__content">
                            <h5 className="location__subtitle">Більше ніж 1000 клієнтів щомісячно вибирають нас.</h5>
                            <p className="location__address">Ми знаходимось за адресою:<br />м. Ужгород вул. Капушанська 2</p>
                            <p className="location__text">Графік роботи:</p>
                            <ul className="schedule">
                                <li className="schedule__item">Пн - Пт: 9:00 - 19:00</li>
                                <li className="schedule__item">Сб: 9:00 - 18:00</li>
                                <li className="schedule__item">Нд: вихідний</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};