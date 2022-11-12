import React, {useEffect} from "react";

import './exchange.scss'
import { Nav, Footer } from "../../components";

export const Exchange = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <Nav />
                <main className="exchange">
                    <div className="container">
                        <div className="exchange__wrapper">
                            <h3 className="exchange__title title2">Обмін  та повернення товару</h3>
                            <div className="exchange__content">
                                <p className="exchange__text">
                                    Ми турбуємось, щоб покупки у нашому магазині були вдалими та тішили Вас, 
                                    тому впродовж 30 днів від дати покупки Ви можете повернути замовлені товари і отримати назад їх вартість
                                    або обміняти на інший розмір або іншу модель товару на Ваш вибір.
                                </p>
                                <p className="exchange__text">
                                    Згідно Закону України "Про захист прав споживачів", товар підлягає обміну 
                                    або поверненню, у разі відсутності видимих ​​ознак його використання, у фірмовій упаковці і тільки при наявності 
                                    на ньому всіх бірок, ярликів та при збереженій початковій комплектації.
                                </p>
                            </div>
                            <h5 className="exchange__subtitle">Як обміняти товар?</h5>
                            <div className="exchange__content">
                                <ul className="exchange__list">
                                    <li className="exchange__item">Зателефонуйте нам за тел. +38 (095) 563 23 24 або замовте дзвінок та повідомити про Вашу проблему</li>
                                    <li className="exchange__item">Протягом 30 днів з моменту отримання замовлення відправте товар, що не підійшов Новою Поштою. Отримувач: Яцьків Ю.І. м. Ужгород, Відділення №5, тел. +38 (095) 563 23 24</li>
                                    <li className="exchange__item">Товар надсилати БЕЗ наложеного платежа, оплативши вартість доставки</li>
                                    <li className="exchange__item">Здійснивши відправлення, будь ласка, повідомте номер декларації нашому менеджеру по телефону або на Viber +38 (095) 563 23 24  (вказавши прізвище та ім'я)</li>
                                    <li className="exchange__item">Після отримання товару, що не підійшов, ми доставимо Вам новий БЕЗКОШТОВНО</li>
                                </ul>
                            </div>
                            <h5 className="exchange__subtitle">Як повернути товар?</h5>
                            <div className="exchange__content">
                                <ul className="exchange__list">
                                    <li className="exchange__item">Зателефонуйте нам за тел. +38 (095) 563 23 24 або замовте дзвінок та повідомити про Вашу проблему</li>
                                    <li className="exchange__item">Протягом 30 днів з моменту отримання замовлення відправте товар, що не підійшов Новою Поштою. Отримувач: Яцьків Ю.І. м. Ужгород, Відділення №5, тел. +38 (095) 563 23 24</li>
                                    <li className="exchange__item">Товар надсилати БЕЗ наложеного платежа, оплативши вартість доставки</li>
                                    <li className="exchange__item">Здійснивши відправлення, будь ласка, повідомте номер декларації нашому менеджеру по телефону або на Viber +38 (095) 563 23 24  (вказавши прізвище та ім'я)</li>
                                    <li className="exchange__item">Кошти повертаються на картку протягом 5 робочих днів з моменту отримання товару</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    );
}