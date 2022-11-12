import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import bcrypt from 'bcryptjs';

import './client.scss';
import { Spiner } from "../LoadSpiner";
import { fetchAuthMe, fetchUpdate} from "../../redux/slices/auth";


export const Client = () => {
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorOldPassword, setOldErrorPassword] = useState(false);
    const dispatch= useDispatch();
    const { auth } = useSelector(state => state.auth);
    const isDataLoading = auth.status === 'loading';

    useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm ({
        mode: 'onChange'
    })

    const onSubmit = async (values) => {
        if(!values.oldpassword){
            const {password, repeatpassword, oldpassword, ...userInfo} = values;
            dispatch(fetchUpdate(userInfo));
            return;
        }

        if(values.password === values.repeatpassword){
            setErrorPassword(false);
            bcrypt.compare(values.oldpassword, auth.data.passwordHash).then(function(result) {
                if(result){
                    setOldErrorPassword(false);
                    dispatch(fetchUpdate(values));
                    window.location.reload();
                    
                }else{
                    setOldErrorPassword(true);
                }
            });
            
        }else{
            setErrorPassword(true);
        }
    }

    
    return (
        <>
            <h3 className="account__title title2">Мій аккаунт</h3>
            <hr />
            <div className="account__user">
                {isDataLoading ? <Spiner /> : 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="account__item account__item-flex">
                        <div>
                            <input className="account__input" type="text" id="accountName" {...register('name', {required: 'Вкажіть ім\'я'})} placeholder=" " defaultValue={auth.data.name}/>
                            <label htmlFor="accountName">Ім’я</label>
                            <p className="error"><ErrorMessage errors={errors} name="name" /></p> 
                        </div>
                        <div>
                            <input className="account__input" type="text" id="accountLastname" {...register('lastname', {required: 'Вкажіть прізвище'})} placeholder=" " defaultValue={auth.data.lastname}/>
                            <label htmlFor="accountLastname">Прізвище</label>
                            <p className="error"><ErrorMessage errors={errors} name="lastname" /></p> 
                        </div>
                    </div>
                    <div className="account__item account__item-flex">
                        <div>
                            <input className="account__input" type="email" id="accountEmail" {...register('email', {required: 'Вкажіть пошту'})} placeholder=" " defaultValue={auth.data.email}/>
                            <label htmlFor="accountEmail">Електронна пошта</label>
                            <p className="error"><ErrorMessage errors={errors} name="email" /></p> 
                        </div>
                        <div>
                            <input className="account__phone account__input" type="text" id="accountPhone" {...register('phone')} placeholder=" " defaultValue={ auth.data.phone ? auth.data.phone : ''}/>
                            <label htmlFor="accountPhone">Номер телефону</label>
                            <span className="account__phone-country">+380</span>
                        </div>
                    </div>

                    <h5 className="account__subtitle">Змінити пароль</h5>
                    <div className="account__item account__item-flex">
                        <div>
                            <input className="account__input" type="password" id="accountOldPass" {...register('oldpassword')} placeholder=" "/>
                            <label htmlFor="accountOldPass">Cтарий пароль</label>
                            <p className="error">{errorOldPassword ? "Не вірний пароль" : ''}</p> 
                        </div>
                    </div>
                    <div className="account__item account__item-flex">
                        <div>
                            <input className="account__input" type="password" id="accountNewPass" {...register('password')} placeholder=" "/>
                            <label htmlFor="accountNewPass">Новий пароль</label>
                            <p className="error">{errorPassword ? "Паролі не збігаються" : ''}</p> 
                        </div>
                        <div>
                            <input className="account__input" type="password" id="accountRepeatPass" {...register('repeatpassword')} placeholder=" "/>
                            <label htmlFor="accountRepeatPass">Підтвердьте пароль</label>
                            <p className="error">{errorPassword ? "Паролі не збігаються" : ''}</p> 
                        </div>
                    </div>
                    <button type="submit" className="account__save">зберегти зміни</button>
                </form>}
            </div>
        </>
    );
}