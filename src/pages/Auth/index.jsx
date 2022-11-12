import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Navigate } from "react-router-dom";


import './auth.scss';
import { Nav, Footer } from "../../components";
import { fetchUserData, fetchRegister, selectIsAuth } from "../../redux/slices/auth";

export const Auth = ({setToken}) => {
    const isAuth = useSelector(selectIsAuth);
    const { auth } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm ({
        defaultValues: {
            email: '',
            password: '',

        },
        mode: 'onChange'
    })

    const {
        register: registration, 
        handleSubmit: registrationHandle, 
        formState: {errors: registrationErrors},
    } = useForm ({
        defaultValues: {
            email: '',
            password: '',
            name: '',
            lastname: '',
        },
        mode: 'onChange'
    })

    
    if (isAuth) {
        return <Navigate  to={auth.data.role === "client" ? "/account/client" : '/account/new-product'}/>
    }

    const onSubmit = async (values) => {
        const data = await dispatch(fetchUserData(values));
        if (data.payload){
            window.localStorage.setItem('token', data.payload.token);
            setToken(data.payload.token);
        }else{
            setError(true);
        }
    }
    
    const onRegistrationSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
        if (data.payload){
            window.localStorage.setItem('token', data.payload.token);
            setToken(data.payload.token);
        }
    }
    
    return (
        <>
            <Nav />
            <header className="header auth">
                <div className="container">
                    <div className="header__wrapper">
                        <input className="auth__check" type="checkbox" name="islogin" id="islogin"/>
                        <div className="login">
                            <p className="login__error error">{error && "Невірний логін або пароль"}</p>
                            <h3 className="login__title title2">Ви користувач?</h3>
                            <form className="login__form"  onSubmit={handleSubmit(onSubmit)}>
                                <div className="login__item">
                                    <input className="login__email" type="email" id="loginEmail" {...register('email', {required: 'Вкажіть пошту'})} placeholder=" "/>
                                    <label htmlFor="loginEmail">Електронна пошта</label>
                                    <p className="error"><ErrorMessage errors={errors} name="email" /></p> 
                                </div>
                                <div className="login__item">
                                    <input className="login__password" type="password" id="loginPassword"  {...register('password', {required: 'Вкажіть пароль'})}  placeholder=" "/>
                                    <label htmlFor="loginPassword">Пароль</label>
                                    <p className="error"><ErrorMessage errors={errors} name="password" /></p> 
                                </div>
                                <button type="submit" className="login__next">Увійти</button>
                            </form>
                            <label className="login__open" htmlFor="islogin">Увійти</label>
                        </div>
                        <div className="registration">
                            <h3 className="registration__title title2">Це ваш перший візит?</h3>
                            <form className="registration__form" onSubmit={registrationHandle(onRegistrationSubmit)}>
                                <div className="registration__item">
                                    <input className="registration__email" type="email" id="registrationEmail" {...registration('email', {required: 'Вкажіть пошту'})} placeholder=" "/>
                                    <label htmlFor="registrationEmail">Електронна пошта</label>
                                    <p className="error"><ErrorMessage errors={registrationErrors} name="email" /></p> 
                                </div>
                                <div className="registration__item registration__item-flex">
                                    <div>
                                        <input className="registration__name" type="text" id="registrationName" {...registration('name', {required: 'Вкажіть ім\'я'})}  placeholder=" "/>
                                        <label htmlFor="registrationName">Ім’я</label>
                                        <p className="error"><ErrorMessage errors={registrationErrors} name="name" /></p> 
                                    </div>
                                    <div>
                                        <input className="registration__lastname" type="text" id="registrationLastname" {...registration('lastname', {required: 'Вкажіть прізвище'})}  placeholder=" "/>
                                        <label htmlFor="registrationLastname">Прізвище</label>
                                        <p className="error"><ErrorMessage errors={registrationErrors} name="lastname" /></p> 
                                    </div>
                                </div>
                                <div className="registration__item">
                                    <input className="registration__password" type="password" id="registrationPassword" {...registration('password', {required: 'Вкажіть пароль'})}  placeholder=" "/>
                                    <label htmlFor="registrationPassword">Пароль</label>
                                    <p className="error"><ErrorMessage errors={registrationErrors} name="password" /></p> 
                                </div>
                                <button type="submit" className="registration__next">Зареєструватись</button>
                            </form>
                            <label className="registration__open" htmlFor="islogin">Зереєстуватись</label>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    );
}