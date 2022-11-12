import React, { useEffect } from "react";
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom"
import { useDispatch } from "react-redux";

import './account.scss';
import { Nav, Footer} from "../../components";
import { logout } from "../../redux/slices/auth";

export const Account = ({setToken, role}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const onClickLogout = () => {
        dispatch(logout());
        window.localStorage.removeItem('token');  
        setToken(null);
        navigate('/auth');
    }

    if(window.localStorage.getItem('token') == null){
        return <Navigate to='/auth' />;
    }

     return (
        <>
            <Nav />
            <header className="account">
                <div className="container">
                    {role==="client" && <div className="account__wrapper">
                        <div className="account__menu">
                            <Link className="account__link" to={"/account/client"}>Мої дані</Link>
                            <Link className="account__link" to={"/account/order"}>Мої замовлення</Link>
                            <button className="account__link" onClick={onClickLogout}>Вийти</button>
                        </div>
                        <div className="account__data">
                            <Outlet/>  
                        </div>
                    </div>}

                    {role==="admin" && <div className="account__wrapper">
                        
                        <div className="account__menu">
                            <Link className="account__link" onClick={window.location.reload} to="/account/new-product" >Новий товар</Link>
                            <Link className="account__link" to="/account/search">Редагувати товар</Link>
                            <Link className="account__link" to="/account/order">Замовлення</Link>
                            <button className="account__link" onClick={onClickLogout}>Вийти</button>
                        </div>
                        <div className="account__data">
                            <Outlet />

                        </div>
                    </div> } 
                </div>
            </header>
            <Footer />
        </>
    );
}