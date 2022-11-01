import React from "react";

import './auth.scss';
import { Nav, Footer } from "../../components";

export const Auth = () => {
    return (
        <>
            <Nav />
            <header className="header auth">
                <div className="container">
                    <div className="header__wrapper">
                        <input className="auth__check" type="checkbox" name="islogin" id="islogin"/>
                        <div className="login">
                            <h3 className="login__title title2">Ви користувач?</h3>
                            <div className="login__form">
                                <div className="login__item">
                                    <input className="login__email" type="text" id="loginEmail" required/>
                                    <label htmlFor="loginEmail">Електронна пошта</label>
                                </div>
                                <div className="login__item">
                                    <input className="login__password" type="password" id="loginPassword" required/>
                                    <label htmlFor="loginPassword">Пароль</label>
                                </div>
                                <button className="login__next">Увійти</button>
                            </div>
                            <label className="login__open" htmlFor="islogin">Увійти</label>
                        </div>
                        <div className="registration">
                            <h3 className="registration__title title2">Це ваш перший візит?</h3>
                            <div className="registration__form">
                                <div className="registration__item">
                                    <input className="registration__email" type="text" id="registrationEmail" required/>
                                    <label htmlFor="registrationEmail">Електронна пошта</label>
                                </div>
                                <div className="registration__item registration__item-flex">
                                    <div>
                                        <input className="registration__name" type="text" id="registrationName" required/>
                                        <label htmlFor="registrationName">Ім’я</label>
                                    </div>
                                    <div>
                                        <input className="registration__lastname" type="text" id="registrationLastname" required/>
                                        <label htmlFor="registrationLastname">Прізвище</label>
                                    </div>
                                </div>
                                <div className="registration__item">
                                    <input className="registration__password" type="password" id="registrationPassword" required/>
                                    <label htmlFor="registrationPassword">Пароль</label>
                                </div>
                                <button className="registration__next">Зареєструватись</button>
                            </div>
                            <label className="registration__open" htmlFor="islogin">Зереєстуватись</label>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    );
}