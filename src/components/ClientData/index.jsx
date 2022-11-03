import React from "react";

import './client.scss';
export const Client = () => {
    return (
        <>
            <h3 className="account__title title2">Мій аккаунт</h3>
            <hr />
            <div className="account__user">
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="accountName" required/>
                        <label htmlFor="accountName">Ім’я</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="accountLastname" required/>
                        <label htmlFor="accountLastname">Прізвище</label>
                    </div>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="accountEmail" required/>
                        <label htmlFor="accountEmail">Електронна пошта</label>
                    </div>
                    <div>
                        <input className="account__phone account__input" type="text" id="accountPhone" required/>
                        <label htmlFor="accountPhone">Номер телефону</label>
                        <span className="account__phone-country">+380</span>
                    </div>
                </div>

                <h5 className="account__subtitle">Змінити пароль</h5>
                <div className="account__item">
                    <input className="account__input" type="text" id="accountOldPass" required/>
                    <label htmlFor="accountOldPass">Cтарий пароль</label>
                </div>
                <div className="account__item account__item-flex">
                    <div>
                        <input className="account__input" type="text" id="accountNewPass" required/>
                        <label htmlFor="accountNewPass">Новий пароль</label>
                    </div>
                    <div>
                        <input className="account__input" type="text" id="accountRepeatPass" required/>
                        <label htmlFor="accountRepeatPass">Підтвердьте пароль</label>
                    </div>
                </div>
                <button className="account__save">зберегти зміни</button>
            </div>
        </>
    );
}