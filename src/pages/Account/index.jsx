import React, { useState } from "react";

import './account.scss';
import { Nav, Footer } from "../../components";


export const Account = () => {

    const [userData, setUserData] = useState(true);
    const [orderData, setOrderData] = useState(false);
    return (
        <>
            <Nav />
                <header className="account">
                    <div className="container">
                        <div className="account__wrapper">
                            <input className="account__user-data" type="checkbox" name="account" id="account-user" onChange={() => {setUserData(true); setOrderData(false)}}/>
                            <input className="account__order-data" type="checkbox" name="account" id="account-order" onChange={() => {setUserData(false); setOrderData(true)}}/>
                            <div className="account__menu">
                                <label className="account__link" htmlFor="account-user">Мої дані</label>
                                <label className="account__link" htmlFor="account-order">Мої замовлення</label>
                                <button className="account__link">Вийти</button>
                            </div>
                            <div className="account__data">
                                <h3 className="account__title title2">{ userData ? "Мій аккаунт" : "Мої замовлення"}</h3>
                                <hr />

                                {userData && <div className="account__user">
                                    <div className="account__item account__item-flex">
                                        <div>
                                            <input className="account__name" type="text" id="accountName" required/>
                                            <label htmlFor="accountName">Ім’я</label>
                                        </div>
                                        <div>
                                            <input className="account__lastname" type="text" id="accountLastname" required/>
                                            <label htmlFor="accountLastname">Прізвище</label>
                                        </div>
                                    </div>
                                    <div className="account__item account__item-flex">
                                        <div>
                                            <input className="account__email" type="text" id="accountEmail" required/>
                                            <label htmlFor="accountEmail">Електронна пошта</label>
                                        </div>
                                        <div>
                                            <input className="account__phone" type="text" id="accountPhone" required/>
                                            <label htmlFor="accountPhone">Номер телефону</label>
                                            <span>+380</span>
                                        </div>
                                    </div>

                                    <h5 className="account__subtitle">Змінити пароль</h5>
                                    <div className="account__item">
                                        <input className="account__old-pass" type="text" id="accountOldPass" required/>
                                        <label htmlFor="accountOldPass">Cтарий пароль</label>
                                    </div>
                                    <div className="account__item account__item-flex">
                                        <div>
                                            <input className="account__new-pass" type="text" id="accountNewPass" required/>
                                            <label htmlFor="accountNewPass">Новий пароль</label>
                                        </div>
                                        <div>
                                            <input className="account__repeat-pass" type="text" id="accountRepeatPass" required/>
                                            <label htmlFor="accountRepeatPass">Підтвердьте пароль</label>
                                        </div>
                                    </div>
                                    <button className="account__save">зберегти зміни</button>
                                </div>}

                                { orderData && <div className="account__order">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat quasi quos! Repellendus ipsa, iusto quo sed perferendis fugiat quis necessitatibus corporis quaerat a, facere dolorum excepturi optio quisquam sint!
                                </div>}
                            </div>
                        </div>
                    </div>
                </header>
            <Footer />
        </>
    );
}