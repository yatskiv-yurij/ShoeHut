import React, { useEffect } from "react";

import "./guarantee.scss";
import { Nav, Footer } from "../../components";

export const Guarantee = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <Nav />
                <main className="guarantee">
                    <div className="container">
                        <div className="guarantee__wrapper">
                            <h3 className="guarantee__title title2">Гарантія на товар</h3>
                            <div className="guarantee__content">
                                <p className="guarantee__text">
                                    Відповідно до закону України "Про захист прав споживачів" та нормативно-технічної документації, 
                                    інтернет-магазин чоловічого взуття ShoeHut надає гарантійний термін експлуатації взуття протягом 
                                    30 днів з дня продажу через роздрібну мережу (інтернет-магазин) або з початку сезону, 
                                    за умови придбання взуття в несезонний період:
                                </p>

                                <div className="guarantee__date">
                                    <div>
                                        <p className="guarantee__period">Зимовий сезон</p>
                                        <p className="guarantee__text">З 15 листопада до 15 березня</p>
                                    </div>
                                    <div>
                                        <p className="guarantee__period">Літній сезон</p>
                                        <p className="guarantee__text">З 15 травня до 15 вересня</p>
                                    </div>
                                    <div>
                                        <p className="guarantee__period">Весняно - осінній сезон</p>
                                        <p className="guarantee__text">З 15 березня до 15 травня та з 15 вересня до 15 листопада</p>
                                    </div>
                                </div>

                                <p className="guarantee__text">
                                    Гарантійним терміном вважається період, протягом якого продавець бере 
                                    на себе відповідальність заміни (ремонту) відповідної продукції за виявленням суттєвих дефектів , 
                                    які виникли за виною виробника. У випадку виявлення недоліків протягом гарантійного терміну,
                                    Вам необхідно вислати лист з фотодоказами браку (дефектів) на:
                                </p>
                                <div className="guarantee__contact">
                                    <div>
                                        <p className="guarantee__social">E-mail</p>
                                        <p className="guarantee__text">yurayatskiv07@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className="guarantee__social">Viber</p>
                                        <p className="guarantee__text">+38 095 563 23 24</p>
                                    </div>
                                    <div>
                                        <p className="guarantee__social">Instagram</p>
                                        <p className="guarantee__text">@yurij_yatskiv</p>
                                    </div>
                                </div>
                                <p className="guarantee__text">
                                    За умови підтвердження дефекту по вині виробника, інтернет-магазин чоловічого взуття ShoeHut 
                                    зобов'язується діяти згідно Статті 8 Закону України «Про захист прав споживачів».
                                </p>
                            </div>
                        </div>
                        <h5 className="guarantee__subtitle">Не є гарантійним випадком</h5>
                        <div className="guarantee__content">  
                            <ul className="guarantee__list">
                                <li className="guarantee__item">зношене взуття / з дефектами, які з'явилися внаслідок експлуатації в невідповідних умовах;</li>
                                <li className="guarantee__item">взуття з механічними пошкодженнями (порізи, пошкрябини, пропалене);</li>
                                <li className="guarantee__item">взуття, що було деформоване внаслідок неправильного догляду (сушіння, вплив хімічних засобів);</li>
                                <li className="guarantee__item">заломи шкіри в місцях найбільшого перегинання, які утворюються в процесі формування взуття по стопі, є наслідками експлуатації взуття та не є дефектом;</li>
                                <li className="guarantee__item">випране взуття не підлягає обміну та поверненню / уточнити необхідний догляд за обраною парою можна в нашому блозі або у консультантів;</li>
                                <li className="guarantee__item">гарантія не розповсюджується на устілки, набойки, профілактики, елементи декору;</li>
                                <li className="guarantee__item">нерівномірність окрасу шкіри та фактури не є браком;</li>
                                <li className="guarantee__item">взуття з кольоровою підкладкою (чорного, червоного чи інших кольорів) або кольорове взуття без підкладки (наприклад босоніжки, сандалі), під дією вологи, поту та інших фізіологічних особливостей стопи може фарбувати ноги, шкарпетки, що не вважається дефектом виробництва / для уникнення цієї проблеми наші консультанти можуть запропонувати Вам придбати догляд, який закріплює колір; відремонтоване покупцем взуття.</li>
                            </ul>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    );
}