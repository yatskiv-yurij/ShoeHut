import React, { useEffect } from "react";

import './about-us.scss';
import { Nav, Footer } from "../../components";

export const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <Nav />
                <main className="about-us">
                    <div className="container">
                        <div className="about-us__wrapper">
                            <h3 className="about-us__title title2">Про нас</h3>
                            <div className="about-us__content">
                                <p className="about-us__text">Вітаємо тебе! Давай знайомитись ближче! </p>
                                <p className="about-us__text">
                                    Ми - Українська компанія ShoeHut.  Основним напрямко компанії є чоловічі моделі взуття, 
                                    які є доступними кожному українцю та вдало підкреслюють його стиль. Протягом десятків 
                                    років наша компанія кожного дня дарує бездоганний сервіс, індивідуальний підхід та перевірений, якісний продукт.
                                </p>
                                <p className="about-us__text">
                                    На сьогодні в нас надзвичайно широкий асортимент, що включає класичне взуття до офісного луку, 
                                    спортивний напрямок дарує більше комфорту, а сучасні стильні моделі є вдалим вибором до ритму вечірок.
                                </p>
                                <p className="about-us__text">
                                    Компанія прагне забезпечити своїх покупців зручним і високоякісним взуттям, виготовленим 
                                    з урахуванням останніх модних тенденцій і з використанням новітніх виробничих технологій.
                                </p>
                            </div>

                            <h5 className="about-us__subtitle">Чому саме ShoeHut?</h5>
                            <div className="about-us__content">
                                <ul className="about-us__list">
                                    <li className="about-us__item">Високій якості виробів - натуральні матеріали і високі стандарти виробництва дозволяють створити дійсно зручне взуття</li>
                                    <li className="about-us__item">Широкому асортименту - ми виготовляємо якісне взуття для чоловіків і жінок, для будь-яких погодних сезонів, по основним дизайнерським напрямками і безперервно оновлюємо модельний ряд</li>
                                    <li className="about-us__item">Доступним цінам - обґрунтована і соціально орієнтована цінова політика робить наше взуття доступним широкому колу покупців</li>
                                </ul>
                                <p className="about-us__text">Відвідайте торговельну мережу ShoeHut і робіть МІЛЬЙОНИ ЩАСЛИВИХ КРОКІВ разом з нами!</p>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    );
}