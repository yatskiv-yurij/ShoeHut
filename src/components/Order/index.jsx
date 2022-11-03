import React from "react";


import './order.scss';
import { ProductMin} from "../ProductMin";
export const Order = ({role}) => {
    return (
        <>
            <h3 className="account__title title2">{ role==="client" ? "Мої замовлення" : "Замовлення"}</h3>
            <hr />
            <div className="account__order">
                <div className="account__order-item">
                    <div className="account__order-product">
                        <ProductMin  size={true}/>
                    </div>
                    <div className="account__order-product">
                        <ProductMin size={true}/>
                    </div>

                    <p className="account__order-price">Загальна вартість: <span>2798</span> UAH</p>
                    <div className="account__order-info">
                        <p className="account__order-date">28.09.2022</p>
                        {role==="client" ? <p className="account__order-status">Статус: <span>оформляється</span></p>
                        :
                        <button className="account__order-send">Відправлено</button>}
                    </div>
                </div>
                <div className="account__order-item">
                    <div className="account__order-product">
                        <ProductMin size={true}/>
                    </div>

                    <p className="account__order-price">Загальна вартість: <span>2798</span> UAH</p>
                    <div className="account__order-info">
                        <p className="account__order-date">28.09.2022</p>
                        {role==="client" ? <p className="account__order-status">Статус: <span>оформляється</span></p>
                        :
                        <button className="account__order-send">Відправлено</button>}
                    </div>
                </div>
            </div>
        </>
    );
}