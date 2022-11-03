import React from "react";
import { Outlet, Link } from "react-router-dom"


import './account.scss';
import { Nav, Footer} from "../../components";


export const Account = ({role}) => {

     return (
        <>
            <Nav />
            <header className="account">
                <div className="container">
                    {role==="client" && <div className="account__wrapper">
                        <div className="account__menu">
                            <Link className="account__link" to={"/account/client"}>Мої дані</Link>
                            <Link className="account__link" to={"/account/order"}>Мої замовлення</Link>
                            <button className="account__link">Вийти</button>
                        </div>
                        <div className="account__data">
                            <Outlet/>
                            
                        </div>
                    </div>}

                    {role==="admin" && <div className="account__wrapper">
                        
                        <div className="account__menu">
                            <Link className="account__link" to="/account/new-product" >Новий товар</Link>
                            <Link className="account__link" to="/account/search">Редагувати товар</Link>
                            <Link className="account__link" to="/account/order">Замовлення</Link>
                            <button className="account__link">Вийти</button>
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