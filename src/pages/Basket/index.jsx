import React from "react";


import './basket.scss';
import { Nav, Footer, ProductMin } from "../../components";

export const Basket = () => {
    return (
        <>
            <Nav />
                <header className="basket">
                    <div className="container">
                        <h3 className="basket__title title2">Корзина</h3>

                        <div className="basket__wrapper">
                            <div className="basket__products">
                                <div className="basket__product">
                                    
                                    <ProductMin size={true} counter={true}/>
                                    <button className="basket__delete">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M52.1999 1.84001C50.6399 0.280006 48.1199 0.280006 46.5599 1.84001L26.9999 21.36L7.43988 1.8C5.87988 0.240005 3.35988 0.240005 1.79988 1.8C0.239883 3.36 0.239883 5.88001 1.79988 7.44001L21.3599 27L1.79988 46.56C0.239883 48.12 0.239883 50.64 1.79988 52.2C3.35988 53.76 5.87988 53.76 7.43988 52.2L26.9999 32.64L46.5599 52.2C48.1199 53.76 50.6399 53.76 52.1999 52.2C53.7599 50.64 53.7599 48.12 52.1999 46.56L32.6399 27L52.1999 7.44001C53.7199 5.92001 53.7199 3.36001 52.1999 1.84001V1.84001Z" fill="black"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="basket__product">
                                    <ProductMin size={true} counter={true}/>
                                    <button className="basket__delete">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M52.1999 1.84001C50.6399 0.280006 48.1199 0.280006 46.5599 1.84001L26.9999 21.36L7.43988 1.8C5.87988 0.240005 3.35988 0.240005 1.79988 1.8C0.239883 3.36 0.239883 5.88001 1.79988 7.44001L21.3599 27L1.79988 46.56C0.239883 48.12 0.239883 50.64 1.79988 52.2C3.35988 53.76 5.87988 53.76 7.43988 52.2L26.9999 32.64L46.5599 52.2C48.1199 53.76 50.6399 53.76 52.1999 52.2C53.7599 50.64 53.7599 48.12 52.1999 46.56L32.6399 27L52.1999 7.44001C53.7199 5.92001 53.7199 3.36001 52.1999 1.84001V1.84001Z" fill="black"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="basket__sum">
                                <div className="basket__cost">
                                    <p>Вартість товарів:</p>
                                    <p>12 343 UAH</p>
                                </div>
                                <div className="basket__payable">
                                    <p>До сплати: </p>
                                    <p>12 343 UAH</p>
                                </div>
                                <hr />
                                <button className="basket__pay">Сплатити</button>
                            </div>
                        </div>
                    </div>
                </header>
            <Footer />
        </>
    );
}