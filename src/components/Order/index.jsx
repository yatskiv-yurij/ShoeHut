import React, { useState, useEffect } from "react";
import axios from "../../axios";
import moment from 'moment'

import './order.scss';
import { ProductMin} from "../ProductMin";


export const Order = ({role}) => {
    const [orders, setOrders] = useState(null);
    let priceOrder = 0;

    useEffect(() => {
        if(role === 'client'){
            axios.get('/order/me').then(({data}) => {
                setOrders(data);
            })
        }else{
            axios.get('/order').then(({data}) => {
                setOrders(data);
            })
        }
    }, [orders]);

    const converDate = (timestamp) => {
        const date = new Date(timestamp);
        return moment(date).format("DD.MM.YYYY");
    }

    const orderSent = (id) => {
        axios.patch(`/order/${id}`);
        const index = orders.findIndex((order) => order._id === id);
        orders[index].status = 'відправлено';
        setOrders(orders);

    }

    return (
        <>
            <h3 className="account__title title2">{ role==="client" ? "Мої замовлення" : "Замовлення"}</h3>
            <hr />
            { orders && <div className="account__order">

                {
                    orders.map((order, index) => {
                       priceOrder = 0;
                       return <div key={index} className="account__order-item">
                            {
                                order.products.map((product,index) => {

                                   priceOrder += product.product.price * product.count; 
                                   return  <div key={index} className="account__order-product">
                                        <ProductMin  size={product.size} number={product.count} data={product.product}/>
                                    </div>

                                    
                            })
                            }


                            <p className="account__order-price">Загальна вартість: <span>{priceOrder}</span> UAH</p>
                            <div className="account__order-info">
                                <p className="account__order-date">{converDate(order.createdAt)}</p>
                                {role==="client" ? <p className="account__order-status">Статус: <span>{order.status}</span></p>
                                :
                                order.status === 'оформляється' ? <button className="account__order-send" onClick={() => orderSent(order._id)}>Відправлено</button> : <p className="account__order-status">Статус: <span>{order.status}</span></p>}
                            </div>
                        </div>
                    })
                }
            </div>}
        </>
    );
}